import "./globals.css";
import "@/styles/frame.css";

import type { Metadata } from "next";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Subhash Malik — Portfolio",
  description:
    "Full-Stack Engineer, Hackathon Winner & Community Builder — Portfolio of Subhash Malik.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-[#E7E9EA]" suppressHydrationWarning>
      <body className="bg-black text-[#E7E9EA] min-h-screen antialiased" suppressHydrationWarning>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
