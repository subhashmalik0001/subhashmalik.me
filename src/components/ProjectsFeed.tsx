"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { MOCK_PROJECTS, ProjectItem } from "@/mockData";

export default function ProjectsFeed() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Hackathons", "Full Stack", "Featured"];

  const filteredProjects = MOCK_PROJECTS.filter((project: ProjectItem) => {
    if (filter === "All") return true;
    if (filter === "Hackathons") return project.category.includes("Hack");
    if (filter === "Full Stack") return project.category.includes("Full Stack") || project.techStack.includes("Next.js 15");
    if (filter === "Featured") return project.featured;
    return true;
  });

  return (
    <div className="w-full">
      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-borderGray overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
              filter === cat
                ? "bg-textGrayLight text-black"
                : "bg-[#16181C] text-textGray hover:text-textGrayLight border border-borderGray"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

