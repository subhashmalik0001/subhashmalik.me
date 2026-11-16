"use client";

import { Radio, Mic } from "lucide-react";

export default function AdvocateVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Two Layered Tilted Graphic Cards (Exact Homage to Reference Card 2) */}
      <div className="relative w-[240px] h-[100px] mr-3 -mb-3">
        {/* Back Card (Tilted -6deg) */}
        <div
          className="absolute right-16 bottom-2 w-[140px] h-[90px] bg-gradient-to-br from-[#181818] to-[#0F0F0F] border border-white/10 rounded-2xl p-2.5 shadow-xl transition-transform duration-300 group-hover:-rotate-8"
          style={{ transform: "rotate(-6deg)" }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-950/40 via-purple-900/20 to-black/60 border border-white/[0.04] p-2 flex items-center justify-center">
            <Radio size={20} className="text-white/40" />
          </div>
        </div>

        {/* Front Card (Tilted 4deg) */}
        <div
          className="absolute right-2 bottom-0 w-[150px] h-[95px] bg-gradient-to-br from-[#202020] to-[#121212] border border-white/15 rounded-2xl p-3 shadow-2xl transition-transform duration-300 group-hover:rotate-6"
          style={{ transform: "rotate(4deg)" }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-950/50 via-slate-900/40 to-black/80 border border-white/[0.06] p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-[8.5px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
              <Mic size={13} className="text-white/70" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                DevRel Tour
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
