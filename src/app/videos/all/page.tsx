import VideoItem from "@/components/Videos/VideoItem";
import prisma from "@/prisma/prismaClient";
import { VideoWithSong } from "@/types";

const AllVideosPage = async () => {
  const videos = await prisma.video.findMany({
    include: {
      song: {
        include: {
          artist: true,
        },
      },
    },
  });
  if (!videos)
    return <div className="text-sm text-[#909090]">Error fetching videos</div>;
  return (
    <div>
      <h2 className="font-bold text-2xl">All Videos for you</h2>
      <div className="grid xl:grid-cols-2 gap-y-4 gap-x-2 mt-10">
        {videos.map((video: VideoWithSong) => (
          <VideoItem key={video.id} video={video} isAll={true} />
        ))}
      </div>
    </div>
  );
};

export default AllVideosPage;
