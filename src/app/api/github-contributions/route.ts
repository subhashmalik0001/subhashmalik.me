import { NextResponse } from "next/server";
import { GITHUB_CONFIG, ContributionDay } from "@/data/contributions";

/**
 * Proxies the public github-contributions-api for the configured user and
 * caches the response for an hour, so the client never hits GitHub directly.
 */
export const revalidate = 3600;

interface UpstreamResponse {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("user") || GITHUB_CONFIG.username;

  if (!/^[a-z\d](?:[a-z\d-]{0,38})$/i.test(username)) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream responded with ${res.status}` },
        { status: 502 }
      );
    }
    const data = (await res.json()) as UpstreamResponse;
    const days = data.contributions ?? [];
    const total =
      data.total?.lastYear ?? days.reduce((sum, d) => sum + (d.count || 0), 0);

    return NextResponse.json({ username, total, days });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the contributions service" },
      { status: 502 }
    );
  }
}

