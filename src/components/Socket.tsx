"use client";

import { useEffect } from "react";
import { socket } from "../socket";
import { useUser } from "@/auth";

export default function Socket() {
  const { user: clerkUser } = useUser();
  const username = clerkUser?.username || "subhash";

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      if (username) {
        socket.emit("newUser", username);
      }
    }

    socket.on("connect", onConnect);

    return () => {
      socket.off("connect", onConnect);
    };
  }, [username]);

  return <span></span>;
}
