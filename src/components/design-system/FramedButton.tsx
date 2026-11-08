import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { frame, FrameSize } from "./CornerFrame";

export type ButtonVariant = "primary" | "secondary" | "outline" | "icon" | "nav";

export interface FramedButtonStyle {
  variant?: ButtonVariant;
  size?: "sm" | "md";
  /** show the white L-brackets (default true) */
  corners?: boolean;
}

/** Class builder — use on existing <button>/<a> elements to keep their semantics. */
export function framedButton({
  variant = "secondary",
  size = "md",
  corners = true,
}: FramedButtonStyle = {}): string {
  const cornerSize: FrameSize = size === "sm" || variant === "icon" ? "sm" : "md";
  const c = ["fbtn", `fbtn--${variant}`];
  if (size === "sm") c.push("fbtn--sm");
  if (corners) {
    c.push(frame({ variant: "corners", size: cornerSize, interactive: true }));
  }
  return c.join(" ");
}

type CommonProps = FramedButtonStyle & {
  className?: string;
  children: ReactNode;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  title?: string;
  "aria-label"?: string;
};

/**
 * Real <button> (or <a>/<Link> when `href` is given) with the Katanex
 * rectangular treatment. Never a decorative div.
 */
export default function FramedButton(props: AsButton | AsLink) {
  const { variant, size, corners, className = "", children } = props;
  const classes = `${framedButton({ variant, size, corners })} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, external, title } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          title={title}
          aria-label={props["aria-label"]}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} title={title} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line no-unused-vars
  const { variant: _v, size: _s, corners: _c, className: _cn, children: _ch, ...buttonProps } =
    props as AsButton;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}

