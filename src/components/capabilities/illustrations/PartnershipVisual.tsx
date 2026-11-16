"use client";

export default function PartnershipVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* 3D Chrome Rook Chess Piece — Strategic Collaborations & Partnerships */}
      <div className="relative z-10 mr-4 sm:mr-6 -mb-1 sm:-mb-2 flex items-end justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/capabilities/collabration.png"
          alt="Strategic Partnerships — 3D Chrome Chess Piece"
          loading="eager"
          decoding="async"
          draggable={false}
          className="h-[95px] sm:h-[106px] w-auto max-w-[95px] object-contain object-bottom-right drop-shadow-[0_10px_20px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
        />
      </div>
    </div>
  );
}
