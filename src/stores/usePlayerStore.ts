import { SongWithAllDependencies } from "@/types";
import { AudioPlayerRef } from "react-audio-play";
import { create } from "zustand";

interface PlayerStoreType {
  currentSong: SongWithAllDependencies | null;
  currentSongIds: number[];
  isPlaying: boolean;
  volume: number[];
  audioPlayerRef: React.RefObject<AudioPlayerRef | null> | null;

  setCurrentSong: (song: SongWithAllDependencies | null) => void;
  setIsPlaying: (b: boolean) => void;
  setCurrentSongIds: (ids: number[]) => void;
  setVolume: (values: number[]) => void;
  setAudioPlayerRef: (ref: React.RefObject<AudioPlayerRef>) => void;
}

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  currentSong: null,
  currentSongIds: [],
  isPlaying: false,
  volume: [20],
  audioPlayerRef: { current: null },

  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (b) => set({ isPlaying: b }),
  setCurrentSongIds: (ids) => set({ currentSongIds: ids }),
  setVolume: (values) => set({ volume: values }),
  setAudioPlayerRef: (ref) => set({ audioPlayerRef: ref }),
}));
