import { LikedSongsWithSong } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface UseLikedSongsStoreType {
  likedSongs: LikedSongsWithSong[];
  loading: boolean;
  error: boolean;

  fetchLikedSongs: () => void;
  likeSong: (songId: number) => void;
}

export const useLikedSongsStore = create<UseLikedSongsStoreType>(
  (set, get) => ({
    likedSongs: [],
    loading: false,
    error: false,

    fetchLikedSongs: async () => {
      try {
        set({ loading: true });

        const likedSongs = await axios.get("/api/likedSongs");

        if (!likedSongs.data) throw new Error("Liked songs not found");
        set({ likedSongs: likedSongs.data });
      } catch (error) {
        console.log(error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },
    likeSong: async (songId: number) => {
      try {
        set({ loading: true });

        if (!songId) throw new Error("Song id not found");

        const likedSong = await axios.post("/api/likedSongs", { songId });

        if (!likedSong) throw new Error("Liked songs not found");

        if (get().likedSongs.some((song) => song.songId === songId)) {
          set({
            likedSongs: get().likedSongs.filter(
              (song) => song.songId !== songId
            ),
          });
        } else {
          set({ likedSongs: [...get().likedSongs, likedSong.data] });
        }
      } catch (error) {
        console.log(error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },
  })
);
