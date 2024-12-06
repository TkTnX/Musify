"use client";
import { ArtistWithAllDependencies } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, Pause, Play } from "lucide-react";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { toast } from "react-toastify";
import { useLikedArtists } from "@/stores/useLikedArtistsStore";
import { useEffect, useState } from "react";

const ArtistTop = ({ artist }: { artist: ArtistWithAllDependencies }) => {
  const usePlayer = usePlayerStore();
  const [isLiked, setIsLiked] = useState(false);
  const { error, loading, likeArtist, likedArtists, fetchLikedArtists } =
    useLikedArtists();

  useEffect(() => {
    fetchLikedArtists();
  }, [fetchLikedArtists]);

  const handlePlayArtistSongs = () => {
    if (usePlayer.isPlaying) {
      usePlayer.setIsPlaying(false);
      usePlayer.audioPlayerRef?.current?.pause();
    } else {
      usePlayer.setIsPlaying(true);
      usePlayer.setCurrentSong(artist.songs[0]);
      usePlayer.setCurrentSongs(artist.songs);
      usePlayer.audioPlayerRef?.current?.play();
    }
  };

  const handleLikeArtist = async () => {
    try {
      await likeArtist(artist.id);

      if (!error && !loading)
        return toast.success(
          `Artist ${isLiked ? "unliked" : "liked"} successfully!`
        );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const likedIds = likedArtists.map((artist) => artist.artistId);
    setIsLiked(likedIds.some((id) => id === artist.id));
  }, [artist, likedArtists]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5">
      <div className="relative w-[250px] h-[250px] rounded-full">
        <Image
          src={artist.avatar_url}
          alt={artist.name}
          className="object-cover rounded-full"
          fill
        />
      </div>
      <div>
        <p className="text-[#9b9b9b] text-sm">Musician</p>
        <h2 className="font-bold text-3xl">{artist.name}</h2>
        <div className="flex items-center gap-3 mt-3">
          {artist.songs.length > 0 && (
            <Button
              onClick={handlePlayArtistSongs}
              className="bg-[#00ffff] hover:opacity-80 hover:bg-[#00ffff] rounded-2xl h-12"
            >
              {usePlayer.isPlaying ? (
                <Pause fill="#000" />
              ) : (
                <Play fill="#000" />
              )}

              <span>Listen</span>
            </Button>
          )}
          <button
            onClick={handleLikeArtist}
            className="bg-[#404040] p-3 rounded-full"
          >
            {isLiked ? <Heart fill="#fff" size={24} /> : <Heart size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistTop;
