export interface MockUser {
  id: string;
  email: string;
  username: string;
  displayName: string;
  bio?: string | null;
  location?: string | null;
  job?: string | null;
  website?: string | null;
  img?: string | null;
  imageUrl?: string;
  cover?: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    followers: number;
    followings: number;
  };
  followings?: Array<{ id: number; followerId: string; followingId: string }>;
  followers?: Array<{ id: number; followerId: string; followingId: string }>;
}

export interface MockPost {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  desc: string | null;
  img: string | null;
  imgHeight: number | null;
  video: string | null;
  isSensitive: boolean;
  userId: string;
  rePostId: number | null;
  parentPostId: number | null;
  user: {
    displayName: string | null;
    username: string;
    img: string | null;
  };
  _count: {
    likes: number;
    rePosts: number;
    comments: number;
  };
  likes: Array<{ id: number }>;
  rePosts: Array<{ id: number }>;
  saves: Array<{ id: number }>;
  rePost?: Record<string, unknown> | null;
  comments?: Array<Record<string, unknown>>;
}

const now = Date.now();

export const CURRENT_MOCK_USER: MockUser = {
  id: "user_subhash",
  email: "subhash@example.com",
  username: "SubhashMalik01",
  displayName: "Subhash Malik",
  bio: "Building Products & Communities | 1st Prize @IBM Hack & NIT Hack5.0 | 1st Runner-Up @ Google and IQOO Hackathon | Ex-Intern @Paytm | 15x Hackathons",
  location: "Chandigarh",
  job: "Science & Technology",
  website: "subhashmalik.me",
  img: "/general/noAvatar.png",
  imageUrl: "/general/noAvatar.png",
  cover: "/general/noCover.png",
  createdAt: new Date("2022-12-01T10:00:00.000Z"),
  updatedAt: new Date("2022-12-01T10:00:00.000Z"),
  _count: {
    followers: 3,
    followings: 17,
  },
  followings: [
    { id: 1, followerId: "user_subhash", followingId: "user_lamadev" },
    { id: 2, followerId: "user_subhash", followingId: "user_nextjs" },
  ],
  followers: [
    { id: 3, followerId: "user_lamadev", followingId: "user_subhash" },
  ],
};

export const MOCK_USERS: Record<string, MockUser> = {
  user_subhash: CURRENT_MOCK_USER,
  user_lamadev: {
    id: "user_lamadev",
    email: "lama@example.com",
    username: "lama_dev",
    displayName: "Lama Dev",
    bio: "Full Stack Developer, YouTuber & Educator. Teaching modern web development.",
    location: "Europe",
    job: "Content Creator & Developer",
    website: "https://youtube.com",
    img: "/general/noAvatar.png",
    imageUrl: "/general/noAvatar.png",
    cover: "/general/noCover.png",
    createdAt: new Date("2023-05-10T10:00:00.000Z"),
    updatedAt: new Date("2023-05-10T10:00:00.000Z"),
    _count: { followers: 52100, followings: 120 },
    followings: [],
    followers: [],
  },
  user_nextjs: {
    id: "user_nextjs",
    email: "next@example.com",
    username: "nextjs",
    displayName: "Next.js",
    bio: "The React Framework for the Web. Used by some of the world's largest companies.",
    location: "San Francisco, CA",
    job: "Framework",
    website: "https://nextjs.org",
    img: "/general/noAvatar.png",
    imageUrl: "/general/noAvatar.png",
    cover: "/general/noCover.png",
    createdAt: new Date("2022-01-01T10:00:00.000Z"),
    updatedAt: new Date("2022-01-01T10:00:00.000Z"),
    _count: { followers: 312000, followings: 45 },
    followings: [],
    followers: [],
  },
  user_reactjs: {
    id: "user_reactjs",
    email: "react@example.com",
    username: "reactjs",
    displayName: "React",
    bio: "The library for web and native user interfaces.",
    location: "Global",
    job: "Open Source Library",
    website: "https://react.dev",
    img: "/general/noAvatar.png",
    imageUrl: "/general/noAvatar.png",
    cover: "/general/noCover.png",
    createdAt: new Date("2021-01-01T10:00:00.000Z"),
    updatedAt: new Date("2021-01-01T10:00:00.000Z"),
    _count: { followers: 745000, followings: 20 },
    followings: [],
    followers: [],
  },
  user_elonmusk: {
    id: "user_elonmusk",
    email: "elon@example.com",
    username: "elonmusk",
    displayName: "Elon Musk",
    bio: "Owner of X. Tesla, SpaceX, xAI, Neuralink, Boring Co.",
    location: "Austin, TX",
    job: "Technologist",
    website: "https://x.com",
    img: "/general/noAvatar.png",
    imageUrl: "/general/noAvatar.png",
    cover: "/general/noCover.png",
    createdAt: new Date("2020-01-01T10:00:00.000Z"),
    updatedAt: new Date("2020-01-01T10:00:00.000Z"),
    _count: { followers: 198000000, followings: 780 },
    followings: [],
    followers: [],
  },
};

const subhashUser = {
  displayName: "Subhash Malik",
  username: "SubhashMalik01",
  img: "/general/noAvatar.png",
};

export const MOCK_POSTS: MockPost[] = [
  {
    id: 1,
    createdAt: new Date(now - 1000 * 60 * 60 * 5),
    updatedAt: new Date(now - 1000 * 60 * 60 * 5),
    desc: "Life was much better when...\n\n💧 \"Pipeline\" was for water\n\n📮 \"Postman\" was for Post Office\n\n☁️ \"Cloud\" was for Sky\n\n👨‍🍳 \"Jira\" was for Cooking",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 42, rePosts: 8, comments: 5 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 2,
    createdAt: new Date(now - 1000 * 60 * 60 * 12),
    updatedAt: new Date(now - 1000 * 60 * 60 * 12),
    desc: "Won 1st Prize at IBM Hack Challenge! 🏆\n\nBuilt an AI-powered accessibility tool that converts complex technical documentation into plain language. 48 hours of non-stop coding with an incredible team.\n\nGrateful for this experience! 🚀",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 128, rePosts: 24, comments: 18 },
    likes: [{ id: 1 }],
    rePosts: [],
    saves: [{ id: 1 }],
  },
  {
    id: 3,
    createdAt: new Date(now - 1000 * 60 * 60 * 24),
    updatedAt: new Date(now - 1000 * 60 * 60 * 24),
    desc: "Hot take: The best code is the code you don't write.\n\nEvery line of code is a liability. Ship less, solve more.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 67, rePosts: 12, comments: 9 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 4,
    createdAt: new Date(now - 1000 * 60 * 60 * 36),
    updatedAt: new Date(now - 1000 * 60 * 60 * 36),
    desc: "Just shipped a full-stack Next.js 15 app with:\n\n✅ Server Actions\n✅ React 19 with useOptimistic\n✅ Real-time notifications via Socket.IO\n✅ Prisma + MySQL\n✅ ImageKit CDN\n\nThe DX is absolutely insane. 🔥",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 95, rePosts: 19, comments: 14 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 5,
    createdAt: new Date(now - 1000 * 60 * 60 * 48),
    updatedAt: new Date(now - 1000 * 60 * 60 * 48),
    desc: "1st Runner-Up at Google x IQOO Hackathon! 🥈\n\nOur team built a real-time collaborative design tool with AI-assisted code generation. Amazing competition and even more amazing people.\n\n@Google @iQOO",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 156, rePosts: 31, comments: 22 },
    likes: [{ id: 2 }],
    rePosts: [],
    saves: [],
  },
  {
    id: 6,
    createdAt: new Date(now - 1000 * 60 * 60 * 72),
    updatedAt: new Date(now - 1000 * 60 * 60 * 72),
    desc: "Developers in 2024:\n\n\"Let me quickly set up the project\"\n\n*3 hours later*\n\nStill configuring ESLint, Prettier, TypeScript, Tailwind, testing libraries, CI/CD pipeline... 😅",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 234, rePosts: 45, comments: 28 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 7,
    createdAt: new Date(now - 1000 * 60 * 60 * 96),
    updatedAt: new Date(now - 1000 * 60 * 60 * 96),
    desc: "My internship at @Paytm taught me more about scale than any course ever could.\n\nHandling millions of transactions, real-time systems, production debugging at 2 AM — that's where real learning happens.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 89, rePosts: 15, comments: 11 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 8,
    createdAt: new Date(now - 1000 * 60 * 60 * 120),
    updatedAt: new Date(now - 1000 * 60 * 60 * 120),
    desc: "NIT Hack 5.0 — 1st Place 🏆\n\nBuilt a decentralized credential verification system using blockchain. No more fake certificates!\n\n15 hackathons and counting. Each one teaches you something new.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 112, rePosts: 22, comments: 16 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 9,
    createdAt: new Date(now - 1000 * 60 * 60 * 144),
    updatedAt: new Date(now - 1000 * 60 * 60 * 144),
    desc: "Unpopular opinion: Communities > Connections\n\nBuilding genuine communities around shared interests will always outperform cold networking.\n\nFocus on adding value, the network builds itself.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 78, rePosts: 14, comments: 7 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 10,
    createdAt: new Date(now - 1000 * 60 * 60 * 168),
    updatedAt: new Date(now - 1000 * 60 * 60 * 168),
    desc: "The stack I'm currently loving:\n\n⚡ Next.js 15 (App Router)\n⚛️ React 19\n🎨 Tailwind CSS\n🔒 Clerk Auth\n🗄️ Prisma + PlanetScale\n📦 Turborepo\n\nWhat's your go-to stack?",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 145, rePosts: 28, comments: 35 },
    likes: [],
    rePosts: [],
    saves: [],
  },
  {
    id: 11,
    createdAt: new Date(now - 1000 * 60 * 60 * 192),
    updatedAt: new Date(now - 1000 * 60 * 60 * 192),
    desc: "Started my journey from Chandigarh with a dream to build products that matter.\n\n15 hackathons, an internship at Paytm, and countless late nights later — I'm just getting started.\n\nKeep building. Keep shipping. 🚀",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: null,
    user: subhashUser,
    _count: { likes: 201, rePosts: 38, comments: 24 },
    likes: [{ id: 3 }],
    rePosts: [],
    saves: [{ id: 2 }],
  },
  {
    id: 101,
    createdAt: new Date(now - 1000 * 60 * 15),
    updatedAt: new Date(now - 1000 * 60 * 15),
    desc: "Next.js 15 with React 19 is incredible! Server actions, optimistic state updates, and clean modular architecture make web development lightning fast. What are you building today? 🚀🔥",
    img: "/general/post.jpeg",
    imgHeight: 400,
    video: null,
    isSensitive: false,
    userId: "user_lamadev",
    rePostId: null,
    parentPostId: null,
    user: {
      displayName: "Lama Dev",
      username: "lama_dev",
      img: "/general/noAvatar.png",
    },
    _count: { likes: 148, rePosts: 29, comments: 12 },
    likes: [{ id: 1 }],
    rePosts: [],
    saves: [{ id: 1 }],
  },
  {
    id: 102,
    createdAt: new Date(now - 1000 * 60 * 60 * 3),
    updatedAt: new Date(now - 1000 * 60 * 60 * 3),
    desc: "React 19 brings useActionState and useOptimistic directly into core. Building fluid, responsive interfaces without external state management boilerplate has never been easier.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_reactjs",
    rePostId: null,
    parentPostId: null,
    user: {
      displayName: "React",
      username: "reactjs",
      img: "/general/noAvatar.png",
    },
    _count: { likes: 1240, rePosts: 310, comments: 88 },
    likes: [{ id: 2 }],
    rePosts: [{ id: 1 }],
    saves: [],
  },
  {
    id: 103,
    createdAt: new Date(now - 1000 * 60 * 60 * 8),
    updatedAt: new Date(now - 1000 * 60 * 60 * 8),
    desc: "Excited about the future of web tech and real-time collaboration. The internet is evolving rapidly every day.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_elonmusk",
    rePostId: null,
    parentPostId: null,
    user: {
      displayName: "Elon Musk",
      username: "elonmusk",
      img: "/general/noAvatar.png",
    },
    _count: { likes: 9540, rePosts: 1820, comments: 540 },
    likes: [],
    rePosts: [],
    saves: [],
  },
];

export const MOCK_COMMENTS: MockPost[] = [
  {
    id: 201,
    createdAt: new Date(now - 1000 * 60 * 10),
    updatedAt: new Date(now - 1000 * 60 * 10),
    desc: "Agreed! React 19 server actions completely eliminate the need for verbose API client boilerplate.",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_subhash",
    rePostId: null,
    parentPostId: 101,
    user: subhashUser,
    _count: { likes: 18, rePosts: 2, comments: 0 },
    likes: [{ id: 10 }],
    rePosts: [],
    saves: [],
  },
  {
    id: 202,
    createdAt: new Date(now - 1000 * 60 * 5),
    updatedAt: new Date(now - 1000 * 60 * 5),
    desc: "Looking forward to seeing the project live! Keep up the great work 🔥",
    img: null,
    imgHeight: null,
    video: null,
    isSensitive: false,
    userId: "user_nextjs",
    rePostId: null,
    parentPostId: 101,
    user: {
      displayName: "Next.js",
      username: "nextjs",
      img: "/general/noAvatar.png",
    },
    _count: { likes: 35, rePosts: 4, comments: 0 },
    likes: [],
    rePosts: [],
    saves: [],
  },
];

export const MOCK_RECOMMENDATIONS = [
  {
    id: "subhash_linkedin",
    displayName: "Subhash Malik",
    username: "subhashmalik",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/subhashmalik/",
    img: "/social/linkedin-photo.jpg",
  },
  {
    id: "subhash_instagram",
    displayName: "Subhash Malik",
    username: "subhashmalik.me",
    platform: "Instagram",
    url: "https://www.instagram.com/subhashmalik.me/",
    img: "/social/event-photo.jpg",
  },
  {
    id: "subhash_x",
    displayName: "Subhash Malik",
    username: "SubhashMalik01",
    platform: "X",
    url: "https://x.com/SubhashMalik01",
    img: "/general/about-me.jpg",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  handle: string;
  logo: string;
  category: string;
  about: string;
  highlights?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  stats: {
    likes: number;
    reposts: number;
    comments: number;
    views: string;
  };
  featured?: boolean;
  date: string;
}

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: "docyo",
    title: "Docyo — Local-First Swiss Army Knife for Files",
    tagline: "Killed iLovePDF and online converters. 176 conversion routes, 25 built-in tools, 0 KB uploaded — 100% runs on your machine.",
    handle: "docyoapp",
    logo: "/logos/n8n.svg",
    category: "🚀 Shipped Product · Open Source (GPL-3.0)",
    about: "Be honest: How many times have you uploaded a private invoice, ID card, or contract to a random website just to merge two PDFs? Docyo runs 100% locally on your machine with zero uploads, no servers, no accounts, and no limits.\n\nDrag any file, hold Shift, and a radial wheel pops up under your cursor — drop it on the format you want. Done.",
    highlights: [
      "176 conversion routes across images, PDFs, video, audio, and subtitles",
      "25 built-in tools: merge, split, compress, OCR, trim video, redact photos, bleep audio, strip metadata",
      "0 KB uploaded — zero servers, zero tracking, zero telemetry, 100% local machine execution",
      "Free forever & Open Source (GPL-3.0) on macOS (5.4 MB), Windows, and Linux"
    ],
    techStack: ["Rust", "Tauri", "TypeScript", "WebAssembly", "FFmpeg", "GPL-3.0"],
    liveUrl: "https://www.docyo.app/",
    githubUrl: "https://github.com/subhashmalik0001/docyo",
    images: ["/achievements/docyo.svg"],
    stats: {
      likes: 482,
      reposts: 124,
      comments: 68,
      views: "42.5K",
    },
    featured: true,
    date: "2025 — Present",
  },
  {
    id: "nebula",
    title: "Nebula — AI Business Card Scanner & Contact Hub",
    tagline: "Point your camera at any business card. Reads every detail in <2s — structured, synced, and exported to HubSpot & Salesforce.",
    handle: "nebulahub",
    logo: "/general/logo.png",
    category: "⚡ B2B AI SaaS · Shipped",
    about: "Every sales team at Oracle, SAP, and Freshworks has that drawer full of business cards — a graveyard of missed connections. Built Nebula to solve this.\n\nPoint. Scan. Done. Nebula extracts name, title, company, phone, and email in under 2 seconds. Contacts land in an organized, searchable hub exportable directly to HubSpot, Salesforce, Outlook, and Gmail with instant QR profile sharing.",
    highlights: [
      "Instant OCR & neural parsing in under 2 seconds with zero manual typing",
      "Native 1-click sync & export to HubSpot, Salesforce, Outlook, and Gmail",
      "Instant profile sharing via dynamic QR code (no app required on receiving end)",
      "Built for enterprise sales reps, founders, recruiters, and consultants at Deloitte & McKinsey"
    ],
    techStack: ["Next.js 15", "React Native", "TypeScript", "OCR Vision", "CRM APIs", "Supabase"],
    liveUrl: "https://nebula.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/nebula",
    images: ["/achievements/nebula.svg"],
    stats: {
      likes: 367,
      reposts: 89,
      comments: 45,
      views: "34.1K",
    },
    featured: true,
    date: "2025",
  },
  {
    id: "edvanta",
    title: "Edvanta — The Operating System for Schools",
    tagline: "The Operating System for Schools: unified fee collection, real-time analytics, LMS, automated attendance, and school website builder.",
    handle: "edvanta",
    logo: "/logos/chandigarh-university.svg",
    category: "🏫 EdTech Enterprise Platform",
    about: "Traditional schools still collect fees via cash, manage attendance in paper registers, and send circulars on WhatsApp groups. Edvanta replaces this chaos with unified clarity.\n\nA single connected platform powering automated UPI/card fee collection with instant reconciliation, live analytics dashboards, full classroom LMS, biometric/RFID attendance with parent alerts, and responsive school website builder.",
    highlights: [
      "Processed ₹5 Lakh+ in school fees with instant receipts and real-time reconciliation",
      "Automated 1.2 Lakh+ student attendance records & 5,000+ daily student interactions",
      "Saved 5,000+ administrative hours monthly across partner institutions",
      "Unified 6 core modules: Fees, Analytics, Full LMS, Biometric Attendance, Parent Portal, Website Builder"
    ],
    techStack: ["Next.js 15", "React", "Node.js", "PostgreSQL", "UPI Integration", "Tailwind CSS"],
    liveUrl: "https://edvanta.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/edvanta",
    images: ["/achievements/edvanta.svg"],
    stats: {
      likes: 295,
      reposts: 71,
      comments: 33,
      views: "28.7K",
    },
    featured: true,
    date: "2025",
  },
  {
    id: "will",
    title: "Will — On-Demand Daily Wage Labor Market Platform",
    tagline: "Taking the labor market online: daily-wage workers find opportunities without standing at chowks. Published on Google Play Store.",
    handle: "willstartup",
    logo: "/tech/flutter.svg",
    category: "📱 Live on Google Play Store · Co-Founder",
    about: "Every morning, labor chowks are packed with workers waiting for work, while people struggle to find trusted daily wage laborers. We built Will to take the labor market online.\n\nWorkers find opportunities with dignity without standing on roads, while employers hire verified laborers instantly with fair, transparent pricing. Built with Flutter over 2 years of continuous engineering and launched on the Play Store.",
    highlights: [
      "Live & Published on Google Play Store",
      "Fair, transparent, on-demand labor booking & geographic dispatch",
      "Eliminates physical chowk waiting for daily-wage workers",
      "Engineered with Flutter, Dart, Firebase, and real-time location services"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js", "Google Maps API", "Cloud Functions"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.will.app",
    githubUrl: "https://github.com/subhashmalik0001/will",
    images: ["/achievements/will.svg"],
    stats: {
      likes: 418,
      reposts: 110,
      comments: 54,
      views: "39.2K",
    },
    featured: true,
    date: "Live on Play Store",
  },
  {
    id: "synora",
    title: "Synora — AI Clinical Management & Real-Time EMG Monitoring",
    tagline: "Grand Prize Winner at IBM National Hackathon Code Crafter 3.0 out of 500+ teams. Real-time EMG signals via Web Serial API & LLM diagnostics.",
    handle: "synorabio",
    logo: "/logos/ibm.svg",
    category: "🏆 1st Prize Grand Prize @ IBM National Hackathon",
    about: "Won Grand Prize at IBM's Code Crafter 3.0 (CT University) competing against 500+ teams from IITs and NITs (₹1.8 Lakh prize haul). Synora is an enterprise-grade healthcare platform connecting electromyography hardware directly to the browser via Web Serial API for live muscle signal visualization, fatigue tracking, and strain detection, coupled with predictive LLM diagnostics and 100% offline-first clinical workflows.",
    highlights: [
      "1st Prize Grand Winner out of 500+ national teams (IITs, NITs) — ₹1.8 Lakh prize haul",
      "Clinical-grade EMG signal visualization & fatigue analysis via browser Web Serial API",
      "Predictive LLM health recommendations analyzing live vitals and medical documents",
      "100% offline-first clinical workflow with seamless cloud synchronization"
    ],
    techStack: ["Next.js 14", "TypeScript", "Web Serial API", "Supabase", "tRPC", "Drizzle ORM", "LLM Models", "Tailwind CSS"],
    liveUrl: "https://synora.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/synora",
    images: ["/achievements/synora.svg"],
    stats: {
      likes: 520,
      reposts: 148,
      comments: 72,
      views: "51.3K",
    },
    featured: true,
    date: "2024 — 2025",
  },
  {
    id: "cityscope",
    title: "CityScope — Civic Intelligence & Municipal Platform",
    tagline: "Winner & Top 1% out of 30,000 teams at India Innovates 2026. AI grievance routing, IoT road anomaly detection, and municipal live command.",
    handle: "cityscope",
    logo: "/logos/chandigarh-university.svg",
    category: "🏆 Winner @ India Innovates 2026 (Top 1% of 30k Teams)",
    about: "Winner and selected for the Finale of India Innovates 2026 (Digital Democracy Domain at Bharat Mandapam, New Delhi) competing against 30,000+ teams nationwide. Pitched on stage directly to CM Delhi, MCD Commissioner, Environment Minister, and Unstop CEO.\n\nA civic intelligence platform where citizens report municipal issues via images, GPS, and voice, AI routes tickets to departments, and IoT sensors automatically detect road anomalies and potholes.",
    highlights: [
      "Selected Top 1% out of 30,000+ teams nationwide at Bharat Mandapam, New Delhi",
      "Pitched directly to Delhi Cabinet Ministers, MCD Commissioner, and industry leaders",
      "AI multimodal grievance classification: image recognition, voice input & geofencing",
      "Smart road anomaly & pothole detection using connected IoT vehicle sensors"
    ],
    techStack: ["Next.js 15", "Python", "FastAPI", "Computer Vision", "IoT Sensors", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://cityscope.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/cityscope",
    images: ["/achievements/cityscope.svg"],
    stats: {
      likes: 462,
      reposts: 132,
      comments: 61,
      views: "44.8K",
    },
    featured: true,
    date: "March 2026",
  },
  {
    id: "fluxar",
    title: "Fluxar — Automated Community Paywall for Telegram & WhatsApp",
    tagline: "India's automated community paywall: automatic UPI payment verification, instant group invite, and auto-removal upon expiration.",
    handle: "fluxarai",
    logo: "/general/logo.png",
    category: "🚀 FinTech & Community Infrastructure",
    about: "For months, creators were drowning in manual UPI screenshots, manual verification, and manual member management. Fluxar ends this chaos.\n\nUser pays -> Payment verified -> Telegram verified -> Access granted -> Expired members removed automatically. Featuring a creator control center, real-time verified ledger, live MRR dashboard, and automated tax invoice generation.",
    highlights: [
      "Zero spreadsheets and zero manual screenshots — 100% automated subscription lifecycle",
      "Instant bot verification for Telegram & WhatsApp channels and secret groups",
      "Live Creator Ledger with verified transaction records and real-time MRR analytics",
      "Automated invoice generation engine with multi-tier membership management"
    ],
    techStack: ["Next.js 15", "TypeScript", "Telegram Bot API", "UPI Gateway", "Prisma", "Tailwind CSS"],
    liveUrl: "https://www.fluxar.live/",
    githubUrl: "https://github.com/subhashmalik0001/fluxar",
    images: ["/achievements/fluxar.svg"],
    stats: {
      likes: 318,
      reposts: 76,
      comments: 39,
      views: "31.2K",
    },
    featured: true,
    date: "2025",
  },
  {
    id: "athletix",
    title: "AthletiX — AI Sports Analytics & Biomechanical Injury Prevention",
    tagline: "1st Prize Winner @ Tekathon 4.0 (Smart India Hackathon Gateway) out of 950+ teams & 5,700+ participants. Computer vision sports analytics.",
    handle: "athletixai",
    logo: "/logos/chandigarh-university.svg",
    category: "🏆 1st Prize Winner @ Tekathon 4.0 (SIH Gateway)",
    about: "Clinched 1st place in Tekathon 4.0 (Chandigarh University's 36-hour hackathon & gateway to Smart India Hackathon) under the Fitness & Sports theme, out of 950+ teams and 5,700+ students.\n\nAthletiX uses standard smartphone camera video to analyze athletic fitness tests with zero expensive equipment, delivering real-time muscle fatigue tracking, injury prevention insights, and coach telemetry dashboards that work offline.",
    highlights: [
      "1st Place Winner out of 950+ teams and 5,700+ competing students",
      "High-frame-rate pose tracking and biomechanical form evaluation on mobile",
      "Predictive injury risk scoring & localized muscle fatigue telemetry",
      "Offline-first operational architecture enabling athletes in remote training camps"
    ],
    techStack: ["React", "MediaPipe", "TensorFlow.js", "Python", "FastAPI", "Tailwind CSS"],
    liveUrl: "https://athletix.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/athletix",
    images: ["/achievements/athletix.svg"],
    stats: {
      likes: 341,
      reposts: 82,
      comments: 41,
      views: "33.5K",
    },
    featured: true,
    date: "2025",
  },
  {
    id: "neurogaze",
    title: "NeuroGaze — AI Brain-Computer Interface (BCI) System",
    tagline: "1st Runner-Up @ Google Hackathon! Top 2 out of 8,000+ teams nationally, showcased in Google Office Gurgaon. Real-time EEG communication for paralysis.",
    handle: "neurogaze",
    logo: "/logos/google.svg",
    category: "🥈 1st Runner-Up @ Google Hackathon (Top 2 of 8,000+)",
    about: "Top 2 teams nationally out of 8,000+ teams at the Google Hackathon, showcased live inside the Google Office demo room in Gurgaon. NeuroGaze is an AI-powered Brain-Computer Interface (BCI) system built using Neuro Playground Lite from Upside Down Labs.\n\nEnables paralyzed patients to communicate without touch, without voice — just intent. Real-time EEG brain signals are classified with ML models to express needs and control assistive digital interfaces.",
    highlights: [
      "1st Runner-Up nationally out of 8,000+ teams; demoed at Google Office Gurgaon",
      "EEG signal acquisition via Neuro Playground Lite hardware & real-time signal processing",
      "ML intent classification mapping neural frequencies to communication actions",
      "Built from scratch: Hardware + Machine Learning + Web Interface"
    ],
    techStack: ["React", "Python", "EEG Hardware / Upside Down Labs", "Scikit-Learn", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://neurogaze.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/neurogaze",
    images: ["/achievements/neurogaze.svg"],
    stats: {
      likes: 498,
      reposts: 139,
      comments: 64,
      views: "48.9K",
    },
    featured: true,
    date: "2024",
  },
  {
    id: "cred-trust",
    title: "CredTrust — Decentralized Credential Verification Protocol",
    tagline: "1st Place @ NIT Hack 5.0 (NIT Hamirpur). Cryptographically verifiable credentials eliminating fake certificates & degrees.",
    handle: "credtrust",
    logo: "/logos/nit-hamirpur.svg",
    category: "🥇 1st Place @ NIT Hack 5.0",
    about: "Winner of NIT Hack 5.0 out of 200+ teams. CredTrust allows academic institutions and hackathon organizers to issue soulbound cryptographic proof of achievement directly to recipient wallets, with verifiable zero-knowledge proofs for recruiters.",
    highlights: [
      "Zero-knowledge proof verification preventing credential leakage",
      "Instant 1-click verification widget for employer integration",
      "Minted 500+ pilot credentials during live event demo"
    ],
    techStack: ["Solidity", "Ethereum", "Next.js 15", "Prisma", "Wagmi", "Ethers.js"],
    liveUrl: "https://credtrust.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/credtrust",
    images: ["/achievements/nit-hamirpur.svg"],
    stats: {
      likes: 194,
      reposts: 42,
      comments: 19,
      views: "14.1K",
    },
    featured: false,
    date: "Oct 2024",
  },
  {
    id: "subhashmalik-portfolio",
    title: "X (Twitter) Monochromatic Architecture & Portfolio",
    tagline: "High-fidelity monochromatic recreation of X desktop with strict tokens, WebGL2 halftone portrait, and full-stack architecture.",
    handle: "subhashmalik_me",
    logo: "/general/logo.png",
    category: "💻 Architecture & Engineering System",
    about: "An authentic, high-fidelity monochromatic desktop clone of X (Twitter). Engineered with strict adherence to Twitter's design system tokens (#000000 background, #E7E9EA primary text, #2F3336 borders), zero npm vulnerabilities, custom server architecture, and responsive 3-column layout.",
    highlights: [
      "Strict black-and-white color system with authentic TwitterChirp font stack",
      "Independent frontend-only mock layer with full server-side rendering",
      "Sub-100ms navigation and zero CSS layout shift across page reloads"
    ],
    techStack: ["Next.js 15.5", "React 19", "TypeScript", "Tailwind CSS", "Socket.IO", "Prisma"],
    liveUrl: "https://subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/subhashmalik.me",
    images: ["/general/about-me.jpg"],
    stats: {
      likes: 312,
      reposts: 78,
      comments: 52,
      views: "36.8K",
    },
    featured: false,
    date: "Current",
  },
];
