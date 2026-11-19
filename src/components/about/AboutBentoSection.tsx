"use client";

import { useState } from "react";
import "@/styles/about-bento.css";

interface ToolItem {
  name: string;
  icon: string;
}

const TOOLS: ToolItem[] = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Figma", icon: "/tech/figma.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  { name: "VS Code", icon: "/tech/vscode.svg" },
];

const SKILLS = [
  "Full-Stack Development",
  "React & Next.js",
  "System Design",
  "API Architecture",
  "Product Strategy",
  "Developer Relations",
  "Community Building",
  "Cloud & DevOps",
  "Open Source",
];

export default function AboutBentoSection() {
  const [isZHovered, setIsZHovered] = useState(false);

  return (
    <section
      id="about-me"
      aria-label="About Subhash Malik"
      className="about-bento-section"
    >
      {/* ── Section Header ── */}
      <div className="mb-2">
        <span className="about-bento-pill">About me</span>
        <h2 className="about-bento-heading">
          Builder by ambition, engineer by craft.
        </h2>
      </div>

      {/* ── Asymmetric Bento Grid with Unified Z-Frame ── */}
      <div className={`about-bento-grid ${isZHovered ? "z-is-hovered" : ""}`}>
        {/* ── 1. The Z-Top: Intro & Bio (Cols 1 to 8, Row 1) ── */}
        <div
          className="about-bento-card about-bento-z-top"
          onMouseEnter={() => setIsZHovered(true)}
          onMouseLeave={() => setIsZHovered(false)}
        >
          <div className="about-bento-intro-inner">
            {/* Profile Avatar */}
            <div className="about-bento-avatar-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/general/avatar.png"
                alt="Subhash Malik"
                loading="eager"
                decoding="async"
                draggable={false}
                className="about-bento-avatar"
              />
            </div>

            {/* Concise Bio Text */}
            <div className="about-bento-intro-text">
              <p>
                I’m a software developer and product builder turning ideas into
                useful products and empowering developer communities.
              </p>
            </div>
          </div>

          {/* Right Concave Fillet: Curves Card A right border down into Card D top border */}
          <div className="about-bento-fillet about-bento-fillet--right" aria-hidden="true">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
            >
              <path
                d="M 0 0 C 0 8.837 7.163 16 16 16 L 0 16 Z"
                className="about-bento-fillet-bg"
              />
              <path
                d="M 0 0 C 0 8.837 7.163 16 16 16"
                className="about-bento-fillet-stroke"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* ── 2. Card B: Social / Connect 2x2 (Cols 9 to 12, Row 1) ── */}
        <div className="about-bento-card about-bento-card--social">
          <div className="about-bento-social-grid">
            {/* 1. GitHub */}
            <a
              href="https://github.com/subhashmalik0001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Subhash Malik"
              className="about-bento-social-tile group"
            >
              <span className="about-bento-social-icon">
                <svg
                  viewBox="0 0 24 24"
                  className="w-[19px] h-[19px] fill-current"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </span>
              <span className="about-bento-social-label">GitHub</span>
            </a>

            {/* 2. X (Twitter) */}
            <a
              href="https://x.com/SubhashMalik01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter profile of Subhash Malik"
              className="about-bento-social-tile group"
            >
              <span className="about-bento-social-icon">
                <svg
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span className="about-bento-social-label">Twitter</span>
            </a>

            {/* 3. Email */}
            <a
              href="mailto:subhashmalik0001@gmail.com"
              aria-label="Send email to Subhash Malik"
              className="about-bento-social-tile group"
            >
              <span className="about-bento-social-icon">
                <svg
                  viewBox="0 0 24 24"
                  className="w-[19px] h-[19px] stroke-current fill-none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span className="about-bento-social-label">E-mail</span>
            </a>

            {/* 4. LinkedIn */}
            <a
              href="https://linkedin.com/in/subhash-malik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Subhash Malik"
              className="about-bento-social-tile group"
            >
              <span className="about-bento-social-icon">
                <svg
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </span>
              <span className="about-bento-social-label">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* ── 3. Card C: Tool Stack (Cols 1 to 4, Row 2) ── */}
        <div className="about-bento-card about-bento-card--tools">
          <h3 className="about-bento-card-title">Tool stack</h3>
          <div className="about-bento-tools-marquee">
            <div className="about-bento-tools-track">
              {/* Group 1 */}
              <div className="about-bento-tools-group">
                {TOOLS.map((tool) => (
                  <div
                    key={`tool-1-${tool.name}`}
                    className="about-bento-tool-badge"
                    title={tool.name}
                    aria-label={tool.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      loading="lazy"
                      decoding="async"
                      className="about-bento-tool-img"
                    />
                  </div>
                ))}
              </div>
              {/* Group 2 (seamless duplication) */}
              <div className="about-bento-tools-group" aria-hidden="true">
                {TOOLS.map((tool) => (
                  <div
                    key={`tool-2-${tool.name}`}
                    className="about-bento-tool-badge"
                    title={tool.name}
                    tabIndex={-1}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      loading="lazy"
                      decoding="async"
                      className="about-bento-tool-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. The Z-Bottom: Skill Stack (Cols 5 to 12, Row 2) ── */}
        <div
          className="about-bento-card about-bento-z-bottom"
          onMouseEnter={() => setIsZHovered(true)}
          onMouseLeave={() => setIsZHovered(false)}
        >
          {/* Left Concave Fillet: Curves Card A bottom border into Card D left border */}
          <div className="about-bento-fillet about-bento-fillet--left" aria-hidden="true">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
            >
              <path
                d="M 0 0 C 8.837 0 16 7.163 16 16 L 16 0 Z"
                className="about-bento-fillet-bg"
              />
              <path
                d="M 0 0 C 8.837 0 16 7.163 16 16"
                className="about-bento-fillet-stroke"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
            </svg>
          </div>

          <h3 className="about-bento-card-title">Skill stack</h3>
          <div className="about-bento-skills-marquee">
            <div className="about-bento-skills-track">
              {/* Group 1 */}
              <div className="about-bento-skills-group">
                {SKILLS.map((skill) => (
                  <span key={`skill-1-${skill}`} className="about-bento-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
              {/* Group 2 (seamless duplication) */}
              <div className="about-bento-skills-group" aria-hidden="true">
                {SKILLS.map((skill) => (
                  <span key={`skill-2-${skill}`} className="about-bento-skill-chip" tabIndex={-1}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. Seamless Background Connector (Cols 5 to 8, Rows 1 to 2) ── */}
        <div
          className="about-bento-z-connector"
          aria-hidden="true"
          onMouseEnter={() => setIsZHovered(true)}
          onMouseLeave={() => setIsZHovered(false)}
        />
      </div>
    </section>
  );
}
