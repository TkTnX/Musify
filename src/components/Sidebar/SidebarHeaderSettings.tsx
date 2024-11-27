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

interface SidebarHeaderSettingsProps {
  children: React.ReactNode;
}

const SidebarHeaderSettings: React.FC<SidebarHeaderSettingsProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false)
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarHeaderSettings;
