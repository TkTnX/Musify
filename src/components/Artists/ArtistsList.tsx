"use client";

import Error from "@/app/error";
import Loading from "@/app/loading";
import { useArtistsStore } from "@/stores/useArtistsStore";
import { useEffect } from "react";
import ArtistsListItem from "./ArtistsListItem";
import { Artist } from "@prisma/client";


const ArtistsList = () => {
  const { fetchArtists, artists, error, loading } = useArtistsStore();

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  if (error) return <Error />;
  if (loading || (artists.length === 0 && !error && loading))
    return <Loading />;
  return (
    <div className="mt-5 grid  items-center gap-3 grid-cols-1 justify-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {artists.map((artist: Artist) => (
        <ArtistsListItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistsList;
