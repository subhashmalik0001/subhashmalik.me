"use client";

import { CAPABILITIES } from "@/data/capabilities";
import CapabilityCard from "./CapabilityCard";

export default function CapabilitiesGrid() {
  return (
    <div className="capabilities-grid">
      {CAPABILITIES.map((item) => (
        <CapabilityCard key={item.id} item={item} />
      ))}
    </div>
  );
}

