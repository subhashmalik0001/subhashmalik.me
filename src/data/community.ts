import type { Achievement } from "@/types/achievement";

/**
 * SECTION 05 — COMMUNITY ACHIEVEMENTS (HACKBRIVEN & ECOSYSTEM INITIATIVES)
 *
 * Highlights HackBriven (Co-Founder) and the specific events organized:
 *  - Build for India AI Hackathon
 *  - The Builders Space
 *  - CTRL ALT HACK
 *  - ElevenLabs AI Meetup
 *  - Alexa Developer Community (CU)
 */
export const COMMUNITY_OVERVIEW = {
  organization: "HackBriven",
  role: "Co-Founder",
  logo: "/logos/hackbriven.svg",
  tagline:
    "Co-founded HackBriven to connect ambitious student builders with real-world hackathons, AI ecosystem meetups, industry mentors, and hands-on product residencies.",
  pillars: [
    "End-to-end hackathon architecture & event operations",
    "Ecosystem collaborations with AI & developer-tooling leaders",
    "Peer-to-peer builder sessions, live demos & mentorship",
    "Student developer outreach & chapter leadership",
  ],
};

export const COMMUNITY_ACHIEVEMENTS: Achievement[] = [
  {
    id: "build-for-india-ai-hackathon",
    slug: "build-for-india-ai-hackathon",
    category: "community",
    categoryLabel: "05 / Community Achievements",
    indexNumber: "01",
    title: "Build for India AI Hackathon",
    subtitle: "HackBriven Flagship AI & Product Engineering Hackathon",
    organization: "HackBriven",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Co-Founder & Lead Organizer",
    recognitionType: "community",
    date: "2025",
    location: "India · Hybrid / In-Person",
    role: "Co-Founder · Operations, Partnerships & Technical Tracks",
    description:
      "Organized the Build for India AI Hackathon under HackBriven — bringing together student developers and early-stage builders to solve India-scale challenges using modern AI, voice models, and full-stack web architectures.",
    contribution:
      "Led event operations, partner outreach, problem-statement curation, mentor coordination, and technical evaluation workflows.",
    outcome:
      "Executed a flagship community hackathon uniting student builders, mentors, and AI ecosystem partners.",
    coverImage: "/achievements/build-for-india.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/build-for-india.svg", "/general/cover.jpg"],
    galleryItems: [
      {
        src: "/achievements/build-for-india.svg",
        alt: "Build for India AI Hackathon",
        caption: "Build for India AI Hackathon — Organized by HackBriven",
        ratio: "16:9",
        kind: "banner",
      },
    ],
    partnerLogos: [
      { name: "HackBriven", logo: "/logos/hackbriven.svg" },
      { name: "Sarvam AI", logo: "/logos/sarvam.svg" },
      { name: "n8n", logo: "/logos/n8n.svg" },
    ],
    technologies: ["Hackathon Operations", "AI Problem Tracks", "Developer Partnerships", "Mentorship"],
    links: [],
    featured: true,
  },
  {
    id: "the-builders-space",
    slug: "the-builders-space",
    category: "community",
    categoryLabel: "05 / Community Achievements",
    indexNumber: "02",
    title: "The Builders Space",
    subtitle: "Hands-On Builder Meetups, Product Demos & Peer Engineering",
    organization: "HackBriven",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Community Initiative",
    recognitionType: "community",
    date: "2024 — 2026",
    role: "Co-Founder & Host",
    description:
      "Created The Builders Space under HackBriven as an action-oriented gathering where developers ship real features, demo working prototypes without slideware, and exchange candid architectural feedback.",
    contribution:
      "Designed the demo-first format, curated builder cohorts, and hosted live product critique sessions.",
    outcome:
      "Fostered a high-signal peer community focused on shipping working software.",
    coverImage: "/achievements/builders-space.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/builders-space.svg"],
    galleryItems: [
      {
        src: "/achievements/builders-space.svg",
        alt: "The Builders Space",
        caption: "The Builders Space — Live Demo & Builder Sessions",
        ratio: "16:9",
        kind: "banner",
      },
    ],
    partnerLogos: [{ name: "HackBriven", logo: "/logos/hackbriven.svg" }],
    technologies: ["Live Product Demos", "Builder Community", "Peer Code Review", "Founder Network"],
    links: [],
    featured: true,
  },
  {
    id: "ctrl-alt-hack",
    slug: "ctrl-alt-hack",
    category: "community",
    categoryLabel: "05 / Community Achievements",
    indexNumber: "03",
    title: "CTRL ALT HACK",
    subtitle: "High-Intensity Coding & Rapid Prototyping Hackathon",
    organization: "HackBriven",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Co-Founder & Organizer",
    recognitionType: "community",
    date: "2025",
    role: "Co-Founder · Event Execution & Sponsorships",
    description:
      "Conceptualized and executed CTRL ALT HACK under HackBriven — a fast-paced hackathon challenging student teams to build and deploy functional full-stack prototypes under strict time constraints.",
    contribution:
      "Managed end-to-end event logistics, sponsorship relations, developer onboarding, and judging coordination.",
    outcome:
      "Expanded HackBriven's footprint as a student-first hackathon organizer.",
    coverImage: "/achievements/ctrl-alt-hack.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/ctrl-alt-hack.svg"],
    galleryItems: [
      {
        src: "/achievements/ctrl-alt-hack.svg",
        alt: "CTRL ALT HACK",
        caption: "CTRL ALT HACK — Organized by HackBriven",
        ratio: "16:9",
        kind: "banner",
      },
    ],
    partnerLogos: [{ name: "HackBriven", logo: "/logos/hackbriven.svg" }],
    technologies: ["Event Operations", "Sponsorships", "Developer Onboarding", "Rapid Prototyping"],
    links: [],
    featured: false,
  },
  {
    id: "elevenlabs-ai-meetup",
    slug: "elevenlabs-ai-meetup",
    category: "community",
    categoryLabel: "05 / Community Achievements",
    indexNumber: "04",
    title: "ElevenLabs AI Meetup",
    subtitle: "Generative Voice AI & Conversational Agent Developer Meetup",
    organization: "HackBriven × ElevenLabs Ecosystem",
    organizationLogo: "/logos/elevenlabs.svg",
    recognition: "Community Meetup Organizer",
    recognitionType: "community",
    date: "2025",
    role: "Co-Organizer · Community & Technical Demos",
    description:
      "Organized a dedicated developer meetup focused on generative voice AI, low-latency conversational agents, and real-time audio synthesis workflows in collaboration with the ElevenLabs developer ecosystem.",
    contribution:
      "Coordinated community turnout, live voice-agent demonstrations, and builder networking.",
    outcome:
      "Connected local AI developers with state-of-the-art voice synthesis tooling and hands-on agent workflows.",
    coverImage: "/achievements/elevenlabs-meetup.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/elevenlabs-meetup.svg"],
    galleryItems: [
      {
        src: "/achievements/elevenlabs-meetup.svg",
        alt: "ElevenLabs AI Meetup",
        caption: "ElevenLabs AI Meetup — Voice AI & Developer Community",
        ratio: "16:9",
        kind: "banner",
      },
    ],
    partnerLogos: [
      { name: "ElevenLabs", logo: "/logos/elevenlabs.svg" },
      { name: "HackBriven", logo: "/logos/hackbriven.svg" },
    ],
    technologies: ["Voice AI", "ElevenLabs", "Conversational Agents", "Developer Meetup"],
    links: [],
    featured: true,
  },
];

