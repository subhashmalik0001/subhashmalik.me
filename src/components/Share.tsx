"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import ImageEditor from "./ImageEditor";
import FramedImage from "./design-system/FramedImage";
import { framedButton } from "./design-system/FramedButton";
import { useUser } from "@/auth";
import { addPost } from "@/action";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  const { user: clerkUser } = useUser();
  const user = clerkUser || {
    username: "subhash",
    imageUrl: "/general/avatar.png",
  };

  const [state, formAction, isPending] = useActionState(addPost, {
    success: false,
    error: false,
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setMedia(null);
      setSettings({ type: "original", sensitive: false });
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      className="p-4 flex gap-3.5 border-b border-[var(--border-subtle)]"
      action={formAction}
    >
      {/* AVATAR */}
      <div className="relative w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0">
        <Image src={user?.imageUrl} alt="" w={100} h={100} tr={true} className="w-full h-full object-cover" />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="imgType"
          value={settings.type}
          hidden
          readOnly
        />
        <input
          type="text"
          name="isSensitive"
          value={settings.sensitive ? "true" : "false"}
          hidden
          readOnly
        />
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        {/* PREVIEW IMAGE */}
        {media?.type.includes("image") && previewURL && (
          <FramedImage size="md" tone="secondary" className="relative bg-[#0A0A0A]">
            <NextImage
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <button
              type="button"
              className={`${framedButton({ variant: "secondary", size: "sm" })} absolute top-3 left-3 !bg-black/80`}
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </button>
            <button
              type="button"
              aria-label="Remove media"
              className={`${framedButton({ variant: "icon", size: "sm" })} absolute top-3 right-3 !bg-black/80`}
              onClick={() => setMedia(null)}
            >
              ✕
            </button>
          </FramedImage>
        )}
        {media?.type.includes("video") && previewURL && (
          <FramedImage size="md" tone="secondary" className="relative bg-[#0A0A0A]">
            <video src={previewURL} controls />
            <button
              type="button"
              aria-label="Remove video"
              className={`${framedButton({ variant: "icon", size: "sm" })} absolute top-3 right-3 !bg-black/80`}
              onClick={() => setMedia(null)}
            >
              ✕
            </button>
          </FramedImage>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap pt-2 border-t border-[var(--border-subtle)]">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
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
          <button
            className={`${framedButton({ variant: "primary", size: "sm" })} mr-1`}
            disabled={isPending}
          >
            {isPending ? "Posting" : "Post"}
          </button>
          {state.error && (
            <span className="text-red-300 p-4">Something went wrong!</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default Share;
