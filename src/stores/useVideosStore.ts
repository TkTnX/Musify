import { addDataToDB } from "@/lib/addDataToDB";
import { getDataFromDB } from "@/lib/getDataFromDB";
import { AddVideoType, VideoWithSong } from "@/types";
import axios from "axios";
import { create } from "zustand";

interface useVideosStoreType {
  videos: VideoWithSong[];
  loading: boolean;
  error: boolean;
  fetchVideos: () => void;
  addVideo: (data: AddVideoType) => Promise<VideoWithSong | null>;
}

export const useVideosStore = create<useVideosStoreType>((set) => ({
  videos: [],
  loading: false,
  error: false,
  fetchVideos: () => {},
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
