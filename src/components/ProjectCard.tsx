"use client";

import { useState } from "react";
import Image from "./Image";
import CornerFrame from "./design-system/CornerFrame";
import { framedButton } from "./design-system/FramedButton";
import { ProjectItem } from "@/mockData";
import {
  ExternalLink,
  Heart,
  Repeat2,
  MessageCircle,
  Bookmark,
  Share,
  Check,
  Sparkles,
} from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export default function ProjectCard({
  project,
  index = 1,
}: {
  project: ProjectItem;
  index?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(project.stats.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [reposts, setReposts] = useState(project.stats.reposts);
  const [isReposted, setIsReposted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleRepost = () => {
    setIsReposted(!isReposted);
    setReposts((prev) => (isReposted ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    const url = project.liveUrl || project.githubUrl || window.location.href;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const indexLabel = String(index).padStart(2, "0");

  return (
    <article className="p-4 sm:p-5 hover:bg-[#070707] transition-colors">
      <div className="flex gap-3.5">
        {/* Sharp Framed Project Logo */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <CornerFrame
            variant="full"
            size="sm"
            className="w-10 h-10 bg-[#0D0D0D] flex items-center justify-center"
          >
            {project.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.logo}
                alt={project.title}
                className="w-7 h-7 object-contain"
              />
            ) : (
              <Sparkles size={18} className="text-textGrayLight" />
            )}
          </CornerFrame>
          <span className="frame-label !text-[10px]">[ {indexLabel} ]</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-baseline gap-1.5 flex-wrap min-w-0">
              <h3 className="font-bold text-[15px] leading-5 text-white hover:underline cursor-pointer truncate">
                {project.title}
              </h3>
              <span className="text-[13px] text-textGray">@{project.handle}</span>
              <span className="text-[13px] text-textGray">·</span>
              <span className="text-[12px] text-textGray font-medium">
                {project.date}
              </span>
            </div>
            {/* Category / Award Badge */}
            {project.category && (
              <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 bg-[#0E0E0E] border border-[var(--border-secondary)] text-textGrayLight flex-shrink-0">
                {project.category}
              </span>
            )}
          </div>

          {/* Mobile Badge if screen small */}
          {project.category && (
            <div className="sm:hidden mt-1.5">
              <span className="text-[11px] font-bold px-2.5 py-0.5 bg-[#0E0E0E] border border-[var(--border-secondary)] text-textGrayLight inline-block">
                {project.category}
              </span>
            </div>
          )}

          {/* Tagline */}
          <p className="text-[15px] leading-5 text-textGrayLight mt-2 font-medium">
            {project.tagline}
          </p>

          {/* About the Project */}
          <p
            className={`text-[14px] leading-5 text-textGray mt-2 whitespace-pre-line ${
              isExpanded ? "" : "line-clamp-2"
            }`}
          >
            {project.about}
          </p>

          {/* Key Highlights */}
          {isExpanded && project.highlights && project.highlights.length > 0 && (
            <ul className="mt-2.5 space-y-1">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-[13px] text-[#A0A4A8] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-white flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Show more / Show less */}
          <button
            type="button"
            onClick={() => setIsExpanded((v) => !v)}
            className="text-[13px] font-medium text-[#E7E9EA] underline decoration-[var(--border-primary)] underline-offset-4 hover:decoration-white mt-1.5 cursor-pointer"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>

          {/* Tech Stack Tags (sharp architectural rectangles) */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium px-2.5 py-0.5 bg-[#0D0D0D] border border-[var(--border-subtle)] text-[#D0D4D8]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links Row (Framed Live Demo + GitHub) */}
          <div className="flex flex-wrap items-center gap-3.5 mt-4 pl-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={framedButton({ variant: "primary", size: "sm" })}
              >
                <span>Live Demo</span>
                <ExternalLink size={13} strokeWidth={2.5} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={framedButton({ variant: "secondary", size: "sm" })}
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {/* Katanex Framed Project Screenshot / Preview Card */}
          {project.images && project.images.length > 0 && (
            <CornerFrame
              variant="full"
              tone="secondary"
              interactive
              className="mt-4 bg-[#0A0A0A] group"
            >
              <a
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-[5px] bg-black">
                  <div className="w-full max-h-[330px] overflow-hidden bg-black flex items-center justify-center">
                    <Image
                      path={project.images[0]}
                      alt={project.title}
                      w={600}
                      h={340}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Link Preview Sub-bar */}
                <div className="px-3.5 py-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between bg-[#080808]">
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-textGray leading-4 truncate">
                      {project.liveUrl
                        ? new URL(project.liveUrl).hostname
                        : "github.com"}
                    </p>
                    <p className="text-[14px] font-bold text-textGrayLight leading-5 truncate mt-0.5">
                      {project.title}
                    </p>
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-textGray group-hover:text-white transition-colors flex-shrink-0 ml-2"
                  />
                </div>
              </a>
            </CornerFrame>
          )}

          {/* Engagement Row */}
          <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-[var(--border-subtle)] text-textGray max-w-[420px]">
            {/* Comment */}
            <button type="button" className="flex items-center gap-1.5 group cursor-pointer">
              <div className="p-1.5 group-hover:bg-white/[0.06] group-hover:text-white transition-colors">
                <MessageCircle size={16} />
              </div>
              <span className="text-[12px] group-hover:text-white">
                {project.stats.comments}
              </span>
            </button>

            {/* Repost */}
            <button
              type="button"
              onClick={handleRepost}
              className={`flex items-center gap-1.5 group cursor-pointer ${
                isReposted ? "text-[#00ba7c]" : ""
              }`}
            >
              <div className="p-1.5 group-hover:bg-[#00ba7c]/10 group-hover:text-[#00ba7c] transition-colors">
                <Repeat2 size={16} />
              </div>
              <span className="text-[12px] group-hover:text-[#00ba7c]">
                {reposts}
              </span>
            </button>

            {/* Like */}
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1.5 group cursor-pointer ${
                isLiked ? "text-[#f91880]" : ""
              }`}
            >
              <div className="p-1.5 group-hover:bg-[#f91880]/10 group-hover:text-[#f91880] transition-colors">
                <Heart
                  size={16}
                  fill={isLiked ? "currentColor" : "none"}
                />
              </div>
              <span className="text-[12px] group-hover:text-[#f91880]">
                {likes}
              </span>
            </button>

            {/* Bookmark */}
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              aria-label="Bookmark project"
              className={`p-1.5 hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer ${
                isSaved ? "text-white" : ""
              }`}
            >
              <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
            </button>

            {/* Share */}
            <button
              type="button"
              onClick={handleShare}
              aria-label="Copy project link"
              className="p-1.5 hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer relative"
              title="Copy project link"
            >
              {copied ? (
                <Check size={16} className="text-[#36D98A]" />
              ) : (
                <Share size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
