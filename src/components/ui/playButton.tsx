"use client";

import { usePlayerControls } from "@/hooks/usePlayerContols";
import { cn } from "@/lib/utils";
import { SongWithAllDependencies } from "@/types";

const PlayButton = ({
  song,
  isMain,
}: {
  song: SongWithAllDependencies;
  isMain: boolean;
}) => {
  const { PlayerIcon, handlePlay } = usePlayerControls(song);

  return (
    <button
      onClick={handlePlay}
      className={cn("  ", {
        "bg-white rounded-full p-3 absolute top-0 right-0 z-10 -translate-x-1/2 -translate-y-[60%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition hover:scale-110":
          isMain,
      })}
    >
      <PlayerIcon
        size={16}
        color={isMain ? "#000" : "#fff"}
        fill={isMain ? "#000" : "#fff"}
      />
    </button>
  );
};

export default PlayButton;
