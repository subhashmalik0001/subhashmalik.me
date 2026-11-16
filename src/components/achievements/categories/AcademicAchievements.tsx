import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { ACADEMIC_ACHIEVEMENTS } from "@/data/academics";
import AchievementSection from "../AchievementSection";
import AchievementCard from "../AchievementCard";

export default function AcademicAchievements() {
  const meta = ACHIEVEMENT_SECTIONS[3];

  return (
    <AchievementSection meta={meta}>
      <div className="ach-grid-2">
        {ACADEMIC_ACHIEVEMENTS.map((item) => (
          <AchievementCard
            key={item.id}
            achievement={item}
            ctaLabel="View Academic Record"
          />
        ))}
      </div>
    </AchievementSection>
  );
}

