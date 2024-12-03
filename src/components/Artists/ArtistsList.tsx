"use client";

import Error from "@/app/error";
import Loading from "@/app/loading";
import { useArtistsStore } from "@/stores/useArtistsStore";
import { useEffect } from "react";
import ArtistsListItem from "./ArtistsListItem";

const ArtistsList = () => {
  const { fetchArtists, artists, error, loading } = useArtistsStore();

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  if (error) return <Error />;
  if (loading || (artists.length === 0 && !error && loading))
    return <Loading />;
  console.log(artists);
  return (
    <div className="mt-5 flex items-center gap-3 flex-wrap">
      {!loading && artists.length === 0 && (
        <div className=" text-sm text-[#909090]">No artists</div>
      )}
      {artists.map((artist) => (
        <ArtistsListItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistsList;
