"use client";
import { ArtistWithAllDependencies } from "@/types";
import Image from "next/image";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import { useLikedArtists } from "@/stores/useLikedArtistsStore";
import { useEffect, useState } from "react";
import ListenButton from "../ui/ListenButton";

const ArtistTop = ({ artist }: { artist: ArtistWithAllDependencies }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { error, loading, likeArtist, likedArtists, fetchLikedArtists } =
    useLikedArtists();

  useEffect(() => {
    fetchLikedArtists();
  }, [fetchLikedArtists]);

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
          priority
        />
      </div>
      <div>
        <p className="text-[#9b9b9b] text-sm">Musician</p>
        <h2 className="font-bold text-3xl">{artist.name}</h2>
        <div className="flex items-center gap-3 mt-3">
          {artist.songs.length > 0 && <ListenButton songs={artist.songs} />}
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
