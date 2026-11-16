"use client";

export default function CommunityVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Community Japanese Garden & Torii Artwork — transparent, anchored to bottom-right */}
      <div className="relative z-10 w-[210px] sm:w-[235px] max-w-[85%] h-auto -mr-1 -mb-2 sm:-mb-3 flex items-end justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/capabilities/community.png"
          alt="Community Builder — Torii gate, Mount Fuji, and Japanese Garden"
          loading="eager"
          decoding="async"
          draggable={false}
          className="w-full h-auto object-contain object-bottom-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5"
        />
      </div>
    </div>
  );
}
