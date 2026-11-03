import ProjectsFeed from "@/components/ProjectsFeed";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/mockData";

export const metadata = {
  title: "Projects / Subhash Malik",
  description: "Featured engineering projects, hackathon winners, and architectures by Subhash Malik",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="flex items-center gap-6 sticky top-0 backdrop-blur-md bg-black/65 px-4 py-1 z-30 h-[53px] border-b border-borderGray">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surfaceHover transition-colors"
          title="Back"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-textGrayLight">
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
          </svg>
        </Link>
        <div className="flex flex-col">
          <h1 className="text-[17px] font-extrabold leading-[22px] text-textGrayLight">
            Projects
          </h1>
          <span className="text-[13px] leading-4 text-textGray">
            {MOCK_PROJECTS.length} showcase projects
          </span>
        </div>
      </div>

      {/* Hero Sub-header */}
      <div className="px-4 py-4 border-b border-borderGray bg-[#0a0a0a]">
        <h2 className="text-[20px] font-extrabold text-textGrayLight leading-6">
          Featured Engineering Work
        </h2>
        <p className="text-[14px] text-textGray mt-1">
          Hackathon wins, open-source architectures, and high-performance full-stack applications with live demos and source code.
        </p>
      </div>

      {/* Projects Feed */}
      <ProjectsFeed />
    </div>
  );
}
