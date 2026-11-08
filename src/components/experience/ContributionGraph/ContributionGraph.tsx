"use client";

import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  GITHUB_CONFIG,
  ContributionData,
  ContributionDay,
  buildDemoData,
} from "@/data/contributions";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import ContributionLegend from "./ContributionLegend";

type Status = "loading" | "ready" | "error";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAY_LABELS: Record<number, string> = { 1: "Mon", 3: "Wed", 5: "Fri" };

const parseDate = (iso: string) => new Date(iso + "T00:00:00");
const formatDayShort = (iso: string) => {
  const dt = parseDate(iso);
  return `${dt.getDate()} ${MONTHS[dt.getMonth()]}`;
};
const formatDayFull = (iso: string) => {
  const dt = parseDate(iso);
  return `${dt.getDate()} ${MONTHS[dt.getMonth()]} ${dt.getFullYear()}`;
};
const describe = (day: ContributionDay) =>
  `${day.count === 0 ? "No" : day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDayFull(day.date)}`;

export default function ContributionGraph() {
  const [status, setStatus] = useState<Status>("loading");
  const [data, setData] = useState<ContributionData | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useInViewAnimation<HTMLDivElement>({ amount: 0.25 });

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch(
        `/api/github-contributions?user=${encodeURIComponent(GITHUB_CONFIG.username)}`
      );
      if (!res.ok) throw new Error(String(res.status));
      const json = (await res.json()) as { total: number; days: ContributionDay[] };
      if (!Array.isArray(json.days)) throw new Error("bad payload");
      setData({ total: json.total, days: json.days });
      setStatus("ready");
    } catch {
      // Clearly-labelled demo data so the layout stays intact offline.
      setData(buildDemoData());
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Placeholder grid while loading (all level 0, pulsing)
  const days = useMemo<ContributionDay[]>(() => {
    if (data) return data.days;
    return buildDemoData().days.map((d) => ({ ...d, count: 0, level: 0 }));
  }, [data]);

  const offset = days.length ? parseDate(days[0].date).getDay() : 0;
  const weekCount = Math.ceil((days.length + offset) / 7);

  // On narrow viewports where horizontal scrolling is active, scroll to recent weeks.
  useEffect(() => {
    const el = scrollRef.current;
    if (el && el.scrollWidth > el.clientWidth) {
      el.scrollLeft = el.scrollWidth;
    }
  }, [weekCount, status]);

  const monthLabels = useMemo(() => {
    const labels: { col: number; label: string }[] = [];
    let prev = -1;
    for (let col = 0; col < weekCount; col++) {
      const idx = Math.max(0, col * 7 - offset);
      const day = days[idx];
      if (!day) continue;
      const m = parseDate(day.date).getMonth();
      if (m !== prev) {
        labels.push({ col, label: MONTHS[m] });
        prev = m;
      }
    }
    if (labels.length > 1 && labels[1].col - labels[0].col < 3) labels.shift();
    return labels;
  }, [days, offset, weekCount]);

  const cells = useMemo(
    () =>
      days.map((day, i) => {
        const pos = i + offset;
        const col = Math.floor(pos / 7);
        const row = pos % 7;
        return (
          <span
            key={day.date}
            className="xp-cell"
            data-idx={i}
            data-level={day.level}
            style={
              {
                gridColumn: col + 2,
                gridRow: row + 2,
                "--col": col,
              } as React.CSSProperties
            }
          />
        );
      }),
    [days, offset]
  );

  const activeElRef = useRef<HTMLElement | null>(null);

  const showTipFor = useCallback((idx: number | null) => {
    setActive(idx);
    activeElRef.current?.removeAttribute("data-active");
    activeElRef.current = null;
    if (idx === null) return setTip(null);
    const el = scrollRef.current?.querySelector<HTMLElement>(`[data-idx="${idx}"]`);
    if (!el) return setTip(null);
    el.setAttribute("data-active", "true");
    activeElRef.current = el;
    const r = el.getBoundingClientRect();
    setTip({ x: r.left + r.width / 2, y: r.top });
  }, []);

  useEffect(() => {
    if (!tip) return;
    const hide = () => {
      setTip(null);
      setActive(null);
      activeElRef.current?.removeAttribute("data-active");
      activeElRef.current = null;
    };
    window.addEventListener("scroll", hide, { passive: true, once: true });
    return () => window.removeEventListener("scroll", hide);
  }, [tip]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (status === "loading" || !days.length) return;
    const step: Record<string, number> = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 };
    if (e.key === "Escape") return showTipFor(null);
    if (!(e.key in step)) return;
    e.preventDefault();
    const start = active ?? days.length - 1;
    const next = Math.min(days.length - 1, Math.max(0, start + step[e.key]));
    scrollRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${next}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
    requestAnimationFrame(() => showTipFor(next));
  };

  const activeDay = active !== null ? days[active] : null;
  const isEmpty = status === "ready" && data !== null && data.days.every((d) => d.count === 0);

  return (
    <div className="xp-contrib-section">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <a
              href={`https://github.com/${GITHUB_CONFIG.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="xp-contrib-title hover:underline"
            >
              {GITHUB_CONFIG.displayName}
            </a>
            <a
              href={`https://github.com/${GITHUB_CONFIG.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="xp-contrib-handle hover:text-[#A0A0A0] transition-colors"
            >
              @{GITHUB_CONFIG.username}
            </a>
          </div>
          <p className="xp-contrib-subtitle mt-1">
            Developer activity throughout the year
            {status === "ready" && data && (
              <>
                {" · "}
                <span className="text-[#A8A8A8]">
                  {data.total.toLocaleString()} contributions in the last year
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Status messages */}
      {status === "error" && (
        <div className="mt-3 flex items-center gap-2 flex-wrap text-[12px] leading-4">
          <span className="px-2 py-0.5 rounded-full border border-[#3a2a20] text-[#FF8052] bg-[#ff5a00]/[0.06]">
            Demo data
          </span>
          <span className="text-[#777]">Live GitHub activity couldn&apos;t be loaded.</span>
          <button onClick={load} className="text-[#F2F2F2] font-semibold hover:underline">
            Retry
          </button>
        </div>
      )}
      {isEmpty && (
        <p className="mt-3 text-[13px] text-[#777]">No public contributions in the last year yet.</p>
      )}

      {/* Calendar */}
      <div
        ref={scrollRef}
        className="xp-graph-scroll mt-6"
        tabIndex={0}
        role="group"
        aria-label={`GitHub contribution calendar for ${GITHUB_CONFIG.username}${
          status === "error" ? " (demo data)" : ""
        }. Use arrow keys to explore days.`}
        onKeyDown={onKeyDown}
        onBlur={() => showTipFor(null)}
        onMouseOver={(e) => {
          const idx = (e.target as HTMLElement).dataset?.idx;
          if (idx !== undefined) showTipFor(Number(idx));
        }}
        onMouseLeave={() => showTipFor(null)}
      >
        <div ref={animRef} className="xp-graph-wrap">
          <div
            className={`xp-graph ${status === "loading" ? "xp-graph-loading" : "xp-graph-anim"} ${
              status === "error" ? "opacity-60" : ""
            }`}
            style={{ "--weeks": weekCount } as React.CSSProperties}
          >
            {monthLabels.map(({ col, label }) => (
              <span
                key={`${label}-${col}`}
                className="xp-month"
                style={{ gridColumn: `${col + 2} / span 3`, gridRow: 1 }}
              >
                {label}
              </span>
            ))}
            {Object.entries(WEEKDAY_LABELS).map(([row, label]) => (
              <span
                key={label}
                className="xp-weekday"
                style={{ gridColumn: 1, gridRow: Number(row) + 2 }}
              >
                {label}
              </span>
            ))}
            {cells}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
        <a
          href={`https://github.com/${GITHUB_CONFIG.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#666] hover:text-[#A0A0A0] transition-colors"
        >
          {status === "error" ? "Demonstration preview (offline)" : "Public GitHub contributions"}
        </a>
        <ContributionLegend />
      </div>

      {/* Tooltip + screen-reader announcement */}
      {tip &&
        activeDay &&
        status !== "loading" &&
        createPortal(
          <div className="xp-tooltip" style={{ left: tip.x, top: tip.y }} role="presentation">
            <strong>
              {activeDay.count === 0 ? "No" : activeDay.count} contribution
              {activeDay.count === 1 ? "" : "s"}
            </strong>{" "}
            on {formatDayShort(activeDay.date)}
            {status === "error" && " (demo)"}
          </div>,
          document.body
        )}
      <span className="sr-only" aria-live="polite">
        {activeDay && status !== "loading" ? describe(activeDay) : ""}
      </span>
    </div>
  );
}
