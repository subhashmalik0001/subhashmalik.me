import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold text-textGrayLight">Page not found</h2>
      <p className="text-textGray">
        {"Hmm...this page doesn't exist. Try searching for something else."}
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-textGrayLight text-black font-bold rounded-full hover:bg-opacity-90 transition-opacity"
      >
        Go to Home
      </Link>
    </div>
  );
}

