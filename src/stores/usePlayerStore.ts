import { SongWithAllDependencies } from "@/types";
import { create } from "zustand";

interface PlayerStoreType {
  currentSong: SongWithAllDependencies | null;
  currentSongId: number | null;
  currentSongIds: number[];
  isPlaying: boolean;
  volume: number[];
  timing: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  soundInstance: any;

  setCurrentSong: (song: SongWithAllDependencies | null) => void;
  setIsPlaying: (b: boolean) => void;
  setCurrentSongId: (id: number | null) => void;
  setCurrentSongIds: (ids: number[]) => void;
  setVolume: (values: number[]) => void;
  setTiming: (timing: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSoundInstance: (sound: any) => void;
}

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  currentSong: null,
  currentSongId: null,
  currentSongIds: [],
  isPlaying: false,
  volume: [0.1],
  timing: 0,
  soundInstance: null,

  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (b) => set({ isPlaying: b }),
  setCurrentSongId: (id) => set({ currentSongId: id }),
  setCurrentSongIds: (ids) => set({ currentSongIds: ids }),
  setVolume: (values) => set({ volume: values }),
  setTiming: (timing) => set({ timing }),
  setSoundInstance: (sound) => set({ soundInstance: sound }),
}));
