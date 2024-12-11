import prisma from "@/prisma/prismaClient";
import Link from "next/link";

const LastVideosList = async () => {
  const videos = await prisma.video.findMany({
    take: 5,
    include: {
      song: true,
    },
  });

  if (!videos)
    return <div className="text-sm text-[#909090]">Videos not found</div>;
  return (
    <div className="mt-10 flex items-center gap-4 scrollbar">
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video.id}>
            <video
              src={video.video_url}
              width={450}
              controls
              preload="metadata"
            >
              <source src={video.video_url} />
            </video>
            <Link
              href={`/songs/${video.song.id}`}
              className="mt-2 font-bold text-lg"
            >
              {video.song.title}
            </Link>
          </div>
        ))
      ) : (
        <p className="text-sm text-[#909090]">No videos found</p>
      )}
    </div>
  );
};

export default LastVideosList;
