import type { Achievement } from "@/types/achievement";

/**
 * SECTION 04 — ACADEMIC ACHIEVEMENTS & FELLOWSHIPS
 *
 * Separates competitive fellowships/selections from core university education,
 * and never fabricates unverified grades, ranks, or scholarships.
 */
export const ACADEMIC_ACHIEVEMENTS: Achievement[] = [
  {
    id: "polaris-fellowship-2026",
    slug: "polaris-fellowship-2026",
    category: "academics",
    categoryLabel: "04 / Academic Achievements",
    indexNumber: "01",
    title: "Polaris Fellowship 2026",
    subtitle: "Competitive Technologist & Builder Fellowship",
    organization: "Polaris",
    organizationLogo: "/logos/polaris.svg",
    recognition: "Round 2 Selection",
    recognitionType: "selection",
    date: "2026",
    role: "Selected Fellow Candidate (Round 2)",
    description:
      "Selected for Round 2 of the Polaris Fellowship 2026, a competitive program identifying high-agency student engineers, founders, and community builders across India.",
    contribution:
      "Evaluated on track record across 15+ hackathons, national podium wins, shipped AI products, and founding HackBriven.",
    outcome:
      "Advanced to Round 2 Selection in the Polaris Fellowship 2026 cohort.",
    coverImage: "/achievements/polaris-fellowship.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/polaris-fellowship.svg", "/achievements/polaris-cert.svg"],
    galleryItems: [
      {
        src: "/achievements/polaris-fellowship.svg",
        alt: "Polaris Fellowship 2026 — Round 2 Selection",
        caption: "Polaris Fellowship 2026 — Round 2 Selection",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/achievements/polaris-cert.svg",
        alt: "Polaris Fellowship 2026 Selection Credential",
        caption: "Polaris Fellowship 2026 — Round 2 Selection Record",
        ratio: "certificate",
        kind: "certificate",
      },
    ],
    partnerLogos: [{ name: "Polaris", logo: "/logos/polaris.svg" }],
    technologies: ["Engineering Leadership", "Product Building", "Hackathon Track Record"],
    links: [],
    featured: true,
  },
  {
    id: "chandigarh-university-education",
    slug: "chandigarh-university",
    category: "academics",
    categoryLabel: "04 / Academic Achievements",
    indexNumber: "02",
    title: "Chandigarh University — Computer Science & Engineering",
    subtitle: "Undergraduate Engineering Education & Campus Innovation Ecosystem",
    organization: "Chandigarh University",
    organizationLogo: "/logos/chandigarh-university.svg",
    recognition: "Undergraduate Engineering Foundation",
    recognitionType: "selection",
    location: "Mohali / Chandigarh, Punjab",
    role: "Engineering Student · Active Builder at CU-TBI (~11 Months)",
    description:
      "Pursuing Computer Science & Engineering at Chandigarh University while actively building inside the Chandigarh University Technology Business Incubator (CU-TBI) for ~11 months, leading campus developer communities, and representing the university across 15+ national hackathons.",
    contribution:
      "Combined core computer science coursework with applied product engineering, startup incubation at CU-TBI, and chapter leadership at the Alexa Developer Community.",
    outcome:
      "Represented the university at national hackathons (IBM, NIT Hamirpur, Google CodeClash, iQOO, Innovate 2026) and on stage at ICS26 / ISBACON 2026.",
    coverImage: "/achievements/cu-academics.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/cu-academics.svg", "/general/avatar.png"],
    galleryItems: [
      {
        src: "/achievements/cu-academics.svg",
        alt: "Chandigarh University — Computer Science & Engineering",
        caption: "Chandigarh University — Engineering & CU-TBI Ecosystem",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/general/avatar.png",
        alt: "Subhash Malik at Chandigarh University TBI Summit",
        caption: "Speaking at Chandigarh University Technology Business Incubator (ICS26)",
        ratio: "3:4",
        kind: "stage",
      },
    ],
    partnerLogos: [
      { name: "Chandigarh University", logo: "/logos/chandigarh-university.svg" },
      { name: "ICS26 / ISBA", logo: "/logos/isba.svg" },
    ],
    technologies: [
      "Computer Science",
      "Data Structures & Algorithms",
      "CU-TBI Incubator",
      "Alexa Developer Community",
    ],
    links: [],
    featured: true,
  },
];

