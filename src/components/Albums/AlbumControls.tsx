"use client";
import ListenButton from "../ui/ListenButton";
import { SongWithAllDependencies } from "@/types";
import LikeAlbumButton from "../ui/LikeAlbumButton";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores/useUserStore";

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
  const user = useUserStore((state) => state.user);
  if (!user || !user.id) return null;

  return (
    <div className={cn("flex items-center gap-3 mt-10", className)}>
      {songs.length > 0 && <ListenButton songs={songs} />}
      {albumId && <LikeAlbumButton albumId={albumId} />}
    </div>
  );
};

export default AlbumControls;
