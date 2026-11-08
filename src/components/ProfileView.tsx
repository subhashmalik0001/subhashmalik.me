import ProfileContent from "@/components/ProfileContent";
import PortfolioSections from "@/components/PortfolioSections";
import Feed from "@/components/Feed";
import Image from "@/components/Image";
import FramedButton from "@/components/design-system/FramedButton";
import FramedImage from "@/components/design-system/FramedImage";
import { IndexBar } from "@/components/design-system/SectionFrame";
import { prisma } from "@/prisma";
import { auth } from "@/auth";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProfileView({
  username = "SubhashMalik01",
}: {
  username?: string;
}) {
  const { userId: clerkUserId } = await auth();
  const userId = clerkUserId || "user_subhash";

  const user = await prisma.user.findUnique({
    where: { username: username },
    include: {
      _count: { select: { followers: true, followings: true } },
      followings: userId ? { where: { followerId: userId } } : undefined,
    },
  });

  if (!user) return notFound();

  const isOwnProfile = userId === user.id;

  return (
    <div className="min-h-screen">
      {/* STICKY HEADER */}
      <div className="flex items-center justify-between gap-4 sticky top-0 backdrop-blur-md bg-black/80 px-4 py-1 z-30 h-[53px] border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-4 min-w-0">
          <FramedButton
            href="/"
            variant="icon"
            size="sm"
            aria-label="Back to home"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-textGrayLight">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </svg>
          </FramedButton>
          <div className="flex flex-col min-w-0">
            <h2 className="text-[17px] font-extrabold leading-[22px] text-textGrayLight truncate">
              {user.displayName}
            </h2>
            <span className="text-[12px] leading-4 text-textGray">11 posts</span>
          </div>
        </div>
        <span className="hidden xsm:inline frame-label">[ @SUBHASHMALIK01 ]</span>
      </div>

      {/* KATANEX SECTION INDEX STRIP */}
      <IndexBar index={1} label="PROFILE" />

      {/* BANNER + FRAMED PORTRAIT AVATAR */}
      <div className="relative w-full px-3 pt-3">
        <FramedImage
          gap={false}
          size="lg"
          tone="secondary"
          className="w-full h-[196px] bg-[#141414]"
        >
          <Image
            path={user.cover || "general/noCover.png"}
            alt={`${user.displayName} cover`}
            w={600}
            h={200}
            tr={true}
            className="w-full h-full object-cover"
          />
        </FramedImage>

        {/* AVATAR - sharp Katanex portrait frame overlapping banner */}
        <div className="absolute left-6 -bottom-[62px] z-10 w-[124px] h-[124px] shadow-[0_0_0_4px_#000000]">
          <FramedImage
            size="md"
            tone="primary"
            className="w-full h-full bg-black"
          >
            <Image
              path={user.img || "general/noAvatar.png"}
              alt={user.displayName}
              w={134}
              h={134}
              tr={true}
              className="w-full h-full object-cover"
            />
          </FramedImage>
        </div>
      </div>

      {/* ACTION BUTTONS ROW */}
      <div className="flex justify-end items-center gap-3.5 px-4 pt-3.5 pb-0 h-[66px]">
        {isOwnProfile ? (
          <FramedButton href="/#contact" variant="secondary" size="sm">
            Edit profile
          </FramedButton>
        ) : (
          <>
            <FramedButton variant="icon" size="sm" aria-label="More actions">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-textGrayLight">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </FramedButton>
            <FramedButton variant="primary" size="sm">
              Follow
            </FramedButton>
          </>
        )}
      </div>

      {/* PROFILE INFO / ABOUT ME */}
      <div id="about" className="scroll-mt-[56px] px-4 pt-2 pb-0">
        {/* Name & Username */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <h1 className="text-[21px] font-extrabold leading-6 text-white">
              {user.displayName}
            </h1>
            <span className="text-[15px] leading-5 text-textGray block mt-0.5">
              @{user.username}
            </span>
          </div>

          {/* Katanex sharp status / verified action */}
          <FramedButton href="/#achievements" variant="outline" size="sm" corners={false}>
            <span className="w-1.5 h-1.5 bg-[#36D98A]" aria-hidden="true" />
            <span className="text-[12px] font-bold">Get verified</span>
          </FramedButton>
        </div>

        {/* Bio */}
        {user.bio && (
          <p className="text-[15px] leading-[22px] text-textGrayLight mt-3 whitespace-pre-line">
            {user.bio}
          </p>
        )}

        {/* Metadata: job, location, website, joined */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3.5 pt-3 border-t border-[var(--border-subtle)] text-textGray">
          {user.job && (
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-textGray">
                <path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zM20 18.5c0 .28-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5v-10c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v10z" />
              </svg>
              <span className="text-[14px] leading-5">{user.job}</span>
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-textGray">
                <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
              </svg>
              <span className="text-[14px] leading-5">{user.location}</span>
            </div>
          )}
          {user.website && (
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-textGray">
                <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02 .71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
              </svg>
              <a
                href={user.website.startsWith("http") ? user.website : `https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] leading-5 text-[#E7E9EA] underline decoration-[var(--border-primary)] underline-offset-4 hover:decoration-white"
              >
                {user.website}
              </a>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-textGray">
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
            </svg>
            <span className="text-[14px] leading-5">
              Joined{" "}
              {new Date(user.createdAt.toString()).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Katanex Structural Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[var(--border-subtle)] divide-x divide-y sm:divide-y-0 divide-[var(--border-subtle)] mt-4 -mx-4 bg-[#050505]">
          <Link
            href="/"
            className="px-4 py-2.5 flex items-baseline gap-1.5 hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-[14px] font-bold text-white">
              {user._count.followings}
            </span>
            <span className="text-[12px] text-textGray">Following</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-2.5 flex items-baseline gap-1.5 hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-[14px] font-bold text-white">
              {user._count.followers}
            </span>
            <span className="text-[12px] text-textGray">Followers</span>
          </Link>
          <Link
            href="/#achievements"
            className="px-4 py-2.5 flex items-baseline gap-1.5 hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-[14px] font-bold text-white">15+</span>
            <span className="text-[12px] text-textGray">Hackathons</span>
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2.5 flex items-baseline gap-1.5 hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-[14px] font-bold text-white">3x</span>
            <span className="text-[12px] text-textGray">Podiums</span>
          </Link>
        </div>
      </div>

      {/* PROFILE TABS & CONTENT */}
      <ProfileContent feedSlot={<Feed userProfileId={user.id} />} />

      {/* PORTFOLIO ARCHITECTURAL SECTIONS (Achievements, Community, Resume & Contact) */}
      {user.username === "SubhashMalik01" && <PortfolioSections />}
    </div>
  );
}
