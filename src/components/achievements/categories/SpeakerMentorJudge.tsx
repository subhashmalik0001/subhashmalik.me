import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { SPEAKING_ACHIEVEMENTS } from "@/data/speaking";
import AchievementSection from "../AchievementSection";
import AchievementCard from "../AchievementCard";

export default function SpeakerMentorJudge() {
  const meta = ACHIEVEMENT_SECTIONS[2];

  const speakerItems = SPEAKING_ACHIEVEMENTS.filter(
    (s) => s.recognitionType === "speaking"
  );
  const mentorItems = SPEAKING_ACHIEVEMENTS.filter(
    (s) => s.recognitionType === "mentorship"
  );
  const judgeItems = SPEAKING_ACHIEVEMENTS.filter(
    (s) => s.recognitionType === "judging"
  );

  return (
    <AchievementSection meta={meta}>
      {/* A. Speaker Appearances & Stage Panels */}
      <div>
        <div className="ach-subsection-bar">
          <span className="frame-label !text-[#D8D8D8]">
            [ A // SPEAKER APPEARANCES &amp; STAGE PANELS ]
          </span>
          <span className="frame-label">
            {speakerItems.length < 10 ? `0${speakerItems.length}` : speakerItems.length} SESSIONS
          </span>
        </div>
        <div className="ach-grid-2">
          {speakerItems.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              ctaLabel="View Session Details"
            />
          ))}
        </div>
      </div>

      {/* B. Evaluation & Review Panels (Judging) */}
      <div>
        <div className="ach-subsection-bar">
          <span className="frame-label !text-[#D8D8D8]">
            [ B // EVALUATION &amp; REVIEW PANELS (JUDGING) ]
          </span>
          <span className="frame-label">
            {judgeItems.length < 10 ? `0${judgeItems.length}` : judgeItems.length} PANELS
          </span>
        </div>
        <div className="ach-grid-2">
          {judgeItems.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              ctaLabel="View Evaluation Details"
            />
          ))}
        </div>
      </div>

      {/* C. Mentorship */}
      <div>
        <div className="ach-subsection-bar">
          <span className="frame-label !text-[#D8D8D8]">
            [ C // BUILDER MENTORSHIP ]
          </span>
          <span className="frame-label">COHORTS &amp; BUILDS</span>
        </div>
        <div className="ach-grid-2">
          {mentorItems.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              ctaLabel="View Mentorship Details"
            />
          ))}
        </div>
      </div>
    </AchievementSection>
  );
}
