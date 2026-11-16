import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { COMMUNITY_ACHIEVEMENTS, COMMUNITY_OVERVIEW } from "@/data/community";
import AchievementSection from "../AchievementSection";
import AchievementCard from "../AchievementCard";
import CornerFrame from "@/components/design-system/CornerFrame";

export default function CommunityAchievements() {
  const meta = ACHIEVEMENT_SECTIONS[4];

  return (
    <AchievementSection meta={meta}>
      {/* HackBriven Flagship Community Header Card */}
      <CornerFrame
        variant="full"
        size="md"
        tone="secondary"
        className="p-5 sm:p-6 bg-[#0B0B0B]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--achievement-border-soft)]">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 border border-[var(--achievement-border)] bg-[#060606] flex items-center justify-center p-1.5 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={COMMUNITY_OVERVIEW.logo}
                alt={COMMUNITY_OVERVIEW.organization}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-[20px] font-bold text-white">
                  {COMMUNITY_OVERVIEW.organization}
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 border border-[var(--achievement-border)] bg-white/[0.05] text-white">
                  {COMMUNITY_OVERVIEW.role}
                </span>
              </div>
              <p className="text-[13px] text-[#9A9A9A] mt-0.5">
                Developer Community · Hackathons · Builder Residencies · AI Meetups
              </p>
            </div>
          </div>
          <span className="frame-label">[ COMMUNITY LEADERSHIP ]</span>
        </div>

        <p className="text-[14.5px] leading-6 text-[#CCCCCC] mt-4">
          {COMMUNITY_OVERVIEW.tagline}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-[var(--achievement-border-soft)]">
          {COMMUNITY_OVERVIEW.pillars.map((pillar) => (
            <li
              key={pillar}
              className="text-[13px] text-[#9E9E9E] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-white flex-shrink-0" />
              <span>{pillar}</span>
            </li>
          ))}
        </ul>
      </CornerFrame>

      {/* Selected HackBriven Events & Initiatives Gallery */}
      <div>
        <div className="ach-subsection-bar">
          <span className="frame-label !text-[#D8D8D8]">
            [ EVENTS &amp; INITIATIVES ORGANIZED ]
          </span>
          <span className="frame-label">0{COMMUNITY_ACHIEVEMENTS.length} INITIATIVES</span>
        </div>
        <div className="ach-grid-2">
          {COMMUNITY_ACHIEVEMENTS.map((event) => (
            <AchievementCard
              key={event.id}
              achievement={event}
              ctaLabel="View Event Details"
            />
          ))}
        </div>
      </div>
    </AchievementSection>
  );
}

