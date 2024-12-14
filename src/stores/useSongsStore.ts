import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { Song } from "@/prisma/generated/client";
import { AddSongFormType, SongWithAllDependencies } from "@/types";
import axios from "axios";
import { create } from "zustand";
interface UseSongsStoreType {
  songs: Song[];
  loading: boolean;
  error: boolean;

  fetchSongs: () => void;
  addSong: (data: AddSongFormType) => Promise<Song | null>;
  fetchSong: (id: number) => Promise<SongWithAllDependencies>;
}

export const useSongsStore = create<UseSongsStoreType>((set) => ({
  songs: [],
  loading: false,
  error: false,

  fetchSongs: async () => {
    try {
      set({ loading: true, error: false });

      const songs = await axios.get("/api/songs");

      if (!songs) throw new Error("Songs not found");

      set({ songs: songs.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addSong: async (data) => {
    try {
      set({ loading: true, error: false });

      //   GETTING IMAGE
      const imageFile = data.image_url[0] ?? null;
      const imagePath = await addDataToDB("images", imageFile);

      //   GETTING SONG
      const songFile = data.song_url[0] ?? null;
      const songPath = await addDataToDB("songs", songFile);

      if (!imagePath || !songPath) {
        console.log("Error uploading files");
        set({ error: true });
        return null;
      }

      const imagePublicUrl = await getDataFromDB("images", imagePath);
      const songPublicUrl = await getDataFromDB("songs", songPath);

      if (!imagePublicUrl || !songPublicUrl) {
        console.log("Error getting public url");

        set({ error: true });
        return null;
      }

      const res = await axios.post("/api/song", {
        ...data,
        image_url: imagePublicUrl,
        song_url: songPublicUrl,
      });

      return res.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchSong: async (id) => {
    try {
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
