"use client";

import { useRef } from "react";
import { EXPERIENCES } from "@/data/experiences";
import { useTimelineProgress } from "@/hooks/useTimelineProgress";
import TimelineEntry from "./TimelineEntry";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  useTimelineProgress(containerRef, progressRef);

  return (
    <div id="experience-timeline" ref={containerRef} className="xp-timeline xp-anchor">
      {/* Background track + scroll-driven orange progress */}
      <div className="xp-track" aria-hidden="true" />
      <div ref={progressRef} className="xp-progress" aria-hidden="true" />

      <ol className="relative" aria-label="Professional experience">
        {EXPERIENCES.map((exp, i) => (
          <TimelineEntry key={exp.id} exp={exp} index={i} />
        ))}
      </ol>
    </div>
  );
}
