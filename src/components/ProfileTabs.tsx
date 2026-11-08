"use client";

import { useState } from "react";
import { frame } from "./design-system/CornerFrame";

const tabs = ["Posts", "Projects", "Highlights", "Media"] as const;

export type ProfileTabType = (typeof tabs)[number];

const ProfileTabs = ({
  activeTab: controlledActiveTab,
  onTabChange,
}: {
  activeTab?: ProfileTabType;
  onTabChange?: (tab: ProfileTabType) => void;
}) => {
  const [internalTab, setInternalTab] = useState<ProfileTabType>("Posts");
  const activeTab = controlledActiveTab || internalTab;

  const handleTabClick = (tab: ProfileTabType) => {
    setInternalTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div
      role="tablist"
      aria-label="Profile sections"
      className="flex border-y border-[var(--border-secondary)] divide-x divide-[var(--border-subtle)] bg-[#050505]"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 relative flex items-center justify-center py-3.5 transition-colors cursor-pointer ${
              isActive
                ? `${frame({ variant: "corners", size: "sm", offset: "inset" })} bg-white/[0.05]`
                : "hover:bg-white/[0.03]"
            }`}
          >
            <span
              className={`text-[14px] leading-5 tracking-wide ${
                isActive
                  ? "font-bold text-white"
                  : "font-medium text-textGray hover:text-textGrayLight"
              }`}
            >
              {tab}
            </span>
            {isActive && (
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProfileTabs;
