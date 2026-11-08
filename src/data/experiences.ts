/**
 * Professional experience timeline data.
 *
 * Everything here is configurable. Fields left `undefined` are simply not
 * rendered — nothing is invented to fill the gap.
 *
 *  - `start` / `end` use "YYYY-MM". Omit `end` and set `current: true` for a
 *    current position ("Present"). Duration is calculated automatically.
 *  - `approxDuration` is used only when exact start/end dates are not yet filled in.
 *  - `logo` is a path inside /public. Without it, a crisp initials tile renders.
 *  - `links` only render when a real URL exists.
 *
 * Configure exact dates and CU-TBI designation below whenever ready.
 */

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  organization: string;
  /** Optional secondary line when `designation` is omitted (avoids inventing a role title) */
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
    organization: "Paytm",
    shortName: "PT",
    designation: "Intern",
    logo: "/logos/paytm.svg",
    // start: "YYYY-MM",
    // end: "YYYY-MM",
    tags: ["Product development", "Engineering workflows", "Cross-team collaboration", "Software development"],
    headline: "Hands-on product engineering and real-world software workflows at Paytm",
    description:
      "Worked as an intern at Paytm, gaining practical exposure to product development, engineering workflows, cross-functional collaboration, and real-world software development inside a large-scale technology organization.",
    links: [{ label: "paytm.com", href: "https://paytm.com" }],
  },
  {
    id: "hackbriven",
    organization: "HackBriven",
    shortName: "HB",
    designation: "Co-Founder",
    // logo: "/logos/hackbriven.svg", // drop official HackBriven logo here
    // start: "YYYY-MM",
    // current: true,
    tags: [
      "Community building",
      "Hackathons",
      "Partnerships",
      "Sponsorships",
      "Event operations",
      "Developer engagement",
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
    // logo: "/logos/adc.svg", // drop official ADC chapter logo here
    // start: "YYYY-MM",
    // end: "YYYY-MM",
    tags: ["Community engagement", "Event promotion", "Digital communication", "Tech initiatives"],
    headline: "Led digital outreach, event promotion, and member engagement for the chapter",
    description:
      "Contributed to the Alexa Developer Community at Chandigarh University as Social Media Lead — driving digital communication, promoting technical workshops and events, and keeping student developers engaged across chapter initiatives.",
  },
  {
    id: "cu-tbi",
    organization: "Chandigarh University Technology Business Incubator",
    subtitle: "Startup & Innovation Incubator · Chandigarh University",
    shortName: "TBI",
    // designation: "", // Set your exact verified CU-TBI role/designation here
    // logo: "/logos/cu-tbi.svg",
    approxDuration: "~11 months",
    tags: ["Startup ecosystem", "Product development", "Entrepreneurship", "Innovation"],
    headline: "Collaborated across early-stage product building and entrepreneurship at CU-TBI",
    description:
      "Involved for nearly 11 months with the Chandigarh University Technology Business Incubator (CU-TBI), working closely within the university's startup and innovation ecosystem on product development exposure, founder collaboration, and entrepreneurship.",
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
