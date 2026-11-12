"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Trophy, Users, FileText, Send, CheckCircle2 } from "lucide-react";
import CornerFrame from "@/components/design-system/CornerFrame";
import FramedButton from "@/components/design-system/FramedButton";
import FramedImage from "@/components/design-system/FramedImage";
import Image from "@/components/Image";
import { MOCK_PROJECTS } from "@/mockData";

const ACHIEVEMENTS = [
  {
    index: "01",
    badge: "1ST PRIZE WINNER",
    event: "IBM Hack Challenge",
    project: "AccessiAI",
    summary:
      "Built an AI multimodal accessibility engine in 48h converting dense developer docs into contextual speech & summaries.",
    href: "https://accessiai.subhashmalik.me",
  },
  {
    index: "02",
    badge: "1ST PLACE WINNER",
    event: "NIT Hack 5.0",
    project: "CredTrust",
    summary:
      "Placed 1st out of 200+ teams with a zero-knowledge verifiable credential protocol on Ethereum.",
    href: "https://credtrust.subhashmalik.me",
  },
  {
    index: "03",
    badge: "1ST RUNNER-UP",
    event: "Google & iQOO Hackathon",
    project: "CollabCanvas",
    summary:
      "Engineered a sub-20ms multiplayer whiteboard with Gemini sketch-to-React JSX compilation.",
    href: "https://collabcanvas.subhashmalik.me",
  },
];

const COMMUNITIES = [
  {
    index: "01",
    org: "HackBriven",
    role: "Co-Founder",
    period: "2024 — Present",
    detail:
      "Leading developer hackathons, technical workshops, mentorship cohorts, and student builder initiatives.",
  },
  {
    index: "02",
    org: "Alexa Developer Community",
    role: "Social Media Lead",
    period: "2024 — 2025",
    detail:
      "Scaled technical event outreach, developer storytelling, and campus engagement at Chandigarh University.",
  },
];

export function HighlightsPanel() {
  return (
    <div className="p-4 flex flex-col gap-4 bg-[#050505]">
      <div className="flex items-center justify-between">
        <span className="frame-label flex items-center gap-2">
          <Trophy size={13} className="text-[#E7E9EA]" />
          [ VERIFIED PODIUM WINS // 15+ HACKATHONS ]
        </span>
        <Link
          href="/projects"
          className="frame-label hover:text-white transition-colors"
        >
          ALL PROJECTS ↗
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {ACHIEVEMENTS.map((item) => (
          <CornerFrame
            key={item.index}
            as="article"
            variant="full"
            size="sm"
            interactive
            className="bg-[#0A0A0A] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="frame-label text-white">[ {item.index} ]</span>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 border border-[var(--border-secondary)] bg-white/[0.04] text-[#E7E9EA]">
                  {item.badge}
                </span>
                <span className="text-[13px] text-textGray">· {item.event}</span>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.project}`}
                className="text-textGray hover:text-white transition-colors flex-shrink-0"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
            <h3 className="text-[15px] font-bold text-textGrayLight mt-2">
              {item.project}
            </h3>
            <p className="text-[13px] leading-5 text-textGray mt-1">
              {item.summary}
            </p>
          </CornerFrame>
        ))}
      </div>
    </div>
  );
}

export function MediaGallery() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#050505]">
      {MOCK_PROJECTS.map((project, idx) => (
        <a
          key={project.id}
          href={project.liveUrl || project.githubUrl || "/projects"}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <FramedImage size="sm" tone="secondary" className="aspect-[16/10] bg-[#0A0A0A]">
            <Image
              path={project.images[0] || "/general/cover.jpg"}
              alt={project.title}
              w={400}
              h={250}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
          </FramedImage>
          <div className="mt-2 flex items-center justify-between gap-2 px-0.5">
            <span className="text-[13px] font-bold text-textGrayLight truncate group-hover:text-white">
              {project.title}
            </span>
            <span className="frame-label">[ 0{idx + 1} ]</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function PortfolioSections() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:subhashmalik0001@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="border-t border-[var(--border-secondary)]">
      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="scroll-mt-[56px] border-b border-[var(--border-secondary)]">
        <div className="index-bar bg-[#050505]">
          <div className="index-bar__cell index-bar__cell--start">
            <span className="frame-label">[ ACHIEVEMENTS ]</span>
          </div>
          <div className="index-bar__cell index-bar__cell--end">
            <span className="frame-label">[ 03 PODIUMS ]</span>
          </div>
        </div>
        <HighlightsPanel />
      </section>

      {/* COMMUNITY & LEADERSHIP SECTION */}
      <section id="community" className="scroll-mt-[56px] border-b border-[var(--border-secondary)] bg-[#050505]">
        <div className="index-bar">
          <div className="index-bar__cell index-bar__cell--start">
            <span className="frame-label flex items-center gap-1.5">
              <Users size={12} />
              [ COMMUNITY ]
            </span>
          </div>
          <div className="index-bar__cell index-bar__cell--end">
            <Link href="/experience" className="frame-label hover:text-white transition-colors">
              [ TIMELINE ↗ ]
            </Link>
          </div>
        </div>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {COMMUNITIES.map((c) => (
            <CornerFrame
              key={c.index}
              variant="full"
              size="sm"
              interactive
              className="bg-[#0A0A0A] p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="frame-label text-white">[ {c.index} ]</span>
                  <span className="text-[11px] text-textGray font-mono">{c.period}</span>
                </div>
                <h3 className="text-[15px] font-bold text-textGrayLight mt-2">
                  {c.org}
                </h3>
                <p className="text-[12px] font-semibold text-[#A0A4A8] uppercase tracking-wider mt-0.5">
                  {c.role}
                </p>
                <p className="text-[13px] leading-5 text-textGray mt-2">
                  {c.detail}
                </p>
              </div>
            </CornerFrame>
          ))}
        </div>
      </section>

      {/* RESUME & CONTACT SECTION */}
      <section id="contact" className="scroll-mt-[56px] bg-black">
        <div id="resume" className="scroll-mt-[56px] index-bar bg-[#050505]">
          <div className="index-bar__cell index-bar__cell--start">
            <span className="frame-label">[ RESUME &amp; CONTACT ]</span>
          </div>
          <div className="index-bar__cell index-bar__cell--end">
            <span className="frame-label">[ DIRECT ]</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <CornerFrame
            variant="full"
            tone="primary"
            size="lg"
            className="bg-[#080808] p-5 sm:p-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[var(--border-secondary)] bg-[#0E0E0E]">
              <span className="w-1.5 h-1.5 bg-[#36D98A]" aria-hidden="true" />
              <span className="frame-label !text-[#D0D0D0]">
                AVAILABLE FOR FULL-STACK &amp; PRODUCT ENGINEERING
              </span>
            </div>

            <h2 className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight mt-3.5 tracking-tight">
              Let&apos;s build precision software together.
            </h2>
            <p className="text-[14px] leading-5 text-textGray mt-2">
              Explore my full engineering timeline &amp; stack, browse live hackathon winners, or send a direct message below.
            </p>

            {/* Framed Resume / Quick Action Row */}
            <div className="flex flex-wrap items-center gap-3.5 mt-4 pb-5 border-b border-[var(--border-subtle)]">
              <FramedButton href="/experience" variant="primary" size="sm">
                <FileText size={14} />
                <span>Experience &amp; Stack</span>
              </FramedButton>
              <FramedButton href="/projects" variant="secondary" size="sm">
                <span>View Projects</span>
                <ArrowUpRight size={14} />
              </FramedButton>
              <FramedButton
                href="https://github.com/subhashmalik0001"
                external
                variant="outline"
                size="sm"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </FramedButton>
            </div>

            {/* Framed Contact Form */}
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  aria-label="Your name"
                  className="bg-[#0E0E0E] border border-[var(--border-secondary)] focus:border-white px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#6E7378] outline-none transition-colors"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Your email"
                  className="bg-[#0E0E0E] border border-[var(--border-secondary)] focus:border-white px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#6E7378] outline-none transition-colors"
                />
              </div>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the role, product, or collaboration..."
                aria-label="Message"
                className="bg-[#0E0E0E] border border-[var(--border-secondary)] focus:border-white px-3.5 py-2.5 text-[14px] text-white placeholder:text-[#6E7378] outline-none transition-colors resize-none"
              />
              <div className="flex items-center justify-between gap-3 pt-1 flex-wrap">
                {sent ? (
                  <span className="text-[13px] text-[#36D98A] flex items-center gap-1.5">
                    <CheckCircle2 size={15} />
                    Opening mail client to send message…
                  </span>
                ) : (
                  <span className="frame-label">RESPONSE WITHIN 24H</span>
                )}
                <FramedButton type="submit" variant="primary" size="sm">
                  <Send size={13} />
                  <span>Send Message</span>
                </FramedButton>
              </div>
            </form>
          </CornerFrame>
        </div>
      </section>
    </div>
  );
}

