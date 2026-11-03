import Link from "next/link";

const trendingTopics = [
  { category: "Technology · Trending", title: "#BuildInPublic", posts: "12.4K posts" },
  { category: "Trending in India", title: "Hackathon", posts: "8,241 posts" },
  { category: "Technology · Trending", title: "Next.js", posts: "5,890 posts" },
  { category: "Technology · Trending", title: "React 19", posts: "3,421 posts" },
];

const PopularTags = () => {
  return (
    <div className="rounded-2xl border border-borderGray bg-black">
      <h2 className="px-4 pt-3 pb-2 text-[20px] font-extrabold leading-6 text-textGrayLight">
        {"What's"} happening
      </h2>
      {trendingTopics.map((topic, i) => (
        <div
          key={i}
          className="px-4 py-3 hover:bg-surfaceHover transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-textGray leading-4">{topic.category}</span>
            <svg viewBox="0 0 24 24" className="w-[18.75px] h-[18.75px] fill-textGray">
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>
          </div>
          <h3 className="text-[15px] font-bold text-textGrayLight leading-5 mt-0.5">
            {topic.title}
          </h3>
          <span className="text-[13px] text-textGray leading-4">{topic.posts}</span>
        </div>
      ))}
      <Link
        href="/"
        className="block px-4 py-3 text-[15px] text-[#1d9bf0] hover:bg-surfaceHover rounded-b-2xl transition-colors"
      >
        Show more
      </Link>
    </div>
  );
};

export default PopularTags;
