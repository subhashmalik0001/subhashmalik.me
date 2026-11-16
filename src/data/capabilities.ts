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
    description: "Crafting scalable web apps, AI tools, and production software.",
    keywords: ["Next.js", "React", "TypeScript", "AI Products"],
    href: "/projects",
    gridSpan: 1,
    actionLabel: "View Projects",
  },
  {
    id: "developer-advocate",
    index: "02",
    title: "Developer Advocate",
    description:
      "Connecting platforms and engineers through tech talks, content, and code.",
    keywords: ["DevRel", "Tech Advocacy", "Workshops", "Ecosystems"],
    href: "/experience",
    gridSpan: 2,
    actionLabel: "Explore Advocacy",
  },
  {
    id: "community-builder",
    index: "03",
    title: "Community Builder",
    description:
      "Empowering builder communities to learn, ship, and grow together.",
    keywords: ["Community", "Hackathons", "HackBriven", "Mentorship"],
    href: "/#community",
    gridSpan: 1,
    actionLabel: "View Communities",
  },
  {
    id: "collaborations-partnerships",
    index: "04",
    title: "Collaborations & Partnerships",
    description:
      "Uniting tech companies and startups for high-impact initiatives.",
    keywords: ["Strategic Partnerships", "Sponsorships", "Industry Relations"],
    href: "/#contact",
    gridSpan: 1,
    actionLabel: "Get In Touch",
  },
  {
    id: "event-ecosystem",
    index: "05",
    title: "Event & Ecosystem Management",
    description:
      "Orchestrating hackathons, demo days, and developer conferences.",
    keywords: ["Hackathon Ops", "Event Strategy", "Logistics"],
    href: "/achievements",
    gridSpan: 1,
    actionLabel: "View Hackathons",
  },
];
