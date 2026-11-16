import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Achievement } from "@/types/achievement";
import AchievementImageFrame from "./AchievementImageFrame";
import PartnerLogoRow from "./PartnerLogoRow";

export default function AchievementCard({
  achievement,
  priority = false,
  showPartners = true,
  showContribution = false,
  ctaLabel = "View Achievement",
}: {
  achievement: Achievement;
  priority?: boolean;
  showPartners?: boolean;
  showContribution?: boolean;
  ctaLabel?: string;
}) {
  const detailHref = `/achievements/${achievement.slug}`;

  return (
    <article className="ach-card">
      <AchievementImageFrame
        src={achievement.coverImage}
        alt={`${achievement.title} — ${achievement.recognition ?? achievement.organization}`}
        ratio={achievement.coverRatio ?? "16:9"}
        badge={achievement.recognition}
        indexLabel={achievement.indexNumber}
        href={detailHref}
        priority={priority}
      />

      <div className="ach-card-body">
        {/* Title + Recognition + Project line (matches Katanex Work caption hierarchy) */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <Link href={detailHref} className="ach-card-title hover:underline">
              {achievement.title}
            </Link>
            {achievement.date && (
              <span className="frame-label !text-[10px] pt-1 flex-shrink-0">
                {achievement.date}
              </span>
            )}
          </div>

          <p className="ach-card-sub mt-0.5">
            {achievement.recognition && (
              <span className="text-[#EDEDED] font-medium">
                {achievement.recognition}
              </span>
            )}
            {achievement.projectName && (
              <span>
                {achievement.recognition ? " · " : ""}
                Project: <strong className="text-[#DCDCDC] font-medium">{achievement.projectName}</strong>
              </span>
            )}
            {!achievement.projectName && achievement.subtitle && (
              <span>
                {achievement.recognition ? " · " : ""}
                {achievement.subtitle}
              </span>
            )}
          </p>
        </div>

        {/* Organizer & Partner Logos */}
        {showPartners && achievement.partnerLogos.length > 0 && (
          <PartnerLogoRow
            partners={achievement.partnerLogos}
            label="ORGANIZER & PARTNERS"
          />
        )}

        {/* Concise Editorial Description */}
        <p className="ach-card-desc">{achievement.description}</p>

        {/* Optional My Contribution block (shown on Hackathon Wins per Section 4 spec) */}
        {showContribution && achievement.contribution && (
          <div className="mt-1 pt-2 border-t border-[var(--achievement-border-soft)]">
            <span className="frame-label !text-[9.5px] !text-[#8A8A8A] block">
              MY CONTRIBUTION
            </span>
            <p className="text-[12.5px] leading-[18px] text-[#A8A8A8] mt-1">
              {achievement.contribution}
            </p>
          </div>
        )}

        {/* Monochrome Technology Stack Pills */}
        {achievement.technologies.length > 0 && (
          <div className="ach-tech-row" aria-label="Technologies used">
            {achievement.technologies.slice(0, 6).map((tech) => (
              <span key={tech} className="ach-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Row: View Achievement + Optional External Links */}
        <div className="flex items-center justify-between gap-3 pt-2 mt-auto border-t border-[var(--achievement-border-soft)]">
          <Link href={detailHref} className="ach-card-link !mt-0 !pt-0">
            <span>{ctaLabel}</span>
            <ArrowRight size={13} />
          </Link>

          {achievement.links.length > 0 && (
            <div className="flex items-center gap-3">
              {achievement.links.slice(0, 2).map((link) => {
                const isExternal = link.url.startsWith("http");
                return isExternal ? (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="frame-label hover:!text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label.includes("GitHub") ? "GitHub" : "Live"}</span>
                    <ArrowUpRight size={11} />
                  </a>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
