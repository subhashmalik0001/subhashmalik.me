/**
 * Professional experience timeline data.
 *
 * Sourced directly from verified resume:
 * - Paytm (One97 Communications Limited) — Summer Growth Intern (Jun 2026 – Sep 2026)
 * - CU-TBI (Chandigarh University – Technology Business Incubator) — Full Stack Developer Intern (May 2025 – Jun 2026)
 * - DevNovate Technologies — Engineering & Product Operations Intern (Dec 2024 – May 2025)
 * - Kalp Studio (Kalp Digital Infra Pvt. Ltd.) — Blockchain Ecosystem Intern (Apr 2024 – Oct 2024)
 * - HackWithIndia — Community Builder & India Lead (Remote)
 * - HackBriven — Co-Founder
 * - Alexa Developer Community (CU) — Social Media Lead
 */

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  organization: string;
  /** Optional secondary line when `designation` is omitted */
  subtitle?: string;
  /** Short name used for the initials fallback when no logo is available */
  shortName?: string;
  designation?: string;
  logo?: string;
  start?: string; // "YYYY-MM"
  end?: string; // "YYYY-MM"
  current?: boolean;
  approxDuration?: string;
  tags: string[];
  headline: string;
  description: string;
  links?: ExperienceLink[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "paytm",
    organization: "Paytm (One97 Communications Limited)",
    subtitle: "Delhi, India (Hybrid)",
    shortName: "PT",
    designation: "Summer Growth Intern",
    logo: "/logos/paytm.svg",
    start: "2026-06",
    end: "2026-09",
    tags: [
      "Fintech Engineering",
      "Distributed Systems",
      "SDLC",
      "High Availability",
      "Digital Payments",
    ],
    headline: "Fintech Engineering on India’s leading digital payments platform",
    description:
      "Fintech Engineering: Contributed to production-scale engineering workflows on India’s leading digital payments platform, delivering features within a high-availability distributed system using SDLC best practices.",
    links: [{ label: "paytm.com", href: "https://paytm.com" }],
  },
  {
    id: "cu-tbi",
    organization: "CU-TBI (Chandigarh University – Technology Business Incubator)",
    subtitle: "Mohali, India",
    shortName: "TBI",
    designation: "Full Stack Developer Intern",
    logo: "/logos/cutbi-official.png",
    start: "2025-05",
    end: "2026-06",
    tags: [
      "Full Stack Development",
      "Node.js",
      "React.js",
      "OOP Design",
      "Startup Deployment",
      "CU-TBI",
    ],
    headline: "Deployed 10+ full-stack web applications for incubator startups end-to-end",
    description:
      "Development & Growth: Deployed 10+ full-stack web apps for startups end-to-end; as measured by 100% successful end-to-end deployment, by applying object-oriented design principles across the Node.js/React stack and gathering requirements directly from founder stakeholders.",
    links: [{ label: "CU-TBI Incubator", href: "https://www.cuchd.in" }],
  },
  {
    id: "devnovate",
    organization: "DevNovate Technologies",
    subtitle: "Engineering & Product Operations",
    shortName: "DN",
    designation: "Engineering & Product Operations Intern",
    logo: "/logos/devnovate-logo-2.png",
    start: "2024-12",
    end: "2025-05",
    tags: [
      "Next.js",
      "Product Operations",
      "Agile Roadmap",
      "DSA Optimization",
      "500k+ Users",
      "High Scalability",
    ],
    headline: "Grew active users by 45% & architected event platform supporting 500,000+ users",
    description:
      "Scale & Strategy: Grew active user base by 45%, as measured by weekly active user metrics, by executing an Agile product roadmap and applying data structures and algorithms, testing / code quality to optimize core platform logic.\n\nArchitected a Next.js event platform supporting 500,000+ users across 100+ events, as measured by zero downtime at peak load, by designing for reliability and horizontal scalability using object-oriented backend patterns.",
  },
  {
    id: "kalp-studio",
    organization: "Kalp Studio (Kalp Digital Infra Pvt. Ltd.)",
    subtitle: "Remote",
    shortName: "KS",
    designation: "Blockchain Ecosystem Intern",
    logo: "/logos/kalp-studio-new.png",
    start: "2024-04",
    end: "2024-10",
    tags: [
      "Blockchain Ecosystem",
      "Web3 Community",
      "Developer Operations",
      "Ecosystem Growth",
      "Cross-Functional",
    ],
    headline: "Increased Web3 developer adoption and managed blockchain developer operations",
    description:
      "Web3 Community: Increased blockchain developer adoption, as measured by community event engagement, by managing developer operations and coordinating cross-functional stakeholders across Web3 community programs.",
  },
  {
    id: "hackwithindia",
    organization: "HackWithIndia",
    subtitle: "Remote · Volunteer Leadership",
    shortName: "HWI",
    designation: "Community Builder & India Lead",
    logo: "/logos/hackwithindia.png",
    start: "2024-01",
    current: true,
    tags: [
      "Community Operations",
      "Developer Mentorship",
      "Pan-India Outreach",
      "100k+ Builders",
    ],
    headline: "Managed hackathon operations and developer mentorship for 100,000+ builders",
    description:
      "Operations: Managed end-to-end hackathon operations, developer mentorship, and community engagement for 100,000+ builders across India.",
  },
  {
    id: "hackbriven",
    organization: "HackBriven",
    shortName: "HB",
    designation: "Co-Founder",
    logo: "/logos/hackbriven.svg",
    start: "2024-06",
    current: true,
    tags: [
      "Community Building",
      "Hackathons",
      "Partnerships",
      "Sponsorships",
      "Event Operations",
      "Developer Engagement",
    ],
    headline: "Co-founded a developer community connecting student builders with industry leaders",
    description:
      "Co-founded HackBriven to build active technology communities, organize hackathons end-to-end, run event operations, secure technology partnerships and sponsorships, and create meaningful opportunities for students and builders.",
  },
  {
    id: "adc-cu",
    organization: "Alexa Developer Community, Chandigarh University",
    shortName: "ADC",
    designation: "Social Media Lead",
    tags: [
      "Community Engagement",
      "Event Promotion",
      "Digital Communication",
      "Tech Initiatives",
    ],
    headline: "Led digital outreach, event promotion, and member engagement for the chapter",
    description:
      "Contributed to the Alexa Developer Community at Chandigarh University as Social Media Lead — driving digital communication, promoting technical workshops and events, and keeping student developers engaged across chapter initiatives.",
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parseYM = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return { y, m: (m || 1) - 1 };
};

export const formatYM = (ym: string) => {
  if (/^\d{4}$/.test(ym.trim())) return ym.trim();
  const { y, m } = parseYM(ym);
  return `${MONTHS[m]} ${y}`;
};

/** Inclusive month-based duration, e.g. "1 year" or "1 yr 3 mos". */
export const computeDuration = (start: string, end?: string): string => {
  const s = parseYM(start);
  const now = new Date();
  const e = end ? parseYM(end) : { y: now.getFullYear(), m: now.getMonth() };
  const total = Math.max(1, (e.y - s.y) * 12 + (e.m - s.m) + 1);
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  if (yrs && !mos) return `${yrs} ${yrs === 1 ? "year" : "years"}`;
  if (!yrs) return `${mos} ${mos === 1 ? "month" : "months"}`;
  return `${yrs} yr${yrs > 1 ? "s" : ""} ${mos} mo${mos > 1 ? "s" : ""}`;
};
