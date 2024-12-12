import Loading from "@/app/loading";
import { useArtistsStore } from "@/stores/useArtistsStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ExploreArtists = ({ value }: { value: string }) => {
  const { artists, fetchArtists, loading, error } = useArtistsStore();

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(value.toLowerCase())
  );

  if (!loading && error)
    return <div className="text-sm text-[#909090]">Error fetching artists</div>;

  if (loading) return <Loading />;

  return (
    <div className="flex items-center gap-3 scrollbar overflow-x-auto pb-3">
      {filteredArtists.map((artist) => (
        <Link href={`/artists/${artist.id}`} key={artist.id} className="block">
          <div className="relative min-w-[250px] min-h-[250px]">
            <Image
              src={artist.avatar_url}
              alt={artist.name}
              fill
              priority
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h5 className="font-bold text-sm text-white mt-2 text-center">
            {artist.name}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default ExploreArtists;
