import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-4 w-[334px] xl:w-[350px] pb-16">
      <Search />
      <PopularTags />
      <Recommendations />
      <nav className="px-2 pt-1 text-[12px] text-textGray flex gap-x-3 gap-y-1 flex-wrap leading-4">
        <Link href="/projects" className="hover:text-textGrayLight transition-colors">
          Projects
        </Link>
        <Link href="/experience" className="hover:text-textGrayLight transition-colors">
          Experience
        </Link>
        <Link href="/#achievements" className="hover:text-textGrayLight transition-colors">
          Achievements
        </Link>
        <Link href="/#contact" className="hover:text-textGrayLight transition-colors">
          Contact
        </Link>
        <span className="w-full font-mono text-[10.5px] tracking-wider uppercase text-[#5E6368] mt-0.5">
          © 2025 Subhash Malik
        </span>
      </nav>
    </div>
  );
};

export default RightBar;
