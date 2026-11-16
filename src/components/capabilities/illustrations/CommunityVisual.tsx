"use client";

import { Users } from "lucide-react";

export default function CommunityVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full flex items-end justify-end overflow-hidden pointer-events-none">
      {/* Warm Ambient Glow (Exact Homage to Reference Card 3) */}
      <div className="absolute right-6 bottom-0 w-32 h-20 rounded-full bg-gradient-to-t from-orange-600/30 via-amber-600/15 to-transparent blur-xl" />

      {/* Community Visual Island (Pure Visual, No Clutter) */}
      <div className="relative z-10 mr-4 mb-3 flex items-center gap-2">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#222222] to-[#111111] border border-white/15 shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Users size={20} className="text-white/80" />
        </div>
      </div>
    </div>
  );
}
