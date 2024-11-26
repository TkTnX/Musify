import { SongType } from "@/types";
import { Heart } from "lucide-react";
import Image from "next/image";

interface PlayerCurrentSongProps {
  song: SongType;
}

const PlayerCurrentSong: React.FC<PlayerCurrentSongProps> = ({ song }) => {
  return (
    <div className="flex items-center gap-4">
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
          <button>
            <Heart size={16} />
          </button>
        </div>
        <p className="font-semibold text-sm leading-5 text-[#afafb0]">
          {song.author}
        </p>
        {song.album && (
          <p className="font-semibold text-[10px] leading-5 text-[#afafb0]">
            PLAYING FROM: {song.album}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerCurrentSong;
