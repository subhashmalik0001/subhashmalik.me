"use client";

export default function PartnershipVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* 5-Bar Equalizer Waveform (Exact Homage to Reference Card 4) */}
      <div className="relative z-10 mr-5 mb-4 flex items-center gap-1.5 h-12 px-3 py-1.5">
        <span className="w-1.5 rounded-full bg-white/70 h-4 animate-pulse" />
        <span className="w-1.5 rounded-full bg-white h-9 animate-pulse delay-75" />
        <span className="w-1.5 rounded-full bg-white/90 h-12 animate-pulse delay-150" />
        <span className="w-1.5 rounded-full bg-white h-7 animate-pulse delay-100" />
        <span className="w-1.5 rounded-full bg-white/60 h-4 animate-pulse delay-200" />
      </div>
    </div>
  );
}
