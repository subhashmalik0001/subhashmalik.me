import type { ContributionLevel } from "@/data/contributions";

const LEVELS: ContributionLevel[] = [0, 1, 2, 3, 4];

export default function ContributionLegend() {
  return (
    <div className="flex items-center gap-1.5 text-[12px] text-[#777]" aria-hidden="true">
      <span className="mr-1">Less</span>
      {LEVELS.map((l) => (
        <span key={l} className="xp-legend-cell" data-level={l} />
      ))}
      <span className="ml-1">More</span>
    </div>
  );
}
