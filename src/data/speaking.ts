import type { Achievement } from "@/types/achievement";

/**
 * SECTION 03 — SPEAKER, MENTOR & JUDGE
 *
 * Organized into three distinct subsections:
 *  - speaking:   Stage talks, panel discussions, summit appearances
 *  - mentorship: Hackathon & developer cohort mentoring
 *  - judging:    Project evaluation & review panels
 */
export const SPEAKING_ACHIEVEMENTS: Achievement[] = [
  {
    id: "ics26-cu-tbi-summit",
    slug: "ics26-incubator-capital-summit",
    category: "speaking",
    categoryLabel: "03 / Speaker, Mentor & Judge",
    indexNumber: "01",
    title: "Incubator & Capital Summit 2026 (ICS26 · ISBACON)",
    subtitle: "Panel Discussion & Stage Address · 18th Annual ISBACON Conference",
    organization: "Chandigarh University Technology Business Incubator (CU-TBI) × ISBA",
    organizationLogo: "/logos/isba.svg",
    recognition: "Speaker / Panelist",
    recognitionType: "speaking",
    date: "2026",
    location: "Chandigarh University",
    role: "Stage Speaker & Student Founder Representative",
    description:
      "Spoke on stage at the Incubator & Capital Summit 2026 (ICS26) held alongside the 18th Annual ISBACON Conference at Chandigarh University Technology Business Incubator (CU-TBI), sharing perspectives on student-led product building, hackathons, and startup incubation.",
    contribution:
      "Delivered stage remarks at the ICS26 podium during the university-led Incubator & Capital Summit bringing together incubators, founders, and ecosystem investors.",
    outcome:
      "Represented the student builder and startup incubator community on stage at ICS26 / ISBACON 2026.",
    coverImage: "/general/avatar.png",
    coverRatio: "16:9",
    gallery: ["/general/avatar.png", "/general/cover.jpg"],
    galleryItems: [
      {
        src: "/general/avatar.png",
        alt: "Subhash Malik speaking at the ICS26 Incubator & Capital Summit podium",
        caption: "Subhash Malik at the ICS26 · ISBACON 2026 Podium (CU-TBI, Chandigarh University)",
        ratio: "4:5",
        kind: "stage",
      },
      {
        src: "/general/cover.jpg",
        alt: "Innovate · Build · Scale framework",
        caption: "Founder & community framework: Innovate · Build · Scale",
        ratio: "16:9",
        kind: "banner",
      },
    ],
    partnerLogos: [
      { name: "ICS26 / ISBACON", logo: "/logos/isba.svg" },
      { name: "CU-TBI", logo: "/logos/chandigarh-university.svg" },
    ],
    technologies: ["Startup Ecosystem", "Product Strategy", "Founder Community", "CU-TBI"],
    links: [],
    featured: true,
  },
  {
    id: "hackbriven-speaker-sessions",
    slug: "builders-space-speaking",
    category: "speaking",
    categoryLabel: "03 / Speaker, Mentor & Judge",
    indexNumber: "02",
    title: "The Builders Space & Community Technical Sessions",
    subtitle: "Developer Sessions on Hackathon Execution & Full-Stack Prototyping",
    organization: "HackBriven",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Host & Speaker",
    recognitionType: "speaking",
    date: "2024 — 2026",
    location: "Chandigarh / Hybrid",
    role: "Co-Founder & Session Speaker",
    description:
      "Led technical sessions and builder briefings across HackBriven initiatives, breaking down how to scope 24–48 hour hackathon builds, structure modern Next.js + AI architectures, and deliver high-conviction live product demos.",
    contribution:
      "Designed session curricula, hosted live architecture walkthroughs, and facilitated founder/developer Q&A.",
    outcome:
      "Helped student engineers transition from theoretical coursework to shipping functional prototypes.",
    coverImage: "/achievements/builders-space.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/builders-space.svg"],
    galleryItems: [
      {
        src: "/achievements/builders-space.svg",
        alt: "The Builders Space Session",
        caption: "The Builders Space — Community Technical Session",
        ratio: "16:9",
        kind: "stage",
      },
    ],
    partnerLogos: [{ name: "HackBriven", logo: "/logos/hackbriven.svg" }],
    technologies: ["Hackathon Strategy", "System Architecture", "Live Demos", "Developer Community"],
    links: [],
    featured: false,
  },
  {
    id: "hackathon-builder-mentorship",
    slug: "hackathon-builder-mentorship",
    category: "speaking",
    categoryLabel: "03 / Speaker, Mentor & Judge",
    indexNumber: "03",
    title: "Hackathon & Student Builder Mentorship",
    subtitle: "Mentoring Student Engineering Teams Across Campus & Community Builds",
    organization: "HackBriven & Campus Developer Chapters",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Technical Mentor",
    recognitionType: "mentorship",
    date: "2024 — Present",
    role: "Mentor — Product Scoping, AI Integration & Frontend Architecture",
    description:
      "Mentored student teams participating in community hackathons and builder cohorts — helping teams unblock API integrations, refine problem statements, tighten UI polish, and structure their final technical demonstrations.",
    contribution:
      "Conducted 1-on-1 team checkpoints on full-stack debugging, AI workflow integration, and demo storytelling.",
    outcome:
      "Guided dozens of first-time and returning student hackathon teams from rough ideation to working deployment.",
    coverImage: "/achievements/ctrl-alt-hack.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/ctrl-alt-hack.svg"],
    galleryItems: [
      {
        src: "/achievements/ctrl-alt-hack.svg",
        alt: "Hackathon Mentorship",
        caption: "Mentoring builder teams during community hackathons",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [
      { name: "HackBriven", logo: "/logos/hackbriven.svg" },
      { name: "CU-TBI", logo: "/logos/chandigarh-university.svg" },
    ],
    technologies: ["Full-Stack Debugging", "Product Scoping", "AI Workflows", "Pitch Coaching"],
    links: [],
    featured: false,
  },
  {
    id: "community-project-evaluation",
    slug: "community-project-evaluation",
    category: "speaking",
    categoryLabel: "03 / Speaker, Mentor & Judge",
    indexNumber: "04",
    title: "Community Showcase & Project Evaluation Panel",
    subtitle: "Technical Review of Student Prototypes & Hackathon Submissions",
    organization: "HackBriven Community Showcases",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Evaluator / Review Panel",
    recognitionType: "judging",
    date: "2025 — 2026",
    role: "Technical Evaluator (Configure additional external judging invitations in src/data/speaking.ts)",
    description:
      "Reviewed and evaluated student project submissions during community build showcases and internal hackathon rounds — assessing technical execution, real-world utility, architectural clarity, and live demo reliability.",
    contribution:
      "Provided structured technical feedback on code quality, UI/UX execution, and product viability.",
    outcome:
      "Established transparent, engineering-first evaluation rubrics for community build events.",
    coverImage: "/achievements/build-for-india.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/build-for-india.svg"],
    galleryItems: [
      {
        src: "/achievements/build-for-india.svg",
        alt: "Project Evaluation Panel",
        caption: "Technical evaluation & prototype review during HackBriven events",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [{ name: "HackBriven", logo: "/logos/hackbriven.svg" }],
    technologies: ["Architecture Review", "UI/UX Evaluation", "Product Viability", "Code Quality"],
    links: [],
    featured: false,
  },
];
