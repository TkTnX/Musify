import { SongWithAllDependencies } from "@/types";
import Image from "next/image";
import SongLikeButton from "../Song/SongLikeButton";
import Link from "next/link";

interface PlayerCurrentSongProps {
  song: SongWithAllDependencies;
}

const PlayerCurrentSong: React.FC<PlayerCurrentSongProps> = ({ song }) => {
  return (
    <div className="flex items-center gap-4 max-w-[240px]">
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
          <h6 className="font-semibold text-sm leading-[14px] tracking-tighter no-text-wrap">
            {song.title}
          </h6>
          <SongLikeButton songId={song.id} size="sm" />
        </div>
        <Link
          href={`/artists/${song.artist.id}`}
          className="font-semibold text-sm leading-5 text-[#afafb0] block transition hover:text-white w-fit"
        >
          {song.artist.name}
        </Link>
        {song.album && (
          <p className="font-semibold text-[10px] leading-5 text-[#afafb0]">
            PLAYING FROM:{" "}
            <Link className="hover:text-white" href={`/albums/${song.album.id}`}>{song.album.title}</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerCurrentSong;
