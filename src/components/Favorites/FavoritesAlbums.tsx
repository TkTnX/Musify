"use client";

import Loading from "@/app/loading";
import { useLikedAlbumsStore } from "@/stores/useLikedAlbumsStore";
import { useEffect } from "react";
import AlbumsListItem from "../Albums/AlbumsListItem";
import { AlbumWithAllDependencies } from "@/types";

const FavoritesAlbums = () => {
  const { error, likedAlbums, fetchLikedAlbums, loading } =
    useLikedAlbumsStore();

  useEffect(() => {
    fetchLikedAlbums();
  }, [fetchLikedAlbums]);

  if (loading || (likedAlbums.length === 0 && !error && loading))
    return <Loading />;
  return (
    <div className="mt-5">
      {!loading && likedAlbums.length === 0 && (
        <div className=" text-sm text-[#909090]">No liked albums yet</div>
      )}
      {likedAlbums.map((album) => (
        <AlbumsListItem
          key={album.id}
          album={album.album as AlbumWithAllDependencies}
        />
      ))}
    </div>
  );
};

export default FavoritesAlbums;
