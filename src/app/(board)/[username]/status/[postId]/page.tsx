import Comments from "@/components/Comments";
import Post from "@/components/Post";
import FramedButton from "@/components/design-system/FramedButton";
import { prisma } from "@/prisma";
import { auth } from "@/auth";
import { notFound } from "next/navigation";

const StatusPage = async ({
  params,
}: {
  params: Promise<{ username: string; postId: string }>;
}) => {
  const { userId: clerkUserId } = await auth();
  const userId = clerkUserId || "user_subhash";
  const postId = (await params).postId;

  if (!userId) return null;

  const post = await prisma.post.findFirst({
    where: { id: Number(postId) },
    include: {
      user: { select: { displayName: true, username: true, img: true } },
      _count: { select: { likes: true, rePosts: true, comments: true } },
      likes: { where: { userId: userId }, select: { id: true } },
      rePosts: { where: { userId: userId }, select: { id: true } },
      saves: { where: { userId: userId }, select: { id: true } },
      comments: {
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { displayName: true, username: true, img: true } },
          _count: { select: { likes: true, rePosts: true, comments: true } },
          likes: { where: { userId: userId }, select: { id: true } },
          rePosts: { where: { userId: userId }, select: { id: true } },
          saves: { where: { userId: userId }, select: { id: true } },
        },
      },
    },
  });

  if (!post) return notFound();

  return (
    <div>
      <div className="flex items-center justify-between gap-4 sticky top-0 backdrop-blur-md px-4 py-1 h-[53px] z-20 bg-black/80 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-4">
          <FramedButton href="/" variant="icon" size="sm" aria-label="Back">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-textGrayLight">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </svg>
          </FramedButton>
          <h1 className="font-extrabold text-[17px] text-white">Post</h1>
        </div>
        <span className="frame-label">[ THREAD ]</span>
      </div>
      <Post type="status" post={post} />
      <Comments
        comments={post.comments}
        postId={post.id}
        username={post.user.username}
      />
    </div>
  );
};

export default StatusPage;
