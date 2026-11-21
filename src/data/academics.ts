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
    id: "cu-academic-achiever-award",
    slug: "academic-achiever-award-2024-2025",
    category: "academics",
    categoryLabel: "04 / Academic Achievements",
    indexNumber: "02",
    title: "Academic Achiever Award 2024–2025",
    subtitle: "Department of Academic Affairs & CAC Club · Chandigarh University",
    organization: "Chandigarh University",
    organizationLogo: "/logos/chandigarh-university.svg",
    recognition: "Academic Achiever Award (Honors)",
    recognitionType: "win",
    date: "2024 — 2025",
    location: "Mohali, Punjab, India",
    role: "B.E. CSE Academic Achiever & Top Competitor",
    description:
      "Conferred the Academic Achiever Award 2024–2025 by the Department of Academic Affairs, Chandigarh University during Achievers' Day organized by the CAC (Connecting All Circles) Club and Ankita Sharma Ma'am. Conferred for academic excellence alongside premier national hackathon podium finishes (NIT Hamirpur 1st Place, Google Hackathon Top 2, IBM Grand Prize) during the first year of engineering.",
    contribution:
      "Demonstrated academic distinction while leading engineering teams across nationwide competitions, building open-source projects, and mentoring peers in campus developer chapters.",
    outcome:
      "Honored with the official Academic Achiever Award trophy and citation on stage, signing off the first academic year with high honors.",
    coverImage: "/achievements/media/cu-achiever-1.jpg",
    coverRatio: "16:9",
    gallery: [
      "/achievements/media/cu-achiever-1.jpg",
      "/achievements/media/cu-achiever-2.jpg",
    ],
    galleryItems: [
      {
        src: "/achievements/media/cu-achiever-1.jpg",
        alt: "Subhash Malik receiving the Academic Achiever Award 2024–2025 on stage",
        caption: "Subhash Malik receiving the Academic Achiever Award 2024–2025 trophy on stage",
        ratio: "16:9",
        kind: "stage",
      },
      {
        src: "/achievements/media/cu-achiever-2.jpg",
        alt: "Achievers' Day stage felicitation by Department of Academic Affairs & CAC Club",
        caption: "Achievers' Day stage ceremony organized by CAC Club at Chandigarh University",
        ratio: "16:9",
        kind: "stage",
      },
    ],
    partnerLogos: [
      { name: "Chandigarh University", logo: "/logos/chandigarh-university.svg" },
    ],
    technologies: [
      "Academic Excellence",
      "Computer Science Engineering",
      "Achievers Day",
      "Merit Citation",
    ],
    links: [],
    featured: true,
  },
  {
    id: "chandigarh-university-education",
    slug: "chandigarh-university",
    category: "academics",
    categoryLabel: "04 / Academic Achievements",
    indexNumber: "03",
    title: "Chandigarh University — B.E. Computer Science and Engineering",
    subtitle: "Jul 2024 – Jun 2028 · Mohali, India · Coursework & Campus Innovation",
    organization: "Chandigarh University",
    organizationLogo: "/logos/chandigarh-university.svg",
    recognition: "B.E. — Computer Science & Engineering",
    recognitionType: "selection",
    date: "Jul 2024 – Jun 2028",
    location: "Mohali, Punjab, India",
    role: "B.E. CSE Undergraduate · Active Builder at CU-TBI",
    description:
      "Pursuing B.E. in Computer Science and Engineering (Jul 2024 – Jun 2028) at Chandigarh University. Core coursework covers Full Stack Development, Data Structures & Algorithms, AI & ML, Software Project Management, Networking, Databases, IoT, and Object-Oriented Programming (OOP), paired with applied product engineering and startup incubation at CU-TBI.",
    contribution:
      "Combined core computer science coursework with hands-on full-stack engineering, startup deployment at CU-TBI, and leading campus developer initiatives.",
    outcome:
      "Represented the university at national hackathons (IBM Grand Prize, NIT Hamirpur 1st Prize, Google Top 2, iQOO 1st Runner-Up, India Innovates Top 1%) and speaking on stage at ICS26 / ISBACON 2026.",
    coverImage: "/achievements/cu-academics.svg",
    coverRatio: "16:9",
    gallery: ["/achievements/cu-academics.svg", "/speaker/subhash-speaker-stage.jpg"],
    galleryItems: [
      {
        src: "/achievements/cu-academics.svg",
        alt: "Chandigarh University — B.E. Computer Science and Engineering",
        caption: "Chandigarh University — B.E. CSE & CU-TBI Innovation Ecosystem",
        ratio: "16:9",
        kind: "photo",
      },
      {
        src: "/speaker/subhash-speaker-stage.jpg",
        alt: "Subhash Malik at Chandigarh University TBI Summit",
        caption: "Speaking at Chandigarh University Technology Business Incubator (ICS26)",
        ratio: "4:5",
        kind: "stage",
      },
    ],
    partnerLogos: [
      { name: "Chandigarh University", logo: "/logos/chandigarh-university.svg" },
      { name: "ICS26 / ISBA", logo: "/logos/isba.svg" },
    ],
    technologies: [
      "Full Stack Development",
      "Data Structures & Algorithms",
      "AI & ML",
      "OOP",
      "Networking & Databases",
      "Software Project Management",
      "CU-TBI Incubator",
    ],
    links: [],
    featured: true,
  },
];

