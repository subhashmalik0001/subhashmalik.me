import type { ReactNode } from "react";

/** Total number of top-level portfolio sections (Profile, Experience, Projects). */
export const SECTION_TOTAL = 3;

/**
 * Katanex-style index strip: "[ 01 / 03 ] ………… [ PROFILE ]"
 * Sits on a section boundary with short vertical dividers on each end.
 */
export function IndexBar({ index, label }: { index: number; label: string }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="index-bar" role="presentation">
      <div className="index-bar__cell index-bar__cell--start">
        <span className="frame-label">
          [ {pad(index)} / {pad(SECTION_TOTAL)} ]
        </span>
      </div>
      <div className="index-bar__cell index-bar__cell--end">
        <span className="frame-label">[ {label} ]</span>
      </div>
    </div>
  );
}

/**
 * Section wrapper: structural top/bottom dividers + optional index strip.
 */
export default function SectionFrame({
  index,
  label,
  id,
  className = "",
  children,
}: {
  index?: number;
  label?: string;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`cf cf--divider ${className}`}>
      {index !== undefined && label && <IndexBar index={index} label={label} />}
      {children}
    </section>
  );
}

