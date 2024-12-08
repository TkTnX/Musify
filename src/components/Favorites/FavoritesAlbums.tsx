"use client";

import Loading from "@/app/loading";
import { useLikedAlbumsStore } from "@/stores/useLikedAlbumsStore";
import { useEffect } from "react";
import AlbumsListItem from "../Albums/AlbumsListItem";

const FavoritesAlbums = () => {
  const { error, likedAlbums, fetchLikedAlbums, loading } =
    useLikedAlbumsStore();

  useEffect(() => {
    fetchLikedAlbums();
  }, []);
  if (loading) return <Loading />;
  if (!loading && error) return null;
  if (!loading && !likedAlbums.length)
    return <div className="text-sm text-[#909090]">No liked albums yet</div>;

  return (
    <div className="mt-5 flex items-center gap-3 overflow-x-auto scrollbar pb-3">
      {!loading && likedAlbums.length === 0 && (
        <div className=" text-sm text-[#909090]">No liked albums yet</div>
      )}
      {likedAlbums.map((album) => (
        <AlbumsListItem key={album.id} album={album.album} />
      ))}
    </div>
  );
};

export default FavoritesAlbums;
