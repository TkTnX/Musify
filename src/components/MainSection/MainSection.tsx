"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { AlbumWithAllDependencies, SongWithAllDependencies } from "@/types";
import Song from "../Song/Song";
import AlbumsListItem from "../Albums/AlbumsListItem";

interface MainSectionProps {
  title: string;
  songs?: SongWithAllDependencies[];
  albums?: AlbumWithAllDependencies[];
  isTitleSection?: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({
  title,
  songs,
  albums,
  isTitleSection = false,
}) => {
  const sliderRef = useRef(null);
  return (
    <div className={cn("mt-14", { "mt-5": isTitleSection })}>
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
        ref={sliderRef}
        spaceBetween={isTitleSection ? 24 : 12}
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
        {songs
          ? songs.map((song) => (
              <SwiperSlide key={song.id}>
                <Song song={song} isTitleSection={isTitleSection} />
              </SwiperSlide>
            ))
          : albums &&
            albums.map((album) => (
              <SwiperSlide key={album.id}>
                <AlbumsListItem isSlider album={album} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default MainSection;
