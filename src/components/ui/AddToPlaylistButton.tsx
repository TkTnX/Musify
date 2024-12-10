import { ListPlus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";
import { usePlaylistsStore } from "@/stores/usePlaylistsStore";
import { toast } from "react-toastify";

const AddToPlaylistButton = ({ songId }: { songId: number }) => {
  const user = useUserStore((state) => state.user);
  const { loading, error, addSongToPlaylist } = usePlaylistsStore();
  if (!user || !user.id || !user.playlists) return null;

  const onClick = async (playlistId: number) => {
    try {
      if (!playlistId) return;

      await addSongToPlaylist({ playlistId, songId });

      if (error && !loading) throw new Error("Error adding song to playlist");

      if (!error && !loading)
        return toast.success("Song added to playlist successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <ListPlus />
        </TooltipTrigger>
        <TooltipContent className="grid  bg-[#171719] text-white border">
          {user.playlists.map((playlist) => (
            <button
              onClick={() => onClick(playlist.id)}
              className="flex items-center gap-3 hover:bg-[#2f2f2f] p-2 rounded transition"
              key={playlist.id}
            >
              <div>
                <Image
                  src={playlist.image_url}
                  alt={playlist.title}
                  width={25}
                  height={25}
                />
              </div>
              <p>{playlist.title}</p>
            </button>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddToPlaylistButton;
