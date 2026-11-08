"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Trophy,
  Users,
  Layers,
  FileText,
  Mail,
} from "lucide-react";
import { frame } from "@/components/design-system/CornerFrame";
import { MOCK_PROJECTS } from "@/mockData";
import { EXPERIENCES } from "@/data/experiences";

const navItems = [
  { label: "Home", href: "/", icon: Home, match: "/" },
  { label: "About Me", href: "/#about", icon: User },
  {
    label: "Experience",
    href: "/experience",
    icon: Briefcase,
    match: "/experience",
    count: String(EXPERIENCES.length).padStart(2, "0"),
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Code2,
    match: "/projects",
    count: String(MOCK_PROJECTS.length).padStart(2, "0"),
  },
  { label: "Achievements", href: "/#achievements", icon: Trophy, count: "03" },
  { label: "Community", href: "/#community", icon: Users },
  { label: "Tech Stack", href: "/experience#tech-stack", icon: Layers },
  { label: "Resume", href: "/#resume", icon: FileText },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export default function LeftBarNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex flex-col gap-1 w-full">
      {navItems.map((item) => {
        const active = item.match ? pathname === item.match : false;
        const Icon = item.icon;
        const frameClasses = active
          ? `${frame({ variant: "full", size: "sm", tone: "secondary" })} bg-white/[0.06]`
          : `${frame({ variant: "corners", size: "sm", reveal: true, interactive: true })} border border-transparent hover:bg-white/[0.04]`;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex items-center justify-center xxl:justify-between gap-3.5 p-2.5 xxl:px-3.5 xxl:py-2 transition-colors w-11 h-11 xxl:w-full xxl:h-auto ${frameClasses}`}
          >
            <span className="flex items-center gap-4 min-w-0">
              <Icon size={22} strokeWidth={active ? 2.5 : 1.9} className="flex-shrink-0" />
              <span
                className={`hidden xxl:inline text-[17px] leading-6 truncate ${
                  active ? "font-bold text-white" : "font-normal text-[#E7E9EA]"
                }`}
              >
                {item.label}
              </span>
            </span>
            {item.count && (
              <span className="hidden xxl:inline font-mono text-[10px] tracking-wider text-[#7A7F85]">
                /{item.count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
