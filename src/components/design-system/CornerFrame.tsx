import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Shared class builder for the architectural frame system.
 * Use it directly on existing elements (`className={frame({...})}`) when a
 * wrapper element is not desirable, e.g. on <button>, <a>, <li>.
 */
export type FrameVariant = "full" | "corners" | "divider";
export type FrameTone = "primary" | "secondary" | "subtle";
export type FrameSize = "sm" | "md" | "lg";
export type FrameOffset = "edge" | "outset" | "inset";
export type Corner = "tl" | "tr" | "bl" | "br";

export interface FrameOptions {
  variant?: FrameVariant;
  tone?: FrameTone;
  size?: FrameSize;
  offset?: FrameOffset;
  interactive?: boolean;
  /** Only show the brackets on hover / focus */
  reveal?: boolean;
  /** Corners to render (defaults to all four) */
  corners?: Corner[];
}

const ALL: Corner[] = ["tl", "tr", "bl", "br"];

export function frame({
  variant = "full",
  tone = "secondary",
  size = "md",
  offset = "edge",
  interactive = false,
  reveal = false,
  corners = ALL,
}: FrameOptions = {}): string {
  const c = ["cf", `cf--${variant}`];
  if (tone !== "secondary") c.push(`cf--${tone}`);
  if (size !== "md") c.push(`cf--${size}`);
  if (offset !== "edge") c.push(`cf--${offset}`);
  if (interactive) c.push("cf--interactive");
  if (reveal) c.push("cf--reveal");
  for (const k of ALL) if (!corners.includes(k)) c.push(`cf--no-${k}`);
  return c.join(" ");
}

type CornerFrameProps = FrameOptions & {
  as?: ElementType;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * <CornerFrame variant="full | corners | divider">…</CornerFrame>
 *
 * Brackets are drawn by a single pseudo-element (see styles/frame.css), so
 * they never affect layout, never intercept clicks, and are never clipped by
 * the content layer.
 */
export default function CornerFrame({
  as: Tag = "div",
  variant,
  tone,
  size,
  offset,
  interactive,
  reveal,
  corners,
  className = "",
  contentClassName,
  children,
  ...rest
}: CornerFrameProps) {
  const classes = `${frame({ variant, tone, size, offset, interactive, reveal, corners })} ${className}`.trim();
  return (
    <Tag className={classes} {...rest}>
      {contentClassName ? <div className={`cf__content ${contentClassName}`}>{children}</div> : children}
    </Tag>
  );
}

