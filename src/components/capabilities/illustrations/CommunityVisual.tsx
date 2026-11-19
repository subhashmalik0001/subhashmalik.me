"use client";

export default function CommunityVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Community Japanese Garden & Torii Artwork — transparent, anchored to bottom-right */}
      <div className="relative z-10 w-[140px] sm:w-[160px] max-w-[70%] h-auto -mr-1 -mb-1 sm:-mb-2 flex items-end justify-end">
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
