import { d } from "../revealDelay";

export default function TechnologyTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <div className="xp-row" data-reveal style={d(3)}>
      <span className="xp-emoji flex items-center" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] mt-[4px]"
          fill="none"
        >
          <path
            d="M8.5 14.5L7 22l5-2.6L17 22l-1.5-7.5"
            fill="#E07A22"
          />
          <circle cx="12" cy="9.5" r="6.5" fill="#F5A623" />
          <circle cx="12" cy="9.5" r="3.8" fill="#FFD166" />
        </svg>
      </span>
      <ul className="flex flex-wrap gap-2" aria-label="Skills and focus areas">
        {tags.map((tag) => (
          <li key={tag} className="xp-pill">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
