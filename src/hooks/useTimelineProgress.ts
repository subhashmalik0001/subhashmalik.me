"use client";

import { RefObject, useEffect } from "react";

/**
 * Drives the orange scroll-following timeline line.
 *
 * - Progress is derived from the container's bounding rect relative to an
 *   anchor point in the viewport (60% down), clamped to [0, 1].
 * - The progress bar is updated through `transform: scaleY()` and markers
 *   via `data-active` — written straight to the DOM inside a single
 *   requestAnimationFrame, so scrolling never triggers React renders.
 */
export function useTimelineProgress(
  containerRef: RefObject<HTMLElement | null>,
  progressRef: RefObject<HTMLElement | null>,
  markerSelector = "[data-timeline-entry]",
  anchorRatio = 0.6
) {
  useEffect(() => {
    const container = containerRef.current;
    const bar = progressRef.current;
    if (!container || !bar) return;

    const entries = Array.from(container.querySelectorAll<HTMLElement>(markerSelector));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      bar.style.transform = "scaleY(1)";
      entries.forEach((e) => (e.dataset.active = "true"));
      return;
    }

    let frame = 0;
    let lastProgress = -1;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const anchor = window.innerHeight * anchorRatio;
      const raw = (anchor - rect.top) / rect.height;
      const progress = Math.min(1, Math.max(0, raw));

      if (Math.abs(progress - lastProgress) > 0.0005) {
        lastProgress = progress;
        bar.style.transform = `scaleY(${progress})`;

        const reached = progress * rect.height;
        for (const entry of entries) {
          const marker = entry.querySelector<HTMLElement>("[data-timeline-marker]") ?? entry;
          const markerCenter =
            marker.getBoundingClientRect().top - rect.top + marker.offsetHeight / 2;
          const active = reached >= markerCenter ? "true" : "false";
          if (entry.dataset.active !== active) entry.dataset.active = active;
        }
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [containerRef, progressRef, markerSelector, anchorRatio]);
}

