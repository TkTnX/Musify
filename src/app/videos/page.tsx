import LastVideosList from "@/components/Videos/LastVideosList";
import LikedSongsVideosList from "@/components/Videos/LikedSongsVideosList";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// TODO: Страницы all and liked
// TODO: На странице песни выводить видео, если есть
// TODO: На странице артиста выводить видео, если есть

const VideosPage = () => {
  return (
    <div className="mb-[100px]">
      <h2 className="font-bold text-2xl">Videos</h2>
      <div className="mt-10">
        <Link href={"/videos/all"} className="flex items-center gap-2 group">
          <h3 className="font-bold text-xl group-hover:opacity-80 transition">
            Last videos
          </h3>
          <ChevronRight className="group-hover:translate-x-1 transition" />
        </Link>
        <LastVideosList />
      </div>

      <div className="mt-10">
        <Link href={"/videos/liked"} className="flex items-center gap-2 group">
          <h3 className="font-bold text-xl group-hover:opacity-80 transition">
            Liked Songs Videos
          </h3>
          <ChevronRight className="group-hover:translate-x-1 transition" />
        </Link>
        <LikedSongsVideosList />
      </div>
    </div>
  );
};

export default VideosPage;
