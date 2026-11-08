import "@/styles/experience.css";

import CornerFrame from "@/components/design-system/CornerFrame";
import SectionHeader from "./SectionHeader";
import ContributionGraph from "./ContributionGraph/ContributionGraph";
import TechStackGrid from "./TechStack/TechStackGrid";
import ExperienceTimeline from "./Timeline/ExperienceTimeline";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Stacks and experience" className="xp">
      <div className="xp-inner">
        <SectionHeader />

        {/* Contribution calendar + 2-row tech marquee framed in one Katanex CornerFrame */}
        <Reveal className="xp-card-wrap" amount={0.08}>
          <CornerFrame
            variant="full"
            size="lg"
            tone="secondary"
            className="xp-card"
            data-reveal=""
          >
            <ContributionGraph />
            <div className="xp-divider" />
            <TechStackGrid />
          </CornerFrame>
        </Reveal>

        <ExperienceTimeline />
      </div>
    </section>
  );
}
