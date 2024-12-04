"use client";

import { useEffect } from "react";
import Loading from "@/app/loading";
import { useLikedArtists } from "@/stores/useLikedArtistsStore";
import ArtistsListItem from "../Artists/ArtistsListItem";

const FavoritesArtistsList = () => {
  const { error, fetchLikedArtists, likedArtists, loading } = useLikedArtists();

  useEffect(() => {
    fetchLikedArtists();
  }, [fetchLikedArtists]);
  if (loading || (likedArtists.length === 0 && !error && loading))
    return <Loading />;
  if (!loading && error) return null;
  return (
    <div className="mt-5 flex items-center gap-3">
      {!error && likedArtists.length === 0 && (
        <p className="text-sm text-[#909090]">No liked artists yet</p>
      )}
      {likedArtists.map((artist) => (
        <ArtistsListItem key={artist.artistId} artist={artist.artist} />
      ))}
    </div>
  );
};

export default FavoritesArtistsList;
