import { addSongData } from "@/lib/addSongData";
import { getSongData } from "@/lib/getSongData";
import { AddSongFormType, SongWithAllDependencies } from "@/types";
import { Song } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";
interface UseSongsStoreType {
  songs: Song[];
  loading: boolean;
  error: boolean;

  addSong: (data: AddSongFormType) => Promise<void>;
  fetchSong: (id: number) => Promise<SongWithAllDependencies>;
}

export const useSongsStore = create<UseSongsStoreType>((set) => ({
  songs: [],
  loading: false,
  error: false,

  addSong: async (data) => {
    try {
      set({ loading: true });

      //   GETTING IMAGE
      const imageFile = data.image_url[0] ?? null;
      const imagePath = await addSongData("images", imageFile);

      //   GETTING SONG
      const songFile = data.song_url[0] ?? null;
      const songPath = await addSongData("songs", songFile);

      if (!imagePath || !songPath) {
        console.log("Error uploading files");
        throw new Error("Error uploading files");
      }

      const imagePublicUrl = await getSongData("images", imagePath);
      const songPublicUrl = await getSongData("songs", songPath);

      if (!imagePublicUrl || !songPublicUrl) {
        console.log("Error getting public url");
        throw new Error("Error getting public url");
      }

      await axios.post("/api/song", {
        ...data,
        image_url: imagePublicUrl,
        song_url: songPublicUrl,
      });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchSong: async (id) => {
    try {
      console.log(id);
      set({ loading: true });
      if (!id) throw new Error("Id not found");

      const song = await axios.get(`/api/song/${id}`);

      if (!song) throw new Error("Song not found");

      return song.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
