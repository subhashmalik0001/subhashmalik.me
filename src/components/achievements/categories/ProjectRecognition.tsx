import { ArrowUpRight } from "lucide-react";
import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { PROJECT_ACHIEVEMENTS } from "@/data/projects";
import AchievementSection from "../AchievementSection";
import AchievementCard from "../AchievementCard";
import CornerFrame from "@/components/design-system/CornerFrame";
import FramedButton from "@/components/design-system/FramedButton";

export default function ProjectRecognition() {
  const meta = ACHIEVEMENT_SECTIONS[1];
  const [featuredProject, ...gridProjects] = PROJECT_ACHIEVEMENTS;

  return (
    <AchievementSection meta={meta}>
      {/* Featured Wide Product Showcase (matches Katanex Reference 3 wide frame) */}
      {featuredProject && (
        <AchievementCard
          achievement={featuredProject}
          ctaLabel="View Product Case Study"
        />
      )}

      {/* 2x2 Balanced Product Grid */}
      <div className="ach-grid-2">
        {gridProjects.map((project) => (
          <AchievementCard
            key={project.id}
            achievement={project}
            ctaLabel="View Product Case Study"
          />
        ))}
      </div>

      {/* Cross-link strip to full /projects engineering feed */}
      <CornerFrame
        variant="full"
        size="sm"
        tone="subtle"
        className="p-4 sm:p-5 bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <span className="frame-label">[ LIVE DEPLOYMENTS &amp; SOURCE CODE ]</span>
          <p className="text-[14px] text-[#CFCFCF] mt-1">
            Explore interactive live demos and repositories for AccessiAI, CollabCanvas, CredTrust, and PayScale on the dedicated Projects feed.
          </p>
        </div>
        <FramedButton href="/projects" variant="secondary" size="sm" className="flex-shrink-0">
          <span>Open Projects Feed</span>
          <ArrowUpRight size={14} />
        </FramedButton>
      </CornerFrame>
    </AchievementSection>
  );
}
