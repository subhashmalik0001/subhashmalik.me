import ProfileContent from "@/components/ProfileContent";
import Feed from "@/components/Feed";
import Image from "@/components/Image";
import ProfileTabs from "@/components/ProfileTabs";
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
      <div className="flex items-center gap-6 sticky top-0 backdrop-blur-md bg-black/65 px-4 py-1 z-30 h-[53px]">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surfaceHover transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-textGrayLight">
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
          </svg>
        </Link>
        <div className="flex flex-col">
          <h2 className="text-[17px] font-extrabold leading-[22px] text-textGrayLight">
            {user.displayName}
          </h2>
          <span className="text-[13px] leading-4 text-textGray">11 posts</span>
        </div>
      </div>

      {/* BANNER */}
      <div className="relative w-full">
        <div className="w-full h-[200px] bg-[#333639]">
          <Image
            path={user.cover || "general/noCover.png"}
            alt=""
            w={600}
            h={200}
            tr={true}
            className="w-full h-full object-cover"
          />
        </div>

        {/* AVATAR - overlapping banner */}
        <div className="absolute left-4 -bottom-[67px]">
          <div className="w-[134px] h-[134px] rounded-full border-4 border-black overflow-hidden bg-black">
            <Image
              path={user.img || "general/noAvatar.png"}
              alt=""
              w={134}
              h={134}
              tr={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS ROW */}
      <div className="flex justify-end items-center gap-2 px-4 pt-3 pb-0 h-[68px]">
        {isOwnProfile ? (
          <button className="px-4 py-[7px] rounded-full border border-borderGray text-[15px] font-bold text-textGrayLight bg-transparent hover:bg-surfaceHover transition-colors cursor-pointer">
            Edit profile
          </button>
        ) : (
          <>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-borderGray hover:bg-surfaceHover transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-textGrayLight">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </button>
            <button className="px-4 py-[7px] rounded-full bg-textGrayLight text-black text-[15px] font-bold hover:bg-[#D7DBDC] transition-colors cursor-pointer">
              Follow
            </button>
          </>
        )}
      </div>

      {/* PROFILE INFO / ABOUT ME */}
      <div id="about" className="px-4 pt-2 pb-3">
        {/* Name */}
        <div className="flex items-center gap-1">
          <h1 className="text-[20px] font-extrabold leading-6 text-textGrayLight">
            {user.displayName}
          </h1>
        </div>

        {/* Username */}
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[15px] leading-5 text-textGray">
            @{user.username}
          </span>
        </div>

        {/* Get verified */}
        <div className="mt-3">
          <Link
            href="/"
            className="text-[13px] font-bold text-textGrayLight bg-transparent border border-borderGray rounded-full px-3 py-1 hover:bg-surfaceHover transition-colors inline-block"
          >
            Get verified
          </Link>
        </div>

        {/* Bio */}
        {user.bio && (
          <p className="text-[15px] leading-5 text-textGrayLight mt-3 whitespace-pre-line">
            {user.bio}
          </p>
        )}

        {/* Metadata: job, location, website, joined */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-textGray">
          {user.job && (
            <div id="tech-stack" className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-textGray">
                <path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zM20 18.5c0 .28-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5v-10c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v10z" />
              </svg>
              <span className="text-[15px] leading-5">{user.job}</span>
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-textGray">
                <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
              </svg>
              <span className="text-[15px] leading-5">{user.location}</span>
            </div>
          )}
          {user.website && (
            <div id="contact" className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-textGray">
                <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02 .71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
              </svg>
              <a
                href={user.website.startsWith("http") ? user.website : `https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] leading-5 text-[#1d9bf0] hover:underline"
              >
                {user.website}
              </a>
            </div>
          )}
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-textGray">
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
            </svg>
            <span className="text-[15px] leading-5">
              Joined{" "}
              {new Date(user.createdAt.toString()).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Following / Followers */}
        <div className="flex gap-5 mt-3">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-[14px] font-bold text-textGrayLight">
              {user._count.followings}
            </span>
            <span className="text-[14px] text-textGray group-hover:underline">
              Following
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-[14px] font-bold text-textGrayLight">
              {user._count.followers}
            </span>
            <span className="text-[14px] text-textGray group-hover:underline">
              Followers
            </span>
          </Link>
        </div>
      </div>

      {/* PROFILE TABS & CONTENT */}
      <ProfileContent feedSlot={<Feed userProfileId={user.id} />} />
    </div>
  );
}
