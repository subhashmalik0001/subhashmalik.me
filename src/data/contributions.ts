/**
 * GitHub contribution calendar configuration + data helpers.
 *
 * Real data is fetched from the public, open-source
 * github-contributions-api (https://github.com/grubersjoe/github-contributions-api)
 * through our own cached route at /api/github-contributions.
 */

export const GITHUB_CONFIG = {
  /** Change this to point the calendar at a different GitHub account. */
  username: "subhashmalik0001",
  displayName: "Subhash Malik",
};

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: ContributionLevel;
}

export interface ContributionData {
  total: number;
  days: ContributionDay[];
  /** true only for clearly-labelled demo data (never shown as real activity) */
  isDemo?: boolean;
}

/** Group days into GitHub-style week columns (Sunday → Saturday). */
export const toWeeks = (days: ContributionDay[]): (ContributionDay | null)[][] => {
  if (!days.length) return [];
  const weeks: (ContributionDay | null)[][] = [];
  const firstDow = new Date(days[0].date + "T00:00:00").getDay();
  let week: (ContributionDay | null)[] = Array(firstDow).fill(null);
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)]);
  return weeks;
};

/**
 * Deterministic placeholder data for local development / offline mode.
 * Always flagged with `isDemo: true` and labelled as such in the UI.
 */
export const buildDemoData = (): ContributionData => {
  const days: ContributionDay[] = [];
  const end = new Date();
  const start = new Date(end);
  start.setDate(end.getDate() - 364);
  let seed = 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const r = rand();
    const level = (r < 0.45 ? 0 : r < 0.65 ? 1 : r < 0.8 ? 2 : r < 0.92 ? 3 : 4) as ContributionLevel;
    days.push({ date: d.toISOString().slice(0, 10), count: level * 2, level });
  }
  return { total: 0, days, isDemo: true };
};

