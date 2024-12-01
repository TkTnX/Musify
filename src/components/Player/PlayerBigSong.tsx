import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { SongWithAllDependencies } from "@/types";
import PlayerContolsButtons from "./PlayerContolsButtons";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Heart } from "lucide-react";
import { usePlayerControls } from "@/hooks/usePlayerControls";

interface PlayerBigSongProps {
  children: React.ReactNode;
  song: SongWithAllDependencies;
}

const PlayerBigSong: React.FC<PlayerBigSongProps> = ({ children, song }) => {
  const usePlayer = usePlayerStore();
  const { onPlayNext, onPlayPrev } = usePlayerControls({ song });
  const handlePlay = () => {
    if (usePlayer.isPlaying) {
      usePlayer.setIsPlaying(false);
      usePlayer.audioPlayerRef?.current?.pause();
    } else {
      usePlayer.setIsPlaying(true);
      usePlayer.audioPlayerRef?.current?.play();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="border border-[#29292d] rounded-md p-3 ">
        {children}
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full h-full bg-[#1f1f22] flex flex-col items-center justify-center border-t-0"
      >
        <div className="w-[300px] h-[300px] relative group">
          <Image
            src={song.image_url}
            alt={song.title}
            fill
            className="object-cover"
          />

          <div className="flex items-center justify-center gap-8 absolute inset-0 bg-[#505050]/50 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
            <PlayerContolsButtons
              songId={song.id}
              isBigSong={true}
              onClick={handlePlay}
              onPlayNext={onPlayNext}
              onPlayPrev={onPlayPrev}
            />
            <button className="absolute bottom-2 hover:scale-110 transition  bg-[#0e0e0e]/60 p-3 rounded-full">
              <Heart size={24} />
            </button>
          </div>
        </div>
        <SheetTitle className="text-white">{song.title}</SheetTitle>
        <p>{song.artist.name}</p>
        {song.album && <p>PLAYING FROM: {song.album.title}</p>}
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default PlayerBigSong;
