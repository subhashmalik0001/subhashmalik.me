import Link from "next/link";
import CornerFrame from "./design-system/CornerFrame";

const trendingTopics = [
  { category: "Technology · Trending", title: "#BuildInPublic", posts: "12.4K posts" },
  { category: "Trending in India", title: "Hackathon", posts: "8,241 posts" },
  { category: "Technology · Trending", title: "Next.js", posts: "5,890 posts" },
  { category: "Technology · Trending", title: "React 19", posts: "3,421 posts" },
];

const PopularTags = () => {
  return (
    <CornerFrame variant="full" tone="secondary" className="bg-[#050505]">
      <div className="px-4 py-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
        <h2 className="text-[18px] font-extrabold leading-6 text-textGrayLight">
          {"What's"} happening
        </h2>
        <span className="frame-label">[ TRENDS ]</span>
      </div>
      <div className="divide-y divide-[var(--border-subtle)]">
        {trendingTopics.map((topic, i) => (
          <div
            key={i}
            className="px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-textGray leading-4">{topic.category}</span>
              <span className="frame-label">0{i + 1}</span>
            </div>
            <h3 className="text-[15px] font-bold text-textGrayLight leading-5 mt-0.5">
              {topic.title}
            </h3>
            <span className="text-[12px] text-textGray leading-4">{topic.posts}</span>
          </div>
        ))}
      </div>
      <Link
        href="/projects"
        className="flex items-center justify-between px-4 py-3 border-t border-[var(--border-subtle)] text-[13px] font-medium text-[#E7E9EA] hover:bg-white/[0.04] transition-colors"
      >
        <span>Show more</span>
        <span className="frame-label">↗</span>
      </Link>
    </CornerFrame>
  );
};

export default PopularTags;
