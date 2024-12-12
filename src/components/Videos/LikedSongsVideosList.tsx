"use client";
import { useVideosStore } from "@/stores/useVideosStore";
import VideoItem from "./VideoItem";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const LikedSongsVideosList = () => {
  const {
    fetchLikedSongsVideos,
    likedSongsVideos: videos,
    loading,
    error,
  } = useVideosStore();

  useEffect(() => {
    fetchLikedSongsVideos();
  }, [fetchLikedSongsVideos]);

  if (!videos && !loading && !error) return null;

  if (loading) return <Loader2 className="animate-spin" />;
  if (error && !loading)
    return <div className="text-sm text-[#909090]">Error fetching videos</div>;
  return (
    <div className="mt-3 flex flex-col sm:flex-row items-center gap-4 overflow-x-auto scrollbar pb-5">
      {videos.length > 0 ? (
        videos.map((video) => <VideoItem key={video.id} video={video} />)
      ) : (
        <p className="text-sm text-[#909090]">No videos found</p>
      )}
    </div>
  );
};

export default LikedSongsVideosList;
