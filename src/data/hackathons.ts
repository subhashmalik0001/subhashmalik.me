import type { Achievement } from "@/types/achievement";

/**
 * SECTION 01 — HACKATHON WINS & COMPETITIVE MILESTONES
 *
 * All entries are centralized here so exact official editions, dates,
 * ceremony photographs (/public/achievements/*.jpg), and certificate scans
 * can be updated in one place without touching UI components.
 *
 * Authenticity rule:
 * - Winning / Runner-up positions, Top 15 finalist selection, and Round 2
 *   qualification are each classified accurately (`recognitionType`).
 * - Qualification is never presented as a win.
 */
export const HACKATHON_ACHIEVEMENTS: Achievement[] = [
  {
    id: "ibm-hackathon",
    slug: "ibm-hackathon",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "01",
    title: "IBM Hackathon",
    subtitle: "IBM Hack Challenge · National Developer Competition",
    organization: "IBM",
    organizationLogo: "/logos/ibm.svg",
    recognition: "1st Prize",
    recognitionType: "win",
    edition: "IBM Hack Challenge",
    level: "National Level",
    date: "2024",
    projectName: "AccessiAI",
    role: "Lead Full-Stack & AI Systems Engineer",
    description:
      "Secured 1st Prize at the IBM Hack Challenge for engineering AccessiAI — a real-time multimodal accessibility system that transforms dense technical documentation, schemas, and API references into contextual speech and simplified interactive summaries.",
    problemStatement:
      "Developers and students with visual and cognitive impairments face steep barriers when navigating complex multi-page technical documentation, deeply nested API schemas, and unformatted code blocks.",
    solution:
      "Built an intelligent chunking and assistive querying pipeline powered by IBM Watson AI, Next.js 15, and the Web Audio API that parses technical docs in real time, synthesizes natural prosody-adjusted speech, and provides an interactive simplified code sandbox.",
    contribution:
      "Architected the end-to-end Next.js 15 + TypeScript application, engineered the low-latency document chunking and Web Audio synthesis pipeline, and led the live technical demonstration before the evaluation panel.",
    outcome:
      "Awarded 1st Prize overall at the IBM Hack Challenge after demonstrating sub-second retrieval and real-time voice synthesis across technical documentation sets.",
    coverImage: "/achievements/ibm-hackathon.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/ibm-hackathon.jpg",
    gallery: [
      "/achievements/ibm-hackathon.svg",
      "/achievements/ibm-cert.svg",
      "/general/avatar.png",
    ],
    galleryItems: [
      {
        src: "/achievements/ibm-hackathon.svg",
        alt: "IBM Hackathon — 1st Prize Archival Plate",
        caption: "IBM Hack Challenge — 1st Prize Recognition (AccessiAI)",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/ibm-cert.svg",
        alt: "IBM Hack Challenge — 1st Prize Certificate",
        caption: "Official 1st Prize Certificate Credential — IBM Hack Challenge",
        ratio: "certificate",
        kind: "certificate",
      },
      {
        src: "/general/avatar.png",
        alt: "Subhash Malik presenting on stage",
        caption: "Stage presentation & technical showcase",
        ratio: "3:4",
        kind: "stage",
      },
    ],
    partnerLogos: [
      { name: "IBM", logo: "/logos/ibm.svg", url: "https://www.ibm.com" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "IBM Watson AI",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio API",
    ],
    links: [
      { label: "Live Project (AccessiAI)", url: "https://accessiai.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/accessi-ai" },
    ],
    featured: true,
  },
  {
    id: "nit-hamirpur",
    slug: "nit-hamirpur",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "02",
    title: "NIT Hamirpur Hackathon",
    subtitle: "NIT Hack 5.0 · National Institute of Technology Hamirpur",
    organization: "NIT Hamirpur",
    organizationLogo: "/logos/nit-hamirpur.svg",
    recognition: "National-Level Winner (1st Place)",
    recognitionType: "win",
    edition: "NIT Hack 5.0",
    level: "National Level · 200+ Competing Teams",
    date: "2024",
    location: "NIT Hamirpur, Himachal Pradesh",
    projectName: "CredTrust",
    role: "Full-Stack & Smart Contract Architect",
    description:
      "Won 1st Place at NIT Hack 5.0 (NIT Hamirpur) among 200+ competing teams by building CredTrust — a cryptographically verifiable credential protocol eliminating forged academic degrees, certifications, and hackathon awards.",
    problemStatement:
      "Academic institutions, hackathon organizers, and employers lack a tamper-proof, instant verification standard for credentials, leading to manual background checks and rampant certificate forgery.",
    solution:
      "Engineered a soulbound cryptographic credential issuance and zero-knowledge verification system on Ethereum with a 1-click employer verification widget and batch issuance dashboard.",
    contribution:
      "Designed the Solidity smart-contract verification flow, built the Next.js 15 + Wagmi + Prisma issuer/verifier portal, and led the live verification demo.",
    outcome:
      "Recognized as National-Level Winner (1st Place) at NIT Hack 5.0 out of 200+ participating teams.",
    coverImage: "/achievements/nit-hamirpur.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/nit-hamirpur.jpg",
    gallery: [
      "/achievements/nit-hamirpur.svg",
      "/achievements/nit-cert.svg",
      "/general/cover.jpg",
    ],
    galleryItems: [
      {
        src: "/achievements/nit-hamirpur.svg",
        alt: "NIT Hamirpur Hackathon — National Winner Plate",
        caption: "NIT Hack 5.0 — National-Level Winner (CredTrust)",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/nit-cert.svg",
        alt: "NIT Hack 5.0 Winner Certificate",
        caption: "NIT Hamirpur Hackathon — National Winner Credential",
        ratio: "certificate",
        kind: "certificate",
      },
      {
        src: "/general/cover.jpg",
        alt: "CredTrust architecture overview",
        caption: "Protocol architecture: Innovate · Build · Scale",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "NIT Hamirpur", logo: "/logos/nit-hamirpur.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    ],
    technologies: [
      "Solidity",
      "Ethereum",
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "Wagmi",
      "Ethers.js",
    ],
    links: [
      { label: "Live Project (CredTrust)", url: "https://credtrust.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/credtrust" },
    ],
    featured: true,
  },
  {
    id: "google-codeclash",
    slug: "google-codeclash",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "03",
    title: "Google Hackathon — CodeClash",
    subtitle: "CodeClash Developer Hackathon · National Podium",
    organization: "Google / CodeClash",
    organizationLogo: "/logos/google.svg",
    recognition: "Runner-Up",
    recognitionType: "runner-up",
    edition: "CodeClash",
    level: "National Level",
    date: "2024",
    projectName: "CollabCanvas",
    role: "Real-Time Systems & Frontend Lead",
    description:
      "Earned Runner-Up honors at the Google CodeClash Hackathon for CollabCanvas — a multiplayer AI design-to-code whiteboard with live cursor synchronization and 1-click React JSX component compilation.",
    problemStatement:
      "Product teams lose momentum translating rough collaborative whiteboard wireframes into clean, responsive React component hierarchies during rapid sprints.",
    solution:
      "Combined an HTML5 infinite canvas and sub-20ms Socket.IO synchronization engine with Google Gemini multimodal vision to turn hand-drawn wireframes directly into live-editable React + Tailwind code.",
    contribution:
      "Built the real-time multi-cursor canvas engine, integrated the Gemini multimodal vision-to-JSX compiler pipeline, and engineered the live component preview sandbox.",
    outcome:
      "Secured Runner-Up podium recognition at the Google Hackathon — CodeClash.",
    coverImage: "/achievements/google-codeclash.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/google-codeclash.jpg",
    gallery: [
      "/achievements/google-codeclash.svg",
      "/achievements/google-cert.svg",
      "/general/avatar.png",
    ],
    galleryItems: [
      {
        src: "/achievements/google-codeclash.svg",
        alt: "Google Hackathon CodeClash — Runner-Up",
        caption: "Google Hackathon — CodeClash · Runner-Up Recognition",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/google-cert.svg",
        alt: "CodeClash Runner-Up Certificate",
        caption: "CodeClash Runner-Up Recognition Credential",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "Google", logo: "/logos/google.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Tailwind CSS", logo: "/tech/tailwindcss.svg" },
    ],
    technologies: [
      "React 19",
      "Next.js",
      "Google Gemini API",
      "Socket.IO",
      "HTML5 Canvas",
      "TypeScript",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live Project (CollabCanvas)", url: "https://collabcanvas.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/collab-canvas" },
    ],
    featured: true,
  },
  {
    id: "iqoo-monster-inside",
    slug: "iqoo-monster-inside",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "04",
    title: "iQOO Monster Inside Hackathon",
    subtitle: "National High-Performance Engineering Hackathon",
    organization: "iQOO",
    organizationLogo: "/logos/iqoo.svg",
    recognition: "Runner-Up — ₹40,000 Prize",
    recognitionType: "runner-up",
    prize: "₹40,000",
    edition: "Monster Inside Hackathon",
    level: "National Level",
    date: "2024",
    projectName: "CollabCanvas",
    role: "Lead Product & Frontend Engineer",
    description:
      "Awarded Runner-Up and a ₹40,000 cash prize at the iQOO Monster Inside Hackathon for delivering a high-fps collaborative canvas and AI code generation workflow under intense competition constraints.",
    problemStatement:
      "Browser-based collaborative tools often suffer from frame drops, state conflicts, and sluggish AI round-trips under concurrent multi-user load.",
    solution:
      "Engineered a zero-lag canvas rendering loop with optimistic WebSocket delta broadcasting and streaming AI layout synthesis.",
    contribution:
      "Led frontend rendering optimization, state conflict resolution, and live product benchmarking during the final evaluation.",
    outcome:
      "Won Runner-Up position along with a ₹40,000 prize at the iQOO Monster Inside Hackathon.",
    coverImage: "/achievements/iqoo-monster-inside.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/iqoo-monster-inside.jpg",
    gallery: [
      "/achievements/iqoo-monster-inside.svg",
      "/achievements/iqoo-cert.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/iqoo-monster-inside.svg",
        alt: "iQOO Monster Inside Hackathon — Runner-Up ₹40,000 Prize",
        caption: "iQOO Monster Inside Hackathon — Runner-Up (₹40,000 Prize)",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/iqoo-cert.svg",
        alt: "iQOO Monster Inside Hackathon Award Credential",
        caption: "Runner-Up & ₹40,000 Prize Recognition",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "iQOO", logo: "/logos/iqoo.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
    technologies: [
      "React 19",
      "Next.js",
      "TypeScript",
      "WebSockets",
      "HTML5 Canvas",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live Project", url: "https://collabcanvas.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/collab-canvas" },
    ],
    featured: true,
  },
  {
    id: "innovate-2026",
    slug: "innovate-2026",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "05",
    title: "Innovate 2026",
    subtitle: "National Innovation & Product Engineering Competition",
    organization: "Innovate 2026",
    organizationLogo: "/logos/chandigarh-university.svg",
    recognition: "Top 15 Finalist (from 25,000+ Teams)",
    recognitionType: "finalist",
    edition: "Innovate 2026",
    level: "National Finalist · 25,000+ Participating Teams",
    date: "2026",
    projectName: "Synora / Autonomous AI Workflow System",
    role: "Team Lead & Systems Architect",
    description:
      "Selected among the Top 15 National Finalists out of 25,000+ participating teams at Innovate 2026 (top 0.06% selection), advancing through multi-stage technical evaluations and national grand finale prototyping.",
    problemStatement:
      "Enterprise and student teams struggle to unify fragmented knowledge repositories, voice notes, and multi-step operational workflows into one verifiable execution environment.",
    solution:
      "Designed an end-to-end multimodal AI workspace capable of ingesting heterogeneous documents, synthesizing insights, and executing deterministic workflow actions.",
    contribution:
      "Led system architecture, full-stack prototype implementation, and national finalist pitch presentation.",
    outcome:
      "Reached the Top 15 National Finalist cohort among 25,000+ registered teams nationwide.",
    coverImage: "/achievements/innovate-2026.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/innovate-2026.jpg",
    gallery: [
      "/achievements/innovate-2026.svg",
      "/general/avatar.png",
    ],
    galleryItems: [
      {
        src: "/achievements/innovate-2026.svg",
        alt: "Innovate 2026 — Top 15 Finalist",
        caption: "Innovate 2026 — Top 15 Finalist among 25,000+ teams",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/general/avatar.png",
        alt: "Subhash Malik presenting at 2026 Summit",
        caption: "2026 Summit & Finalist Presentation",
        ratio: "3:4",
        kind: "stage",
      },
    ],
    partnerLogos: [
      { name: "CU-TBI", logo: "/logos/chandigarh-university.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "AI / LLM Pipelines",
      "Node.js",
      "Tailwind CSS",
    ],
    links: [],
    featured: true,
  },
  {
    id: "flipkart-grid-8",
    slug: "flipkart-grid-8",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "06",
    title: "Flipkart GRID 8.0",
    subtitle: "Flipkart National Engineering Campus Challenge",
    organization: "Flipkart",
    organizationLogo: "/logos/flipkart.svg",
    recognition: "Round 2 Qualified",
    recognitionType: "qualified",
    edition: "GRID 8.0",
    level: "National Engineering Challenge · Qualification Milestone",
    date: "2025",
    role: "Software Development Track Participant",
    description:
      "Qualified for Round 2 in Flipkart GRID 8.0, Flipkart's flagship national engineering campus challenge testing algorithmic problem-solving, core computer science fundamentals, and scalable system design.",
    problemStatement:
      "Rigorous national-scale screening across data structures, algorithms, and distributed commerce architecture.",
    solution:
      "Cleared Round 1 competitive evaluation to advance into Round 2 of the Flipkart GRID 8.0 engineering track.",
    contribution:
      "Completed competitive technical assessments and engineering problem-solving rounds.",
    outcome:
      "Official Round 2 Qualification in Flipkart GRID 8.0 (recorded accurately as a qualification milestone).",
    coverImage: "/achievements/flipkart-grid-8.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/flipkart-grid-8.jpg",
    gallery: [
      "/achievements/flipkart-grid-8.svg",
      "/achievements/flipkart-cert.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/flipkart-grid-8.svg",
        alt: "Flipkart GRID 8.0 — Round 2 Qualified",
        caption: "Flipkart GRID 8.0 — Round 2 Qualification Milestone",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/flipkart-cert.svg",
        alt: "Flipkart GRID 8.0 Qualification Proof",
        caption: "Flipkart GRID 8.0 — Round 2 Qualification Credential",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "Flipkart GRID", logo: "/logos/flipkart.svg" },
      { name: "C++", logo: "/tech/cplusplus.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
    technologies: ["C++", "Data Structures & Algorithms", "System Design", "Python", "Node.js"],
    links: [],
    featured: false,
  },
];

