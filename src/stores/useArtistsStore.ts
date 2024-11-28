import { Artist } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";
interface UseArtistsStoreType {
  artists: Artist[];
  loading: boolean;
  error: boolean;

  fetchArtists: () => Promise<void>;
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
}));
