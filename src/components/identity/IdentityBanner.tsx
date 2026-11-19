"use client";

import "@/styles/identity.css";
import Link from "next/link";

/* ── Role pills distributed across two rows ── */
const ROW_1 = [
  "Software Developer",
  "Product Builder",
  "Developer Relations",
  "Community Builder",
  "Hackathon Organizer",
  "Full-Stack Developer",
  "Partnerships & Collaborations",
  "Innovation & Technology",
];

const ROW_2 = [
  "Software Engineer",
  "Product Management",
  "Developer Advocate",
  "Community Management",
  "Tech Ecosystem",
  "Product Strategy",
  "Startup Ecosystem",
  "Open Source Contributor",
];

function Pill({ label }: { label: string }) {
  return (
    <span className="identity-pill">
      {label}
    </span>
  );
}

function MarqueeRow({
  pills,
  direction,
}: {
  pills: string[];
  direction: "ltr" | "rtl";
}) {
  const trackClass =
    direction === "ltr"
      ? "identity-marquee-track identity-marquee-ltr"
      : "identity-marquee-track identity-marquee-rtl";

  return (
    <div className="identity-marquee-row">
      <div className={trackClass}>
        {/* 4 copies for seamless looping on ultra-wide */}
        {[0, 1, 2, 3].map((g) => (
          <div
            key={g}
            className="flex items-center gap-2.5 pr-2.5"
            aria-hidden={g > 0 ? "true" : undefined}
          >
            {pills.map((p, i) => (
              <Pill key={`${g}-${i}`} label={p} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IdentityBanner() {
  return (
    <section
      aria-label="Professional identity and roles"
      className="px-3 sm:px-4 py-2 sm:py-3 bg-black relative z-10"
    >
      <div className="identity-container">
        {/* ── Left Panel ── */}
        <div className="identity-left">
          <p className="identity-copy">
            Building across code, products, and communities.
          </p>

          {/* CTA */}
          <Link href="#capabilities" className="identity-cta group">
            <span className="relative z-10 text-white text-[13px] sm:text-[14px] font-semibold tracking-wide">
              Explore what I do
            </span>
          </Link>
        </div>

        {/* ── Right Panel — Dual Marquee ── */}
        <div className="identity-right">
          <MarqueeRow pills={ROW_1} direction="ltr" />
          <MarqueeRow pills={ROW_2} direction="rtl" />
        </div>
      </div>
    </section>
  );
}
