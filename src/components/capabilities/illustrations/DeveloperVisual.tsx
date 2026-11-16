"use client";

export default function DeveloperVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Ambient Purple/Violet Glow matching the artwork */}
      <div className="absolute right-4 bottom-0 w-36 h-24 rounded-full bg-violet-600/25 blur-2xl pointer-events-none" />

      {/* Retro-futuristic Dithered Hand & Glowing Orb Artwork */}
      <div className="relative z-10 w-[185px] sm:w-[215px] max-w-[75%] h-auto -mr-1 -mb-1 flex items-end justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/capabilities/software-developer.jpg"
          alt="Software Developer — Hand with glowing orb"
          loading="eager"
          decoding="async"
          draggable={false}
          className="w-full h-auto object-contain object-bottom-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 90% at 85% 85%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 85% 85%, black 65%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
