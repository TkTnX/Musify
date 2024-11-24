import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musify | Music Platform",
  description: "Music platform for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased flex items-start bg-[#171719] text-white h-full`}
      >
        <Sidebar />
        <div className="flex flex-col gap-5 px-12 py-4 w-full h-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
