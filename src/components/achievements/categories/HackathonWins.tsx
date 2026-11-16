import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { HACKATHON_ACHIEVEMENTS } from "@/data/hackathons";
import AchievementSection from "../AchievementSection";
import AchievementCard from "../AchievementCard";

export default function HackathonWins() {
  const meta = ACHIEVEMENT_SECTIONS[0];
  const podiumWins = HACKATHON_ACHIEVEMENTS.filter(
    (h) => h.recognitionType === "win" || h.recognitionType === "runner-up"
  );
  const selectionsAndQualifications = HACKATHON_ACHIEVEMENTS.filter(
    (h) => h.recognitionType === "finalist" || h.recognitionType === "qualified"
  );

  return (
    <AchievementSection meta={meta}>
      {/* Podium Wins (1st Prizes & Runner-Up Victories) */}
      <div>
        <div className="ach-subsection-bar">
          <span className="frame-label !text-[#D8D8D8]">
            [ 01.A // NATIONAL PODIUM VICTORIES ]
          </span>
          <span className="frame-label">04 PODIUMS</span>
        </div>
        <div className="ach-grid-2">
          {podiumWins.map((item, idx) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              priority={idx < 2}
              showContribution
              ctaLabel="View Achievement"
            />
          ))}
        </div>
      </div>

      {/* National Finalist & Qualification Milestones (Kept distinct from wins) */}
      <div>
        <div className="ach-subsection-bar">
          <span className="frame-label !text-[#D8D8D8]">
            [ 01.B // NATIONAL FINALIST &amp; QUALIFICATION MILESTONES ]
          </span>
          <span className="frame-label">02 SELECTIONS</span>
        </div>
        <div className="ach-grid-2">
          {selectionsAndQualifications.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              showContribution
              ctaLabel={
                item.recognitionType === "qualified"
                  ? "View Qualification Details"
                  : "View Finalist Case Study"
              }
            />
          ))}
        </div>
      </div>
    </AchievementSection>
  );
}
