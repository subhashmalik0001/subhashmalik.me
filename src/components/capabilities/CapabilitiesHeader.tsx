"use client";

export default function CapabilitiesHeader() {
  return (
    <div className="mb-5 sm:mb-6">
      {/* Small Category Label */}
      <span className="font-mono text-[11px] uppercase tracking-wider text-[#71767B] block mb-1.5">
        {"// WHAT I DO"}
      </span>

      {/* Main Heading */}
      <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold text-white tracking-tight leading-snug">
        Building technology, communities &amp; opportunities.
      </h2>

      {/* Supporting Text */}
      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#8E8E93] max-w-[620px] mt-1.5">
        Turning ideas into products, communities, and meaningful collaborations.
      </p>
    </div>
  );
}
