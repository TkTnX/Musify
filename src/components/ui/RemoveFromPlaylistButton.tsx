import { useUserStore } from "@/stores/useUserStore";
import { X } from "lucide-react";
import { toast } from "react-toastify";
// TODO: ДОДЕЛАТЬ

const RemoveFromPlaylistButton = ({ songId }: { songId: number }) => {
  const user = useUserStore((state) => state.user);
  if (!user || !user.id || !user.playlists) return null;
  const onClick = async () => {
    try {
      if (!songId) return;
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
