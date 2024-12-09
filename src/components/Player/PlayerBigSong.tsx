import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { SongWithAllDependencies } from "@/types";
import { usePlayerControls } from "@/hooks/usePlayerControls";
import SongButtons from "../Song/SongButtons";
import SongLikeButton from "../Song/SongLikeButton";
import Link from "next/link";

interface PlayerBigSongProps {
  children: React.ReactNode;
  song: SongWithAllDependencies;
}

const PlayerBigSong: React.FC<PlayerBigSongProps> = ({ children, song }) => {
  const { onPlayNext, onPlayPrev, handlePlay } = usePlayerControls({ song });

  return (
    <Sheet>
      <SheetTrigger asChild className="border border-[#29292d] rounded-md p-3 ">
        {children}
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full h-full bg-[#1f1f22] flex flex-col items-center justify-center border-t-0"
      >
        <Link href={`/songs/${song.id}`} className="w-[300px] h-[300px] relative group block">
          <Image
            src={song.image_url}
            alt={song.title}
            fill
            className="object-cover"
          />

          <div className="flex items-center justify-center gap-8 absolute inset-0 bg-[#505050]/50 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
            <SongButtons
              songId={song.id}
              isBigSong={true}
              onClick={handlePlay}
              onPlayNext={onPlayNext}
              onPlayPrev={onPlayPrev}
            />
            <SongLikeButton songId={song.id} size="lg" />
          </div>
        </Link>
        <SheetTitle className="text-white">{song.title}</SheetTitle>
        <Link
          href={`/artists/${song.artist.id}`}
          className="transition hover:opacity-80 w-fit"
        >
          {song.artist.name}
        </Link>
        {song.album && (
          <p>
            PLAYING FROM:{" "}
            <Link
              className="hover:text-white"
              href={`/albums/${song.album.id}`}
            >
              {song.album.title}
            </Link>
          </p>
        )}
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default PlayerBigSong;
