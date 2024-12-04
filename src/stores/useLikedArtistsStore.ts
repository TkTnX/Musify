import { LikedArtistsWithArtist } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface useLikedArtistsType {
  likedArtists: LikedArtistsWithArtist[];
  loading: boolean;
  error: boolean;

  fetchLikedArtists: () => void;
  likeArtist: (artistId: number) => Promise<LikedArtistsWithArtist>;
}

export const useLikedArtists = create<useLikedArtistsType>((set, get) => ({
  likedArtists: [],
  loading: false,
  error: false,

  fetchLikedArtists: async () => {
    try {
      set({ loading: true });

      const likedArtists = await axios.get("/api/likedArtists");

      if (!likedArtists) throw new Error("Liked artists not found");

      set({ likedArtists: likedArtists.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  likeArtist: async (artistId) => {
    try {
      set({ loading: true });

      if (!artistId) throw new Error("Artist id not found");

      const likedArtist = await axios.post("/api/likedArtists", { artistId });

      if (!likedArtist) throw new Error("Liked artist not found");

      if (get().likedArtists.some((artist) => artist.artistId === artistId)) {
        set({
          likedArtists: get().likedArtists.filter(
            (artist) => artist.artistId !== artistId
          ),
        });
      } else {
        set({ likedArtists: [...get().likedArtists, likedArtist.data] });
      }
      return likedArtist.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
