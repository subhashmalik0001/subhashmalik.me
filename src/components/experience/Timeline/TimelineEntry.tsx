import type { Experience } from "@/data/experiences";
import Reveal from "../Reveal";
import CompanyHeader from "./CompanyHeader";
import ExperienceMeta from "./ExperienceMeta";
import TechnologyTags from "./TechnologyTags";
import ExperienceDescription from "./ExperienceDescription";

export default function TimelineEntry({ exp, index }: { exp: Experience; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <Reveal
      as="li"
      className="xp-entry list-none"
      amount={0.18}
      data-timeline-entry=""
      aria-label={`${number}. ${exp.designation ?? ""} ${exp.organization}`.trim()}
    >
      <div className="xp-number-wrap">
        <span className="xp-number" data-timeline-marker aria-hidden="true">
          {number}
        </span>
      </div>

      <div className="xp-entry-body min-w-0 flex flex-col">
        <CompanyHeader exp={exp} />
        <div className="xp-details">
          <ExperienceMeta exp={exp} />
          <TechnologyTags tags={exp.tags} />
          <ExperienceDescription exp={exp} />
        </div>
      </div>
    </Reveal>
  );
}
