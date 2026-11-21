import type { Achievement } from "@/types/achievement";

/**
 * SECTION 05 — COMMUNITY ACHIEVEMENTS (HACKBRIVEN & ECOSYSTEM INITIATIVES)
 *
 * Highlights HackBriven (Founding Member) and the specific events organized:
 *  - Paytm Build for India AI Hackathon (Bengaluru & Delhi)
 *  - The Builders Space
 *  - CTRL ALT HACK
 *  - ElevenLabs AI Meetup
 *  - Alexa Developer Community (CU)
 */
export const COMMUNITY_OVERVIEW = {
  organization: "HackBriven",
  role: "Founding Member",
  logo: "/logos/hackbriven-logo.png",
  tagline:
    "Founding Member of HackBriven to connect ambitious student builders with real-world hackathons, AI ecosystem meetups, industry mentors, and hands-on product residencies.",
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
    title: "Paytm Build for India AI Hackathon",
    subtitle: "Bengaluru & Delhi Editions · 4,000+ Registrations, 100,000+ Impressions with Paytm",
    organization: "Paytm × HackBriven",
    organizationLogo: "/logos/paytm.svg",
    recognition: "Founding Member & Lead Organizer",
    recognitionType: "community",
    date: "2025 — 2026",
    location: "Bengaluru & Delhi (In-Person / Hybrid)",
    role: "Founding Member · Operations, Partnerships & Technical Tracks",
    description:
      "Co-organized the Paytm Build for India AI Hackathon across Bengaluru and Delhi in official partnership with Paytm (One97 Communications Limited). Scaled to 4,000+ registrations in a single city and over 100,000+ impressions across developer platforms, uniting builders, founders, and AI enthusiasts to solve real fintech challenges.",
    contribution:
      "Led hackathon architecture, partner outreach with Paytm leadership, problem-statement curation, mentor coordination, and technical evaluation workflows.",
    outcome:
      "Executed one of India's largest corporate-backed student AI hackathons, receiving direct praise from Paytm leadership and community builders.",
    coverImage: "/events/paytm-hackathon/paytm-ai-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/events/paytm-hackathon/paytm-ai-1.jpg",
      "/events/paytm-hackathon/paytm-ai-2.jpg",
      "/events/paytm-hackathon/paytm-ai-3.jpg",
      "/achievements/build-for-india.svg",
    ],
    galleryItems: [
      {
        src: "/events/paytm-hackathon/paytm-ai-1.jpg",
        alt: "Paytm Build for India AI Hackathon main banner & stage",
        caption: "Paytm Build for India AI Hackathon — Delhi & Bengaluru Editions",
        ratio: "16:9",
        kind: "stage",
      },
      {
        src: "/events/paytm-hackathon/paytm-ai-2.jpg",
        alt: "Subhash Malik & team at Paytm AI Hackathon",
        caption: "4,000+ registrations in a single city solving fintech & AI challenges",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/events/paytm-hackathon/paytm-ai-3.jpg",
        alt: "Organizing team and builders on ground",
        caption: "Founding team on ground executing the flagship hackathon in partnership with Paytm",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [
      { name: "Paytm", logo: "/logos/paytm.svg" },
      { name: "HackBriven", logo: "/logos/hackbriven.svg" },
      { name: "Sarvam AI", logo: "/logos/sarvam.svg" },
    ],
    technologies: ["Fintech AI", "Paytm Partnership", "Hackathon Operations", "4,000+ Builders", "Developer Community"],
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
    subtitle: "Demolishing Slideware · Live Product Demos, Building in Public & Peer Engineering",
    organization: "HackBriven",
    organizationLogo: "/logos/hackbriven.svg",
    recognition: "Community Initiative",
    recognitionType: "community",
    date: "2024 — 2026",
    role: "Founding Member & Host",
    description:
      "Created The Builders Space under HackBriven as an action-oriented gathering where developers ship real features, demo working prototypes without slideware, and exchange candid architectural feedback. Over multiple editions, brought together ambitious student founders, indie makers, and engineers building in public.",
    contribution:
      "Designed the demo-first format, curated builder cohorts, hosted live product critique sessions, and facilitated technical collaboration across web and AI ecosystems.",
    outcome:
      "Fostered a high-signal peer community focused on shipping working software rather than slide decks.",
    coverImage: "/events/builders-space/bs-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/events/builders-space/bs-1.jpg",
      "/events/builders-space/bs-2.jpg",
      "/events/builders-space/bs-3.jpg",
      "/achievements/builders-space.svg",
    ],
    galleryItems: [
      {
        src: "/events/builders-space/bs-1.jpg",
        alt: "The Builders Space — Live builder meetups and real-time product demos",
        caption: "The Builders Space — Live builder meetups and real-time product demos",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/events/builders-space/bs-2.jpg",
        alt: "Founders and engineers breaking down full-stack architectures",
        caption: "Founders and engineers breaking down full-stack architectures without slideware",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/events/builders-space/bs-3.jpg",
        alt: "High-conviction peer code review, live testing, and shipping culture",
        caption: "High-conviction peer code review, live testing, and shipping culture",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [{ name: "HackBriven", logo: "/logos/hackbriven.svg" }],
    technologies: ["Live Product Demos", "Builder Community", "Peer Code Review", "Founder Network", "Open Source"],
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
    recognition: "Founding Member & Organizer",
    recognitionType: "community",
    date: "2025",
    role: "Founding Member · Event Execution & Sponsorships",
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
  {
    id: "hackwithup-localhost-series",
    slug: "hackwithuttarpradesh-localhost-series",
    category: "community",
    categoryLabel: "05 / Community Achievements",
    indexNumber: "05",
    title: "HackWithUttarPradesh 2025 — LocalHost@City Series",
    subtitle: "India's First Agentic AI Founders Hackathon · Microsoft Offices Noida, Delhi & Top Campuses",
    organization: "HackwithIndia × Microsoft × CU-TBI",
    organizationLogo: "/logos/microsoft.svg",
    recognition: "Lead Organizer & Series Host",
    recognitionType: "community",
    date: "2025",
    location: "Microsoft Noida, Microsoft Delhi, Amritsar, Mumbai",
    role: "Lead Organizer & Host · Agentic AI Tracks",
    description:
      "Organized and led the nationwide LocalHost@City Series for HackWithUttarPradesh 2025 — India's First Agentic AI Founders Hackathon. Spearheaded events across Microsoft Office Noida (200+ innovators; spoke on Agentic AI & team-building), Microsoft Office Delhi (Technology Business Incubators catalyzing founders), and Khalsa College of Engineering Amritsar (Judge & Mentor selecting Top 10 finalists), culminating in the Grand Finale at Chandigarh University (Uttar Pradesh Campus). Supported by Chancellor Satnam Singh Sandhu, MD Jai Inder Singh Sandhu, and CU-TBI Director Archita Nandi.",
    contribution:
      "Secured Microsoft corporate office venues, designed technical tracks on autonomous agents, hosted stage keynotes, and coordinated student founder qualification across North India.",
    outcome:
      "Mobilized hundreds of student builders and founders across 4 tech hubs, building India's premier community-led Agentic AI hackathon movement.",
    coverImage: "/events/hackwithup/hwup-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/events/hackwithup/hwup-1.jpg",
      "/events/hackwithup/hwup-2.jpg",
      "/events/hackwithup/hwup-3.jpg",
      "/events/hackwithup/hwup-4.jpg",
    ],
    galleryItems: [
      {
        src: "/events/hackwithup/hwup-1.jpg",
        alt: "Subhash Malik addressing builders at Microsoft Office Noida",
        caption: "Subhash Malik delivering Agentic AI keynote at Microsoft Office Noida (LocalHost@Noida)",
        ratio: "16:9",
        kind: "stage",
      },
      {
        src: "/events/hackwithup/hwup-2.jpg",
        alt: "LocalHost@Delhi session at Microsoft Office Delhi",
        caption: "Addressing founders and student builders at Microsoft Office Delhi",
        ratio: "16:9",
        kind: "stage",
      },
      {
        src: "/events/hackwithup/hwup-3.jpg",
        alt: "Mentoring & judging teams at Khalsa College Amritsar",
        caption: "Judging and selecting Top 10 finalists at Khalsa College of Engineering, Amritsar",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/events/hackwithup/hwup-4.jpg",
        alt: "Organizing team and participants celebrating LocalHost series",
        caption: "Founding organizers and participants advancing to the Grand Finale at Chandigarh University",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [
      { name: "Microsoft", logo: "/logos/microsoft.svg" },
      { name: "HackwithIndia", logo: "/logos/hackwithindia.png" },
      { name: "Chandigarh University", logo: "/logos/chandigarh-university.svg" },
      { name: "CU-TBI", logo: "/logos/chandigarh-university.svg" },
    ],
    technologies: ["Agentic AI", "Microsoft Offices", "Hackathon Operations", "Founder Incubation", "CU-TBI"],
    links: [],
    featured: true,
  },
];
