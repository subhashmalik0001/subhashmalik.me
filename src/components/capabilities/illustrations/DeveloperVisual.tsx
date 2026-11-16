"use client";

export default function DeveloperVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Pure Monochrome Dithered Hand & Glowing Orb Artwork — shifted lower down */}
      <div className="relative z-10 w-[175px] sm:w-[200px] max-w-[75%] h-auto -mr-1 -mb-3 sm:-mb-4 flex items-end justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/capabilities/software-developer.png"
          alt="Software Developer — Monochrome dithered hand with glowing orb"
          loading="eager"
          decoding="async"
          draggable={false}
          className="w-full h-auto object-contain object-bottom-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5"
        />
      </div>
    </div>
  );
}
