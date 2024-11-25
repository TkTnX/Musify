import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Loader2, User } from "lucide-react";
import Link from "next/link";

const SidebarUserButton = () => {
  return (
    <>
      <SignedOut>
        <Link
          href={"/sign-in"}
          className="bg-[#63676f] rounded-full p-1 hover:opacity-80 transition"
        >
          <User size={24} color="#6a6d75" />
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{ baseTheme: dark }} />
      </SignedIn>
      <ClerkLoading>
        <Loader2 className="w-6 h-6 animate-spin" />
      </ClerkLoading>
    </>
  );
};

export default SidebarUserButton;
