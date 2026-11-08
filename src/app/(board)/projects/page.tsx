import ProjectsFeed from "@/components/ProjectsFeed";
import FramedButton from "@/components/design-system/FramedButton";
import { IndexBar } from "@/components/design-system/SectionFrame";
import { MOCK_PROJECTS } from "@/mockData";

export const metadata = {
  title: "Projects — Subhash Malik",
  description:
    "Featured engineering projects, hackathon winners, and architectures by Subhash Malik",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="flex items-center justify-between gap-4 sticky top-0 backdrop-blur-md bg-black/80 px-4 py-1 z-30 h-[53px] border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-4">
          <FramedButton href="/" variant="icon" size="sm" title="Back" aria-label="Back">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-textGrayLight">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </svg>
          </FramedButton>
          <div className="flex flex-col">
            <h1 className="text-[17px] font-extrabold leading-[22px] text-textGrayLight">
              Projects
            </h1>
            <span className="text-[12px] leading-4 text-textGray">
              {MOCK_PROJECTS.length} showcase projects
            </span>
          </div>
        </div>
        <span className="hidden xsm:inline frame-label">
          [ 0{MOCK_PROJECTS.length} WORKS ]
        </span>
      </div>

      {/* Katanex Index Bar */}
      <IndexBar index={2} label="PROJECTS" />

      {/* Hero Sub-header */}
      <div className="px-4 py-4 border-b border-[var(--border-secondary)] bg-[#070707]">
        <h2 className="text-[20px] font-extrabold text-white leading-6 tracking-tight">
          Featured Engineering Work
        </h2>
        <p className="text-[14px] text-textGray mt-1 leading-5">
          Hackathon wins, open-source architectures, and high-performance full-stack applications with live demos and source code.
        </p>
      </div>

      {/* Projects Feed */}
      <ProjectsFeed />
    </div>
  );
}
