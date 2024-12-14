import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { Album } from "@prisma/client";
import { AlbumWithAllDependencies } from "@/types";
import axios from "axios";
import { create } from "zustand";

type AddAlbumType = {
  title: string;
  image_url: File[];
  artistId: number;
};

interface UseAlbumsStoreType {
  albums: AlbumWithAllDependencies[];
  loading: boolean;
  error: boolean;

  fetchAlbums: () => Promise<void>;
  addAlbum: (album: AddAlbumType) => Promise<Album>;
}

export const useAlbumsStore = create<UseAlbumsStoreType>((set) => ({
  albums: [],
  loading: false,
  error: false,

  fetchAlbums: async () => {
    try {
      set({ loading: true, error: false });

      const albums = await axios.get("/api/albums");

      if (!albums) throw new Error("Albums not found");

      set({ loading: false, albums: albums.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    }
  },

  addAlbum: async (album) => {
    try {
      set({ loading: true, error: false });

      // UPLOAD IMAGE
      const imageUrl = await addDataToDB("images", album.image_url[0]);
      if (!imageUrl) throw new Error("Error uploading image");

      // GET IMAGE
      const imagePublicUrl = await getDataFromDB("images", imageUrl);
      if (!imagePublicUrl) throw new Error("Error getting image public url");

      const newAlbum = await axios.post("/api/albums", {
        data: {
          ...album,
          image_url: imagePublicUrl,
        },
      });
      if (!newAlbum) throw new Error("Album not created");

      set({ loading: false });
      return newAlbum.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    }
  },
}));
