"use client";

import { useUser } from "@/auth";
import Image from "./Image";
import Post from "./Post";
import { framedButton } from "./design-system/FramedButton";
import { Post as PostType } from "@prisma/client";
import { useActionState, useEffect } from "react";
import { addComment } from "@/action";
import { socket } from "@/socket";

type CommentWithDetails = PostType & {
  user: { displayName: string | null; username: string; img: string | null };
  _count: { likes: number; rePosts: number; comments: number };
  likes: { id: number }[];
  rePosts: { id: number }[];
  saves: { id: number }[];
};

const Comments = ({
  comments,
  postId,
  username,
}: {
  comments: CommentWithDetails[];
  postId: number;
  username: string;
}) => {
  const { user: clerkUser } = useUser();
  const user = clerkUser || {
    username: "subhash",
    imageUrl: "/general/avatar.png",
  };

  const [state, formAction, isPending] = useActionState(addComment, {
    success: false,
    error: false,
  });

  useEffect(() => {
    if (state.success) {
      socket.emit("sendNotification", {
        receiverUsername: username,
        data: {
          senderUsername: user?.username,
          type: "comment",
          link: `/${username}/status/${postId}`,
        },
      });
    }
  }, [state.success, username, user?.username, postId]);

  return (
    <div>
      {user && (
        <form
          action={formAction}
          className="flex items-center justify-between gap-3.5 p-4 border-b border-[var(--border-subtle)]"
        >
          <div className="relative w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0">
            <Image
              src={user?.imageUrl}
              alt="Avatar"
              w={100}
              h={100}
              tr={true}
              className="w-full h-full object-cover"
            />
          </div>
          <input type="number" name="postId" hidden readOnly value={postId} />
          <input type="string" name="username" hidden readOnly value={username} />
          <input
            type="text"
            name="desc"
            className="flex-1 bg-transparent outline-none px-2 py-1.5 text-[16px] text-white placeholder:text-textGray"
            placeholder="Post your reply"
          />
          <button
            disabled={isPending}
            className={`${framedButton({ variant: "primary", size: "sm" })} mr-1`}
          >
            {isPending ? "Replying" : "Reply"}
          </button>
        </form>
      )}
      {state.error && (
        <span className="text-red-300 p-4 block">Something went wrong!</span>
      )}
      {comments.map((comment) => (
        <div key={comment.id}>
          <Post post={comment} type="comment" />
        </div>
      ))}
    </div>
  );
};

export default Comments;
