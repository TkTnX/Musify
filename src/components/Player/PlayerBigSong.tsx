import { SongType } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";

interface PlayerBigSongProps {
  children: React.ReactNode;
  song: SongType;
}

const PlayerBigSong: React.FC<PlayerBigSongProps> = ({ children, song }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="border border-[#29292d] rounded-md p-3 ">
        {children}
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full h-full bg-[#1f1f22] flex flex-col items-center justify-center border-t-0"
      >
        <div className="w-[300px] h-[300px] relative">
          <Image
            src={song.image_url}
            alt={song.title}
            fill
            className="object-cover"
          />
        </div>
        <SheetTitle className="text-white">{song.title}</SheetTitle>
        <SheetDescription></SheetDescription>
        <p>{song.author}</p>
        {song.album && <p>PLAYING FROM: {song.album}</p>}
      </SheetContent>
    </Sheet>
  );
};

export default PlayerBigSong;
