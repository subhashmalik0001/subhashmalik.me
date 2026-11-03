import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-4 w-[350px] pb-16">
      <Search />
      <PopularTags />
      <Recommendations />
      <nav className="px-4 text-[13px] text-textGray flex gap-x-3 gap-y-0.5 flex-wrap leading-4">
        <Link href="/" className="hover:underline">Terms of Service</Link>
        <Link href="/" className="hover:underline">Privacy Policy</Link>
        <Link href="/" className="hover:underline">Cookie Policy</Link>
        <Link href="/" className="hover:underline">Accessibility</Link>
        <Link href="/" className="hover:underline">Ads Info</Link>
        <Link href="/" className="hover:underline">More</Link>
        <span>© 2025 X Corp.</span>
      </nav>
    </div>
  );
};

export default RightBar;
