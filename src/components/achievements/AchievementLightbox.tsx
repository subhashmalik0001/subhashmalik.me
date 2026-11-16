"use client";

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import CornerFrame from "@/components/design-system/CornerFrame";
import FramedButton from "@/components/design-system/FramedButton";
import type { GalleryItem } from "@/types/achievement";

export default function AchievementLightbox({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onChangeIndex: (nextIndex: number) => void;
}) {
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onChangeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || activeIndex === null || typeof document === "undefined") {
    return null;
  }

  const current = items[activeIndex];
  const pad = (n: number) => String(n).padStart(2, "0");

  return createPortal(
    <div
      className="ach-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between gap-4 border-b border-[var(--achievement-border)] pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="frame-label !text-white">
            [ {pad(activeIndex + 1)} / {pad(items.length)} ]
          </span>
          {current.caption && (
            <span className="text-[13px] text-[#CFCFCF] truncate max-w-[60vw]">
              {current.caption}
            </span>
          )}
        </div>
        <FramedButton
          variant="icon"
          size="sm"
          onClick={onClose}
          aria-label="Close lightbox (Escape)"
        >
          <X size={16} />
        </FramedButton>
      </div>

      {/* Center Image Stage */}
      <div className="ach-lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <CornerFrame
          variant="full"
          size="lg"
          tone="primary"
          className="ach-lightbox-frame"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.src} alt={current.alt} />
        </CornerFrame>
      </div>

      {/* Bottom Controls */}
      <div
        className="flex items-center justify-between gap-4 border-t border-[var(--achievement-border)] pt-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="frame-label hidden sm:inline">
          USE ← / → TO NAVIGate · ESC TO CLOSE
        </span>
        <div className="flex items-center gap-3 ml-auto">
          {items.length > 1 && (
            <>
              <FramedButton
                variant="secondary"
                size="sm"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={14} />
                <span>Prev</span>
              </FramedButton>
              <FramedButton
                variant="secondary"
                size="sm"
                onClick={goNext}
                aria-label="Next image"
              >
                <span>Next</span>
                <ChevronRight size={14} />
              </FramedButton>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

