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
    title: "IBM National Hackathon",
    subtitle: "Code Crafter 3.0 · CT University & TechVerse Club",
    organization: "IBM / CT University",
    organizationLogo: "/logos/ibm.svg",
    recognition: "1st Prize Grand Prize (₹1.8L Prize Haul)",
    recognitionType: "win",
    prize: "₹1.8 Lakh (₹30K Cash + ₹1.5L in-kind)",
    edition: "Code Crafter 3.0",
    level: "National Level · 500+ Competing Teams (IITs & NITs)",
    date: "2024 — 2025",
    projectName: "Synora",
    role: "Full-Stack & Hardware Systems Integrator",
    description:
      "Won the Grand Prize at IBM's Code Crafter 3.0 (CT University & TechVerse Club) competing against 500+ teams from across India, including top-tier talent from IITs and NITs. Prize haul: ₹1.8 Lakh total (₹30K cash + ₹1.5L in kind) plus Dell bag, trophy, keyboard, mouse, and tech goodies. Built Synora: AI-Powered Clinical Management & Real-Time EMG Monitoring via Web Serial API.",
    problemStatement:
      "Physical therapy clinics and sports medicine providers lack open, browser-native Electromyography (EMG) diagnostic tools that stream muscle signals with sub-millisecond fidelity and work seamlessly offline.",
    solution:
      "Engineered clinical-grade Electromyography via the browser Web Serial API for live muscle signal visualization, fatigue analysis, and strain detection, coupled with predictive LLM health recommendations and a 100% offline-first clinical sync architecture.",
    contribution:
      "Led full-stack application development (Next.js 14, Supabase, tRPC, Drizzle ORM), integrated real-time Web Serial API EMG hardware telemetry, and co-pitched the live demo before IBM industry-expert judges.",
    outcome:
      "1st Prize Grand Prize Winners out of 500+ teams nationwide; presented to IBM senior engineering judges.",
    coverImage: "/achievements/media/ibm-winner-1.jpg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/media/ibm-winner-1.jpg",
    gallery: [
      "/achievements/media/ibm-winner-1.jpg",
      "/achievements/media/ibm-winner-2.jpg",
      "/achievements/synora.svg",
      "/achievements/ibm-cert.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/media/ibm-winner-1.jpg",
        alt: "IBM Hackathon Code Crafter 3.0 Grand Prize Winner Stage Ceremony",
        caption: "IBM Code Crafter 3.0 — 1st Prize Grand Prize Trophy & ₹1.8L Cheque Presentation",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/media/ibm-winner-2.jpg",
        alt: "Subhash Malik on Stage at IBM Hackathon",
        caption: "Stage presentation & live EMG hardware demonstration before IBM judges",
        ratio: "3:4",
        kind: "stage",
      },
      {
        src: "/achievements/synora.svg",
        alt: "Synora Platform Blueprint",
        caption: "Synora — EMG Hardware & Web Serial API Pipeline Architecture",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/ibm-cert.svg",
        alt: "IBM Hackathon Grand Prize Certificate",
        caption: "Official Grand Prize Winner Certificate Credential — IBM",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "IBM", logo: "/logos/ibm.svg", url: "https://www.ibm.com" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Supabase", logo: "/tech/supabase.svg" },
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "tRPC",
      "Drizzle ORM",
      "Web Serial API",
      "LLM Models",
      "Zustand",
      "TanStack Query",
    ],
    links: [
      { label: "Live Project (Synora)", url: "https://synora01.netlify.app/" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/synora" },
    ],
    featured: true,
  },
  {
    id: "innovate-2026",
    slug: "innovate-2026",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "02",
    title: "India Innovates 2026",
    subtitle: "Biggest Government Hackathon · Bharat Mandapam, New Delhi",
    organization: "Government of India / Unstop",
    organizationLogo: "/logos/chandigarh-university.svg",
    recognition: "Top 15 Finalist (Top 1%, 30,000+ teams)",
    recognitionType: "win",
    edition: "India Innovates 2026",
    level: "National Grand Finale · Bharat Mandapam · 30,000+ Teams",
    date: "March 28, 2026",
    location: "Bharat Mandapam, New Delhi",
    projectName: "CityScope",
    role: "Team CityScope · Systems & Web Lead",
    description:
      "Team CityScope won and was selected for the Grand Finale of India's largest civic tech hackathon after competing against 30,000+ teams nationwide (Top 1% selection). Stood on stage at Bharat Mandapam pitching CityScope directly to Rekha Gupta Ji (Chief Minister, Delhi), Sanjeev Khirwar (MCD Commissioner), Manjinder Singh Sirsa (Environment Minister), and Ankit Aggarwal (CEO, Unstop). Built CityScope: A civic intelligence platform transforming municipal grievance handling with multimodal reporting, AI routing, live dashboards, and smart IoT road anomaly detection.",
    problemStatement:
      "Municipal grievance systems suffer from manual paper routing, lack of spatial telemetry, and zero automated road maintenance diagnostics across metropolitan cities.",
    solution:
      "Created an integrated civic intelligence platform where citizens submit complaints via photo, voice, and GPS, AI classifies and dispatches tickets to the appropriate department, and IoT vehicle sensors automatically map potholes and road anomalies.",
    contribution:
      "Built the full-stack web application, GIS telemetry routing, and municipal command dashboard; co-delivered the grand finale pitch at Bharat Mandapam.",
    outcome:
      "Selected as Winner in the Digital Democracy Domain, opening discussions for real-world municipal infrastructure deployment.",
    coverImage: "/achievements/media/india-innovates-1.jpg",
    coverRatio: "3:4",
    assetHint: "/public/achievements/media/india-innovates-1.jpg",
    gallery: [
      "/achievements/media/india-innovates-1.jpg",
      "/achievements/cityscope.svg",
      "/achievements/innovate-2026.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/media/india-innovates-1.jpg",
        alt: "India Innovates 2026 Stage Award Ceremony at Bharat Mandapam",
        caption: "Stage Award Ceremony at Bharat Mandapam with Cabinet Ministers & Unstop CEO",
        ratio: "3:4",
        kind: "stage",
      },
      {
        src: "/achievements/cityscope.svg",
        alt: "CityScope Platform Blueprint",
        caption: "CityScope — Civic Intelligence Platform Architecture",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/innovate-2026.svg",
        alt: "India Innovates 2026 Credential Plate",
        caption: "India Innovates 2026 — Digital Democracy Winner Credential",
        ratio: "16:9",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "Government of India", logo: "/logos/chandigarh-university.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "FastAPI", logo: "/tech/fastapi.svg" },
    ],
    technologies: [
      "Next.js 15",
      "Python",
      "FastAPI",
      "Computer Vision",
      "IoT Sensors",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live Project (CityScope)", url: "https://cityscope.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/cityscope" },
    ],
    featured: true,
  },
  {
    id: "google-codeclash",
    slug: "google-codeclash",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "03",
    title: "Google Hackathon",
    subtitle: "Top 2 Teams Nationally · Showcased at Google Office Gurgaon",
    organization: "Google",
    organizationLogo: "/logos/google.svg",
    recognition: "1st Runner-Up (Top 2 of 8,000+ Teams)",
    recognitionType: "runner-up",
    edition: "Google National Hackathon",
    level: "National Level · Top 2 of 8,000+ Teams",
    date: "2024",
    location: "Google Office, Gurgaon",
    projectName: "NeuroGaze",
    role: "Team VEDA · Full Stack Developer & EEG Logic Integration",
    description:
      "From 8,000+ teams to the Top 2 nationally. Secured 1st Runner-Up at the Google Hackathon, showcasing NeuroGaze inside the Google Office demo room in Gurgaon after clearing 3 intense rounds. NeuroGaze is an AI-powered Brain-Computer Interface (BCI) system built using Neuro Playground Lite from Upside Down Labs that helps paralyzed patients communicate without touch, without voice — just intent.",
    problemStatement:
      "Paralyzed, non-verbal, and motor-impaired individuals are isolated by interfaces that require tactile interaction or speech, leaving them unable to express critical needs.",
    solution:
      "Built a non-invasive EEG brainwave interface mapping real-time neural frequency modulations through machine learning classifiers to trigger conversational intent cards and medical alerts.",
    contribution:
      "Engineered the live EEG serial bridge, ML frequency classifier, web interface, and presented the live patient demonstration in the Google demo room.",
    outcome:
      "Secured 1st Runner-Up nationally and received mentorship at Google Office Gurgaon.",
    coverImage: "/achievements/neurogaze.svg",
    coverRatio: "16:9",
    assetHint: "/public/achievements/google-codeclash.jpg",
    gallery: [
      "/achievements/neurogaze.svg",
      "/achievements/google-codeclash.svg",
      "/achievements/google-cert.svg",
      "/general/avatar.png",
    ],
    galleryItems: [
      {
        src: "/achievements/neurogaze.svg",
        alt: "Google Hackathon — 1st Runner-Up NeuroGaze",
        caption: "Google Hackathon — 1st Runner-Up (Top 2 of 8,000+ Teams)",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/google-cert.svg",
        alt: "Google Hackathon Runner-Up Certificate",
        caption: "Google Hackathon — Official Runner-Up Credential",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "Google", logo: "/logos/google.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "Python", logo: "/tech/python.svg" },
    ],
    technologies: [
      "ReactJS",
      "Python",
      "ML Models",
      "EEG Hardware (Upside Down Labs)",
      "Tailwind CSS",
      "WebSockets",
      "Real-time Signal Processing",
    ],
    links: [
      { label: "Live Project (NeuroGaze)", url: "https://neurogaze.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/neurogaze" },
    ],
    featured: true,
  },
  {
    id: "athletix-tekathon",
    slug: "athletix-tekathon",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "04",
    title: "Tekathon 4.0 — Smart India Hackathon Gateway",
    subtitle: "1st Prize Winner · Fitness & Sports Theme · Chandigarh University",
    organization: "Chandigarh University / SIH",
    organizationLogo: "/logos/chandigarh-university.svg",
    recognition: "1st Prize Winner (950+ Teams)",
    recognitionType: "win",
    edition: "Tekathon 4.0 (SIH Internal)",
    level: "36-Hour National Gateway · 5,700+ Students · 950+ Teams",
    date: "2025",
    location: "Chandigarh University",
    projectName: "AthletiX",
    role: "Team AthletiX · Full-Stack & Biomechanics Lead",
    description:
      "Clinched 1st place in Tekathon 4.0, Chandigarh University's 36-hour hackathon and the official gateway to Smart India Hackathon, under the Fitness & Sports theme. Over 5,700+ students and 950+ teams competed, and Team AthletiX took the crown. AthletiX evaluates athletic fitness tests via smartphone video analysis with zero expensive equipment, delivers real-time injury prevention insights, and tracks muscle fatigue.",
    problemStatement:
      "Grassroots athletes and sports coaches lack access to multi-thousand-dollar motion capture rigs, leaving muscle fatigue and injury risks unmonitored during training.",
    solution:
      "Created an AI-driven video analytics engine running mobile pose estimation to track joint biomechanics, quantify fatigue accumulation, and surface actionable coaching metrics that work 100% offline.",
    contribution:
      "Engineered the MediaPipe pose calculation heuristics, real-time feedback dashboard, and local cache pipeline for remote sports camps.",
    outcome:
      "Won 1st Prize overall in the Fitness & Sports theme, qualifying as Chandigarh University's flagship team for Smart India Hackathon.",
    coverImage: "/achievements/athletix.svg",
    coverRatio: "16:9",
    gallery: [
      "/achievements/athletix.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/athletix.svg",
        alt: "Tekathon 4.0 — 1st Prize Winner AthletiX",
        caption: "Tekathon 4.0 (SIH Gateway) — 1st Prize Winners (AthletiX)",
        ratio: "16:9",
        kind: "photo",
      },
    ],
    partnerLogos: [
      { name: "Chandigarh University", logo: "/logos/chandigarh-university.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "Python", logo: "/tech/python.svg" },
    ],
    technologies: [
      "React",
      "MediaPipe",
      "TensorFlow.js",
      "Python",
      "FastAPI",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live Project (AthletiX)", url: "https://athletix.subhashmalik.me" },
      { label: "GitHub Repository", url: "https://github.com/subhashmalik0001/athletix" },
    ],
    featured: true,
  },
  {
    id: "nit-hamirpur",
    slug: "nit-hamirpur",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "05",
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
    id: "iqoo-monster-inside",
    slug: "iqoo-monster-inside",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "06",
    title: "iQOO Monster Inside Hackathon — Infinity AI",
    subtitle: "1st Runner-Up · 100% Offline Android AI Assistant via llama.cpp",
    organization: "iQOO",
    organizationLogo: "/logos/iqoo.svg",
    recognition: "1st Runner-Up — ₹40,000 Prize",
    recognitionType: "runner-up",
    prize: "₹40,000",
    edition: "Monster Inside Hackathon",
    level: "National Level",
    date: "2024",
    projectName: "Infinity AI",
    role: "Lead Mobile AI Systems Engineer",
    description:
      "Awarded 1st Runner-Up and a ₹40,000 cash prize at the iQOO Monster Inside Hackathon. Engineered Infinity AI: an offline Android AI assistant built using Kotlin, Jetpack Compose, llama.cpp, and NLP. Implemented 100% on-device LLM inference using GGUF quantized models with zero internet and zero API dependency.",
    problemStatement:
      "Modern cloud AI assistants demand constant internet connectivity, leak private user prompts to external servers, and suffer from high network latency on mobile devices.",
    solution:
      "Architected 100% offline on-device LLM inference on Android using a customized llama.cpp C++ runtime with 4-bit GGUF quantized weights, delivering zero-latency, private AI chat without any network requests.",
    contribution:
      "Integrated llama.cpp C++ bindings via Android NDK, built the reactive Jetpack Compose chat UI, optimized RAM consumption for mobile devices, and delivered live on-device inference demo.",
    outcome:
      "Won 1st Runner-Up position along with a ₹40,000 cash prize at the national iQOO Monster Inside Hackathon.",
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
        alt: "iQOO Monster Inside Hackathon — 1st Runner-Up ₹40,000 Prize",
        caption: "iQOO Monster Inside Hackathon — 1st Runner-Up (₹40,000 Prize)",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/iqoo-cert.svg",
        alt: "iQOO Monster Inside Hackathon Award Credential",
        caption: "1st Runner-Up & ₹40,000 Prize Recognition",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [
      { name: "iQOO", logo: "/logos/iqoo.svg" },
      { name: "Kotlin", logo: "/tech/java.svg" },
      { name: "Python", logo: "/tech/python.svg" },
    ],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "llama.cpp",
      "GGUF Quantization",
      "Android NDK",
      "C++",
      "NLP",
      "On-Device AI",
    ],
    links: [
      { label: "GitHub Repository (Infinity.ai)", url: "https://github.com/subhashmalik0001/Infinity.ai" },
    ],
    featured: true,
  },
  {
    id: "flipkart-grid-8",
    slug: "flipkart-grid-8",
    category: "hackathons",
    categoryLabel: "01 / Hackathon Wins",
    indexNumber: "07",
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
