import { create } from "zustand";

interface PlayerStoreType {
  currentSongId: number | null;
  currentSongIds: number[];
  isPlaying: boolean;
  volume: number[];
  timing: number;

  setIsPlaying: (b: boolean) => void;
  setCurrentSongId: (id: number | null) => void;
  setCurrentSongIds: (ids: number[]) => void;
  setVolume: (values: number[]) => void;
  setTiming: (timing: number) => void;
}

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  currentSongId: null,
  currentSongIds: [],
  isPlaying: false,
  volume: [0.1],
  timing: 0,

  setIsPlaying: (b) => set({ isPlaying: b }),
  setCurrentSongId: (id) => set({ currentSongId: id }),
  setCurrentSongIds: (ids) => set({ currentSongIds: ids }),
  setVolume: (values) => set({ volume: values }),
  setTiming: (timing) => set({ timing }),
}));
