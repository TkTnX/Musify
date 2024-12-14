import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { Artist } from "@prisma/client";
import { AddArtistType } from "@/types";
import axios from "axios";
import { create } from "zustand";
interface UseArtistsStoreType {
  artists: Artist[];
  loading: boolean;
  error: boolean;
  fetchArtists: () => Promise<void>;
  addArtist: (data: AddArtistType) => Promise<void>;
}

export const useArtistsStore = create<UseArtistsStoreType>((set) => ({
  artists: [],
  loading: false,
  error: false,
  fetchArtists: async () => {
    try {
      set({ loading: true });
      const artists = await axios.get("/api/artists");

      if (!artists) throw new Error("Artists not found");

      set({ artists: artists.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addArtist: async (data) => {
    try {
      set({ loading: true });
      const avatarFile = data.avatar_url[0];

      const avatarNameInDB = await addDataToDB("images", avatarFile);
      if (!avatarNameInDB) throw new Error("Error uploading avatar");

      const avatarUrl = await getDataFromDB("images", avatarNameInDB);
      if (!avatarUrl) throw new Error("Error getting avatar url");

      await axios.post("/api/artists", {
        name: data.name,
        avatar_url: avatarUrl,
      });
    } catch (error) {
      set({ error: true });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
