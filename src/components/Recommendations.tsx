"use client";

import Link from "next/link";
import { MOCK_RECOMMENDATIONS } from "@/mockData";
import { useState } from "react";
import CornerFrame from "./design-system/CornerFrame";
import { framedButton } from "./design-system/FramedButton";

interface RecommendationUser {
  id: string;
  displayName: string;
  username: string;
  img: string | null;
  platform?: string;
  url?: string;
}

const Recommendations = () => {
  return (
    <CornerFrame variant="full" tone="secondary" className="bg-[#050505]">
      <div className="px-4 py-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
        <h2 className="text-[18px] font-extrabold leading-6 text-textGrayLight">
          You might like
        </h2>
        <span className="frame-label">[ NETWORK ]</span>
      </div>
      <div className="divide-y divide-[var(--border-subtle)]">
        {MOCK_RECOMMENDATIONS.map((person) => (
          <RecommendationCard key={person.id} person={person} />
        ))}
      </div>
      <Link
        href="/experience"
        className="flex items-center justify-between px-4 py-3 border-t border-[var(--border-subtle)] text-[13px] font-medium text-[#E7E9EA] hover:bg-white/[0.04] transition-colors"
      >
        <span>Show more</span>
        <span className="frame-label">↗</span>
      </Link>
    </CornerFrame>
  );
};

const RecommendationCard = ({
  person,
}: {
  person: RecommendationUser;
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFollowing((prev) => !prev);
    if (person.url) {
      window.open(person.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="px-4 py-3 flex items-center justify-between gap-3 hover:bg-white/[0.03] transition-colors">
      <a
        href={person.url || "#"}
        target={person.url ? "_blank" : undefined}
        rel={person.url ? "noopener noreferrer" : undefined}
        className="flex items-center gap-3 min-w-0 flex-1 group"
      >
        <div className="w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0 group-hover:border-[var(--brand-primary)] transition-colors overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.img || "/general/noAvatar.png"}
            alt={person.displayName}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[14px] font-bold text-textGrayLight truncate leading-5 group-hover:underline">
              {person.displayName}
            </h3>
            {person.platform && (
              <span className="text-[10px] text-textGray px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-white/[0.03] flex-shrink-0 font-mono">
                {person.platform}
              </span>
            )}
          </div>
          <span className="text-[12px] text-textGray leading-4 block truncate">
            @{person.username}
          </span>
        </div>
      </a>
      <button
        type="button"
        onClick={handleFollowClick}
        aria-label={`Follow ${person.displayName} on ${person.platform || "social media"}`}
        className={`${framedButton({
          variant: isFollowing ? "secondary" : "primary",
          size: "sm",
        })} mr-1 flex-shrink-0`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Recommendations;
