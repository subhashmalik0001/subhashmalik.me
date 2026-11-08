import ExperienceSection from "@/components/experience/ExperienceSection";
import FramedButton from "@/components/design-system/FramedButton";
import { IndexBar } from "@/components/design-system/SectionFrame";
import { EXPERIENCES } from "@/data/experiences";

export const metadata = {
  title: "Experience — Subhash Malik",
  description:
    "Tech stack, GitHub activity and professional experience of Subhash Malik — Paytm, HackBriven, Alexa Developer Community and CU-TBI.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen xp-wide-route">
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
              Experience
            </h1>
            <span className="text-[12px] leading-4 text-textGray">
              {EXPERIENCES.length} roles · Stack &amp; activity
            </span>
          </div>
        </div>
        <span className="hidden xsm:inline frame-label">
          [ 0{EXPERIENCES.length} ROLES ]
        </span>
      </div>

      {/* Katanex Index Bar */}
      <IndexBar index={3} label="EXPERIENCE" />

      <ExperienceSection />
    </div>
  );
}
