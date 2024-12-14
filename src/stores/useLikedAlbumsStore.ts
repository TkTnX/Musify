import { LikedAlbums } from "@/prisma/generated/client";
import { AlbumWithAllDependencies } from "@/types";
import axios from "axios";
import { create } from "zustand";

type LikedAlbumsWithAlbum = LikedAlbums & { album: AlbumWithAllDependencies };

interface UseLikedAlbumsStoreType {
  likedAlbums: LikedAlbumsWithAlbum[];
  loading: boolean;
  error: boolean;

  fetchLikedAlbums: () => Promise<void>;
  likeAlbum: (albumId: number) => Promise<void>;
}

export const useLikedAlbumsStore = create<UseLikedAlbumsStoreType>(
  (set, get) => ({
    likedAlbums: [],
    loading: false,
    error: false,

    fetchLikedAlbums: async () => {
      try {
        set({ loading: true, error: false });

        const likedAlbums = await axios.get("/api/likedAlbums");

        if (!likedAlbums) throw new Error("Liked albums not found");

        set({ likedAlbums: likedAlbums.data });
      } catch (error) {
        console.log(error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },

    likeAlbum: async (albumId) => {
      try {
        set({ loading: true, error: false });

        if (!albumId) throw new Error("Album id not found");

        const likedAlbum = await axios.get(`/api/likedAlbums/${albumId}`);

        if (!likedAlbum) throw new Error("Liked album not found");

        if (
          get().likedAlbums.some((album) => album.id === likedAlbum.data.id)
        ) {
          set({
            likedAlbums: get().likedAlbums.filter(
              (album) => album.id !== likedAlbum.data.id
            ),
          });
        } else {
          set({ likedAlbums: [...get().likedAlbums, likedAlbum.data] });
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
