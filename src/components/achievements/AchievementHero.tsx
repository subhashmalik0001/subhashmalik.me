"use client";

import { useEffect, useState } from "react";
import { ACHIEVEMENT_SECTIONS, VERIFIED_HERO_METRICS } from "@/data/achievements";
import { framedButton } from "@/components/design-system/FramedButton";
import type { AchievementCategoryId } from "@/types/achievement";

export default function AchievementHero() {
  const [activeCat, setActiveCat] = useState<AchievementCategoryId>("hackathons");

  useEffect(() => {
    const sections = ACHIEVEMENT_SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCat(entry.target.id as AchievementCategoryId);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="ach-hero">
        <p className="ach-hero-kicker">{"// Recognition & Achievements"}</p>
        <h1 className="ach-hero-title">Achievements</h1>
        <p className="ach-hero-desc">
          A collection of milestones, victories, recognitions and experiences
          that shaped my journey as a developer, founder and community builder.
        </p>

        {/* Verified Summary Metrics Strip */}
        <div className="ach-metrics-grid" role="region" aria-label="Verified achievement metrics">
          {VERIFIED_HERO_METRICS.map((m) => (
            <div key={m.label} className="ach-metric-cell">
              <div className="ach-metric-value">{m.value}</div>
              <div className="ach-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Sticky Editorial Category Jump Bar */}
      <nav aria-label="Achievement categories" className="ach-cat-nav">
        <div className="flex items-center gap-2 min-w-max py-0.5 px-1">
          {ACHIEVEMENT_SECTIONS.map((sec) => {
            const isActive = activeCat === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setActiveCat(sec.id)}
                className={
                  isActive
                    ? `${framedButton({ variant: "secondary", size: "sm", corners: true })} !bg-white/[0.11] !border-[var(--border-primary)] !text-white`
                    : `${framedButton({ variant: "outline", size: "sm", corners: false })} !text-[#8E8E8E] hover:!text-white`
                }
              >
                <span className="font-mono text-[10px] opacity-75">{sec.index}</span>
                <span>{sec.heading}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
