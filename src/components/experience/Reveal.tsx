"use client";

import { ElementType, ReactNode } from "react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

/**
 * Wraps content whose children carry `data-reveal` (+ optional `--d` delay
 * index). Children fade/slide in, staggered, when the wrapper enters view.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  amount = 0.2,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  amount?: number;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useInViewAnimation<HTMLElement>({ amount });
  return (
    <Tag ref={ref} className={`xp-reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
