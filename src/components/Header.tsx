"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

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
      <div className="w-full vsm:w-auto">
        <form className="flex items-center bg-[#1f1f22] border border-[#29292d] pl-2 rounded-xl lg:w-[390px] overflow-hidden">
          <Search size={16} className="text-white" />
          <input
            type="text"
            placeholder="Search"
            className="text-sm p-2 bg-inherit outline-none placeholder:text-white w-full"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
