import { cn } from "@/lib/utils";
import { VideoWithSong } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface VideoItemProps {
  video: VideoWithSong;
  isAll?: boolean;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, isAll }) => {
  return (
    <div
      className={cn("rounded-lg ", { "border border-[#29292d] p-2": isAll })}
    >
      <video
        src={video.video_url}
        controls
        preload="metadata"
        className={cn("sm:min-w-[450px] rounded-lg", { "w-full": isAll })}
      >
        <source src={video.video_url} />
      </video>
      <Link
        href={`/songs/${video.song.id}`}
        className="mt-5 flex items-center gap-3"
      >
        <Image
          src={video.song.image_url}
          alt={video.song.title}
          width={25}
          height={25}
          className="rounded-full w-[25px] h-[25px] object-cover"
        />
        <p className="hover:opacity-80 transition  font-bold text-lg ">
          {video.song.title}
        </p>
      </Link>
      <Link
        href={`/artists/${video.song.artist.id}`}
        className="font-semibold text-sm leading-5 text-[#afafb0] block transition hover:text-white w-fit"
      >
        {video.song.artist.name}
      </Link>
    </div>
  );
};

export default VideoItem;
