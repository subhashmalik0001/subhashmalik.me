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
    id: "user_morthindia",
    displayName: "MORTHINDIA",
    username: "MORTHINDIA",
    img: "/general/noAvatar.png",
  },
  {
    id: "user_swatantra",
    displayName: "Swatantra Mishra",
    username: "SwatantraMishra",
    img: "/general/noAvatar.png",
  },
  {
    id: "user_paramjeet",
    displayName: "Paramjeet khangwal",
    username: "Paramjeetkhangwal",
    img: "/general/noAvatar.png",
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
    id: "accessi-ai",
    title: "AccessiAI",
    tagline: "AI-powered multimodal accessibility system converting complex technical docs into plain speech and interactive plain-text summaries in real time.",
    handle: "accessiai",
    logo: "/general/logo.png",
    category: "🏆 1st Prize Winner @ IBM Hack Challenge",
    about: "Built in 48 hours for the IBM Hack Challenge. AccessiAI empowers users with visual and cognitive impairments to understand dense developer documentation, API references, and schemas with intelligent chunking, generative audio synthesis, and assistive querying.",
    highlights: [
      "Real-time text-to-speech with contextual prosody adjustment",
      "Interactive simplified code explanation sandbox",
      "Processed 10,000+ technical documents with sub-second retrieval latency"
    ],
    techStack: ["Next.js 15", "React 19", "IBM Watson AI", "TypeScript", "Tailwind CSS", "Web Audio API"],
    liveUrl: "https://accessiai.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/accessi-ai",
    images: ["/general/post.jpeg"],
    stats: {
      likes: 148,
      reposts: 39,
      comments: 24,
      views: "18.2K",
    },
    featured: true,
    date: "Dec 2024",
  },
  {
    id: "collab-canvas",
    title: "CollabCanvas",
    tagline: "High-performance multiplayer design canvas with live presence, generative layout generation, and 1-click React component compilation.",
    handle: "collabcanvas",
    logo: "/general/logo.png",
    category: "🥈 1st Runner-Up @ Google & iQOO Hackathon",
    about: "Developed during the Google x iQOO National Hackathon. CollabCanvas combines ultra-smooth infinite canvas rendering with collaborative WebSocket synchronization and Gemini Multimodal AI to instantly transform rough whiteboard wireframes into production-ready JSX code.",
    highlights: [
      "Sub-20ms multi-cursor synchronization with operational transform",
      "Sketch-to-React AI pipeline powered by Google Gemini",
      "Interactive component preview sandbox with live code editing"
    ],
    techStack: ["React 19", "Next.js", "Socket.IO", "Google Gemini API", "HTML5 Canvas", "Tailwind CSS"],
    liveUrl: "https://collabcanvas.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/collab-canvas",
    images: ["/general/event.png"],
    stats: {
      likes: 245,
      reposts: 64,
      comments: 38,
      views: "29.4K",
    },
    featured: true,
    date: "Nov 2024",
  },
  {
    id: "cred-trust",
    title: "CredTrust",
    tagline: "Cryptographically verifiable credential protocol eliminating fraudulent degrees, certifications, and hackathon awards.",
    handle: "credtrust",
    logo: "/general/logo.png",
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
    images: ["/general/cover.jpg"],
    stats: {
      likes: 194,
      reposts: 42,
      comments: 19,
      views: "14.1K",
    },
    featured: true,
    date: "Oct 2024",
  },
  {
    id: "subhashmalik-portfolio",
    title: "X Portfolio",
    tagline: "Pixel-perfect recreation of X desktop with strict black & white tokens, Chirp typography, and modular mock architecture.",
    handle: "subhashmalik_me",
    logo: "/general/logo.png",
    category: "💻 Full Stack Architecture",
    about: "An authentic, high-fidelity monochromatic desktop clone of X (Twitter). Engineered with strict adherence to Twitter's design system tokens (#000000 background, #E7E9EA primary text, #2F3336 borders), zero npm vulnerabilities, custom server architecture, and responsive 3-column layout.",
    highlights: [
      "Strict black-and-white color system with authentic TwitterChirp font stack",
      "Independent frontend-only mock layer with full server-side rendering",
      "Sub-100ms navigation and zero CSS layout shift across page reloads"
    ],
    techStack: ["Next.js 15.5", "React 19", "TypeScript", "Tailwind CSS", "Socket.IO", "Prisma"],
    liveUrl: "https://subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/subhashmalik.me",
    images: ["/general/cover.jpg"],
    stats: {
      likes: 312,
      reposts: 78,
      comments: 52,
      views: "36.8K",
    },
    featured: true,
    date: "Current",
  },
  {
    id: "payscale-monitor",
    title: "PayScale Monitor",
    tagline: "Real-time latency diagnostics and distributed microservice transaction visualizer built during internship at Paytm.",
    handle: "payscale",
    logo: "/general/logo.png",
    category: "⚡ Ex-Intern @ Paytm",
    about: "Developed during engineering internship at Paytm. Built to visualize live transaction throughput, sub-second latency anomalies, and automated circuit breaker status across distributed payment clusters handling millions of requests daily.",
    highlights: [
      "Sub-second event stream streaming with WebSocket and Redis Pub/Sub",
      "Configurable SLA threshold alerting with instant webhook dispatch",
      "Optimized dashboard render performance to handle 5,000+ data points/sec"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Redis", "Kafka", "Tailwind CSS"],
    liveUrl: "https://payscale.subhashmalik.me",
    githubUrl: "https://github.com/subhashmalik0001/payscale-monitor",
    images: ["/general/post.jpeg"],
    stats: {
      likes: 188,
      reposts: 46,
      comments: 21,
      views: "21.6K",
    },
    featured: false,
    date: "Summer 2024",
  },
];
