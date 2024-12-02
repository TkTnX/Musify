import { cn } from "@/lib/utils";
import { useLikedSongsStore } from "@/stores/useLikedSongsStore";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";

interface SongLikeButtonProps {
  size: "sm" | "lg";
  songId: number;
}


const SongLikeButton: React.FC<SongLikeButtonProps> = ({ size, songId }) => {
  const { likeSong, likedSongs, error, loading } = useLikedSongsStore();
  const isLiked = likedSongs.some((song) => song.songId === songId);
  const onClick = async () => {
    try {
      await likeSong(songId);

      if (error && !loading) throw new Error("Error liking song");

      if (!error) {
        toast.success(`Song ${isLiked ? "unliked" : "liked"}  successfully!`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn("hover:scale-110 transition", {
        "absolute bottom-2   bg-[#0e0e0e]/60 p-3 rounded-full": size === "lg",
      })}
    >
      <Heart fill={isLiked ? "#fff" : "none"} size={size === "sm" ? 16 : 24} />
    </button>
  );
};

export default SongLikeButton;
