import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export default function BoardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-[#E7E9EA]">
      <div className="max-w-[1280px] mx-auto flex">
        {/* LEFT SIDEBAR */}
        <div className="hidden sm:flex flex-col items-end xl:items-start px-2 xxl:px-8 flex-shrink-0 w-[72px] xxl:w-[275px]">
          <LeftBar />
        </div>
        {/* CENTER CONTENT */}
        <div className="board-center flex-1 max-w-[600px] min-w-0 border-x border-borderGray">
          {children}
          {modal}
        </div>
        {/* RIGHT SIDEBAR */}
        <div className="board-right hidden lg:flex ml-6 flex-shrink-0">
          <RightBar />
        </div>
      </div>
    </div>
  );
}
