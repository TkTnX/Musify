import { addSongData } from "@/lib/addSongData";
import { getSongData } from "@/lib/getSongData";
import { AddSongFormType } from "@/types";
import { Song } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";
interface UseSongsStoreType {
  songs: Song[];
  loading: boolean;
  error: boolean;

  //   fetchArtists: () => Promise<void>;
  addSong: (data: AddSongFormType) => Promise<void>;
}

export const useSongsStore = create<UseSongsStoreType>((set) => ({
  songs: [],
  loading: false,
  error: false,
  //   fetchArtists: async () => {
  //     try {
  //       set({ loading: true });
  //       const artists = await axios.get("/api/artists");

  //       if (!artists) throw new Error("Artists not found");

  //       set({ artists: artists.data });
  //     } catch (error) {
  //       console.log(error);
  //       set({ error: true });
  //     } finally {
  //       set({ loading: false });
  //     }
  //   },

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
}));
