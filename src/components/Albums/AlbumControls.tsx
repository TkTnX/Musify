"use client";
import ListenButton from "../ui/ListenButton";
import { SongWithAllDependencies } from "@/types";
import LikeAlbumButton from "../ui/LikeAlbumButton";
import { cn } from "@/lib/utils";

interface AlbumControlsProps {
  songs: SongWithAllDependencies[];
  albumId?: number;
  className?: string;
}

const AlbumControls: React.FC<AlbumControlsProps> = ({
  songs,
  albumId,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-3 mt-10", className)}>
      <ListenButton songs={songs} />
      {albumId && <LikeAlbumButton albumId={albumId} />}
    </div>
  );
};

export default AlbumControls;
