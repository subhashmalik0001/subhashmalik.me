"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Code2, Trophy, Mail } from "lucide-react";
import { frame } from "@/components/design-system/CornerFrame";

const mobileItems = [
  { label: "Home", href: "/", icon: Home, match: "/" },
  { label: "Experience", href: "/experience", icon: Briefcase, match: "/experience" },
  { label: "Projects", href: "/projects", icon: Code2, match: "/projects" },
  { label: "Wins", href: "/#achievements", icon: Trophy },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-black/95 backdrop-blur-md border-t border-[var(--border-secondary)]"
    >
      <div className="grid grid-cols-5 divide-x divide-[var(--border-subtle)]">
        {mobileItems.map((item) => {
          const active = item.match ? pathname === item.match : false;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] tracking-wide uppercase transition-colors ${
                active
                  ? `${frame({ variant: "corners", size: "sm", offset: "inset" })} bg-white/[0.06] text-white font-bold`
                  : "text-[#8A8F94] hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <Icon size={17} strokeWidth={active ? 2.4 : 1.9} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

