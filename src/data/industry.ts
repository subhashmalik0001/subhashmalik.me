import type { Achievement } from "@/types/achievement";

/**
 * SECTION 06 — INDUSTRY RECOGNITION & ECOSYSTEM COLLABORATIONS
 *
 * Authenticity rule:
 * Each entry explicitly classifies its relationship type (`recognition` &
 * `recognitionType`) so internships, community event collaborations, and
 * developer ecosystem interactions are clearly distinguished and never
 * conflated with full-time employment.
 */
export const INDUSTRY_ACHIEVEMENTS: Achievement[] = [
  {
    id: "paytm-internship",
    slug: "paytm-internship",
    category: "industry",
    categoryLabel: "06 / Industry Recognition",
    indexNumber: "01",
    title: "Paytm — Engineering & Product Internship",
    subtitle: "Internship · Product Development & Software Engineering Workflows",
    organization: "Paytm",
    organizationLogo: "/logos/paytm.svg",
    recognition: "Internship",
    recognitionType: "internship",
    role: "Intern",
    description:
      "Worked as an intern at Paytm, gaining direct hands-on exposure to production software engineering workflows, product development lifecycles, telemetry monitoring, and cross-functional team collaboration.",
    contribution:
      "Contributed to engineering workflows, internal tooling & diagnostics, and product development processes.",
    outcome:
      "Completed industry internship inside one of India's largest fintech and technology organizations.",
    coverImage: "/achievements/paytm-internship.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/paytm-internship.svg"],
    galleryItems: [
      {
        src: "/achievements/paytm-internship.svg",
        alt: "Paytm Engineering Internship",
        caption: "Paytm — Software & Product Engineering Internship",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [
      { name: "Paytm", logo: "/logos/paytm.svg", url: "https://paytm.com" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
    technologies: [
      "Product Development",
      "Engineering Workflows",
      "TypeScript",
      "React",
      "Node.js",
      "Cross-Team Collaboration",
    ],
    links: [
      { label: "paytm.com", url: "https://paytm.com" },
      { label: "Experience Timeline", url: "/experience" },
    ],
    featured: true,
  },
  {
    id: "elevenlabs-ecosystem",
    slug: "elevenlabs-ecosystem-collaboration",
    category: "industry",
    categoryLabel: "06 / Industry Recognition",
    indexNumber: "02",
    title: "ElevenLabs — Community Meetup & Ecosystem Collaboration",
    subtitle: "Event Collaboration · Generative Voice AI Developer Meetup",
    organization: "ElevenLabs × HackBriven",
    organizationLogo: "/logos/elevenlabs.svg",
    recognition: "Event Collaboration",
    recognitionType: "collaboration",
    role: "Community Organizer (HackBriven)",
    description:
      "Collaborated with the ElevenLabs developer ecosystem through HackBriven to host the ElevenLabs AI Meetup, introducing student and indie builders to real-time voice synthesis and conversational AI agents.",
    contribution:
      "Organized the community event, developer demos, and builder onboarding sessions.",
    outcome:
      "Delivered a focused voice-AI community meetup connecting builders with ElevenLabs tooling.",
    coverImage: "/achievements/elevenlabs-meetup.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/elevenlabs-meetup.svg"],
    partnerLogos: [
      { name: "ElevenLabs", logo: "/logos/elevenlabs.svg" },
      { name: "HackBriven", logo: "/logos/hackbriven.svg" },
    ],
    technologies: ["Voice AI", "Developer Ecosystem", "Event Collaboration", "Audio Agents"],
    links: [],
    featured: true,
  },
  {
    id: "microsoft-google-sarvam-n8n-ecosystem",
    slug: "developer-ecosystem-collaborations",
    category: "industry",
    categoryLabel: "06 / Industry Recognition",
    indexNumber: "03",
    title: "Microsoft, Google for Developers, Sarvam AI & n8n Ecosystem",
    subtitle: "Community Initiatives, Developer Tooling & Hackathon Ecosystem Engagement",
    organization: "Industry Developer Ecosystems",
    organizationLogo: "/logos/microsoft.svg",
    recognition: "Ecosystem Collaboration & Community Engagement",
    recognitionType: "collaboration",
    role: "Community Co-Founder (HackBriven) & Developer Participant",
    description:
      "Engaged with developer programs, community events, and technical tooling across Microsoft, Google for Developers, Sarvam AI, and n8n — spanning community hackathons, workflow automation sessions, Indic AI exploration, and builder initiatives.",
    contribution:
      "Facilitated developer community sessions, hackathon tooling tracks, and ecosystem outreach through HackBriven and campus initiatives.",
    outcome:
      "Connected student developer communities with modern cloud, Indic AI, and workflow-automation ecosystems.",
    coverImage: "/achievements/build-for-india.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/build-for-india.svg"],
    partnerLogos: [
      { name: "Microsoft", logo: "/logos/microsoft.svg" },
      { name: "Google", logo: "/logos/google.svg" },
      { name: "Sarvam AI", logo: "/logos/sarvam.svg" },
      { name: "n8n", logo: "/logos/n8n.svg" },
    ],
    technologies: [
      "Cloud & AI Ecosystems",
      "Indic AI (Sarvam)",
      "Workflow Automation (n8n)",
      "Developer Communities",
    ],
    links: [],
    featured: false,
  },
];

