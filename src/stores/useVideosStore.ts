import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { AddVideoType, VideoWithSong } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface useVideosStoreType {
  videos: VideoWithSong[];
  likedSongsVideos: VideoWithSong[];
  loading: boolean;
  error: boolean;
  fetchVideos: () => void;
  fetchLikedSongsVideos: () => void;
  addVideo: (data: AddVideoType) => Promise<VideoWithSong | null>;
}

export const useVideosStore = create<useVideosStoreType>((set) => ({
  videos: [],
  likedSongsVideos: [],
  loading: false,
  error: false,
  fetchVideos: async () => {
    try {
      set({ loading: true, error: false });

      const videos = await axios.get("/api/videos");

      if (!videos) throw new Error("Videos not found");

      set({ videos: videos.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  fetchLikedSongsVideos: async () => {
    try {
      set({ loading: true, error: false });

      const videos = await axios.get("/api/videos/likedSongsVideos");

      if (!videos) throw new Error("Videos not found");

      set({ likedSongsVideos: videos.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  addVideo: async (data) => {
    try {
      set({ loading: true, error: false });

      if (!data) throw new Error("Data not found");

      // UPLOADING VIDEO
      const videoUrl = await addDataToDB("videos", data.video_url[0]);
      if (!videoUrl) throw new Error("Error uploading video");

      // GETTING VIDEO
      const videoPublicUrl = await getDataFromDB("videos", videoUrl);
      if (!videoPublicUrl) throw new Error("Error getting video public url");

      const video = await axios.post("/api/videos", {
        data: {
          video_url: videoPublicUrl,
          songId: data.songId,
        },
      });
      if (!video) throw new Error("Video not created");

      return video.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
