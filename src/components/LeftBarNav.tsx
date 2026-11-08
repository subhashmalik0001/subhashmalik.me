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

const navItems = [
  { label: "Home", href: "/", icon: Home, match: "/" },
  { label: "About Me", href: "/#about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase, match: "/experience" },
  { label: "Projects", href: "/projects", icon: Code2, match: "/projects" },
  { label: "Achievements", href: "/#achievements", icon: Trophy },
  { label: "Community", href: "/#community", icon: Users },
  { label: "Tech Stack", href: "/experience#tech-stack", icon: Layers },
  { label: "Resume", href: "/#resume", icon: FileText },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export default function LeftBarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5 w-full">
      {navItems.map((item) => {
        const active = item.match ? pathname === item.match : false;
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-5 p-3 rounded-full hover:bg-[#16181C] transition-colors w-fit"
          >
            <Icon size={26} strokeWidth={active ? 2.5 : 2} />
            <span
              className={`hidden xxl:inline text-[20px] leading-6 ${
                active ? "font-bold text-[#E7E9EA]" : "font-normal text-[#E7E9EA]"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

