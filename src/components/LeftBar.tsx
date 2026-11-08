import Link from "next/link";
import { currentUser } from "@/auth";
import { Feather, MoreHorizontal } from "lucide-react";
import LeftBarNav from "./LeftBarNav";

const LeftBar = async () => {
  const user = await currentUser();

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pb-4">
      <div className="flex flex-col items-center xxl:items-start">
        {/* Brand Logo */}
        <Link
          href="/"
          className="p-1.5 xxl:px-2 xxl:py-2 rounded-2xl hover:bg-[#16181C] transition-colors mt-1 mb-2 flex items-center justify-center xxl:justify-start"
        >
          <img
            src="/general/logo.png"
            alt="Logo"
            className="h-12 sm:h-14 xl:h-16 xxl:h-[80px] w-auto max-w-[80px] sm:max-w-[120px] xxl:max-w-[200px] object-contain"
          />
        </Link>

        {/* Nav Items */}
        <LeftBarNav />

        {/* Post Button */}
        <Link
          href="/compose/post"
          className="mt-4 bg-white text-black rounded-full font-bold flex items-center justify-center
            w-12 h-12 xxl:w-full xxl:h-auto xxl:py-3 xxl:px-4"
        >
          <Feather size={24} className="xxl:hidden" />
          <span className="hidden xxl:inline text-[17px]">Post</span>
        </Link>
      </div>

      {/* Account Switcher */}
      {user && (
        <button className="flex items-center justify-between w-full p-3 rounded-full hover:bg-[#16181C] transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src={user.imageUrl}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden xxl:flex flex-col items-start">
              <span className="font-bold text-[15px] text-[#E7E9EA] leading-5">
                Subhash Malik
              </span>
              <span className="text-[13px] text-[#71767B] leading-4">
                @SubhashMalik01
              </span>
            </div>
          </div>
          <MoreHorizontal size={18} className="hidden xxl:block text-[#E7E9EA]" />
        </button>
      )}
    </div>
  );
};

export default LeftBar;
