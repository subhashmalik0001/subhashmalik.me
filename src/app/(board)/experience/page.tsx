import Link from "next/link";
import ExperienceSection from "@/components/experience/ExperienceSection";
import { EXPERIENCES } from "@/data/experiences";

export const metadata = {
  title: "Experience / Subhash Malik",
  description:
    "Tech stack, GitHub activity and professional experience of Subhash Malik — Paytm, HackBriven, Alexa Developer Community and CU-TBI.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen xp-wide-route">
      {/* Sticky Header (same as other pages) */}
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
            Experience
          </h1>
          <span className="text-[13px] leading-4 text-textGray">
            {EXPERIENCES.length} roles · Stack &amp; activity
          </span>
        </div>
      </div>

      <ExperienceSection />
    </div>
  );
}

