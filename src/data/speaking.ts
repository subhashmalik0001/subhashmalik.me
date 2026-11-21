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
    coverImage: "/speaker/subhash-speaker-stage.jpg",
    coverRatio: "4:5",
    gallery: [
      "/speaker/subhash-speaker-stage.jpg",
      "/general/speaking-events.jpg",
    ],
    galleryItems: [
      {
        src: "/speaker/subhash-speaker-stage.jpg",
        alt: "Subhash Malik speaking at stage podium",
        caption: "Subhash Malik — Stage Address & Keynote (ICS26 / ISBACON / CU-TBI)",
        ratio: "4:5",
        kind: "stage",
      },
      {
        src: "/general/speaking-events.jpg",
        alt: "Subhash Malik speaking events collage",
        caption: "Subhash Malik — Speaker Sessions & Builder Presentations",
        ratio: "4:5",
        kind: "stage",
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
    title: "AI Fest & Developer Keynote Sessions",
    subtitle: "Stage Keynotes & Developer Sessions on Hackathon Architecture & AI Systems",
    organization: "AI Fest × HackBriven",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Keynote Speaker",
    recognitionType: "speaking",
    date: "2024 — 2026",
    location: "Chandigarh / Campus Auditoriums",
    role: "Founding Member & Keynote Speaker",
    description:
      "Delivered keynote addresses and technical workshops at AI Fest and builder briefings across HackBriven initiatives, breaking down how to scope 24–48 hour hackathon builds, structure modern Next.js + AI architectures, and deliver high-conviction live product demos to 300+ student developers.",
    contribution:
      "Designed keynote curricula, delivered live architecture walkthroughs, and demonstrated production AI agent workflows before auditorium audiences.",
    outcome:
      "Trained and inspired hundreds of engineering students and hackathon participants on shipping functional prototypes.",
    coverImage: "/achievements/media/ai-fest-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/achievements/media/ai-fest-1.jpg",
      "/achievements/builders-space.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/media/ai-fest-1.jpg",
        alt: "Subhash Malik delivering keynote at AI Fest",
        caption: "Subhash Malik delivering keynote address at AI Fest before auditorium audience",
        ratio: "16:9",
        kind: "stage",
      },
      {
        src: "/achievements/builders-space.svg",
        alt: "The Builders Space Session",
        caption: "The Builders Space — Technical Architecture Session Spec",
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
    id: "microsoft-noida-speaking",
    slug: "microsoft-noida-speaker",
    category: "speaking",
    categoryLabel: "03 / Speaker, Mentor & Judge",
    indexNumber: "03",
    title: "Microsoft Noida — Stage Speaker (x2)",
    subtitle: "Agentic AI & Full-Stack AI Workflows · Microsoft Office Noida",
    organization: "Microsoft",
    organizationLogo: "/logos/microsoft.svg",
    recognition: "Speaker",
    recognitionType: "speaking",
    date: "2025",
    location: "Microsoft Office, Noida",
    role: "Stage Speaker (x2 Sessions)",
    description:
      "Invited twice to speak on stage at Microsoft Office Noida, delivering keynote and technical sessions on Agentic AI, Autonomous Workflows, LLM system architecture, and modern full-stack development to hundreds of student developers and community builders.",
    contribution:
      "Prepared and delivered technical slide decks, demonstrated live AI workflows, and engaged in deep Q&A on building production-grade AI systems.",
    outcome:
      "Delivered two high-impact speaking sessions at Microsoft Office Noida; connected with enterprise engineering mentors and student leaders.",
    coverImage: "/general/speaking-events.jpg",
    coverRatio: "4:5",
    gallery: ["/general/speaking-events.jpg", "/speaker/subhash-speaker-stage.jpg"],
    galleryItems: [
      {
        src: "/general/speaking-events.jpg",
        alt: "Subhash Malik speaking at Microsoft Noida",
        caption: "Subhash Malik — Stage Speaker Sessions at Microsoft Office Noida",
        ratio: "4:5",
        kind: "stage",
      },
    ],
    partnerLogos: [{ name: "Microsoft", logo: "/logos/microsoft.svg" }],
    technologies: ["Agentic AI", "Autonomous Workflows", "LLM Systems", "System Design"],
    links: [
      {
        label: "LinkedIn Post (Microsoft Event)",
        url: "https://www.linkedin.com/posts/subhashmalik_hackwithuttarpradesh2025-agenticai-microsoft-ugcPost-7385391409794772994-Rm1K/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8yzOQByj-GxybHHAMQe_kee4D0xCpwP2A",
      },
    ],
    featured: true,
  },
  {
    id: "hackathon-builder-mentorship",
    slug: "hackathon-builder-mentorship",
    category: "speaking",
    categoryLabel: "03 / Speaker, Mentor & Judge",
    indexNumber: "04",
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
    indexNumber: "05",
    title: "BuildVerse Hackathon — Speaker & Judge",
    subtitle: "Speaker & Judge · Scaler School of Technology",
    organization: "Scaler School of Technology",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Speaker & Judge",
    recognitionType: "judging",
    date: "2025 — 2026",
    role: "Speaker & Hackathon Judge",
    description:
      "Invited as Speaker & Judge at the BuildVerse Hackathon hosted at Scaler School of Technology. Evaluated student engineering prototypes on technical complexity, architectural rigor, and product viability while mentoring finalist teams.",
    contribution:
      "Judged team demos, scored technical architectures, and provided actionable engineering feedback to student participants.",
    outcome:
      "Evaluated dozens of student prototypes and recognized top software engineering teams at BuildVerse.",
    coverImage: "/achievements/build-for-india.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/build-for-india.svg"],
    galleryItems: [
      {
        src: "/achievements/build-for-india.svg",
        alt: "BuildVerse Hackathon — Speaker & Judge",
        caption: "Speaker & Judge at BuildVerse Hackathon, Scaler School of Technology",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [{ name: "Scaler School of Tech", logo: "/logos/hackbriven.svg" }],
    technologies: ["Technical Judging", "Architecture Review", "Student Mentorship", "Code Evaluation"],
    links: [],
    featured: false,
  },
];
