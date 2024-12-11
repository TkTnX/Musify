"use client";

import { useLikedSongsStore } from "@/stores/useLikedSongsStore";
import { useUserStore } from "@/stores/useUserStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SearchInput from "./ui/SearchInput";

const Header = () => {
  const router = useRouter();
  const fetchLikedSongs = useLikedSongsStore((state) => state.fetchLikedSongs);
  const fetchUser = useUserStore((state) => state.fetchUser);
  useEffect(() => {
    fetchLikedSongs();
    fetchUser();
  }, []);

  const handleMovePage = (page: "back" | "forward") => {
    if (page === "back") {
      router.back();
    } else {
      router.forward();
    }
  };

  return (
    <header className="flex items-center w-full justify-between">
      <div className="hidden vsm:flex items-center gap-2">
        <button
          onClick={() => handleMovePage("back")}
          className=" rounded-full bg-[#1f1f22] border border-[#29292d] flex items-center justify-center w-10 h-10 hover:opacity-60 transition"
        >
          <ChevronLeft size={16} className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleMovePage("forward")}
          className=" rounded-full bg-[#1f1f22] border border-[#29292d] flex items-center justify-center w-10 h-10 hover:opacity-60 transition"
        >
          <ChevronRight size={16} className="w-4 h-4" />
        </button>
      </div>
      <SearchInput />
    </header>
  );
};

export default Header;
