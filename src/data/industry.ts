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
    title: "Paytm (One97 Communications Limited) — Summer Growth Intern",
    subtitle: "Fintech Engineering · Summer Growth Intern (Delhi, Hybrid)",
    organization: "Paytm (One97 Communications Limited)",
    organizationLogo: "/logos/paytm.svg",
    recognition: "Summer Growth Internship",
    recognitionType: "internship",
    role: "Summer Growth Intern",
    date: "Jun 2026 – Sep 2026",
    description:
      "Fintech Engineering: Contributed to production-scale engineering workflows on India’s leading digital payments platform, delivering features within a high-availability distributed system using SDLC best practices.",
    contribution:
      "Contributed to high-availability distributed system features, SDLC engineering practices, and production payments workflows.",
    outcome:
      "Completed high-impact summer growth internship at One97 Communications Limited (Paytm).",
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
    title: "Microsoft, Convex, Google for Developers, Sarvam AI & n8n Ecosystem",
    subtitle: "Developer Ecosystem Tooling, Technical Advocacy & Hackathon Integrations",
    organization: "Industry Developer Ecosystems",
    organizationLogo: "/logos/convex.svg",
    recognition: "Ecosystem Collaboration & Technical Representation",
    recognitionType: "collaboration",
    role: "Founding Member (HackBriven) & Developer Advocate",
    description:
      "Engaged with developer programs, community events, and technical tooling across Microsoft, Convex, Google for Developers, Sarvam AI, and n8n — including representing Convex at Microsoft Office Noida, hosting workflow automation sessions with n8n, exploring Indic AI with Sarvam, and scaling builder initiatives.",
    contribution:
      "Represented Convex tooling on stage, facilitated developer community tracks, and conducted live architecture demos connecting builders with cutting-edge cloud and AI ecosystems.",
    outcome:
      "Bridged student developer communities with modern cloud, real-time reactive databases (Convex), Indic AI, and workflow automation.",
    coverImage: "/events/cognitive-chaos-convex/convex-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/events/cognitive-chaos-convex/convex-1.jpg",
      "/events/cognitive-chaos-convex/convex-2.jpg",
      "/achievements/build-for-india.svg",
    ],
    galleryItems: [
      {
        src: "/events/cognitive-chaos-convex/convex-1.jpg",
        alt: "Representing Convex at Microsoft Office Noida",
        caption: "Representing Convex Technology at Microsoft Office Noida (Cognitive Chaos 2026)",
        ratio: "16:9",
        kind: "stage",
      },
      {
        src: "/events/cognitive-chaos-convex/convex-2.jpg",
        alt: "Developer ecosystem presentation",
        caption: "Delivering technical deep dives on reactive database architectures",
        ratio: "16:9",
        kind: "stage",
      },
    ],
    partnerLogos: [
      { name: "Convex", logo: "/logos/convex.svg" },
      { name: "Microsoft", logo: "/logos/microsoft.svg" },
      { name: "Google", logo: "/logos/google.svg" },
      { name: "Sarvam AI", logo: "/logos/sarvam.svg" },
      { name: "n8n", logo: "/logos/n8n.svg" },
    ],
    technologies: [
      "Convex DB",
      "Microsoft Azure / Cloud",
      "Indic AI (Sarvam)",
      "Workflow Automation (n8n)",
      "Developer Advocacy",
    ],
    links: [],
    featured: true,
  },
];

