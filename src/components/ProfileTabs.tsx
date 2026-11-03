"use client";

import { useState } from "react";

const tabs = ["Posts", "Replies", "Highlights", "Media"] as const;

type TabType = (typeof tabs)[number];

const ProfileTabs = ({
  onTabChange,
}: {
  onTabChange?: (tab: TabType) => void;
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("Posts");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex border-b border-borderGray">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className="flex-1 relative flex items-center justify-center py-4 hover:bg-surfaceHover transition-colors cursor-pointer"
        >
          <span
            className={`text-[15px] leading-5 ${
              activeTab === tab
                ? "font-bold text-textGrayLight"
                : "font-medium text-textGray"
            }`}
          >
            {tab}
          </span>
          {activeTab === tab && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-14 bg-textGrayLight rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;

