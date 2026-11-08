"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { TECH_CATEGORIES } from "@/data/technologies";
import Reveal from "../Reveal";
import { d } from "../revealDelay";
import TechIcon from "./TechIcon";

interface TipState {
  name: string;
  cat: string;
  x: number;
  y: number;
}

export default function TechStackGrid() {
  const [tip, setTip] = useState<TipState | null>(null);

  const { rowOne, rowTwo } = useMemo(() => {
    const all = TECH_CATEGORIES.flatMap((category) =>
      category.items.map((tech) => ({ tech, categoryLabel: category.label }))
    );
    const mid = Math.ceil(all.length / 2);
    return {
      rowOne: all.slice(0, mid),
      rowTwo: all.slice(mid),
    };
  }, []);

  const showFromEvent = useCallback((target: EventTarget | null) => {
    const tile = (target as HTMLElement | null)?.closest?.(".xp-tile") as HTMLElement | null;
    if (!tile) {
      setTip(null);
      return;
    }
    const name = tile.dataset.techName;
    const cat = tile.dataset.techCat;
    if (!name) return;
    const rect = tile.getBoundingClientRect();
    setTip({
      name,
      cat: cat || "",
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  }, []);

  useEffect(() => {
    if (!tip) return;
    const hide = () => setTip(null);
    window.addEventListener("scroll", hide, { passive: true, once: true });
    return () => window.removeEventListener("scroll", hide);
  }, [tip]);

  return (
    <Reveal
      id="tech-stack"
      className="xp-anchor xp-tech-section"
      amount={0.1}
      aria-label="Technology stack"
      onMouseOver={(e: React.MouseEvent) => showFromEvent(e.target)}
      onMouseLeave={() => setTip(null)}
      onFocus={(e: React.FocusEvent) => showFromEvent(e.target)}
      onBlur={() => setTip(null)}
    >
      <div className="xp-marquee-stack" data-reveal style={d(0)}>
        {/* Row 1: moves Left -> Right */}
        <div className="xp-marquee-row">
          <div className="xp-marquee-track xp-marquee-ltr">
            <ul className="xp-marquee-group" aria-label="Technologies row 1">
              {rowOne.map(({ tech, categoryLabel }) => (
                <TechIcon key={tech.name} tech={tech} categoryLabel={categoryLabel} />
              ))}
            </ul>
            <ul className="xp-marquee-group" aria-hidden="true">
              {rowOne.map(({ tech, categoryLabel }) => (
                <TechIcon
                  key={`dup1-${tech.name}`}
                  tech={tech}
                  categoryLabel={categoryLabel}
                  duplicate
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: moves Right -> Left */}
        <div className="xp-marquee-row">
          <div className="xp-marquee-track xp-marquee-rtl">
            <ul className="xp-marquee-group" aria-label="Technologies row 2">
              {rowTwo.map(({ tech, categoryLabel }) => (
                <TechIcon key={tech.name} tech={tech} categoryLabel={categoryLabel} />
              ))}
            </ul>
            <ul className="xp-marquee-group" aria-hidden="true">
              {rowTwo.map(({ tech, categoryLabel }) => (
                <TechIcon
                  key={`dup2-${tech.name}`}
                  tech={tech}
                  categoryLabel={categoryLabel}
                  duplicate
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating tooltip rendered via portal so marquee overflow/mask never clips it */}
      {tip &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="xp-tooltip" style={{ left: tip.x, top: tip.y }} role="presentation">
            <strong>{tip.name}</strong>
            {tip.cat ? <span className="text-[#888]"> · {tip.cat}</span> : null}
          </div>,
          document.body
        )}

      {/* Accessible categorized summary so essential skill names are never hover-only */}
      <div className="sr-only">
        {TECH_CATEGORIES.map((cat) => (
          <p key={cat.id}>
            {cat.label}: {cat.items.map((t) => t.name).join(", ")}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
