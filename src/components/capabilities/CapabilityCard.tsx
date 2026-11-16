"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CapabilityItem } from "@/data/capabilities";

import DeveloperVisual from "./illustrations/DeveloperVisual";
import AdvocateVisual from "./illustrations/AdvocateVisual";
import CommunityVisual from "./illustrations/CommunityVisual";
import PartnershipVisual from "./illustrations/PartnershipVisual";
import EventManagementVisual from "./illustrations/EventManagementVisual";

function getIllustration(id: string) {
  switch (id) {
    case "software-developer":
      return <DeveloperVisual />;
    case "developer-advocate":
      return <AdvocateVisual />;
    case "community-builder":
      return <CommunityVisual />;
    case "collaborations-partnerships":
      return <PartnershipVisual />;
    case "event-ecosystem":
      return <EventManagementVisual />;
    default:
      return null;
  }
}

export default function CapabilityCard({ item }: { item: CapabilityItem }) {
  return (
    <Link
      href={item.href}
      className={`cap-card cap-card--span-${item.gridSpan} group`}
      aria-label={`${item.title} — ${item.description}`}
    >
      {/* Top Header Information */}
      <div className="cap-card__header">
        <div className="flex items-center justify-between gap-2">
          <h3 className="cap-card__title">
            <span>{item.title}</span>
          </h3>
          <ArrowUpRight
            size={16}
            className="text-[#71767B] group-hover:text-white transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
          />
        </div>
        <p className="cap-card__description">{item.description}</p>
      </div>

      {/* Decorative Artwork Area (Anchored Bottom-Right) */}
      <div className="cap-card__visual">
        {getIllustration(item.id)}
      </div>
    </Link>
  );
}

