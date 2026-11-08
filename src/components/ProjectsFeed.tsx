"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { framedButton } from "./design-system/FramedButton";
import { MOCK_PROJECTS, ProjectItem } from "@/mockData";

export default function ProjectsFeed() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Hackathons", "Full Stack", "Featured"];

  const filteredProjects = MOCK_PROJECTS.filter((project: ProjectItem) => {
    if (filter === "All") return true;
    if (filter === "Hackathons") return project.category.includes("Hack");
    if (filter === "Full Stack")
      return (
        project.category.includes("Full Stack") ||
        project.techStack.includes("Next.js 15")
      );
    if (filter === "Featured") return project.featured;
    return true;
  });

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 border-b border-[var(--border-secondary)] bg-[#050505] overflow-x-auto">
        <div className="flex items-center gap-2">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={
                  active
                    ? `${framedButton({ variant: "secondary", size: "sm", corners: true })} !bg-white/[0.11] !border-[var(--border-primary)] !text-white`
                    : `${framedButton({ variant: "outline", size: "sm", corners: false })} !text-textGray hover:!text-white`
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
        <span className="hidden sm:inline frame-label flex-shrink-0">
          [ {String(filteredProjects.length).padStart(2, "0")} SHOWN ]
        </span>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-[var(--border-secondary)]">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
