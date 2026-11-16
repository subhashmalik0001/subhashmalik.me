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
    id: "will-product",
    slug: "will",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "01",
    title: "WILL",
    subtitle: "Autonomous Personal Execution & Intent Engine",
    organization: "Product Build · Subhash Malik",
    recognition: "Flagship AI Product",
    recognitionType: "product",
    role: "Creator & Lead Full-Stack Engineer",
    projectName: "WILL",
    description:
      "An AI-native execution engine that translates natural-language developer and founder intents into structured tasks, automated workflows, and deterministic tool invocations.",
    problemStatement:
      "Traditional task managers passively store to-do lists without helping users execute multi-step technical or operational actions.",
    solution:
      "Engineered a modular agentic orchestration layer with real-time streaming state, contextual memory, and keyboard-first command execution.",
    contribution:
      "Designed the product architecture, full-stack TypeScript/Next.js interface, and LLM tool-calling execution pipeline from scratch.",
    outcome:
      "Built as a flagship personal execution system showcasing clean architectural design and low-latency AI orchestration.",
    coverImage: "/achievements/will.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/will.svg", "/general/cover.jpg"],
    galleryItems: [
      {
        src: "/achievements/will.svg",
        alt: "WILL — Autonomous Execution Engine",
        caption: "WILL — System Architecture & Interface",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "LLM Orchestration", "Tailwind CSS"],
    links: [{ label: "All Portfolio Projects", url: "/projects" }],
    featured: true,
  },
  {
    id: "synora-product",
    slug: "synora",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "02",
    title: "Synora",
    subtitle: "Multimodal Knowledge & Document Intelligence Workspace",
    organization: "Product Build · Subhash Malik",
    recognition: "Product Showcase",
    recognitionType: "product",
    role: "Creator & Systems Architect",
    projectName: "Synora",
    description:
      "A unified knowledge workspace that ingests technical documents, notes, and structured schemas to deliver instant semantic retrieval, plain-language synthesis, and voice-guided exploration.",
    problemStatement:
      "Engineers and researchers spend hours cross-referencing dense PDFs, markdown repositories, and API specifications across disconnected tools.",
    solution:
      "Built a context-aware document indexing and synthesis interface with citation-backed answers and interactive visual summaries.",
    contribution:
      "Architected the document ingestion pipeline, frontend workspace UI, and real-time query engine.",
    outcome:
      "Featured across national product showcases and hackathon demonstrations.",
    coverImage: "/achievements/synora.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/synora.svg"],
    galleryItems: [
      {
        src: "/achievements/synora.svg",
        alt: "Synora — Multimodal Knowledge Workspace",
        caption: "Synora — Document Intelligence & Synthesis Workspace",
        ratio: "16:9",
        kind: "product",
      },
    ],
    partnerLogos: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "Python", logo: "/tech/python.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "Vector Search", "Tailwind CSS"],
    links: [{ label: "All Portfolio Projects", url: "/projects" }],
    featured: true,
  },
  {
    id: "g-one-product",
    slug: "g-one",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "03",
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
    featured: true,
  },
  {
    id: "ai-browser-agent",
    slug: "ai-browser-agent",
    category: "projects",
    categoryLabel: "02 / Projects & Products",
    indexNumber: "04",
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
    indexNumber: "05",
    title: "Business Card Scanning Application",
    subtitle: "Instant OCR Extraction, Entity Parsing & Contact Sync",
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

