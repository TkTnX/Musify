"use client";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { SongWithAllDependencies } from "@/types";
import Song from "../Song/Song";
import axios from "axios";

interface MainSectionSongsProps {
  title: string;
  initialSongs?: SongWithAllDependencies[];
}

const MainSectionSongs: React.FC<MainSectionSongsProps> = ({
  title,
  initialSongs = [],
}) => {
  const sliderRef = useRef(null);
  const [songs, setSongs] = useState(initialSongs);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const loadMoreSongs = async () => {
    if (loading || allDataLoaded) return;

    setLoading(true);

    const songs = await axios.get(`/api/songs?page=${currentPage + 1}`);
    const newSongs: SongWithAllDependencies[] = await songs.data;

    setSongs((prev) => [...prev, ...newSongs]);
    setCurrentPage((prev) => prev + 1);
    setLoading(false);
    if (newSongs.length < 5) {
      setAllDataLoaded(true);
      return;
    }
  };

  return (
    <div className={cn("mt-5")}>
      {/* section top */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg leading-6">{title}</h4>
        {/* slider btns */}
        <div className="flex items-center gap-2">
          <button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //   @ts-ignore
            onClick={() => sliderRef.current?.swiper.slidePrev()}
            className="bg-[#1f1f22] border border-[#29292d] rounded-full flex items-center justify-center "
          >
            <ChevronLeft size={24} />
          </button>
          <button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //   @ts-ignore
            onClick={() => sliderRef.current?.swiper.slideNext()}
            className="bg-[#1f1f22] border border-[#29292d] rounded-full flex items-center justify-center "
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* section content */}

      <Swiper
        onReachEnd={loadMoreSongs}
        ref={sliderRef}
        spaceBetween={24}
        slidesPerView={1}
        className="mt-2"
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1270: {
            slidesPerView: 4,
          },
        }}
      >
        {songs.map((song) => (
          <SwiperSlide key={song.id}>
            <Song song={song} isTitleSection={true} />
          </SwiperSlide>
        ))}
        {loading && (
          <SwiperSlide className="flex items-center justify-center min-h-[375px] w-full bg-[#212124]">
            <div className="flex items-center justify-center h-[375px]">
              <Loader2 className="animate-spin" />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default MainSectionSongs;
