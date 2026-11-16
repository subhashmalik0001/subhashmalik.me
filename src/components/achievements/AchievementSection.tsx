import type { ReactNode } from "react";
import type { AchievementSectionMeta } from "@/types/achievement";
import Reveal from "@/components/experience/Reveal";
import { d } from "@/components/experience/revealDelay";

/**
 * Katanex Editorial Two-Column Category Section:
 * - Left Column (~28–30% on desktop, sticky): Category code, Heading, Description, Meta note
 * - Right Column (~70–72% on desktop): Category cards / visual grid
 */
export default function AchievementSection({
  meta,
  children,
}: {
  meta: AchievementSectionMeta;
  children: ReactNode;
}) {
  return (
    <Reveal
      as="section"
      id={meta.id}
      className="ach-section"
      amount={0.06}
      aria-labelledby={`heading-${meta.id}`}
    >
      {/* LEFT COLUMN */}
      <div className="ach-section-left" data-reveal style={d(0)}>
        <div className="ach-section-left-inner">
          <p className="ach-section-code">{meta.code}</p>
          <h2 id={`heading-${meta.id}`} className="ach-section-heading">
            {meta.heading}
          </h2>
          <p className="ach-section-desc">{meta.description}</p>
          {meta.metaNote && (
            <p className="ach-section-meta">{meta.metaNote}</p>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="ach-section-right" data-reveal style={d(1)}>
        {children}
      </div>
    </Reveal>
  );
}

