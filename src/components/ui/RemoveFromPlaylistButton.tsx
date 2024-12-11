import { usePlaylistsStore } from "@/stores/usePlaylistsStore";
import { useUserStore } from "@/stores/useUserStore";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RemoveFromPlaylistButton = ({
  songId,
  playlistId,
}: {
  songId: number;
  playlistId: number;
}) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const { removeSongFromPlaylist, loading, error } = usePlaylistsStore();
  if (!user || !user.id || !user.playlists) return null;

  const onClick = async () => {
    try {
      if (!songId) return;

      await removeSongFromPlaylist({ playlistId, songId });

      if (error && !loading)
        return toast.error("Error removing song from playlist");

      if (!error && !loading) {
        toast.success("Song removed from playlist");
        return router.refresh();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <button onClick={onClick} className="hover:opacity-80 transition">
      <X className="h-4 w-4" />
    </button>
  );
};

export default RemoveFromPlaylistButton;
