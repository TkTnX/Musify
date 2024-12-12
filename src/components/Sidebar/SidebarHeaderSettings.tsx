"use client";

import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import AddSong from "../modals/AddSong";
import { useState } from "react";
import AddAlbum from "../modals/AddAlbum";
import AddPlaylist from "../modals/AddPlaylist";
import { useUserStore } from "@/stores/useUserStore";
import AddVideo from "../modals/AddVideo";

interface SidebarHeaderSettingsProps {
  children: React.ReactNode;
}

const SidebarHeaderSettings: React.FC<SidebarHeaderSettingsProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  if (!user || !user.id) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40 p-5">
        <AddSong open={open} setOpen={setOpen}>
          <Button variant="ghost" className="flex items-center gap-3 ">
            <Plus />
            Add a Song
          </Button>
        </AddSong>
        <AddAlbum>
          <Button variant="ghost" className="flex items-center gap-3 ">
            <Plus />
            Add an Album
          </Button>
        </AddAlbum>
        <AddPlaylist>
          <Button variant="ghost" className="flex items-center gap-3 ">
            <Plus />
            Add an Playlist
          </Button>
        </AddPlaylist>
        <AddVideo>
          <Button variant="ghost" className="flex items-center gap-3 ">
            <Plus />
            Add a Video
          </Button>
        </AddVideo>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarHeaderSettings;
