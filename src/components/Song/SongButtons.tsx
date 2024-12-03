"use client";
import { cn } from "@/lib/utils";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

interface PlayerContolsButtonsProps {
  onPlayPrev?: () => void;
  onPlayNext?: () => void;
  onClick?: () => void;
  isBigSong: boolean;
  songId: number;
}

const SongButtons: React.FC<PlayerContolsButtonsProps> = ({
  onPlayPrev,
  onPlayNext,
  onClick,
  isBigSong,
  songId,
}) => {
  const usePlayer = usePlayerStore();
  const PlayerIcon =
    usePlayer.isPlaying && usePlayer.currentSong?.id === songId ? Pause : Play;
  return (
    <>
      {onPlayPrev && (
        <button
          onClick={onPlayPrev}
          type="button"
          className={cn(
            "hidden sm:block hover:opacity-80 hover:scale-110 transition",
            { "bg-[#0e0e0e]/60 p-3 rounded-full": isBigSong }
          )}
        >
          <SkipBack fill="#fff" size={isBigSong ? 24 : 16} />
        </button>
      )}

      {isBigSong && (
        <button
          onClick={onClick}
          className={cn("hover:opacity-80 hover:scale-110 transition", {
            "bg-[#0e0e0e]/60 p-4 rounded-full": isBigSong,
          })}
        >
          <PlayerIcon fill="#fff" size={isBigSong ? 32 : 16} />
        </button>
      )}
      {onPlayNext && (
        <button
          onClick={onPlayNext}
          type="button"
          className={cn(
            "hidden sm:block hover:opacity-80 hover:scale-110 transition",
            { "bg-[#0e0e0e]/60 p-3 rounded-full": isBigSong }
          )}
        >
          <SkipForward fill="#fff" size={isBigSong ? 24 : 16} />
        </button>
      )}
    </>
  );
};

export default SongButtons;
