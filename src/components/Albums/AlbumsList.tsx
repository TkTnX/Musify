"use client";

import Loading from "@/app/loading";
import { useAlbumsStore } from "@/stores/useAlbumsStore";
import { useEffect } from "react";
import AlbumsListItem from "./AlbumsListItem";



const AlbumsList = () => {
  const { fetchAlbums, albums, loading, error } = useAlbumsStore();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  if (!loading && error)
    return <div className="text-sm text-[#909090]">Error fetching albums</div>;

  if (loading) return <Loading />;

  return (
    <div className="flex items-center gap-3 mt-10 flex-wrap">
      {!loading && albums.length > 0 ? (
        albums.map((album) => (
          <AlbumsListItem key={album.id} album={album} />
        ))
      ) : (
        <p className="text-sm text-[#909090]">No albums found</p>
      )}
    </div>
  );
};

export default AlbumsList;
