import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { INDUSTRY_ACHIEVEMENTS } from "@/data/industry";
import AchievementSection from "../AchievementSection";
import AchievementCard from "../AchievementCard";

export default function IndustryAchievements() {
  const meta = ACHIEVEMENT_SECTIONS[5];
  const [featuredInternship, ...ecosystemItems] = INDUSTRY_ACHIEVEMENTS;

  return (
    <AchievementSection meta={meta}>
      {/* Flagship Industry Internship (Wide Editorial Frame) */}
      {featuredInternship && (
        <AchievementCard
          achievement={featuredInternship}
          showContribution
          ctaLabel="View Internship Case Study"
        />
      )}

      {/* Ecosystem & Event Collaborations (Balanced 2-Column Row) */}
      <div className="ach-grid-2">
        {ecosystemItems.map((item) => (
          <AchievementCard
            key={item.id}
            achievement={item}
            ctaLabel="View Collaboration Details"
          />
        ))}
      </div>
    </AchievementSection>
  );
}
