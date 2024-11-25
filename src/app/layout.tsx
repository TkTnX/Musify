import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import SidebarMobile from "@/components/Sidebar/SidebarMobile";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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
        className={`${font.className} antialiased flex flex-col sm:flex-row items-start bg-[#171719] text-white h-full`}
      >
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <Sidebar isSmall={false} />
          <div className="flex flex-col gap-5 px-4 md:px-12 py-4  h-full w-full sm:w-[calc(100%-150px)] md:w-[calc(100%-240px)] overflow-hidden overflow-y-auto scrollbar">
            <Header />
            {children}
          </div>
          <SidebarMobile />
        </ClerkProvider>
      </body>
    </html>
  );
}
