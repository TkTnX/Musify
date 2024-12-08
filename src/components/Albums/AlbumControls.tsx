"use client";
import { Heart } from "lucide-react";
import ListenButton from "../ui/ListenButton";
import { useEffect, useState } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { SongWithAllDependencies } from "@/types";
import { useLikedAlbumsStore } from "@/stores/useLikedAlbumsStore";
import { toast } from "react-toastify";

const AlbumControls = ({
  songs,
  albumId,
}: {
  songs: SongWithAllDependencies[];
  albumId: number;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const usePlayer = usePlayerStore();
  const { error, loading, likeAlbum, likedAlbums, fetchLikedAlbums } =
    useLikedAlbumsStore();

  useEffect(() => {
    fetchLikedAlbums();
  }, [fetchLikedAlbums]);

  const onListen = async () => {
    if (usePlayer.isPlaying) {
      usePlayer.setIsPlaying(false);
      usePlayer.audioPlayerRef?.current?.pause();
    } else {
      usePlayer.setIsPlaying(true);
      usePlayer.setCurrentSong(songs[0]);
      usePlayer.setCurrentSongs(songs);
      usePlayer.audioPlayerRef?.current?.play();
    }
  };
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

  useEffect(() => {
    const likedIds = likedAlbums.map((album) => album.albumId);
    setIsLiked(likedIds.some((id) => id === albumId));
  }, [likedAlbums, albumId]);

  return (
    <div className="flex items-center gap-3 mt-10">
      <ListenButton onClick={onListen} />
      <button
        onClick={onLike}
        className="bg-[#404040] p-3 rounded-full hover:opacity-80 hover:scale-110 transition"
      >
        {isLiked ? <Heart fill="#fff" size={24} /> : <Heart size={24} />}
      </button>
    </div>
  );
};

export default AlbumControls;
