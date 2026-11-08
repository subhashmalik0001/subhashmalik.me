import CornerFrame from "@/components/design-system/CornerFrame";
import FramedButton from "@/components/design-system/FramedButton";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] p-6">
      <CornerFrame variant="full" tone="primary" size="lg" className="p-8 bg-[#080808] max-w-md text-center">
        <span className="frame-label">[ ERROR // 404 ]</span>
        <h2 className="text-2xl font-extrabold text-white mt-3">Page not found</h2>
        <p className="text-textGray text-[14px] mt-2 leading-5">
          {"Hmm...this page doesn't exist. Try navigating back to the portfolio."}
        </p>
        <div className="mt-6 flex justify-center">
          <FramedButton href="/" variant="primary" size="sm">
            Go to Home
          </FramedButton>
        </div>
      </CornerFrame>
    </div>
  );
}
