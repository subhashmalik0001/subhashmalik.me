import Link from "next/link";
import { currentUser } from "@/auth";
import { Feather, MoreHorizontal } from "lucide-react";
import LeftBarNav from "./LeftBarNav";
import CornerFrame from "./design-system/CornerFrame";
import { framedButton } from "./design-system/FramedButton";

const LeftBar = async () => {
  const user = await currentUser();

  return (
    <div className="h-screen sticky top-0 py-3 w-full flex flex-col">
      <CornerFrame
        as="aside"
        variant="full"
        tone="secondary"
        className="flex-1 min-h-0 flex flex-col justify-between bg-[#050505]/90 p-2 xxl:p-3.5"
      >
        <div className="flex flex-col items-center xxl:items-stretch min-h-0 overflow-y-auto pr-0.5">
          {/* Brand Logo + Katanex Header Divider */}
          <div className="w-full pb-2.5 mb-2.5 border-b border-[var(--border-subtle)] flex items-center justify-center xxl:justify-between">
            <Link
              href="/"
              className="px-1.5 py-1 hover:bg-white/[0.04] transition-colors flex items-center justify-center xxl:justify-start"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/general/logo.png"
                alt="Subhash Malik"
                className="h-10 sm:h-11 xxl:h-14 w-auto max-w-[44px] xxl:max-w-[168px] object-contain"
              />
            </Link>
            <span className="hidden xxl:inline frame-label pr-1">[ NAV ]</span>
          </div>

          {/* Nav Items */}
          <LeftBarNav />

          {/* Post CTA Button (framed with Katanex corner brackets) */}
          <div className="w-full pt-4 pb-2 px-1 flex justify-center xxl:block">
            <Link
              href="/compose/post"
              aria-label="Compose post"
              className={`${framedButton({ variant: "primary" })} w-10 h-10 !p-0 xxl:w-full xxl:h-auto xxl:!py-2.5 xxl:!px-4`}
            >
              <Feather size={19} className="xxl:hidden" />
              <span className="hidden xxl:inline text-[15px] tracking-tight">Post</span>
            </Link>
          </div>
        </div>

        {/* Framed Account Switcher */}
        {user && (
          <div className="pt-2.5 mt-2 border-t border-[var(--border-subtle)] w-full">
            <button
              type="button"
              className="flex items-center justify-center xxl:justify-between w-full p-1.5 xxl:p-2.5 border border-[var(--border-subtle)] hover:border-[var(--border-secondary)] bg-[#0A0A0A] hover:bg-[#111111] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 border border-[var(--border-secondary)] p-[2px] bg-black flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden xxl:flex flex-col items-start min-w-0">
                  <span className="font-bold text-[14px] text-[#E7E9EA] leading-4 truncate">
                    Subhash Malik
                  </span>
                  <span className="text-[12px] text-[#71767B] leading-4 mt-0.5 truncate">
                    @SubhashMalik01
                  </span>
                </div>
              </div>
              <MoreHorizontal size={17} className="hidden xxl:block text-[#8A8F94] flex-shrink-0" />
            </button>
          </div>
        )}
      </CornerFrame>
    </div>
  );
};

export default LeftBar;
