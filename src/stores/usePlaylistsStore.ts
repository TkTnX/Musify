import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { AddNewPlaylistType } from "@/types";
import { Playlist } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";

interface PlaylistsStore {
  playlists: Playlist[];
  loading: boolean;
  error: boolean;
  fetchPlaylists: () => void;
  addPlaylist: (data: AddNewPlaylistType) => Promise<Playlist>;
}

export const usePlaylistsStore = create<PlaylistsStore>((set) => ({
  playlists: [],
  loading: false,
  error: false,
  fetchPlaylists: async () => {},
  addPlaylist: async (data) => {
    try {
      set({ loading: true, error: false });
      let imagePublicUrl = null;
      if (data.image_url) {
        const imageUrl = await addDataToDB("images", data.image_url[0]);
        if (!imageUrl) throw new Error("Error uploading image");

        imagePublicUrl = await getDataFromDB("images", imageUrl);
        if (!imagePublicUrl) throw new Error("Error getting image public url");
      }

      const playlist = await axios.post("/api/playlists", {
        data: {
          title: data.title,
          image_url: imagePublicUrl,
        },
      });
      if (!playlist) throw new Error("Playlist not created");

      return playlist.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
