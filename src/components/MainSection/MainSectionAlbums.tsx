"use client";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AlbumWithAllDependencies } from "@/types";
import axios from "axios";
import AlbumsListItem from "../Albums/AlbumsListItem";

interface MainSectionAlbumsProps {
  title: string;
  initialAlbums?: AlbumWithAllDependencies[];
}

const MainSectionAlbums: React.FC<MainSectionAlbumsProps> = ({
  title,
  initialAlbums = [],
}) => {
  const sliderRef = useRef(null);
  const [albums, setAlbums] = useState(initialAlbums);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const loadMoreSongs = async () => {
    if (loading || allDataLoaded) return;

    setLoading(true);

    const albums = await axios.get(`/api/albums?page=${currentPage + 1}`);
    const newAlbums: AlbumWithAllDependencies[] = await albums.data;

    setAlbums((prev) => [...prev, ...newAlbums]);
    setCurrentPage((prev) => prev + 1);
    setLoading(false);
    if (newAlbums.length < 5) {
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
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumsListItem isSlider album={album} />
          </SwiperSlide>
        ))}
        {loading && (
          <SwiperSlide className="flex items-center justify-center min-h-[344px] w-full bg-[#212124]">
            <div className="flex items-center justify-center h-[344px]">
              <Loader2 className="animate-spin" />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default MainSectionAlbums;
