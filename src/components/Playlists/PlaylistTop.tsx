import Image from "next/image";
import AlbumControls from "../Albums/AlbumControls";
import { PlaylistWithAllDependencies } from "@/types";
import { Pen } from "lucide-react";
import EditPlaylist from "../modals/EditPlaylist";
import { Button } from "../ui/button";

const PlaylistTop = ({
  playlist,
}: {
  playlist: PlaylistWithAllDependencies;
}) => {
  return (
    <div className="flex items-start gap-10">
      <div className="relative w-[250px] h-[250px] rounded-lg">
        <Image
          src={playlist.image_url}
          alt={playlist.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div>
        <p className="text-sm text-[#909090]">Playlist</p>
        <div className="group relative">
          <h2 className="font-bold text-4xl uppercase">{playlist.title}</h2>
          <EditPlaylist playlist={playlist}>
            <button className="group-hover:opacity-100 opacity-0 transition absolute -right-5 -top-5">
              <Pen color="#6a6d75" />
            </button>
          </EditPlaylist>
        </div>
        <div className="flex items-center justify-between mt-10">
          <AlbumControls songs={playlist.songs} className="mt-0" />
          <Button>Add a Song</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTop;
