"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Expand } from "lucide-react";
import { ACHIEVEMENT_SECTIONS } from "@/data/achievements";
import { CERTIFICATION_ACHIEVEMENTS } from "@/data/certifications";
import type { GalleryItem } from "@/types/achievement";
import AchievementSection from "../AchievementSection";
import AchievementImageFrame from "../AchievementImageFrame";
import AchievementLightbox from "../AchievementLightbox";

export default function Certifications() {
  const meta = ACHIEVEMENT_SECTIONS[6];
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const lightboxItems: GalleryItem[] = CERTIFICATION_ACHIEVEMENTS.map((cert) => ({
    src: cert.coverImage,
    alt: cert.title,
    caption: `${cert.title} — ${cert.subtitle ?? cert.organization}`,
    ratio: "certificate",
    kind: "certificate",
  }));

  return (
    <AchievementSection meta={meta}>
      <div className="ach-grid-2">
        {CERTIFICATION_ACHIEVEMENTS.map((cert, idx) => (
          <article key={cert.id} className="ach-card">
            <AchievementImageFrame
              src={cert.coverImage}
              alt={cert.title}
              ratio="certificate"
              fit="contain"
              indexLabel={cert.indexNumber}
              badge={cert.recognition}
              onClick={() => setLightboxIdx(idx)}
            />

            <div className="ach-card-body">
              <div className="flex items-start justify-between gap-2">
                <h3 className="ach-card-title !text-[16px]">{cert.title}</h3>
                {cert.date && (
                  <span className="frame-label !text-[10px] pt-0.5">
                    {cert.date}
                  </span>
                )}
              </div>

              <p className="ach-card-sub">{cert.subtitle || cert.organization}</p>
              <p className="ach-card-desc">{cert.description}</p>

              <div className="flex items-center justify-between gap-3 pt-2.5 mt-auto border-t border-[var(--achievement-border-soft)]">
                <button
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  className="ach-card-link !mt-0 !pt-0 cursor-pointer"
                >
                  <Expand size={12} />
                  <span>Preview Certificate</span>
                </button>

                <Link
                  href={cert.links[0]?.url || `/achievements/${cert.slug}`}
                  className="frame-label hover:!text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <AchievementLightbox
        items={lightboxItems}
        activeIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onChangeIndex={setLightboxIdx}
      />
    </AchievementSection>
  );
}

