import "@/styles/experience.css";

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

        {/* Contribution calendar + tech logos share one outer container, matching Reference 1 */}
        <Reveal className="xp-card-wrap" amount={0.08}>
          <div className="xp-card" data-reveal>
            <ContributionGraph />
            <div className="xp-divider" />
            <TechStackGrid />
          </div>
        </Reveal>

        <ExperienceTimeline />
      </div>
    </section>
  );
}
