"use client";
import { ChevronUp } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SidebarUserButton from "./SidebarUserButton";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-3 sm:hidden bg-[#212124] p-4 w-full">
      {/* Sidebar header */}
      <div className="flex items-center justify-between w-full relative z-20">
        <SidebarUserButton />

        <button
          onClick={() => setOpen(!open)}
          className={cn(
            " rounded-full bg-[#1f1f22] border  flex items-center justify-center w-10 h-10 hover:opacity-60 transition",
            { "rotate-180": open }
          )}
        >
          <ChevronUp size={16} className="w-4 h-4" />
        </button>
      </div>
      {open && <Sidebar onClick={() => setOpen(false)} isSmall={true} />}
    </div>
  );
};

export default SidebarMobile;
