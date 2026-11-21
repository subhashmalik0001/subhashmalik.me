import type { Achievement } from "@/types/achievement";

/**
 * SECTION 02 — PROJECTS & PRODUCT RECOGNITION
 *
 * Kept intentionally distinct from Hackathon Wins per architecture guidelines:
 * a hackathon award is a competitive recognition; these entries represent
 * the products, systems, and real-world builds themselves.
 */
export const PROJECT_ACHIEVEMENTS: Achievement[] = [
  {
    id: "docyo-product",
    slug: "docyo",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "01",
    title: "Docyo",
    subtitle: "Local-First Swiss Army Knife for Files (176 Routes · 25 Tools)",
    organization: "Independent Product Build · Subhash Malik",
    recognition: "Flagship Open-Source Product",
    recognitionType: "product",
    role: "Creator & Lead Software Engineer",
    projectName: "Docyo",
    description:
      "A privacy-first, local-only file conversion and media manipulation engine running 100% on the user's machine with zero uploads, no accounts, and no limits. Features a cursor-attached radial wheel (drag file + hold Shift) and 176 conversion routes across PDFs, images, video, and audio.",
    problemStatement:
      "Users routinely upload sensitive personal documents, contracts, and confidential financial invoices to centralized web converter services just to perform basic tasks like merging PDFs or resizing images.",
    solution:
      "Built a desktop application running embedded WebAssembly and native media libraries that converts, compresses, redacts, OCRs, and edits files entirely on the local machine with 0 KB uploaded.",
    contribution:
      "Architected the radial menu interaction system, Tauri/Rust local pipeline, file format matrix with 176 routes, and 25 media manipulation tools.",
    outcome:
      "Shipped open-source (GPL-3.0) for macOS (5.4 MB bundle), Windows, and Linux. Live at docyo.app.",
    coverImage: "/projects/docyo/docyo-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/projects/docyo/docyo-1.jpg",
      "/projects/docyo/docyo-2.jpg",
      "/achievements/docyo.svg",
    ],
    galleryItems: [
      {
        src: "/projects/docyo/docyo-1.jpg",
        alt: "Docyo — Local-First Swiss Army Knife for Files",
        caption: "Docyo — Radial Wheel & Local File Conversion Pipeline (176 Routes)",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/projects/docyo/docyo-2.jpg",
        alt: "Docyo — Built-in Conversion and PDF Tools",
        caption: "Docyo — Built-in PDF Tools, OCR, Video Trimming & Image Redaction",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/docyo.svg",
        alt: "Docyo — Architecture Blueprint",
        caption: "Docyo — Architecture & Katanex System Spec",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Rust", logo: "/tech/rust.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "WebAssembly", logo: "/tech/wasm.svg" },
    ],
    technologies: ["Rust", "Tauri", "TypeScript", "WebAssembly", "FFmpeg", "GPL-3.0"],
    links: [
      { label: "Try Docyo Live", url: "https://www.docyo.app/" },
      { label: "GitHub Source Code", url: "https://github.com/subhashmalik0001/docyo" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "nebula-product",
    slug: "nebula",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "02",
    title: "Nebula",
    subtitle: "AI Business Card Scanner & Cross-Platform Contact Hub",
    organization: "Product Build · Subhash Malik",
    recognition: "Shipped B2B AI SaaS",
    recognitionType: "product",
    role: "Creator & Full-Stack Architect",
    projectName: "Nebula",
    description:
      "An intelligent vision utility for enterprise sales teams, recruiters, and founders that extracts structured contact data from physical business cards in under 2 seconds, syncing across devices and exporting directly into HubSpot, Salesforce, Outlook, and Gmail.",
    problemStatement:
      "Sales teams and founders attend conferences and leave with dozens of physical business cards that end up abandoned in drawers, losing high-value business leads to manual data entry friction.",
    solution:
      "Created an instant camera capture pipeline with sub-2-second OCR extraction and neural parsing that automatically formats names, companies, roles, and contacts with direct CRM integration and dynamic QR profile sharing.",
    contribution:
      "Engineered the camera OCR pipeline, full-text fuzzy contact indexing, dynamic QR generation, and CRM export integrations.",
    outcome:
      "Shipped and deployed at nebula.subhashmalik.me, helping professionals manage conference networking without manual entry.",
    coverImage: "/projects/nebula/nebula-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/projects/nebula/nebula-1.jpg",
      "/projects/nebula/nebula-2.jpg",
      "/achievements/nebula.svg",
    ],
    galleryItems: [
      {
        src: "/projects/nebula/nebula-1.jpg",
        alt: "Nebula — AI Business Card Scanner",
        caption: "Nebula — Sub-2-Second OCR Extraction & Contact Management Hub",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/projects/nebula/nebula-2.jpg",
        alt: "Nebula — CRM Sync & Contact Detail View",
        caption: "Nebula — Contact Hub with HubSpot & Salesforce 1-Click Sync",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/nebula.svg",
        alt: "Nebula Architecture Blueprint",
        caption: "Nebula — Neural OCR Pipeline & Architecture Spec",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "React Native", logo: "/tech/react.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
    ],
    technologies: ["Next.js 15", "React Native", "TypeScript", "OCR Vision", "CRM APIs", "Supabase"],
    links: [
      { label: "Nebula Web Platform", url: "https://nebula.subhashmalik.me" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "edvanta-product",
    slug: "edvanta",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "03",
    title: "Edvanta",
    subtitle: "The Operating System for Schools (Fee Collection, LMS, Attendance & Analytics)",
    organization: "Edvanta Technologies · Subhash Malik",
    recognition: "Enterprise EdTech Platform",
    recognitionType: "product",
    role: "Co-Founder & Chief Technology Officer",
    projectName: "Edvanta",
    description:
      "A comprehensive institutional operating system replacing fragmented paper registers and cash fees with automated digital fee reconciliation, live executive dashboards, complete LMS, biometric attendance, and a drag-and-drop school website builder.",
    problemStatement:
      "K-12 schools rely on cash fee payments, manual paper attendance books, and scattered WhatsApp circulars, creating massive administrative overhead and reconciliation errors.",
    solution:
      "Engineered a unified school management platform connecting parents, teachers, and administrators with automated UPI billing, live attendance tracking with parent alerts, and integrated virtual classrooms.",
    contribution:
      "Architected the backend payment ledger, real-time analytics aggregation pipelines, role-based access control, and intuitive parent portal.",
    outcome:
      "Processed over ₹5 Lakh in fee transactions, 1.2 Lakh+ automated attendance logs, and saved 5,000+ admin hours monthly across partner institutions.",
    coverImage: "/projects/edvanta/edvanta-1.jpg",
    coverRatio: "16:9",
    gallery: ["/projects/edvanta/edvanta-1.jpg", "/achievements/edvanta.svg"],
    galleryItems: [
      {
        src: "/projects/edvanta/edvanta-1.jpg",
        alt: "Edvanta — Operating System for Schools Dashboard",
        caption: "Edvanta — Executive Fee Management & Live Analytics Dashboard",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/edvanta.svg",
        alt: "Edvanta — Institutional Architecture Blueprint",
        caption: "Edvanta — Institutional Architecture & Analytics Spec",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    ],
    technologies: ["Next.js 15", "React", "Node.js", "PostgreSQL", "UPI Integration", "Tailwind CSS"],
    links: [
      { label: "Edvanta Platform", url: "https://edvanta.subhashmalik.me" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "will-product",
    slug: "will",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "04",
    title: "Will",
    subtitle: "On-Demand Daily Wage Labor Market Platform (Live on Play Store)",
    organization: "Will Startup · Subhash Malik & Team",
    recognition: "Published Startup on Google Play Store",
    recognitionType: "product",
    role: "Co-Founder & Full-Stack Mobile Lead",
    projectName: "Will",
    description:
      "A mobile marketplace that transitions daily-wage labor from physical chowk corners onto a verified digital platform. Connects workers directly with nearby employers with transparent wages, location-based dispatch, and instant verification.",
    problemStatement:
      "Every morning, thousands of daily-wage workers stand at dusty chowks for hours hoping for work without guaranteed safety or fair pay, while individuals and contractors struggle to find trusted laborers.",
    solution:
      "Designed and published a Flutter-powered mobile application allowing workers to receive job alerts without waiting at street corners, and enabling employers to hire verified laborers instantly.",
    contribution:
      "Co-developed the Flutter client application, Firebase real-time geolocation matching, user verification flows, and multilingual UI.",
    outcome:
      "Launched on the Google Play Store after 2 years of continuous engineering and community validation.",
    coverImage: "/projects/will/will-1.jpg",
    coverRatio: "16:9",
    gallery: ["/projects/will/will-1.jpg", "/achievements/will.svg"],
    galleryItems: [
      {
        src: "/projects/will/will-1.jpg",
        alt: "WILL — On-Demand Labor Market Platform on Play Store",
        caption: "WILL — Live Application Interface on Google Play Store",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/will.svg",
        alt: "WILL — Mobile Marketplace Architecture",
        caption: "WILL — Marketplace Architecture Spec",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Flutter", logo: "/tech/flutter.svg" },
      { name: "Dart", logo: "/tech/dart.svg" },
      { name: "Firebase", logo: "/tech/firebase.svg" },
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Google Maps API", "Cloud Functions"],
    links: [
      { label: "Download on Google Play Store", url: "https://play.google.com/store/apps/details?id=com.lavish3084.labour" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "fluxar-product",
    slug: "fluxar",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "05",
    title: "Fluxar",
    subtitle: "Automated Community Paywall for Telegram & WhatsApp",
    organization: "Fluxar AI · Subhash Malik",
    recognition: "FinTech & Community Platform",
    recognitionType: "product",
    role: "Creator & Full-Stack Systems Engineer",
    projectName: "Fluxar",
    description:
      "An automated monetization gateway and membership bot for Telegram and WhatsApp creators in India. Automatically verifies UPI payments, provisions invite links, monitors expiration dates, and removes churned members without human intervention.",
    problemStatement:
      "Community managers manually verify hundreds of UPI screenshots in spreadsheets and manually add or remove members, creating massive operational bottlenecks and leaked access.",
    solution:
      "Built an end-to-end automation infrastructure with automated UPI webhooks, Telegram Bot API membership reconciliation, a real-time transaction ledger, and automated tax invoice dispatch.",
    contribution:
      "Engineered the webhook reconciliation pipeline, Telegram Bot lifecycle daemon, and real-time MRR analytics dashboard.",
    outcome:
      "Live at fluxar.live, managing paid member access and subscription lifecycles for Indian creators.",
    coverImage: "/projects/fluxar/fluxar-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/projects/fluxar/fluxar-1.jpg",
      "/projects/fluxar/fluxar-2.jpg",
      "/achievements/fluxar.svg",
    ],
    galleryItems: [
      {
        src: "/projects/fluxar/fluxar-1.jpg",
        alt: "Fluxar — Automated Community Paywall",
        caption: "Fluxar — Telegram & WhatsApp Automated UPI Paywall & Bot Interface",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/projects/fluxar/fluxar-2.jpg",
        alt: "Fluxar — Creator Control Center & Analytics",
        caption: "Fluxar — Creator Control Center, Verified Ledger & Real-Time MRR",
        ratio: "16:9",
        kind: "product",
      },
      {
        src: "/achievements/fluxar.svg",
        alt: "Fluxar Blueprint",
        caption: "Fluxar — Automated Subscription Lifecycle & Ledger Spec",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Prisma", logo: "/tech/prisma.svg" },
    ],
    technologies: ["Next.js 15", "TypeScript", "Telegram Bot API", "UPI Gateway", "Prisma", "Tailwind CSS"],
    links: [
      { label: "Fluxar Live Platform", url: "https://www.fluxar.live/" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "synora-product",
    slug: "synora",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "06",
    title: "Synora",
    subtitle: "AI Clinical Management & Real-Time EMG Monitoring Platform",
    organization: "Product Build · Subhash Malik & Team",
    recognition: "Grand Prize Winner @ IBM National Hackathon",
    recognitionType: "product",
    role: "Full-Stack Architect & Hardware-Web Integrator",
    projectName: "Synora",
    description:
      "An enterprise-grade healthcare platform connecting clinical Electromyography (EMG) sensors directly to modern web browsers via the Web Serial API for real-time muscle signal visualization, fatigue tracking, and strain detection, coupled with predictive LLM health insights.",
    problemStatement:
      "Physical therapy clinics and sports medicine facilities rely on proprietary closed-source EMG machines that don't interface cleanly with modern cloud health records or work reliably offline.",
    solution:
      "Created a zero-install browser-based EMG stream visualizer with local signal digital filtering, predictive LLM diagnostic summaries, and 100% offline-first clinical synchronization.",
    contribution:
      "Engineered the Web Serial API pipeline, full-stack Next.js 14 architecture, Supabase offline cache, and live sensor telemetry charts.",
    outcome:
      "Awarded 1st Prize Grand Prize at IBM's Code Crafter 3.0 competing against 500+ teams from IITs and NITs.",
    coverImage: "/achievements/media/ibm-winner-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/achievements/media/ibm-winner-1.jpg",
      "/achievements/media/ibm-winner-2.jpg",
      "/achievements/synora.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/media/ibm-winner-1.jpg",
        alt: "Synora Team winning Grand Prize at IBM Code Crafter 3.0",
        caption: "1st Prize Grand Prize Winners at IBM National Hackathon Code Crafter 3.0 (₹1.8 Lakh Prize Haul)",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/media/ibm-winner-2.jpg",
        alt: "Synora Stage Award Ceremony",
        caption: "Stage presentation & live EMG hardware demonstration before IBM judges",
        ratio: "3:4",
        kind: "stage",
      },
      {
        src: "/achievements/synora.svg",
        alt: "Synora Architecture Spec",
        caption: "Synora — Real-Time EMG Web Serial Stream & Clinical Dashboard",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "IBM", logo: "/logos/ibm.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
    ],
    technologies: ["Python", "Web Serial API", "Machine Learning", "LLM", "Next.js 14", "TypeScript", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Live Netlify Deployment", url: "https://synora01.netlify.app/" },
      { label: "Synora Case Study", url: "/achievements/synora" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "cityscope-product",
    slug: "cityscope",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "07",
    title: "CityScope",
    subtitle: "Civic Intelligence Platform & IoT Smart Road Anomaly Detection",
    organization: "Team CityScope · Subhash Malik",
    recognition: "Winner @ India Innovates 2026 (Top 1% of 30k Teams)",
    recognitionType: "product",
    role: "Full-Stack Developer & Systems Lead",
    projectName: "CityScope",
    description:
      "A civic intelligence system transforming municipal grievance handling. Citizens report road and sanitation defects using voice, image, and GPS; AI automatically classifies and routes issues, while vehicle IoT sensors continuously detect road potholes and anomalies.",
    problemStatement:
      "Municipal grievance helplines are plagued by backlogs, incorrect department routing, and lack of verified spatial tracking, while road damage goes undetected until catastrophic failures occur.",
    solution:
      "Combined multimodal citizen reporting with computer vision pothole detection from mobile dashcams, live municipal dispatch maps, and transparent resolution tracking.",
    contribution:
      "Built the full-stack web dashboard, complaint triage automation pipeline, and IoT spatial anomaly mapping.",
    outcome:
      "Won Digital Democracy Domain and selected for Finale out of 30,000+ teams at Bharat Mandapam, New Delhi; pitched directly to Delhi Cabinet Ministers.",
    coverImage: "/achievements/media/india-innovates-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/achievements/media/india-innovates-1.jpg",
      "/achievements/cityscope.svg",
    ],
    galleryItems: [
      {
        src: "/achievements/media/india-innovates-1.jpg",
        alt: "India Innovates 2026 Winner Ceremony at Bharat Mandapam",
        caption: "India Innovates 2026 Grand Finale at Bharat Mandapam, New Delhi (Top 1% of 30,000+ Teams)",
        ratio: "3:4",
        kind: "stage",
      },
      {
        src: "/achievements/cityscope.svg",
        alt: "CityScope — Civic Intelligence Platform",
        caption: "CityScope — Municipal Command Dashboard & IoT Road Telemetry",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "FastAPI", logo: "/tech/fastapi.svg" },
    ],
    technologies: ["Next.js 15", "Python", "FastAPI", "Computer Vision", "IoT Sensors", "PostgreSQL", "Tailwind CSS"],
    links: [
      { label: "India Innovates Showcase", url: "/achievements/innovate-2026" },
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "athletix-product",
    slug: "athletix",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "08",
    title: "AthletiX",
    subtitle: "AI Sports Analytics & Biomechanical Injury Prevention",
    organization: "Team AthletiX · Subhash Malik",
    recognition: "1st Prize Winner @ Tekathon 4.0 (SIH Gateway)",
    recognitionType: "product",
    role: "Full-Stack Developer & Pose Analytics Lead",
    projectName: "AthletiX",
    description:
      "An AI-driven fitness and biomechanics platform that evaluates athletic tests using standard smartphone video with zero expensive equipment, delivering real-time muscle fatigue tracking and injury prevention telemetry.",
    problemStatement:
      "High-performance sports biomechanics and kinematic motion analysis require multi-thousand dollar lab setups, putting elite training out of reach for grassroots athletes.",
    solution:
      "Built a mobile-friendly computer vision pipeline that tracks skeletal joints in real time, evaluates athletic performance metrics, and detects biomechanical asymmetry indicating fatigue or injury risk.",
    contribution:
      "Integrated MediaPipe pose estimation with custom motion heuristics, and developed the athlete telemetry dashboard.",
    outcome:
      "Won 1st Place at Tekathon 4.0 (Chandigarh University's 36-hour hackathon & SIH official gateway) out of 950+ teams and 5,700+ students.",
    coverImage: "/achievements/athletix.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/athletix.svg"],
    galleryItems: [
      {
        src: "/achievements/athletix.svg",
        alt: "AthletiX — AI Sports Analytics",
        caption: "AthletiX — Real-time Biomechanical Pose Tracking & Fatigue Telemetry",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    ],
    technologies: ["React", "MediaPipe", "TensorFlow.js", "Python", "FastAPI", "Tailwind CSS"],
    links: [
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "neurogaze-product",
    slug: "neurogaze",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "09",
    title: "NeuroGaze",
    subtitle: "AI Brain-Computer Interface (BCI) for Paralysis Communication",
    organization: "Team VEDA · Subhash Malik",
    recognition: "1st Runner-Up @ Google Hackathon (Top 2 of 8,000+)",
    recognitionType: "product",
    role: "Full-Stack Developer & EEG Logic Integration",
    projectName: "NeuroGaze",
    description:
      "An empathetic Brain-Computer Interface (BCI) system that empowers paralyzed and locked-in patients to communicate without touch or voice — using mental intent alone. Built using Neuro Playground Lite from Upside Down Labs with custom ML EEG signal classification.",
    problemStatement:
      "Patients suffering from motor neuron disease, ALS, or severe paralysis cannot speak or use tactile interfaces to communicate their immediate medical needs or emotional states.",
    solution:
      "Connected EEG hardware to a real-time signal classification pipeline that identifies deliberate brainwave frequency modulations and maps them to clear communication cards and emergency alert prompts.",
    contribution:
      "Engineered the serial data streaming bridge, machine learning signal preprocessing, and responsive web accessibility client.",
    outcome:
      "Selected as 1st Runner-Up nationally from 8,000+ teams; showcased in the Google Office Gurgaon demo room.",
    coverImage: "/achievements/neurogaze.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/neurogaze.svg"],
    galleryItems: [
      {
        src: "/achievements/neurogaze.svg",
        alt: "NeuroGaze — AI Brain-Computer Interface",
        caption: "NeuroGaze — Live EEG Telemetry & Intent Communication Interface",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Google", logo: "/logos/google.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "Python", logo: "/tech/python.svg" },
    ],
    technologies: ["React", "Python", "EEG Hardware / Upside Down Labs", "Scikit-Learn", "WebSockets", "Tailwind CSS"],
    links: [
      { label: "All Portfolio Projects", url: "/projects" },
    ],
    featured: true,
  },
  {
    id: "g-one-product",
    slug: "g-one",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "10",
    title: "G-ONE",
    subtitle: "Unified Developer Operations & System Assistant",
    organization: "Product Build · Subhash Malik",
    recognition: "Systems Engineering Build",
    recognitionType: "product",
    role: "Lead Developer",
    projectName: "G-ONE",
    description:
      "A high-speed developer operations assistant and telemetry command center built to monitor services, automate repetitive workflows, and surface system diagnostics in real time.",
    problemStatement:
      "Switching between terminal logs, health endpoints, and workflow triggers slows down incident response and everyday developer velocity.",
    solution:
      "Created a unified command interface combining live service telemetry, automated action triggers, and clean monochrome diagnostics.",
    contribution:
      "Built the full-stack telemetry dashboard, command palette, and event-streaming backend.",
    outcome:
      "Shipped as a core systems-engineering portfolio product.",
    coverImage: "/achievements/g-one.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/g-one.svg"],
    galleryItems: [
      {
        src: "/achievements/g-one.svg",
        alt: "G-ONE — Developer Operations Assistant",
        caption: "G-ONE — Unified Developer Operations & Telemetry",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Node.js", logo: "/tech/nodejs.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Docker", logo: "/tech/docker.svg" },
    ],
    technologies: ["TypeScript", "Node.js", "React", "WebSockets", "Docker", "Tailwind CSS"],
    links: [{ label: "All Portfolio Projects", url: "/projects" }],
    featured: false,
  },
  {
    id: "ai-browser-agent",
    slug: "ai-browser-agent",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "11",
    title: "AI Browser Agent",
    subtitle: "DOM-Aware Autonomous Web Navigation & Action Agent",
    organization: "Applied AI Engineering",
    recognition: "Applied AI Build",
    recognitionType: "product",
    role: "AI & Automation Engineer",
    projectName: "AI Browser Agent",
    description:
      "An autonomous browser agent capable of inspecting live DOM trees, planning multi-step user journeys, filling forms, extracting structured data, and verifying UI states.",
    problemStatement:
      "Fragile selector-based scripts break whenever web interfaces change layout or class names.",
    solution:
      "Combined semantic DOM distillation with LLM step planning so the agent reasons over interactive elements and executes resilient browser actions.",
    contribution:
      "Engineered the DOM serializer, action execution loop, and safety confirmation layer.",
    outcome:
      "Demonstrated reliable multi-step web task automation across dynamic client-rendered applications.",
    coverImage: "/achievements/ai-browser-agent.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/ai-browser-agent.svg"],
    galleryItems: [
      {
        src: "/achievements/ai-browser-agent.svg",
        alt: "AI Browser Agent",
        caption: "AI Browser Agent — DOM-Aware Autonomous Execution",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
    technologies: ["TypeScript", "Playwright / DOM APIs", "Python", "LLM Agents", "Node.js"],
    links: [{ label: "All Portfolio Projects", url: "/projects" }],
    featured: false,
  },
  {
    id: "business-card-scanner",
    slug: "business-card-scanner",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "12",
    title: "Business Card Scanning Application",
    subtitle: "Instant OCR Extraction, Entity Parsing & Contact Sync (Nebula Precursor)",
    organization: "Product Utility Build",
    recognition: "Shipped Utility App",
    recognitionType: "product",
    role: "Full-Stack Developer",
    projectName: "Business Card Scanner",
    description:
      "A mobile-ready vision utility built for conferences, summits, and hackathons that scans physical business cards and extracts structured contact records (name, role, company, email, phone, social links) in seconds.",
    problemStatement:
      "Networking at large developer summits and startup conferences leaves founders with stacks of physical cards that rarely get transcribed into a searchable contact list.",
    solution:
      "Built an optical character recognition and structured entity-extraction pipeline that turns camera captures into clean, exportable vCard/JSON contacts.",
    contribution:
      "Developed the camera capture flow, OCR + entity parser, and clean contact management UI.",
    outcome:
      "Used during developer conferences and incubator summits for rapid contact capture.",
    coverImage: "/achievements/business-card-scanner.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/business-card-scanner.svg"],
    galleryItems: [
      {
        src: "/achievements/business-card-scanner.svg",
        alt: "Business Card Scanning Application",
        caption: "Business Card Scanner — Vision & Structured Contact Pipeline",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "OpenCV", logo: "/tech/opencv.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
    ],
    technologies: ["React", "TypeScript", "OCR / Vision API", "OpenCV", "Tailwind CSS"],
    links: [{ label: "All Portfolio Projects", url: "/projects" }],
    featured: false,
  },
];
