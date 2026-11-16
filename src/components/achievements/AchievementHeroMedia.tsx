"use client";

import { useState } from "react";
import type { Achievement, GalleryItem } from "@/types/achievement";
import AchievementImageFrame from "./AchievementImageFrame";
import AchievementLightbox from "./AchievementLightbox";

export default function AchievementHeroMedia({
  achievement,
}: {
  achievement: Achievement;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items: GalleryItem[] =
    achievement.galleryItems && achievement.galleryItems.length > 0
      ? achievement.galleryItems
      : [
          {
            src: achievement.coverImage,
            alt: achievement.title,
            caption: `${achievement.title} — ${achievement.recognition ?? achievement.organization}`,
            ratio: achievement.coverRatio ?? "16:9",
          },
        ];

  return (
    <>
      <AchievementImageFrame
        src={achievement.coverImage}
        alt={achievement.title}
        ratio={achievement.coverRatio ?? "16:9"}
        badge={achievement.recognition ? `${achievement.recognition} · CLICK TO EXPAND` : "CLICK TO EXPAND"}
        indexLabel={achievement.indexNumber}
        size="lg"
        tone="primary"
        priority
        onClick={() => setOpenIdx(0)}
      />
      <AchievementLightbox
        items={items}
        activeIndex={openIdx}
        onClose={() => setOpenIdx(null)}
        onChangeIndex={setOpenIdx}
      />
    </>
  );
}

