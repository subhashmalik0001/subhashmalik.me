"use client";

import { ArrowUpRight } from "lucide-react";

export interface WorkLogoItem {
  name: string;
  role: string;
  category: string;
  logo: string;
  fallbackUrl?: string;
  href: string;
  imgClassName?: string;
}

export const WORK_LOGOS: WorkLogoItem[] = [
  {
    name: "Paytm",
    role: "Ex-Intern",
    category: "Product & Engineering",
    logo: "/logos/paytm-icon.png",
    fallbackUrl:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png",
    href: "https://paytm.com",
    imgClassName: "h-7 sm:h-8 w-auto max-w-[100px] object-contain",
  },
  {
    name: "Microsoft",
    role: "Ecosystem Collaboration",
    category: "Developer Tooling",
    logo: "/logos/microsoft-official.svg",
    fallbackUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    href: "https://microsoft.com",
    imgClassName: "h-6 sm:h-7 w-auto max-w-[124px] object-contain",
  },
  {
    name: "HackBriven",
    role: "Founding Member",
    category: "Builder Community",
    logo: "/logos/hackbriven-official.png",
    fallbackUrl: "https://hackbriven.com/logo.png",
    href: "https://hackbriven.com",
    imgClassName: "h-7 sm:h-8 w-auto max-w-[120px] object-contain",
  },
  {
    name: "CU-TBI",
    role: "Community & Collaboration Lead",
    category: "Chandigarh University",
    logo: "/logos/cutbi-official.png",
    fallbackUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQF4PHCTsTTyoQ/company-logo_200_200/B56Zs1WeqAGsAI-/0/1766126645376/cutbi_logo?e=2147483647&v=beta&t=ypBB8IajYSvW12qMC6ADqSKYmo5N5FdfRKiJ340eOho",
    href: "https://cutbi.org",
    imgClassName: "h-8 sm:h-9 w-auto max-w-[110px] object-contain",
  },
  {
    name: "Kalp Studio",
    role: "Studio Collaboration",
    category: "Design & Technology",
    logo: "/logos/kalp-studio.png",
    fallbackUrl: "https://www.kalp.studio/favicon.ico",
    href: "https://www.kalp.studio",
    imgClassName: "h-8 sm:h-9 w-auto max-w-[44px] object-contain",
  },
  {
    name: "Devnovate",
    role: "Product Manager",
    category: "Product & Engineering",
    logo: "/logos/devnovate.png",
    fallbackUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYUkngH8FzLmoKSt4Ig6PBcS__z5nr7jB2jCLImrxs3Xq1ajAD4UC2Pg&s=10",
    href: "https://devnovate.co",
    imgClassName: "h-6 sm:h-7 w-auto max-w-[124px] object-contain",
  },
  {
    name: "HackWithIndia",
    role: "India Lead",
    category: "National Community",
    logo: "/logos/hackwithindia.png",
    fallbackUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqGooWBNS8SpriBRL1weuqvabwZzdnVmre8lk7GsKyjPRGF84MTBXPZTX&s=10",
    href: "https://hackwithindia.in",
    imgClassName: "h-7 sm:h-8 w-7 sm:w-8 rounded-full object-cover",
  },
];

function LogoTile({ item }: { item: WorkLogoItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.name} — ${item.role}`}
      className="group relative flex-shrink-0 block outline-none select-none"
    >
      {/* Completely borderless & corner-border-free logo tile */}
      <div className="h-[68px] px-4 sm:px-5 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.05] flex items-center gap-3.5 sm:gap-4 transition-all duration-200">
        {/* Logo Container - completely borderless */}
        <div className="h-9 min-w-[36px] flex items-center justify-center flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.logo}
            alt={item.name}
            loading="eager"
            decoding="async"
            draggable={false}
            onError={(e) => {
              if (item.fallbackUrl && e.currentTarget.src !== item.fallbackUrl) {
                e.currentTarget.src = item.fallbackUrl;
              }
            }}
            className={`${item.imgClassName} filter transition-all duration-200 group-hover:brightness-110`}
          />
        </div>

        {/* Text Details - clean typography */}
        <div className="flex flex-col min-w-0 pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[14px] font-bold text-white tracking-tight whitespace-nowrap group-hover:text-white transition-colors">
              {item.name}
            </span>
            <ArrowUpRight
              size={12}
              className="text-[#6E7378] group-hover:text-white transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
            />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A8F94] group-hover:text-[#B0B3B8] whitespace-nowrap transition-colors mt-0.5">
            {item.role}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function WorkLogosMarquee() {
  return (
    <section
      aria-label="Organizations and companies worked with"
      className="bg-black relative z-10 py-5 sm:py-6 overflow-hidden"
    >
      {/* Clean borderless header label */}
      <div className="px-4 mb-3 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#71767B]">
          {"// WORKED WITH"}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#536471]">
          {`${WORK_LOGOS.length} PARTNERS & ROLES`}
        </span>
      </div>

      {/* Marquee Row: Continuous Left-to-Right Flow with NO borders */}
      <div className="work-marquee-row">
        <div className="work-marquee-track work-marquee-ltr">
          {/* Group 1 */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {WORK_LOGOS.map((item, i) => (
              <LogoTile key={`g1-${item.name}-${i}`} item={item} />
            ))}
          </div>

          {/* Group 2 (Duplicate for seamless infinite loop) */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {WORK_LOGOS.map((item, i) => (
              <LogoTile key={`g2-${item.name}-${i}`} item={item} />
            ))}
          </div>

          {/* Group 3 (Extra buffer for ultra-wide viewports) */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {WORK_LOGOS.map((item, i) => (
              <LogoTile key={`g3-${item.name}-${i}`} item={item} />
            ))}
          </div>

          {/* Group 4 (Guarantees uninterrupted seamless translation) */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {WORK_LOGOS.map((item, i) => (
              <LogoTile key={`g4-${item.name}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
