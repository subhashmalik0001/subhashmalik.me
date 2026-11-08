"use client";

import Link from "next/link";
import { MOCK_RECOMMENDATIONS } from "@/mockData";
import { useState } from "react";
import CornerFrame from "./design-system/CornerFrame";
import { framedButton } from "./design-system/FramedButton";

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
  person: { id: string; displayName: string; username: string; img: string | null };
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="px-4 py-3 flex items-center justify-between gap-3 hover:bg-white/[0.03] transition-colors">
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className="w-10 h-10 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.img || "/general/noAvatar.png"}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-[14px] font-bold text-textGrayLight truncate leading-5">
            {person.displayName}
          </h3>
          <span className="text-[12px] text-textGray leading-4 block truncate">
            @{person.username}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsFollowing(!isFollowing)}
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
