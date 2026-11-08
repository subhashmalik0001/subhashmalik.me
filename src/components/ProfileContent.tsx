"use client";

import { useState } from "react";
import ProfileTabs, { ProfileTabType } from "./ProfileTabs";
import ProjectsFeed from "./ProjectsFeed";
import { HighlightsPanel, MediaGallery } from "./PortfolioSections";

export default function ProfileContent({
  feedSlot,
}: {
  feedSlot: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<ProfileTabType>("Posts");

  return (
    <div>
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div id="projects" className="scroll-mt-[56px]">
        {activeTab === "Projects" ? (
          <ProjectsFeed />
        ) : activeTab === "Highlights" ? (
          <HighlightsPanel />
        ) : activeTab === "Media" ? (
          <MediaGallery />
        ) : (
          feedSlot
        )}
      </div>
    </div>
  );
}
