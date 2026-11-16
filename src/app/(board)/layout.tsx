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
      <div className="relative z-10 max-w-[1560px] mx-auto flex justify-between px-2 sm:px-4 xl:px-6">
        {/* LEFT SIDEBAR - shifted to far left */}
        <div className="hidden sm:flex flex-col items-center xxl:items-stretch px-1 xxl:px-2 flex-shrink-0 w-[76px] xxl:w-[250px]">
          <LeftBar />
        </div>
        {/* CENTER CONTENT - expanded middle */}
        <div className="board-center flex-1 max-w-[920px] xl:max-w-[960px] min-w-0 border-x border-[var(--border-secondary)] pb-14 sm:pb-0 flex flex-col mx-2 sm:mx-4 xl:mx-6">
          <div className="flex-1">{children}</div>
          <Footer />
          {modal}
        </div>
        {/* RIGHT SIDEBAR - shifted to far right */}
        <div className="board-right hidden lg:flex flex-shrink-0 w-[320px] xl:w-[340px]">
          <RightBar />
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
