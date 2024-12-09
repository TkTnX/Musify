"use client";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Button } from "./button";
import { Pause, Play } from "lucide-react";
import { SongWithAllDependencies } from "@/types";
import { cn } from "@/lib/utils";

interface ListenButtonProps {
  songs: SongWithAllDependencies[];
  isRounded?: boolean;
}

const ListenButton: React.FC<ListenButtonProps> = ({ songs, isRounded }) => {
  const usePlayer = usePlayerStore();

  const onClick = async () => {
    if (usePlayer.isPlaying) {
      usePlayer.setIsPlaying(false);
      usePlayer.audioPlayerRef?.current?.pause();
    } else {
      usePlayer.setIsPlaying(true);
      usePlayer.setCurrentSong(songs[0]);
      usePlayer.setCurrentSongs(songs);
      usePlayer.audioPlayerRef?.current?.play();
    }
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "bg-[#00ffff] hover:opacity-80 hover:bg-[#00ffff] rounded-2xl h-12",
        {
          "bg-[#0e0e0e]/80 hover:bg-[#0e0e0e] p-4 rounded-full hover:opacity-80 hover:scale-110 transition":
            isRounded,
        }
      )}
    >
      {usePlayer.isPlaying &&
      usePlayer.currentSong?.album === songs[0].album ? (
        <Pause fill={isRounded ? "#fff" : "#000"} size={32} stroke="none" />
      ) : (
        <Play fill={isRounded ? "#fff" : "#000"} size={32} stroke="none" />
      )}

      {!isRounded && <span>Listen</span>}
    </Button>
  );
};

export default ListenButton;
