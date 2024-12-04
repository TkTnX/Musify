"use client";

import { useEffect } from "react";
import Error from "@/app/error";
import Loading from "@/app/loading";
import { useLikedArtists } from "@/stores/useLikedArtistsStore";
import ArtistsListItem from "../Artists/ArtistsListItem";

const FavoritesArtistsList = () => {
  const { error, fetchLikedArtists, likedArtists, loading } = useLikedArtists();

  useEffect(() => {
    fetchLikedArtists();
  }, [fetchLikedArtists]);
  if (error) return <Error />;
  if (loading || (likedArtists.length === 0 && !error && loading))
    return <Loading />;
  if (!error && likedArtists.length === 0) return null;
  console.log(likedArtists);
  return (
    <div className="mt-5">
      {likedArtists.map((artist) => (
        <ArtistsListItem key={artist.artistId} artist={artist.artist} />
      ))}
    </div>
  );
};

export default FavoritesArtistsList;
