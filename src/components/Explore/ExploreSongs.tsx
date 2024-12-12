import Loading from "@/app/loading";
import { useSongsStore } from "@/stores/useSongsStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ExploreSongs = ({ value }: { value: string }) => {
  const { songs, fetchSongs, loading, error } = useSongsStore();

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(value.toLowerCase())
  );

  if (!loading && error)
    return <div className="text-sm text-[#909090]">Error fetching songs</div>;

  if (loading) return <Loading />;

  return (
    <div className="flex items-center gap-3 scrollbar overflow-x-auto pb-3">
      {filteredSongs.map((song) => (
        <Link href={`/songs/${song.id}`} key={song.id} className="block">
          <div className="relative min-w-[250px] min-h-[250px]">
            <Image
              src={song.image_url}
              alt={song.title}
              fill
              priority
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h5 className="font-bold text-sm text-white mt-2 text-center">
            {song.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default ExploreSongs;
