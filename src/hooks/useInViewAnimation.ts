"use client";

import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to the element the first time it enters the viewport.
 * Writes the class directly to the DOM — no React re-render needed.
 */
export function useInViewAnimation<T extends HTMLElement>(
  options: { amount?: number; once?: boolean; rootMargin?: string } = {}
) {
  const ref = useRef<T>(null);
  const { amount = 0.2, once = true, rootMargin = "0px 0px -8% 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold: amount, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once, rootMargin]);

  return ref;
}

