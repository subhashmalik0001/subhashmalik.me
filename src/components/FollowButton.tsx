"use client";

import { followUser } from "@/action";
import { socket } from "@/socket";
import { useUser } from "@/auth";
import { useOptimistic, useState } from "react";
import { framedButton } from "./design-system/FramedButton";

const FollowButton = ({
  userId,
  isFollowed,
  username,
}: {
  userId: string;
  isFollowed: boolean;
  username: string;
}) => {
  const [state, setState] = useState(isFollowed);

  const { user: clerkUser } = useUser();
  const user = clerkUser || {
    username: "subhash",
    imageUrl: "/general/avatar.png",
  };

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    state,
    (prev) => !prev
  );

  if (!user) return;

  const followAction = async () => {
    switchOptimisticFollow("");
    await followUser(userId);
    setState((prev) => !prev);
    socket.emit("sendNotification", {
      receiverUsername: username,
      data: {
        senderUsername: user.username,
        type: "follow",
        link: `/${user.username}`,
      },
    });
  };

  return (
    <form action={followAction}>
      <button
        className={framedButton({
          variant: optimisticFollow ? "secondary" : "primary",
          size: "sm",
        })}
      >
        {optimisticFollow ? "Unfollow" : "Follow"}
      </button>
    </form>
  );
};

export default FollowButton;
