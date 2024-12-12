import { VideoWithSong } from "@/types";
import Image from "next/image";
import Link from "next/link";

const VideoItem = ({ video }: { video: VideoWithSong }) => {
  return (
    <div className="rounded-lg ">
      <video
        src={video.video_url}
        controls
        preload="metadata"
        className="sm:min-w-[450px] rounded-lg"
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
