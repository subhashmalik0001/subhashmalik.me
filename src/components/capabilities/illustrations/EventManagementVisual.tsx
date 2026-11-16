"use client";

import { Plus } from "lucide-react";

export default function EventManagementVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Two Tilted Keyframe Cards — shifted lower */}
      <div className="relative w-[150px] h-[90px] mr-2 -mb-4 sm:-mb-5 flex items-end justify-end">
        {/* Left Card (Tilted -6deg) */}
        <div
          className="absolute right-14 bottom-0 w-[64px] h-[82px] bg-[#181818] border border-white/15 rounded-2xl p-2.5 shadow-2xl flex flex-col justify-between transition-transform duration-300 group-hover:-rotate-9"
          style={{ transform: "rotate(-6deg)" }}
        >
          <Plus size={14} className="text-white/80" strokeWidth={2.5} />
          <div>
            <div className="text-[8.5px] font-mono font-bold tracking-wider text-white uppercase leading-tight">
              START
            </div>
            <div className="text-[7.5px] font-mono text-[#8E8E93] uppercase mt-0.5">
              HACK
            </div>
          </div>
        </div>

        {/* Right Card (Tilted 5deg) */}
        <div
          className="absolute right-0 bottom-0 w-[64px] h-[82px] bg-[#141414] border border-white/20 rounded-2xl p-2.5 shadow-2xl flex flex-col justify-between transition-transform duration-300 group-hover:rotate-8"
          style={{ transform: "rotate(5deg)" }}
        >
          <Plus size={14} className="text-white/80" strokeWidth={2.5} />
          <div>
            <div className="text-[8.5px] font-mono font-bold tracking-wider text-white uppercase leading-tight">
              FINALE
            </div>
            <div className="text-[7.5px] font-mono text-[#8E8E93] uppercase mt-0.5">
              STAGE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
