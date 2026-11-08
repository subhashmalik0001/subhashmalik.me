import type { Experience } from "@/data/experiences";
import { d } from "../revealDelay";

export default function CompanyHeader({ exp }: { exp: Experience }) {
  const initials = exp.shortName ?? exp.organization.slice(0, 2).toUpperCase();
  const topLine = exp.designation ? exp.organization : exp.subtitle ?? "Organization";
  const mainTitle = exp.designation ?? "CU-TBI";

  return (
    <div className="xp-company-header">
      <div className="xp-logo" data-reveal style={d(0)}>
        {exp.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={exp.logo}
            alt={`${exp.organization} logo`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span
            className="xp-logo-initials"
            role="img"
            aria-label={`${exp.organization} initials`}
          >
            {initials}
          </span>
        )}
      </div>
      <div className="min-w-0" data-reveal style={d(1)}>
        <p className="xp-company">{topLine}</p>
        <h3 className="xp-designation">{mainTitle}</h3>
      </div>
    </div>
  );
}
