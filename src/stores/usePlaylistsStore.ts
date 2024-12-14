import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { Playlist } from "@/prisma/generated/client";
import { AddNewPlaylistType, EditPlaylistType } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface PlaylistsStore {
  playlists: Playlist[];
  loading: boolean;
  error: boolean;
  fetchPlaylists: () => void;
  addPlaylist: (data: AddNewPlaylistType) => Promise<Playlist>;
  editPlaylist: (data: EditPlaylistType) => Promise<Playlist>;
  addSongToPlaylist: (data: { playlistId: number; songId: number }) => void;
  removeSongFromPlaylist: (data: {
    playlistId: number;
    songId: number;
  }) => void;
  deletePlaylist: (id: number) => void;
}


export const usePlaylistsStore = create<PlaylistsStore>((set) => ({
  playlists: [],
  loading: false,
  error: false,
  fetchPlaylists: async () => {},
  addPlaylist: async (data) => {
    try {
      set({ loading: true, error: false });
      let imagePublicUrl: string = "";
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
  editPlaylist: async (data) => {
    try {
      set({ loading: true, error: false });
      let imagePublicUrl = data.image_url;
      if (data.image_url && typeof data.image_url === "object") {
        const imageUrl = await addDataToDB("images", data.image_url[0]);
        if (!imageUrl) throw new Error("Error uploading image");

        imagePublicUrl = await getDataFromDB("images", imageUrl);
        if (!imagePublicUrl) throw new Error("Error getting image public url");
      }

      const playlist = await axios.patch("/api/playlists", {
        data: {
          title: data.title,
          image_url: imagePublicUrl,
          id: data.id,
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

  addSongToPlaylist: async (data) => {
    try {
      set({ loading: true, error: false });
      if (!data) throw new Error("Data not found");

      await axios.post(`/api/playlistSongs/${data.playlistId}`, {
        songId: data.songId,
      });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeSongFromPlaylist: async (data) => {
    try {
      set({ loading: true, error: false });
      if (!data) throw new Error("Data not found");

      await axios.delete(`/api/playlistSongs/${data.playlistId}`, {
        data,
      });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  deletePlaylist: async (id) => {
    try {
      if (!id) throw new Error("Id not found");
      set({ loading: true, error: false });

      await axios.delete(`/api/playlists/${id}`);
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
