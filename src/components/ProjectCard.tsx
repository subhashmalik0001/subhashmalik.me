"use client";

import { useState } from "react";
import Image from "./Image";
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

export default function ProjectCard({ project }: { project: ProjectItem }) {
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

  return (
    <article className="p-4 border-b border-borderGray hover:bg-[#080808] transition-colors">
      <div className="flex gap-3">
        {/* Project Logo / Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full border border-borderGray bg-[#16181C] overflow-hidden flex items-center justify-center">
            {project.logo ? (
              <img
                src={project.logo}
                alt={project.title}
                className="w-8 h-8 object-contain"
              />
            ) : (
              <Sparkles size={20} className="text-textGrayLight" />
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header Row */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-baseline gap-1.5 flex-wrap min-w-0">
              <h3 className="font-bold text-[15px] leading-5 text-textGrayLight hover:underline cursor-pointer truncate">
                {project.title}
              </h3>
              <span className="text-[14px] text-textGray">@{project.handle}</span>
              <span className="text-[14px] text-textGray">·</span>
              <span className="text-[13px] text-textGray font-medium">
                {project.date}
              </span>
            </div>
            {/* Category / Award Badge */}
            {project.category && (
              <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#16181C] border border-borderGray text-textGrayLight flex-shrink-0">
                {project.category}
              </span>
            )}
          </div>

          {/* Mobile Badge if screen small */}
          {project.category && (
            <div className="sm:hidden mt-1">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#16181C] border border-borderGray text-textGrayLight inline-block">
                {project.category}
              </span>
            </div>
          )}

          {/* Title / Main Tagline */}
          <h4 className="text-[15px] sm:text-[16px] leading-[22px] font-semibold text-textGrayLight mt-2">
            {project.tagline}
          </h4>

          {/* Description Section with 1-2 Line Clamp & Show More Toggle */}
          <div className="mt-2 text-[14px] leading-5 text-textGray">
            <p className={isExpanded ? "whitespace-pre-line text-[#C5C9CD]" : "line-clamp-2"}>
              {project.about}
            </p>

            {/* Expandable Key Highlights */}
            {isExpanded && project.highlights && project.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5 pl-1 border-l-2 border-borderGray ml-1">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-[#A0A4A8] flex items-start gap-2 pl-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-textGrayLight flex-shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Show more / Show less Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[14px] font-semibold text-[#1d9bf0] hover:underline cursor-pointer mt-1 inline-block"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Tech Stack Pills (Always Visible) */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium px-2.5 py-0.5 rounded-full bg-[#16181C] border border-borderGray text-textGrayLight"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links Row (Live Demo + GitHub - Always Visible) */}
          <div className="flex flex-wrap items-center gap-2.5 mt-3.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-textGrayLight text-black text-[13px] font-bold px-4 py-1.5 rounded-full hover:bg-[#D7DBDC] transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} strokeWidth={2.5} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-transparent border border-borderGray text-textGrayLight text-[13px] font-bold px-4 py-1.5 rounded-full hover:bg-surfaceHover transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {/* Project Screenshot / Link Preview Card */}
          {project.images && project.images.length > 0 && (
            <div className="mt-3.5 rounded-2xl border border-borderGray overflow-hidden bg-[#16181C] group">
              <a
                href={project.liveUrl || project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-full max-h-[340px] overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    path={project.images[0]}
                    alt={project.title}
                    w={600}
                    h={340}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
                  />
                </div>
                {/* Link Preview Sub-bar */}
                <div className="p-3 border-t border-borderGray flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] text-textGray leading-4 truncate">
                      {project.liveUrl
                        ? new URL(project.liveUrl).hostname
                        : "github.com"}
                    </p>
                    <p className="text-[14px] font-bold text-textGrayLight leading-5 truncate mt-0.5">
                      {project.title}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-textGray group-hover:text-textGrayLight flex-shrink-0 ml-2"
                  />
                </div>
              </a>
            </div>
          )}

          {/* Authentic X Engagement Row */}
          <div className="flex items-center justify-between mt-3 text-textGray max-w-[420px]">
            {/* Comment */}
            <button className="flex items-center gap-2 group cursor-pointer">
              <div className="p-1.5 rounded-full group-hover:bg-[#1d9bf0]/10 group-hover:text-[#1d9bf0] transition-colors">
                <MessageCircle size={18} />
              </div>
              <span className="text-[13px] group-hover:text-[#1d9bf0]">
                {project.stats.comments}
              </span>
            </button>

            {/* Repost */}
            <button
              onClick={handleRepost}
              className={`flex items-center gap-2 group cursor-pointer ${
                isReposted ? "text-[#00ba7c]" : ""
              }`}
            >
              <div className="p-1.5 rounded-full group-hover:bg-[#00ba7c]/10 group-hover:text-[#00ba7c] transition-colors">
                <Repeat2 size={18} />
              </div>
              <span className="text-[13px] group-hover:text-[#00ba7c]">
                {reposts}
              </span>
            </button>

            {/* Like */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 group cursor-pointer ${
                isLiked ? "text-[#f91880]" : ""
              }`}
            >
              <div className="p-1.5 rounded-full group-hover:bg-[#f91880]/10 group-hover:text-[#f91880] transition-colors">
                <Heart
                  size={18}
                  fill={isLiked ? "currentColor" : "none"}
                />
              </div>
              <span className="text-[13px] group-hover:text-[#f91880]">
                {likes}
              </span>
            </button>

            {/* Bookmark */}
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-1.5 rounded-full hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0] transition-colors cursor-pointer ${
                isSaved ? "text-[#1d9bf0]" : ""
              }`}
            >
              <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0] transition-colors cursor-pointer relative"
              title="Copy project link"
            >
              {copied ? (
                <Check size={18} className="text-[#00ba7c]" />
              ) : (
                <Share size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
