"use client";

import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import AddSong from "../modals/AddSong";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import AddAlbum from "../modals/AddAlbum";

interface SidebarHeaderSettingsProps {
  children: React.ReactNode;
}

const SidebarHeaderSettings: React.FC<SidebarHeaderSettingsProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const user = useAuth();

  useEffect(() => {
    if (!user.sessionId) {
      setOpen(false);
      return;
    }
  }, [user]);

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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarHeaderSettings;
