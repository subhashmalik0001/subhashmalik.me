/**
 * Technology stack shown in the "Stacks & Experience" section.
 * Edit this list to add/remove skills — the grid renders straight from it.
 *
 * `icon` is a path inside /public. Leave it undefined to render an
 * initials fallback tile (e.g. for tools without an official SVG).
 * Logos are fetched by `scripts/fetch-logos.sh`.
 */

export interface Technology {
  name: string;
  icon?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  items: Technology[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "Java", icon: "/tech/java.svg" },
      { name: "Python", icon: "/tech/python.svg" },
      { name: "C", icon: "/tech/c.svg" },
      { name: "C++", icon: "/tech/cplusplus.svg" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML5", icon: "/tech/html5.svg" },
      { name: "CSS3", icon: "/tech/css3.svg" },
      { name: "JavaScript", icon: "/tech/javascript.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "React", icon: "/tech/react.svg" },
      { name: "Next.js", icon: "/tech/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Express.js", icon: "/tech/express.svg" },
      { name: "Flask", icon: "/tech/flask.svg" },
      { name: "Firebase", icon: "/tech/firebase.svg" },
      { name: "Supabase", icon: "/tech/supabase.svg" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [
      { name: "Flutter", icon: "/tech/flutter.svg" },
      { name: "Dart", icon: "/tech/dart.svg" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    items: [
      { name: "TensorFlow", icon: "/tech/tensorflow.svg" },
      { name: "Keras", icon: "/tech/keras.svg" },
      { name: "OpenCV", icon: "/tech/opencv.svg" },
      // No official SVG available in Devicon / Simple Icons — initials fallback.
      { name: "PyCaret" },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    items: [
      { name: "Git", icon: "/tech/git.svg" },
      { name: "GitHub", icon: "/tech/github.svg" },
      { name: "VS Code", icon: "/tech/vscode.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
      { name: "Postman", icon: "/tech/postman.svg" },
      { name: "Figma", icon: "/tech/figma.svg" },
    ],
  },
];

