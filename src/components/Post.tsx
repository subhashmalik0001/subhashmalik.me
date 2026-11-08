import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import Video from "./Video";
import FramedImage from "./design-system/FramedImage";
import Link from "next/link";
import { Post as PostType } from "@prisma/client";
import { format } from "timeago.js";

type UserSummary = {
  displayName: string | null;
  username: string;
  img: string | null;
};

type Engagement = {
  _count: { likes: number; rePosts: number; comments: number };
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
};

type PostWithDetails = PostType &
  Engagement & {
    user: UserSummary;
    rePost?: (PostType & Engagement & { user: UserSummary }) | null;
  };

const Post = ({
  type,
  post,
}: {
  type?: "status" | "comment";
  post: PostWithDetails;
}) => {
  const originalPost = post.rePost || post;

  return (
    <article className="p-4 border-b border-[var(--border-subtle)] hover:bg-[#070707] transition-colors">
      {/* POST TYPE */}
      {post.rePostId && (
        <div className="flex items-center gap-2 text-sm text-textGray mb-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span>{post.user.displayName} reposted</span>
        </div>
      )}
      {/* POST CONTENT */}
      <div className={`flex gap-3.5 ${type === "status" ? "flex-col" : ""}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" ? "hidden" : ""
          } relative w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0`}
        >
          <Image
            path={originalPost.user.img || "general/noAvatar.png"}
            alt=""
            w={100}
            h={100}
            tr={true}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          {/* TOP */}
          <div className="w-full flex justify-between items-start gap-2">
            <Link
              href={`/${originalPost.user.username}`}
              className="flex gap-3 min-w-0"
            >
              <div
                className={`${
                  type !== "status" ? "hidden" : ""
                } relative w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0`}
              >
                <Image
                  path={originalPost.user.img || "general/noAvatar.png"}
                  alt=""
                  w={100}
                  h={100}
                  tr={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`flex items-baseline gap-1.5 flex-wrap min-w-0 ${
                  type === "status" ? "flex-col gap-0 !items-start" : ""
                }`}
              >
                <h3 className="text-[15px] font-bold text-textGrayLight truncate">
                  {originalPost.user.displayName}
                </h3>
                <span
                  className={`text-textGray text-[14px] ${
                    type === "status" ? "text-sm" : ""
                  }`}
                >
                  @{originalPost.user.username}
                </span>
                {type !== "status" && (
                  <>
                    <span className="text-textGray text-[13px]">·</span>
                    <span className="text-textGray text-[13px]">
                      {format(originalPost.createdAt)}
                    </span>
                  </>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link
            href={`/${originalPost.user.username}/status/${originalPost.id}`}
          >
            <p
              className={`text-[15px] leading-[21px] text-textGrayLight ${
                type === "status" ? "text-lg leading-7" : ""
              }`}
            >
              {originalPost.desc}
            </p>
          </Link>
          {originalPost.img && (
            <FramedImage size="md" tone="secondary" className="mt-1 bg-[#0A0A0A]">
              <Image
                path={originalPost.img}
                alt=""
                w={600}
                h={originalPost.imgHeight || 600}
                className={`w-full h-auto ${originalPost.isSensitive ? "blur-3xl" : ""}`}
              />
            </FramedImage>
          )}
          {originalPost.video && (
            <FramedImage size="md" tone="secondary" className="mt-1 bg-[#0A0A0A]">
              <Video
                path={originalPost.video}
                className={originalPost.isSensitive ? "blur-3xl" : ""}
              />
            </FramedImage>
          )}
          {type === "status" && (
            <span className="text-textGray text-[13px] pt-1 border-t border-[var(--border-subtle)]">
              8:41 PM · Dec 5, 2024
            </span>
          )}
          <PostInteractions
            username={originalPost.user.username}
            postId={originalPost.id}
            count={originalPost._count}
            isLiked={!!originalPost.likes?.length}
            isRePosted={!!originalPost.rePosts?.length}
            isSaved={!!originalPost.saves?.length}
          />
        </div>
      </div>
    </article>
  );
};

export default Post;
