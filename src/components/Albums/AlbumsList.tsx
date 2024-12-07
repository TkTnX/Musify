"use client";

import Loading from "@/app/loading";
import { useAlbumsStore } from "@/stores/useAlbumsStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";



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
          <div key={album.id} className="border border-[#29292d] rounded-2xl">
            <Link
              href={`/albums/${album.id}`}
              className="w-[250px] h-[250px] relative block"
            >
              <Image
                src={album.image_url}
                alt={album.title}
                fill
                className="object-cover rounded-2xl "
              />
            </Link>
            <div className="p-3">
              <h5 className="font-semibold text-2xl    tracking-wider mt-3">
                {album.title}
              </h5>
              <Link
                href={`/artists/${album.artist.id}`}
                className="text-sm text-[#909090] hover:text-white"
              >
                {album.artist.name}
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-[#909090]">No albums found</p>
      )}
    </div>
  );
};

export default AlbumsList;
