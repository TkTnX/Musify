"use client";
import ListenButton from "../ui/ListenButton";
import { SongWithAllDependencies } from "@/types";
import LikeAlbumButton from "../ui/LikeAlbumButton";


const AlbumControls = ({
  songs,
  albumId,
}: {
  songs: SongWithAllDependencies[];
  albumId: number;
}) => {

  return (
    <div className="flex items-center gap-3 mt-10">
      <ListenButton songs={songs} />
      <LikeAlbumButton albumId={albumId} />
    </div>
  );
};

export default AlbumControls;
