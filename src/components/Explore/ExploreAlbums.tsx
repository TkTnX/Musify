import Loading from "@/app/loading";
import { useAlbumsStore } from "@/stores/useAlbumsStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ExploreAlbums = ({ value }: { value: string }) => {
  const { albums, fetchAlbums, loading, error } = useAlbumsStore();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(value.toLowerCase())
  );

  if (!loading && error)
        return <div className="text-sm text-[#909090]">Error fetching albums</div>;
    
    if(loading) return <Loading />

  return (
    <div className="flex items-center gap-3 scrollbar overflow-x-auto pb-3">
      {filteredAlbums.map((album) => (
        <Link href={`/albums/${album.id}`} key={album.id} className="block">
          <div className="relative min-w-[250px] min-h-[250px]">
            <Image
              src={album.image_url}
              alt={album.title}
              fill
              priority
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h5 className="font-bold text-sm text-white mt-2 text-center">
            {album.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default ExploreAlbums;
