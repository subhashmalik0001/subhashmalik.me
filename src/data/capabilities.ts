export interface CapabilityItem {
  id: string;
  index: string;
  title: string;
  description: string;
  keywords: string[];
  href: string;
  gridSpan: 1 | 2;
  actionLabel?: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "software-developer",
    index: "01",
    title: "Software Developer",
    description: "Building scalable web and AI products.",
    keywords: ["Next.js", "React", "TypeScript", "AI Products"],
    href: "/projects",
    gridSpan: 1,
    actionLabel: "View Projects",
  },
  {
    id: "developer-advocate",
    index: "02",
    title: "Developer Advocate",
    description: "Empowering developers through talks, content, and code.",
    keywords: ["DevRel", "Tech Advocacy", "Workshops", "Ecosystems"],
    href: "/experience",
    gridSpan: 2,
    actionLabel: "Explore Advocacy",
  },
  {
    id: "community-builder",
    index: "03",
    title: "Community Builder",
    description: "Helping builder communities learn and ship together.",
    keywords: ["Community", "Hackathons", "HackBriven", "Mentorship"],
    href: "/#community",
    gridSpan: 1,
    actionLabel: "View Communities",
  },
  {
    id: "collaborations-partnerships",
    index: "04",
    title: "Collaborations & Partnerships",
    description: "Building strategic alliances across tech ecosystems.",
    keywords: ["Strategic Partnerships", "Sponsorships", "Industry Relations"],
    href: "/#contact",
    gridSpan: 1,
    actionLabel: "Get In Touch",
  },
  {
    id: "event-ecosystem",
    index: "05",
    title: "Event & Ecosystem Management",
    description: "Organizing hackathons, demo days, and tech events.",
    keywords: ["Hackathon Ops", "Event Strategy", "Logistics"],
    href: "/achievements",
    gridSpan: 1,
    actionLabel: "View Hackathons",
  },
];
