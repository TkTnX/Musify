"use client";
import { cn } from "@/lib/utils";
import { useLikedSongsStore } from "@/stores/useLikedSongsStore";
import { useUserStore } from "@/stores/useUserStore";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";

interface SongLikeButtonProps {
  size: "sm" | "lg";
  songId: number;
  className?: string;
}

const SongLikeButton: React.FC<SongLikeButtonProps> = ({
  size,
  songId,
  className,
}) => {
  const user = useUserStore((state) => state.user);
  const { likeSong, likedSongs, error, loading } = useLikedSongsStore();
  if (!user || !user.id) return null;
  const isLiked =
    likedSongs.length > 0 && likedSongs.some((song) => song.songId === songId);
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
      disabled={loading}
      onClick={onClick}
      className={cn(
        "hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "absolute bottom-2   bg-[#0e0e0e]/60 p-3 rounded-full": size === "lg",
        },
        className
      )}
    >
      <Heart fill={isLiked ? "#fff" : "none"} size={size === "sm" ? 16 : 24} />
    </button>
  );
};

export default SongLikeButton;
