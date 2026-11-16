"use client";

export default function AdvocateVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* "Build. Grow. Serve." Official Artwork — clean, no extra bg color, shifted lower */}
      <div className="relative z-10 w-[270px] sm:w-[320px] md:w-[360px] max-w-[70%] h-auto mr-1 -mb-3 sm:mr-3 sm:-mb-4 flex items-end justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/capabilities/developer-advocate.png"
          alt="Developer Advocate — Build. Grow. Serve."
          loading="eager"
          decoding="async"
          draggable={false}
          className="w-full h-auto object-contain object-bottom-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 mix-blend-screen"
        />
      </div>
    </div>
  );
}
