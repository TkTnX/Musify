"use client";
import { sidebarMyCollectionItems } from "@/constants";
import { MoreHorizontal } from "lucide-react";
import SidebarCategories from "./SidebarCategories";
import SidebarNavbarItems from "./SidebarNavbarItems";
import { cn } from "@/lib/utils";
import SidebarUserButton from "./SidebarUserButton";
import SidebarHeaderSettings from "./SidebarHeaderSettings";
import { useUserStore } from "@/stores/useUserStore";
import SidebarPlaylists from "./SidebarPlaylists";
interface SidebarProps {
  isSmall: boolean;
  onClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSmall, onClick }) => {
  const user = useUserStore((state) => state.user);
  return (
    <div
      className={cn(
        "bg-[#212124]   sm:min-w-[150px]  md:min-w-[240px] md:w-[240px] px-3 py-4 h-full sm:h-full overflow-hidden overflow-y-auto scrollbar",
        { "hidden sm:block": !isSmall },
        { "fixed inset-0 z-10": isSmall }
      )}
    >
      {/* Sidebar header */}
      {!isSmall && (
        <div className="flex items-center justify-between">
          <SidebarUserButton />
          <SidebarHeaderSettings>
            <button className="hover:opacity-80 transition">
              <MoreHorizontal size={24} color="#fff" />
            </button>
          </SidebarHeaderSettings>
        </div>
      )}

      {/* Sidebar navbar items */}
      <SidebarNavbarItems onClick={onClick} />

      {/* Sidebar my collection */}
      <SidebarCategories
        title="MY COLLECTION"
        items={sidebarMyCollectionItems}
        onClick={onClick}
      />

      {/* Sidebar my playlists */}
      {user && <SidebarPlaylists playlists={user.playlists} />}
    </div>
  );
};

export default Sidebar;
