import { SongWithAllDependencies } from "@/types";
import { AudioPlayerRef } from "react-audio-play";
import { create } from "zustand";

interface PlayerStoreType {
  currentSong: SongWithAllDependencies | null;
  currentSongs: SongWithAllDependencies[];
  isPlaying: boolean;
  volume: number[];
  audioPlayerRef: React.RefObject<AudioPlayerRef | null> | null;

  setCurrentSong: (song: SongWithAllDependencies | null) => void;
  setIsPlaying: (b: boolean) => void;
  setCurrentSongs: (song: SongWithAllDependencies[]) => void;
  setVolume: (values: number[]) => void;
  setAudioPlayerRef: (ref: React.RefObject<AudioPlayerRef>) => void;
}

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  currentSong: null,
  currentSongs: [],
  isPlaying: false,
  volume: JSON.parse(localStorage.getItem("volume")!) || [50],
  audioPlayerRef: { current: null },

  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (b) => set({ isPlaying: b }),
  setCurrentSongs: (song) => set({ currentSongs: song }),
  setVolume: (values) => set({ volume: values }),
  setAudioPlayerRef: (ref) => set({ audioPlayerRef: ref }),
}));
