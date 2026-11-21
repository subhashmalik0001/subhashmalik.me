"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { framedButton } from "./design-system/FramedButton";
import { MOCK_PROJECTS, ProjectItem } from "@/mockData";

export default function ProjectsFeed() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Featured", "Products", "Hackathons", "AI & Systems"];

  const filteredProjects = MOCK_PROJECTS.filter((project: ProjectItem) => {
    if (filter === "All") return true;
    if (filter === "Featured") return project.featured;
    if (filter === "Products")
      return (
        project.category.includes("Product") ||
        project.category.includes("SaaS") ||
        project.category.includes("Play Store") ||
        project.category.includes("Platform") ||
        project.category.includes("FinTech") ||
        project.id === "docyo" ||
        project.id === "nebula" ||
        project.id === "edvanta" ||
        project.id === "will" ||
        project.id === "fluxar"
      );
    if (filter === "Hackathons")
      return (
        project.category.includes("Hackathon") ||
        project.category.includes("Winner") ||
        project.category.includes("Runner-Up") ||
        project.category.includes("Prize") ||
        project.category.includes("Place") ||
        project.category.includes("Hack")
      );
    if (filter === "AI & Systems")
      return project.techStack.some((t) =>
        /AI|ML|Rust|Python|Vision|EEG|Tauri|LLM|Serial|FastAPI/i.test(t)
      );
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
