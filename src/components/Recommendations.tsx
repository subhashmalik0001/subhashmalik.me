"use client";

import Link from "next/link";
import { MOCK_RECOMMENDATIONS } from "@/mockData";
import { useState } from "react";

const Recommendations = () => {
  return (
    <div className="rounded-2xl border border-borderGray bg-black">
      <h2 className="px-4 pt-3 pb-2 text-[20px] font-extrabold leading-6 text-textGrayLight">
        You might like
      </h2>
      {MOCK_RECOMMENDATIONS.map((person) => (
        <RecommendationCard key={person.id} person={person} />
      ))}
      <Link
        href="/"
        className="block px-4 py-3 text-[15px] text-[#1d9bf0] hover:bg-surfaceHover rounded-b-2xl transition-colors"
      >
        Show more
      </Link>
    </div>
  );
};

const RecommendationCard = ({ person }: { person: { id: string; displayName: string; username: string; img: string | null } }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="px-4 py-3 flex items-center justify-between hover:bg-surfaceHover transition-colors cursor-pointer">
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <img
          src={person.img || "/general/noAvatar.png"}
          alt=""
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-textGrayLight truncate leading-5">
            {person.displayName}
          </h3>
          <span className="text-[13px] text-textGray leading-4">
            @{person.username}
          </span>
        </div>
      </div>
      <button
        onClick={() => setIsFollowing(!isFollowing)}
        className={`ml-3 px-4 py-[6px] rounded-full text-sm font-bold transition-colors flex-shrink-0 ${
          isFollowing
            ? "bg-transparent border border-borderGray text-textGrayLight hover:border-red-500 hover:text-red-500"
            : "bg-textGrayLight text-black hover:bg-[#D7DBDC]"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default Recommendations;
