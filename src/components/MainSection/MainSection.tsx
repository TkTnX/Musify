"use client";
import { SongType } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MainSectionItem from "./MainSectionItem";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MainSectionProps {
  title: string;
  items: SongType[];
  isTitleSection?: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({
  title,
  items,
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
            slidesPerView: isTitleSection ? 2 : 3,
          },
          960: {
            slidesPerView: isTitleSection ? 3 : 4,
          },
          1270: {
            slidesPerView: isTitleSection ? 4 : 5,
          },
        }}
      >
        {items.map((song) => (
          <SwiperSlide key={song.id}>
            <MainSectionItem song={song} isTitleSection={isTitleSection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSection;
