import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import PageGrid from "@/components/design-system/PageGrid";

export default function BoardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-[#E7E9EA] relative">
      <PageGrid />
      <div className="relative z-10 max-w-[1280px] mx-auto flex">
        {/* LEFT SIDEBAR */}
        <div className="hidden sm:flex flex-col items-center xxl:items-stretch px-2 xxl:px-5 flex-shrink-0 w-[76px] xxl:w-[275px]">
          <LeftBar />
        </div>
        {/* CENTER CONTENT */}
        <div className="board-center flex-1 max-w-[600px] min-w-0 border-x border-[var(--border-secondary)] pb-14 sm:pb-0 flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
          {modal}
        </div>
        {/* RIGHT SIDEBAR */}
        <div className="board-right hidden lg:flex ml-6 pr-4 flex-shrink-0">
          <RightBar />
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
