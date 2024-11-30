import { SongWithAllDependencies } from "@/types";
import { create } from "zustand";

interface PlayerStoreType {
  currentSong: SongWithAllDependencies | null;
  currentSongIds: number[];
  duration: number;
  isPlaying: boolean;
  volume: number[];

  setCurrentSong: (song: SongWithAllDependencies | null) => void;
  setIsPlaying: (b: boolean) => void;
  setDuration: (duration: number) => void;
  setCurrentSongIds: (ids: number[]) => void;
  setVolume: (values: number[]) => void;
}

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  currentSong: null,
  currentSongIds: [],
  duration: 0,
  isPlaying: false,
  volume: [0.1],

  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (b) => set({ isPlaying: b }),
  setDuration: (duration) => set({ duration }),
  setCurrentSongIds: (ids) => set({ currentSongIds: ids }),
  setVolume: (values) => set({ volume: values }),
}));
