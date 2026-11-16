import type { Achievement } from "@/types/achievement";

export default function AchievementMetadata({
  achievement,
}: {
  achievement: Achievement;
}) {
  const cells: { key: string; val: string }[] = [];

  if (achievement.recognition) {
    cells.push({ key: "Recognition", val: achievement.recognition });
  }
  if (achievement.organization) {
    cells.push({ key: "Organizer / Org", val: achievement.organization });
  }
  if (achievement.level || achievement.edition) {
    cells.push({
      key: "Competition / Scope",
      val: achievement.level || achievement.edition || "",
    });
  }
  if (achievement.prize) {
    cells.push({ key: "Verified Prize", val: achievement.prize });
  }
  if (achievement.projectName) {
    cells.push({ key: "Project Built", val: achievement.projectName });
  }
  if (achievement.role) {
    cells.push({ key: "My Role", val: achievement.role });
  }
  if (achievement.date) {
    cells.push({ key: "Timeline", val: achievement.date });
  }
  if (achievement.location) {
    cells.push({ key: "Location", val: achievement.location });
  }

  if (cells.length === 0) return null;

  return (
    <div className="ach-meta-strip" aria-label="Achievement metadata">
      {cells.map((cell) => (
        <div key={cell.key} className="ach-meta-item">
          <div className="ach-meta-key">{cell.key}</div>
          <div className="ach-meta-val">{cell.val}</div>
        </div>
      ))}
    </div>
  );
}

