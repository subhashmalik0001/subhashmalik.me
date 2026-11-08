import type { Technology } from "@/data/technologies";
import { frame } from "@/components/design-system/CornerFrame";

const initials = (name: string) => {
  const words = name
    .replace(/[^A-Za-z0-9+ ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 1) {
    const caps = words[0].replace(/[^A-Z+]/g, "");
    return caps.length >= 2 ? caps.slice(0, 3) : words[0].slice(0, 3);
  }
  return words
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
};

export default function TechIcon({
  tech,
  categoryLabel,
  duplicate = false,
}: {
  tech: Technology;
  categoryLabel: string;
  duplicate?: boolean;
}) {
  return (
    <li className="xp-marquee-item list-none">
      <div
        className={`xp-tile ${frame({
          variant: "corners",
          size: "sm",
          reveal: true,
          interactive: true,
        })}`}
        tabIndex={duplicate ? -1 : 0}
        role={duplicate ? undefined : "img"}
        aria-label={duplicate ? undefined : `${tech.name} (${categoryLabel})`}
        data-tech-name={tech.name}
        data-tech-cat={categoryLabel}
      >
        {tech.icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tech.icon}
            alt=""
            loading="eager"
            decoding="async"
            draggable={false}
          />
        ) : (
          <span className="xp-tile-initials" aria-hidden="true">
            {initials(tech.name)}
          </span>
        )}
      </div>
    </li>
  );
}
