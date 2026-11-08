import type { Experience } from "@/data/experiences";
import { computeDuration, formatYM } from "@/data/experiences";
import { d } from "../revealDelay";

/** Employment period row — rendered only when verified dates or approximate duration exist. */
export default function ExperienceMeta({ exp }: { exp: Experience }) {
  if (!exp.start && !exp.approxDuration) return null;

  return (
    <div className="xp-row" data-reveal style={d(2)}>
      <span className="xp-emoji" aria-hidden="true">
        📅
      </span>
      <p className="xp-period">
        {exp.start ? (
          <>
            <time dateTime={exp.start}>{formatYM(exp.start)}</time>
            {" — "}
            {exp.end ? (
              <time dateTime={exp.end}>{formatYM(exp.end)}</time>
            ) : exp.current ? (
              <span className="xp-present">Present</span>
            ) : null}
            {(exp.end || exp.current) && (
              <span className="xp-duration">
                {"  "}
                {computeDuration(exp.start, exp.end)}
              </span>
            )}
          </>
        ) : (
          <span className="xp-duration">{exp.approxDuration}</span>
        )}
      </p>
    </div>
  );
}
