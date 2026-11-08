import type { CSSProperties, ReactNode } from "react";
import { frame, FrameSize, FrameTone } from "./CornerFrame";

/**
 * Image / media frame: thin outer border, four white brackets, small gap
 * between the frame and the media, sharp geometry. The media lives in an
 * inner clipping layer so hover zooms never clip the brackets.
 */
export default function FramedImage({
  children,
  fit = "cover",
  size = "md",
  tone = "secondary",
  gap = true,
  className = "",
  innerClassName = "",
  style,
}: {
  children: ReactNode;
  fit?: "cover" | "contain";
  size?: FrameSize;
  tone?: FrameTone;
  /** inset the media slightly inside the frame (Katanex photo card) */
  gap?: boolean;
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`${frame({ variant: "full", size, tone })} frame-media--${fit} ${
        gap ? "frame-media" : ""
      } ${className}`}
      style={style}
    >
      <div className={`frame-media__inner ${innerClassName}`}>{children}</div>
    </div>
  );
}

