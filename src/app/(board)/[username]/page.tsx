import ProfileView from "@/components/ProfileView";

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  return <ProfileView username={username} />;
}
