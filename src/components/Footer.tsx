import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import FramedButton from "@/components/design-system/FramedButton";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-secondary)] bg-[#050505]">
      {/* Structural Katanex meta strip */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] min-h-[34px] text-[10.5px]">
        <div className="px-4 py-2 border-r border-[var(--border-subtle)]">
          <span className="frame-label">[ SUBHASH MALIK // PORTFOLIO ]</span>
        </div>
        <div className="px-4 py-2 border-l border-[var(--border-subtle)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#36D98A] inline-block" aria-hidden="true" />
          <span className="frame-label">AVAILABLE FOR ROLES</span>
        </div>
      </div>

      {/* Main footer body */}
      <div className="px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="min-w-0">
          <p className="text-[15px] font-bold text-textGrayLight leading-5">
            Subhash Malik
          </p>
          <p className="text-[13px] text-textGray mt-1 leading-5 max-w-[38ch]">
            Full-Stack Engineer, 3x Hackathon Podium Winner &amp; Community Builder based in Chandigarh.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <FramedButton
            href="https://github.com/subhashmalik0001"
            external
            variant="secondary"
            size="sm"
          >
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </FramedButton>
          <FramedButton
            href="mailto:subhashmalik0001@gmail.com"
            external
            variant="outline"
            size="sm"
          >
            <Mail size={13} />
            <span>Email</span>
          </FramedButton>
        </div>
      </div>

      {/* Bottom structural link grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[var(--border-subtle)] divide-x divide-y sm:divide-y-0 divide-[var(--border-subtle)] text-[12px]">
        <Link
          href="/"
          className="px-4 py-2.5 text-textGray hover:text-textGrayLight hover:bg-white/[0.03] transition-colors flex items-center justify-between"
        >
          <span>Profile</span>
          <span className="frame-label">01</span>
        </Link>
        <Link
          href="/projects"
          className="px-4 py-2.5 text-textGray hover:text-textGrayLight hover:bg-white/[0.03] transition-colors flex items-center justify-between"
        >
          <span>Projects</span>
          <span className="frame-label">02</span>
        </Link>
        <Link
          href="/experience"
          className="px-4 py-2.5 text-textGray hover:text-textGrayLight hover:bg-white/[0.03] transition-colors flex items-center justify-between"
        >
          <span>Experience</span>
          <span className="frame-label">03</span>
        </Link>
        <Link
          href="/#contact"
          className="px-4 py-2.5 text-textGray hover:text-textGrayLight hover:bg-white/[0.03] transition-colors flex items-center justify-between"
        >
          <span>Contact</span>
          <span className="frame-label">↗</span>
        </Link>
      </div>
    </footer>
  );
}

