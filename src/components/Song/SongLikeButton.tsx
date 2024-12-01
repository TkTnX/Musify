import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface SongLikeButtonProps {
  size: "sm" | "lg";
  songId: number;
}

const SongLikeButton: React.FC<SongLikeButtonProps> = ({ size, songId }) => {
  console.log(songId)

  return (
    <button
      className={cn("hover:scale-110 transition", {
        "absolute bottom-2   bg-[#0e0e0e]/60 p-3 rounded-full": size === "lg",
      })}
    >
      <Heart size={size === "sm" ? 16 : 24} />
    </button>
  );
};

export default SongLikeButton;
