"use client";

import { usePlayerControls } from "@/hooks/usePlayerControls";
import { cn } from "@/lib/utils";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { SongWithAllDependencies } from "@/types";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface MainSectionItemProps {
  song: SongWithAllDependencies;
  isTitleSection: boolean;
}

const MainSectionItem: React.FC<MainSectionItemProps> = ({
  song,
  isTitleSection,
}) => {
  const usePlayer = usePlayerStore();


  const togglePlayer = () => {
    usePlayer.setCurrentSong(song);
    usePlayer.setCurrentSongIds([...usePlayer.currentSongIds, song.id]);
    usePlayer.setIsPlaying(true);
  };

  return (
    <div
      className={cn(
        "w-full  rounded-md overflow-hidden shadow cursor-pointer group",
        { "h-[375px]": isTitleSection }
      )}
    >
      <div
        className={cn("relative w-full h-[200px]", {
          "h-[250px]": isTitleSection,
        })}
      >
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 relative">
        <button
          onClick={togglePlayer}
          className={
            "bg-white rounded-full p-3 absolute top-0 right-0 z-10 -translate-x-1/2 -translate-y-[60%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition hover:scale-110"
          }
        >
          <Play fill="#000" />
        </button>
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          className="object-cover blur-[72px]"
        />
        <h5 className="font-semibold text-lg leading-6 relative z-10">
          {song.title}
        </h5>
        <p className="font-semibold text-sm leading-5 text-[#9898a6] relative z-10 mt-1">
          {song.artist.name}
        </p>
        {song.album && (
          <p className="font-semibold text-sm leading-5 text-[#9898a6] relative z-10 mt-1">
            {song.album.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default MainSectionItem;
