"use client";

import Image from "@/components/Image";
import CornerFrame from "@/components/design-system/CornerFrame";
import FramedButton from "@/components/design-system/FramedButton";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center px-4">
      <CornerFrame
        variant="full"
        tone="primary"
        size="lg"
        className="py-5 px-6 bg-[#080808] w-full max-w-[580px] h-max mt-14"
      >
        {/* TOP */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
          <FramedButton variant="icon" size="sm" onClick={closeModal} aria-label="Close modal">
            ✕
          </FramedButton>
          <span className="frame-label">[ COMPOSE // DRAFTS ]</span>
        </div>
        {/* CENTER */}
        <div className="py-6 flex gap-3.5">
          <div className="relative w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0">
            <Image
              path="general/avatar.png"
              alt="Subhash Malik"
              w={100}
              h={100}
              tr={true}
              className="w-full h-full object-cover"
            />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-lg text-white placeholder:text-textGray"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        {/* BOTTOM */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-[var(--border-subtle)] pt-4">
          <div className="flex gap-4 flex-wrap">
            <Image
              path="icons/image.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <FramedButton variant="primary" size="sm" onClick={closeModal} className="mr-1">
            Post
          </FramedButton>
        </div>
      </CornerFrame>
    </div>
  );
};

export default PostModal;
