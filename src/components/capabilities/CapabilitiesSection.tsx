"use client";

import "@/styles/capabilities.css";
import CapabilitiesHeader from "./CapabilitiesHeader";
import CapabilitiesGrid from "./CapabilitiesGrid";

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities and what I do"
      className="capabilities-container py-6 sm:py-8 px-4 sm:px-6 border-t border-[var(--border-subtle)] bg-black relative z-10"
    >
      <CapabilitiesHeader />
      <CapabilitiesGrid />
    </section>
  );
}
