import { useLikedAlbumsStore } from "@/stores/useLikedAlbumsStore";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LikeAlbumButton = ({ albumId }: { albumId: number }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { likeAlbum, error, loading, likedAlbums } =
    useLikedAlbumsStore();

  useEffect(() => {
    const likedIds = likedAlbums.map((album) => album.albumId);
    setIsLiked(likedIds.some((id) => id === albumId));
  }, [likedAlbums, albumId]);

  const onLike = async () => {
    try {
      await likeAlbum(albumId);

      if (!error && !loading) {
        setIsLiked(!isLiked);
        return toast.success(
          `Album ${isLiked ? "unliked" : "liked"} successfully!`
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <button
      onClick={onLike}
      className="bg-[#0e0e0e]/80 p-4 rounded-full hover:opacity-80 hover:scale-110 transition"
    >
      {isLiked ? <Heart fill="#fff" size={24} /> : <Heart size={24} />}
    </button>
  );
};

export default LikeAlbumButton;
