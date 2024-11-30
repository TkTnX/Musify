"use client";

import { cn } from "@/lib/utils";
import { SongWithAllDependencies } from "@/types";
import Image from "next/image";
import PlayButton from "../ui/playButton";

interface MainSectionItemProps {
  song: SongWithAllDependencies;
  isTitleSection: boolean;
}

const MainSectionItem: React.FC<MainSectionItemProps> = ({
  song,
  isTitleSection,
}) => {

  return (
    <div
      className={cn(
        "w-full  rounded-md overflow-hidden shadow cursor-pointer group",
        { "h-[375px]": isTitleSection }
      )}
    >
      <div
        className={cn("relative w-full h-[200px]", {
          "h-[250px]": isTitleSection,
        })}
      >
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 relative">
        <PlayButton  song={song} isMain={true} />
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          className="object-cover blur-[72px]"
        />
        <h5 className="font-semibold text-lg leading-6 relative z-10">
          {song.title}
        </h5>
        <p className="font-semibold text-sm leading-5 text-[#9898a6] relative z-10 mt-1">
          {song.artist.name}
        </p>
        {song.album && (
          <p className="font-semibold text-sm leading-5 text-[#9898a6] relative z-10 mt-1">
            {song.album.title}
          </p>
        )}
      </div>
    </div>
  );
};

export default MainSectionItem;
