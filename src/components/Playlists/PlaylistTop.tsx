import Image from "next/image";
import AlbumControls from "../Albums/AlbumControls";
import { PlaylistWithAllDependencies } from "@/types";
import { Pen } from "lucide-react";
import EditPlaylist from "../modals/EditPlaylist";

const PlaylistTop = ({
  playlist,
}: {
  playlist: PlaylistWithAllDependencies;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-10">
      <div className="relative w-[250px] h-[250px] rounded-lg">
        {playlist.image_url === "" ? (
          <div className="w-full h-full from-[#1f1f22] to-[#212124] bg-gradient-to-b rounded-lg" />
        ) : (
          <Image
            src={playlist.image_url}
            alt={playlist.title}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
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
        <AlbumControls
          songs={playlist.playlistSongs.map((song) => song.song)}
        />
      </div>
    </div>
  );
};

export default PlaylistTop;
