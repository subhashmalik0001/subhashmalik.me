import type { Achievement, AchievementSectionMeta } from "@/types/achievement";
import { HACKATHON_ACHIEVEMENTS } from "./hackathons";
import { PROJECT_ACHIEVEMENTS } from "./projects";
import { SPEAKING_ACHIEVEMENTS } from "./speaking";
import { ACADEMIC_ACHIEVEMENTS } from "./academics";
import { COMMUNITY_ACHIEVEMENTS } from "./community";
import { INDUSTRY_ACHIEVEMENTS } from "./industry";
import { CERTIFICATION_ACHIEVEMENTS } from "./certifications";

/**
 * Exact 7-section editorial order required by the specification:
 *  01 — Hackathon Wins
 *  02 — Projects & Product Recognition
 *  03 — Speaker, Mentor & Judge
 *  04 — Academic Achievements
 *  05 — Community Achievements
 *  06 — Industry Recognition
 *  07 — Certifications & Recognition
 */
export const ACHIEVEMENT_SECTIONS: AchievementSectionMeta[] = [
  {
    index: "01",
    code: "01 / COMPETITIONS",
    id: "hackathons",
    heading: "Hackathon Wins",
    description:
      "Ideas built under pressure, teams pushing boundaries, and moments that turned hard work into recognition.",
    metaNote: "IBM Grand Prize · Top 1% (30k Teams) · Google Top 2 · Tekathon 1st",
  },
  {
    index: "02",
    code: "02 / BUILDING",
    id: "projects",
    heading: "Projects & Products",
    description:
      "Products, experiments and ideas transformed into real-world solutions.",
    metaNote: "Docyo · Nebula · Edvanta · Will · Fluxar · Synora",
  },
  {
    index: "03",
    code: "03 / INDUSTRY CONTRIBUTION",
    id: "speaking",
    heading: "On The Other Side Of The Stage",
    description:
      "Sharing knowledge, helping builders grow, and contributing to the developer ecosystem.",
    metaNote: "Speaker · Mentor · Project Evaluator",
  },
  {
    index: "04",
    code: "04 / ACADEMICS",
    id: "academics",
    heading: "Learning & Recognition",
    description:
      "Academic milestones, selections, fellowships and achievements throughout my educational journey.",
    metaNote: "Polaris Fellowship R2 · Chandigarh University · CU-TBI",
  },
  {
    index: "05",
    code: "05 / COMMUNITY",
    id: "community",
    heading: "Building Communities & Opportunities",
    description:
      "Creating spaces where developers connect, collaborate, learn and build together.",
    metaNote: "HackBriven Co-Founder · 4+ Flagship Events",
  },
  {
    index: "06",
    code: "06 / INDUSTRY",
    id: "industry",
    heading: "Working With The Ecosystem",
    description:
      "Collaborations, professional opportunities and experiences connecting me with the technology industry.",
    metaNote: "Paytm Internship · Ecosystem Collaborations",
  },
  {
    index: "07",
    code: "07 / CREDENTIALS",
    id: "certifications",
    heading: "Credentials & Recognition",
    description:
      "Verified certificates, competitive credentials, and formal recognitions across national hackathons and fellowships.",
    metaNote: "6 Verified Credentials · Lightbox Preview",
  },
];

export const VERIFIED_HERO_METRICS = [
  { value: "15+", label: "Hackathons Competed" },
  { value: "04", label: "National Podium Wins" },
  { value: "Top 15", label: "of 30,000+ (Innovate 2026)" },
  { value: "Co-Founder", label: "HackBriven Community" },
];

export const ALL_ACHIEVEMENTS: Achievement[] = [
  ...HACKATHON_ACHIEVEMENTS,
  ...PROJECT_ACHIEVEMENTS,
  ...SPEAKING_ACHIEVEMENTS,
  ...ACADEMIC_ACHIEVEMENTS,
  ...COMMUNITY_ACHIEVEMENTS,
  ...INDUSTRY_ACHIEVEMENTS,
  ...CERTIFICATION_ACHIEVEMENTS,
];

export function getAchievementBySlug(slug: string): Achievement | undefined {
  return ALL_ACHIEVEMENTS.find((item) => item.slug === slug);
}

export function getAdjacentAchievements(slug: string): {
  prev: Achievement | null;
  next: Achievement | null;
} {
  const idx = ALL_ACHIEVEMENTS.findIndex((item) => item.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ALL_ACHIEVEMENTS[idx - 1] : ALL_ACHIEVEMENTS[ALL_ACHIEVEMENTS.length - 1],
    next: idx < ALL_ACHIEVEMENTS.length - 1 ? ALL_ACHIEVEMENTS[idx + 1] : ALL_ACHIEVEMENTS[0],
  };
}

