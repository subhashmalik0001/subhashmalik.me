import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/data/experiences";
import { framedButton } from "@/components/design-system/FramedButton";
import { d } from "../revealDelay";

export default function ExperienceDescription({ exp }: { exp: Experience }) {
  return (
    <>
      <div className="xp-row mt-1" data-reveal style={d(4)}>
        <span className="xp-emoji" aria-hidden="true">
          📢
        </span>
        <p className="xp-headline">{exp.headline}</p>
      </div>
      <div className="xp-row xp-desc-row" data-reveal style={d(5)}>
        <span aria-hidden="true" />
        <div>
          <p className="xp-desc">{exp.description}</p>
          {exp.links && exp.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {exp.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={framedButton({ variant: "secondary", size: "sm" })}
                >
                  <span>{l.label}</span>
                  <ArrowUpRight size={14} strokeWidth={2.25} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
