import { SongWithAllDependencies } from "@/types";
import Image from "next/image";
import SongLikeButton from "../Song/SongLikeButton";

interface PlayerCurrentSongProps {
  song: SongWithAllDependencies;
}

const PlayerCurrentSong: React.FC<PlayerCurrentSongProps> = ({ song }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="relative w-8 sm:w-16 h-8 sm:h-16">
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h6 className="font-semibold text-sm leading-[14px] tracking-tighter">
            {song.title}
          </h6>
          <SongLikeButton songId={song.id} size="sm" />
        </div>
        <p className="font-semibold text-sm leading-5 text-[#afafb0]">
          {song.artist.name}
        </p>
        {song.album && (
          <p className="font-semibold text-[10px] leading-5 text-[#afafb0]">
            PLAYING FROM: {song.album.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerCurrentSong;
