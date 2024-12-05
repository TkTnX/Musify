import { AddAlbumType } from "@/types";
import { Album } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";

interface UseAlbumsStoreType {
  album: Album | null;

  addAlbum: (album: AddAlbumType) => Promise<Album>;
}

export const useAlbumsStore = create<UseAlbumsStoreType>((set) => ({
  album: null,

  addAlbum: async (album) => {
    try {
      const newAlbum = await axios.post("/api/albums", album);
      if (!newAlbum) throw new Error("Album not created");

      return newAlbum.data;
    } catch (error) {
      console.log(error);
    }
  },
}));
