import VideoItem from "@/components/Videos/VideoItem";
import prisma from "@/prisma/prismaClient";
import { VideoWithSong } from "@/types";
import { auth } from "@clerk/nextjs/server";

const LikedSongsVideosPage = async () => {
  const { userId } = await auth();
  if (!userId) return null;
  const videos = await prisma.video.findMany({
    take: 5,
    where: {
      song: {
        likedSongs: {
          some: {
            userId,
          },
        },
      },
    },
    include: {
      song: {
        include: {
          artist: true,
          album: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

    if(!videos) return <div className="text-sm text-[#909090]">Videos not found</div>;
  return (
    <div>
      <h2 className="font-bold text-2xl">Liked Songs Videos</h2>
      <div className="grid xl:grid-cols-2 gap-y-4 gap-x-2 mt-10">
        {videos.map((video: VideoWithSong) => (
          <VideoItem key={video.id} video={video} isAll={true} />
        ))}
      </div>
    </div>
  );
};

export default LikedSongsVideosPage;
