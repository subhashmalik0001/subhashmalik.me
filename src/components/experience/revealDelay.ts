import type { CSSProperties } from "react";

/** Stagger index for `[data-reveal]` children (90ms per step). */
export const d = (i: number) => ({ "--d": i } as CSSProperties);

