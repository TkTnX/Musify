"use client";

import { usePlayerStore } from "@/stores/usePlayerStore";
import PlayerControls from "./PlayerControls";
import PlayerCurrentSong from "./PlayerCurrentSong";
import PlayerSettings from "./PlayerSettings";

const Player = () => {
  const song = usePlayerStore((state) => state.currentSong);

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1f1f22]  sm:h-[93px]  z-10 p-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 sm:items-center justify-between">
      {/* Current Song */}
      <PlayerCurrentSong song={song} />

      {/* Controls */}
      <PlayerControls song={song} />

      {/* Volume & Settings */}
      <PlayerSettings song={song} />
    </div>
  );
};

export default Player;
