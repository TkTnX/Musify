import { ArtistWithAllDependencies } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, Play } from "lucide-react";

const ArtistTop = ({ artist }: { artist: ArtistWithAllDependencies }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-5">
      <div className="relative w-[250px] h-[250px] rounded-full">
        <Image
          src={artist.avatar_url}
          alt={artist.name}
          className="object-cover rounded-full"
          fill
        />
      </div>
      <div>
        <p className="text-[#9b9b9b] text-sm">Musician</p>
        <h2 className="font-bold text-3xl">{artist.name}</h2>
        <div className="flex items-center gap-3 mt-3">
          {artist.songs.length > 0 && (
            <Button className="bg-[#00ffff] hover:opacity-80 hover:bg-[#00ffff] rounded-2xl h-12">
              <Play fill="#000" />
              <span>Listen</span>
            </Button>
          )}
          <button className="bg-[#404040] p-3 rounded-full">
            <Heart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistTop;
