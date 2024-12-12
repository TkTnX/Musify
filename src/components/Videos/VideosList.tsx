import { SongWithAllDependencies } from "@/types";
import VideoItem from "./VideoItem";

const VideosList = ({ songs }: { songs: SongWithAllDependencies[] }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-10">Videos</h2>
      <div className="mt-3 flex flex-col sm:flex-row items-center gap-4 overflow-x-auto scrollbar pb-5">
        {songs.map(
          (song) =>
            song.video &&
            song.video.map((video) => (
              <VideoItem key={video.id} video={{ ...video, song: song }} />
            ))
        )}
      </div>
    </div>
  );
};

export default VideosList;
