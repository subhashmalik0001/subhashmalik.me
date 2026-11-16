import "@/styles/achievements.css";
import "@/styles/achievement-detail.css";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import {
  ALL_ACHIEVEMENTS,
  getAchievementBySlug,
  getAdjacentAchievements,
} from "@/data/achievements";
import FramedButton from "@/components/design-system/FramedButton";
import CornerFrame from "@/components/design-system/CornerFrame";
import AchievementHeroMedia from "@/components/achievements/AchievementHeroMedia";
import AchievementMetadata from "@/components/achievements/AchievementMetadata";
import PartnerLogoRow from "@/components/achievements/PartnerLogoRow";
import AchievementGallery from "@/components/achievements/AchievementGallery";
import AchievementNavigation from "@/components/achievements/AchievementNavigation";

export function generateStaticParams() {
  return ALL_ACHIEVEMENTS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);
  if (!achievement) {
    return { title: "Achievement Not Found — Subhash Malik" };
  }
  return {
    title: `${achievement.title} (${achievement.recognition ?? achievement.organization}) — Subhash Malik`,
    description: achievement.description,
  };
}

export default async function AchievementDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = getAchievementBySlug(slug);

  if (!achievement) return notFound();

  const { prev, next } = getAdjacentAchievements(slug);

  const narrativeBlocks = [
    {
      code: "01 / OVERVIEW",
      label: "Achievement & Project Overview",
      content: achievement.description,
    },
    ...(achievement.problemStatement
      ? [
          {
            code: "02 / PROBLEM",
            label: "Problem Statement",
            content: achievement.problemStatement,
          },
        ]
      : []),
    ...(achievement.solution
      ? [
          {
            code: "03 / SOLUTION",
            label: "Approach & Technical Solution",
            content: achievement.solution,
          },
        ]
      : []),
    ...(achievement.contribution
      ? [
          {
            code: "04 / CONTRIBUTION",
            label: "My Role & Contribution",
            content: achievement.contribution,
          },
        ]
      : []),
    ...(achievement.outcome
      ? [
          {
            code: "05 / OUTCOME",
            label: "Outcome & Recognition",
            content: achievement.outcome,
          },
        ]
      : []),
  ];

  return (
    <div className="min-h-screen ach-wide-route">
      {/* Sticky Header + Back to Achievements */}
      <div className="flex items-center justify-between gap-4 sticky top-0 backdrop-blur-md bg-black/85 px-4 py-1 z-30 h-[53px] border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3.5 min-w-0">
          <FramedButton
            href="/achievements"
            variant="icon"
            size="sm"
            title="Back to Achievements"
            aria-label="Back to Achievements"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-textGrayLight">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </svg>
          </FramedButton>
          <div className="flex flex-col min-w-0">
            <span className="text-[15px] font-bold text-white truncate">
              {achievement.title}
            </span>
            <span className="text-[11.5px] text-textGray truncate">
              {achievement.categoryLabel} · {achievement.recognition || achievement.organization}
            </span>
          </div>
        </div>

        <FramedButton
          href="/achievements"
          variant="outline"
          size="sm"
          corners={false}
          className="hidden sm:inline-flex"
        >
          <span>← All Achievements</span>
        </FramedButton>
      </div>

      {/* A. Breadcrumb Bar */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2.5 border-b border-[var(--achievement-border-soft)] bg-[#080808] flex items-center justify-between gap-4 flex-wrap text-[12px]"
      >
        <ol className="flex items-center gap-2 flex-wrap text-[#8E8E8E]">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/achievements" className="hover:text-white transition-colors">
              Achievements
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/achievements#${achievement.category}`}
              className="hover:text-white transition-colors"
            >
              {achievement.categoryLabel.replace(/^\d+\s*\/\s*/, "")}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white font-medium truncate max-w-[260px]" aria-current="page">
            {achievement.title}
          </li>
        </ol>

        <span className="frame-label">
          [ CASE STUDY // {achievement.indexNumber} ]
        </span>
      </nav>

      {/* Main Case Study Content */}
      <div className="ach-page">
        <div className="ach-container">
          {/* B. Achievement Hero */}
          <header className="ach-detail-hero">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="frame-label !text-[#CFCFCF]">
                  [ {achievement.categoryLabel.toUpperCase()} ]
                </span>
                {achievement.recognition && (
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 border border-[var(--border-primary)] bg-white/[0.07] text-white">
                    {achievement.recognition}
                  </span>
                )}
                {achievement.prize && (
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 border border-[var(--achievement-border)] bg-[#111] text-[#E5E5E5]">
                    Prize: {achievement.prize}
                  </span>
                )}
              </div>

              {achievement.organizationLogo && (
                <div className="h-8 px-3 border border-[var(--achievement-border-soft)] bg-[#0D0D0D] inline-flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={achievement.organizationLogo}
                    alt={achievement.organization}
                    className="h-4 w-auto object-contain"
                  />
                </div>
              )}
            </div>

            <h1 className="ach-detail-title">{achievement.title}</h1>
            {achievement.subtitle && (
              <p className="ach-detail-subtitle">{achievement.subtitle}</p>
            )}

            {/* Partner & Organizer Logo Strip */}
            {achievement.partnerLogos.length > 0 && (
              <div className="mt-5">
                <PartnerLogoRow
                  partners={achievement.partnerLogos}
                  label="ORGANIZER & TECHNOLOGY PARTNERS"
                />
              </div>
            )}

            {/* Hero Cover Photograph Frame (Click to open Lightbox) */}
            <div className="mt-7">
              <AchievementHeroMedia achievement={achievement} />
            </div>

            {/* C. Achievement Summary Metadata Grid */}
            <AchievementMetadata achievement={achievement} />
          </header>

          {/* D. Structured Project & Achievement Information */}
          <section aria-label="Achievement details">
            {narrativeBlocks.map((block) => (
              <div key={block.code} className="ach-narrative-row">
                <div>
                  <span className="frame-label !text-[#B8B8B8]">
                    {block.code}
                  </span>
                  <h2 className="text-[16px] font-bold text-white mt-1">
                    {block.label}
                  </h2>
                </div>
                <p className="text-[15.5px] leading-7 text-[#CCCCCC] max-w-[66ch]">
                  {block.content}
                </p>
              </div>
            ))}

            {/* Technology Stack Block */}
            {achievement.technologies.length > 0 && (
              <div className="ach-narrative-row">
                <div>
                  <span className="frame-label !text-[#B8B8B8]">
                    06 / STACK
                  </span>
                  <h2 className="text-[16px] font-bold text-white mt-1">
                    Technology Stack &amp; Focus
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[13px] font-medium px-3 py-1 bg-[#111111] border border-[var(--achievement-border)] text-[#E5E5E5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* E. Achievement Image Gallery + Lightbox */}
          <AchievementGallery achievement={achievement} />

          {/* F. Project Links (Only rendered when real URLs exist) */}
          {achievement.links.length > 0 && (
            <section className="py-8 border-b border-[var(--achievement-border)]">
              <CornerFrame
                variant="full"
                size="sm"
                tone="secondary"
                className="p-5 bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <span className="frame-label">[ VERIFIED LINKS &amp; REPOSITORIES ]</span>
                  <h2 className="text-[17px] font-bold text-white mt-1">
                    Explore {achievement.projectName || achievement.title}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3.5 pl-1">
                  {achievement.links.map((link, idx) => {
                    const isExternal = link.url.startsWith("http");
                    return (
                      <FramedButton
                        key={link.url}
                        href={link.url}
                        external={isExternal}
                        variant={idx === 0 ? "primary" : "secondary"}
                        size="sm"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight size={14} />
                      </FramedButton>
                    );
                  })}
                </div>
              </CornerFrame>
            </section>
          )}

          {/* G. Bottom Previous / Next / All Achievements Navigation */}
          <AchievementNavigation prev={prev} next={next} />
        </div>
      </div>
    </div>
  );
}
