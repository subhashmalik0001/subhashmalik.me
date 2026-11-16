import Link from "next/link";
import { frame, FrameSize, FrameTone } from "@/components/design-system/CornerFrame";
import type { ImageAspectRatio } from "@/types/achievement";

const RATIO_CLASS: Record<ImageAspectRatio, string> = {
  "16:9": "ach-ratio-16-9",
  "4:3": "ach-ratio-4-3",
  "3:4": "ach-ratio-3-4",
  "4:5": "ach-ratio-4-5",
  "1:1": "ach-ratio-1-1",
  certificate: "ach-ratio-certificate",
};

export interface AchievementImageFrameProps {
  src: string;
  alt: string;
  ratio?: ImageAspectRatio;
  /** Override object-fit; defaults to 'contain' for certificates, 'cover' otherwise */
  fit?: "cover" | "contain";
  badge?: string;
  indexLabel?: string;
  href?: string;
  onClick?: () => void;
  size?: FrameSize;
  tone?: FrameTone;
  priority?: boolean;
  className?: string;
}

/**
 * Reusable Katanex editorial image frame built directly on the portfolio's
 * shared CornerFrame system (`frame()`).
 *
 * - Sharp 90° rectangular container + 4 white L-shaped corner brackets
 * - 6px dark inset gap separating the brackets from the photograph
 * - Preserves original aspect ratio and never crops certificates
 */
export default function AchievementImageFrame({
  src,
  alt,
  ratio = "16:9",
  fit,
  badge,
  indexLabel,
  href,
  onClick,
  size = "md",
  tone = "secondary",
  priority = false,
  className = "",
}: AchievementImageFrameProps) {
  const resolvedFit = fit ?? (ratio === "certificate" ? "contain" : "cover");
  const outerClasses = `${frame({
    variant: "corners",
    size,
    tone,
    interactive: true,
  })} ach-frame ${className}`.trim();

  const inner = (
    <div
      className={`ach-frame-inner ${RATIO_CLASS[ratio]} ${
        resolvedFit === "contain" ? "ach-fit-contain" : "ach-fit-cover"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {indexLabel && (
        <span className="ach-frame-index" aria-hidden="true">
          {indexLabel}
        </span>
      )}
      {badge && (
        <span className="ach-frame-badge">
          <span className="w-1.5 h-1.5 bg-white inline-block" aria-hidden="true" />
          <span>{badge}</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={outerClasses} aria-label={alt}>
        {inner}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${outerClasses} w-full text-left cursor-pointer`}
        aria-label={`Inspect ${alt}`}
      >
        {inner}
      </button>
    );
  }

  return <div className={outerClasses}>{inner}</div>;
}
