import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import type { Achievement } from "@/types/achievement";
import CornerFrame from "@/components/design-system/CornerFrame";

export default function AchievementNavigation({
  prev,
  next,
}: {
  prev: Achievement | null;
  next: Achievement | null;
}) {
  return (
    <nav
      aria-label="Achievement case study navigation"
      className="pt-10 pb-4"
    >
      <CornerFrame
        variant="full"
        tone="secondary"
        className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--achievement-border-soft)] bg-[#0A0A0A]"
      >
        {/* Previous */}
        {prev ? (
          <Link
            href={`/achievements/${prev.slug}`}
            className="p-4 sm:p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between gap-1.5"
          >
            <span className="frame-label inline-flex items-center gap-1.5">
              <ArrowLeft size={12} />
              PREVIOUS ACHIEVEMENT
            </span>
            <span className="text-[15px] font-bold text-white truncate">
              {prev.title}
            </span>
            <span className="text-[12px] text-[#8E8E8E] truncate">
              {prev.recognition || prev.organization}
            </span>
          </Link>
        ) : (
          <div className="p-4 sm:p-5" />
        )}

        {/* Back to All Achievements */}
        <Link
          href="/achievements"
          className="p-4 sm:p-5 hover:bg-white/[0.04] transition-colors flex flex-col items-center justify-center gap-1.5 text-center"
        >
          <Grid size={16} className="text-white" />
          <span className="text-[14px] font-bold text-white">
            All Achievements
          </span>
          <span className="frame-label">[ INDEX // 01 — 07 ]</span>
        </Link>

        {/* Next */}
        {next ? (
          <Link
            href={`/achievements/${next.slug}`}
            className="p-4 sm:p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between items-start sm:items-end gap-1.5 sm:text-right"
          >
            <span className="frame-label inline-flex items-center gap-1.5">
              NEXT ACHIEVEMENT
              <ArrowRight size={12} />
            </span>
            <span className="text-[15px] font-bold text-white truncate max-w-full">
              {next.title}
            </span>
            <span className="text-[12px] text-[#8E8E8E] truncate max-w-full">
              {next.recognition || next.organization}
            </span>
          </Link>
        ) : (
          <div className="p-4 sm:p-5" />
        )}
      </CornerFrame>
    </nav>
  );
}

