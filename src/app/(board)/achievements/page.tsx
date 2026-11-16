import "@/styles/achievements.css";
import "@/styles/achievement-detail.css";

import FramedButton from "@/components/design-system/FramedButton";
import { IndexBar } from "@/components/design-system/SectionFrame";
import { ALL_ACHIEVEMENTS, ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import AchievementHero from "@/components/achievements/AchievementHero";
import HackathonWins from "@/components/achievements/categories/HackathonWins";
import ProjectRecognition from "@/components/achievements/categories/ProjectRecognition";
import SpeakerMentorJudge from "@/components/achievements/categories/SpeakerMentorJudge";
import AcademicAchievements from "@/components/achievements/categories/AcademicAchievements";
import CommunityAchievements from "@/components/achievements/categories/CommunityAchievements";
import IndustryAchievements from "@/components/achievements/categories/IndustryAchievements";
import Certifications from "@/components/achievements/categories/Certifications";

export const metadata = {
  title: "Achievements & Recognition — Subhash Malik",
  description:
    "Hackathon victories, finalist selections, shipped products, speaking & mentoring, academic fellowships, HackBriven community milestones, and industry recognition of Subhash Malik.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen ach-wide-route">
      {/* Sticky Top Header */}
      <div className="flex items-center justify-between gap-4 sticky top-0 backdrop-blur-md bg-black/85 px-4 py-1 z-30 h-[53px] border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-4 min-w-0">
          <FramedButton
            href="/"
            variant="icon"
            size="sm"
            title="Back to Portfolio"
            aria-label="Back to Portfolio"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-textGrayLight">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </svg>
          </FramedButton>
          <div className="flex flex-col min-w-0">
            <h2 className="text-[17px] font-extrabold leading-[22px] text-textGrayLight truncate">
              Achievements &amp; Recognition
            </h2>
            <span className="text-[12px] leading-4 text-textGray truncate">
              0{ACHIEVEMENT_SECTIONS.length} categories · {ALL_ACHIEVEMENTS.length} verified entries
            </span>
          </div>
        </div>
        <span className="hidden xsm:inline frame-label">
          [ 0{ACHIEVEMENT_SECTIONS.length} SECTIONS ]
        </span>
      </div>

      {/* Katanex Index Bar */}
      <IndexBar index={4} label="ACHIEVEMENTS" />

      {/* Main Editorial Page */}
      <div className="ach-page">
        <div className="ach-container">
          <AchievementHero />

          {/* 01 — Hackathon Wins */}
          <HackathonWins />

          {/* 02 — Projects & Product Recognition */}
          <ProjectRecognition />

          {/* 03 — Speaker, Mentor & Judge */}
          <SpeakerMentorJudge />

          {/* 04 — Academic Achievements */}
          <AcademicAchievements />

          {/* 05 — Community Achievements */}
          <CommunityAchievements />

          {/* 06 — Industry Recognition */}
          <IndustryAchievements />

          {/* 07 — Certifications & Recognition */}
          <Certifications />
        </div>
      </div>
    </div>
  );
}

