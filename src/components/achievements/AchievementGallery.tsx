"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import type { Achievement, GalleryItem } from "@/types/achievement";
import AchievementImageFrame from "./AchievementImageFrame";
import AchievementLightbox from "./AchievementLightbox";

export default function AchievementGallery({
  achievement,
}: {
  achievement: Achievement;
}) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const items: GalleryItem[] =
    achievement.galleryItems && achievement.galleryItems.length > 0
      ? achievement.galleryItems
      : achievement.gallery.map((src, i) => ({
          src,
          alt: `${achievement.title} — Gallery image ${i + 1}`,
          caption: `${achievement.title} · Image 0${i + 1}`,
          ratio: src.includes("cert") ? "certificate" : "16:9",
        }));

  if (items.length === 0) return null;

  return (
    <section className="py-10 border-b border-[var(--achievement-border)]">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="frame-label">[ ARCHIVE &amp; GALLERY ]</span>
          <h2 className="text-[22px] font-bold text-white mt-1">
            Photographs, Credentials &amp; Visual Proof
          </h2>
        </div>
        <span className="frame-label">
          [ {String(items.length).padStart(2, "0")} ITEMS · CLICK TO EXPAND ]
        </span>
      </div>

      <div className="ach-grid-2">
        {items.map((item, idx) => (
          <div key={`${item.src}-${idx}`} className="flex flex-col gap-2.5">
            <AchievementImageFrame
              src={item.src}
              alt={item.alt}
              ratio={item.ratio ?? "16:9"}
              indexLabel={`0${idx + 1}`}
              badge="EXPAND"
              onClick={() => setLightboxIdx(idx)}
            />
            <div className="flex items-center justify-between gap-2 px-0.5">
              <span className="text-[13px] text-[#B8B8B8] truncate">
                {item.caption || item.alt}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="frame-label hover:!text-white inline-flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                <Expand size={11} />
                <span>LIGHTBOX</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <AchievementLightbox
        items={items}
        activeIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onChangeIndex={setLightboxIdx}
      />
    </section>
  );
}

