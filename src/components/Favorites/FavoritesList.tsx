"use client";

import { useLikedSongsStore } from "@/stores/useLikedSongsStore";
import { useEffect } from "react";
import FavoritesListItem from "./FavoritesListItem";
import Error from "@/app/error";
import Loading from "@/app/loading";

const FavoritesList = () => {
  const { fetchLikedSongs, likedSongs, error, loading } = useLikedSongsStore();

  useEffect(() => {
    fetchLikedSongs();
  }, [fetchLikedSongs]);
  if (error) return <Error />;
  if (loading || (likedSongs.length === 0 && !error && loading))
    return <Loading />;
  return (
    <div className="mt-5">
      {!loading && likedSongs.length === 0 && (
        <div className=" text-sm text-[#909090]">No favorites yet</div>
      )}
      {likedSongs.map((song) => (
        <FavoritesListItem key={song.id} song={song.song} />
      ))}
    </div>
  );
};

export default FavoritesList;
