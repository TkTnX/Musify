import { sidebarMyCollectionItems } from "@/constants";
import { MoreHorizontal, User } from "lucide-react";
import SidebarCategories from "./SidebarCategories";
import SidebarNavbarItems from "./SidebarNavbarItems";

const Sidebar = () => {
  const userPlaylists = [
    {
      name: "Playlist 1",
      href: "/playlists/playlist1",
    },
  ];
  return (
    <div className="bg-[#212124] min-w-[240px] w-[240px] px-3 py-4 h-full overflow-hidden overflow-y-auto">
      {/* Sidebar header */}
      <div className="flex items-center justify-between">
        <button className="bg-[#63676f] rounded-full p-1 hover:opacity-80 transition">
          <User size={24} color="#6a6d75" />
        </button>
        <button className="hover:opacity-80 transition">
          <MoreHorizontal size={24} color="#fff" />
        </button>
      </div>

      {/* Sidebar navbar items */}
      <SidebarNavbarItems />

      {/* Sidebar my collection */}
      <SidebarCategories
        title="MY COLLECTION"
        items={sidebarMyCollectionItems}
      />

      {/* Sidebar my playlists */}
      <SidebarCategories title="MY PLAYLISTS" items={userPlaylists} />
    </div>
  );
};

export default Sidebar;
