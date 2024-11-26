"use client";

import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

interface SidebarHeaderSettingsProps {
  children: React.ReactNode;
}

const SidebarHeaderSettings: React.FC<SidebarHeaderSettingsProps> = ({
  children,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40 p-5">
        <Button variant="ghost" className="flex items-center gap-3 ">
          <Plus />
          Add a Song
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarHeaderSettings;
