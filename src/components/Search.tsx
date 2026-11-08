import CornerFrame from "./design-system/CornerFrame";

const Search = () => {
  return (
    <div className="sticky top-0 bg-black pt-3 pb-2 z-20">
      <CornerFrame
        variant="full"
        size="sm"
        interactive
        className="bg-[#0A0A0A] py-2.5 px-3.5 flex items-center gap-3"
      >
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[#8A8F94] flex-shrink-0">
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
        </svg>
        <input
          type="text"
          placeholder="Search portfolio…"
          aria-label="Search portfolio"
          className="bg-transparent outline-none placeholder:text-[#71767B] text-[14px] text-[#E7E9EA] flex-1 min-w-0"
        />
        <span className="frame-label !text-[9.5px]">/</span>
      </CornerFrame>
    </div>
  );
};

export default Search;
