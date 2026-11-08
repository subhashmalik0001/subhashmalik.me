import type { TechCategory as TechCategoryType } from "@/data/technologies";
import TechIcon from "./TechIcon";
import { d } from "../revealDelay";

export default function TechCategory({
  category,
  index,
}: {
  category: TechCategoryType;
  index: number;
}) {
  const labelId = `tech-${category.id}`;
  return (
    <section aria-labelledby={labelId} data-reveal style={d(index)} className="min-w-0">
      <h3 id={labelId} className="text-[11px] font-semibold uppercase tracking-wider text-[#777] mb-2.5">
        {category.label}
      </h3>
      <ul className="xp-tech-grid">
        {category.items.map((tech) => (
          <TechIcon key={tech.name} tech={tech} categoryLabel={category.label} />
        ))}
      </ul>
    </section>
  );
}
