"use client";

import { useState } from "react";
import ProfileTabs, { ProfileTabType } from "./ProfileTabs";
import ProjectsFeed from "./ProjectsFeed";

export default function ProfileContent({
  feedSlot,
}: {
  feedSlot: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<ProfileTabType>("Posts");

  return (
    <div>
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div id="projects">
        {activeTab === "Projects" ? (
          <ProjectsFeed />
        ) : (
          feedSlot
        )}
      </div>
    </div>
  );
}
