"use client";

import { useEffect, useState } from "react";

import PlayerControls from "./PlayerControls";
import PlayerCurrentSong from "./PlayerCurrentSong";
import PlayerSettings from "./PlayerSettings";

import { useSongsStore } from "@/stores/useSongsStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { SongWithAllDependencies } from "@/types";

const Player = () => {
  const [song, setSong] = useState<SongWithAllDependencies | null>(null);
  const usePlayer = usePlayerStore();
  const fetchSong = useSongsStore((state) => state.fetchSong);

  useEffect(() => {
    if (usePlayer.currentSongId) {
      const fetchSongFunc = async (id: number) => {
        const song = await fetchSong(id);

        setSong(song);
      };

      fetchSongFunc(usePlayer.currentSongId);
    }
  }, [fetchSong, usePlayer.currentSongId, usePlayer.currentSongIds]);

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1f1f22] h-[100px] sm:h-[93px]  z-10 p-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 sm:items-center justify-between">
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
