import { SongWithAllDependencies } from "@/types";
import Image from "next/image";
import SongLikeButton from "../Song/SongLikeButton";
import { usePlayerControls } from "@/hooks/usePlayerControls";

const FavoritesListItem = ({ song }: { song: SongWithAllDependencies }) => {
  const { handlePlay, PlayerIcon } = usePlayerControls({
    song: song as SongWithAllDependencies,
  });

  if (!song) return null;

  return (
    <div className="flex justify-between items-center gap-3 p-2 rounded group hover:bg-[#252525] cursor-pointer transition">
      <div onClick={handlePlay} className="flex items-center gap-3 ">
        <div className="relative">
          <Image
            src={song.image_url}
            alt={song.title}
            width={50}
            height={50}
            className="object-cover w-[50px] h-[50px]"
          />
          <div className="bg-white rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
            <PlayerIcon fill="#000" size={16} />
          </div>
        </div>
        <div className="text-xs">
          <h5 className="font-bold">{song.title}</h5>
          <p className="text-[#909090]">{song.artist.name}</p>
        </div>
      </div>
      <SongLikeButton size="sm" songId={song.id} />
    </div>
  );
};

export default FavoritesListItem;
