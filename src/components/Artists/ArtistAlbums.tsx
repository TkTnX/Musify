import { AlbumWithAllDependencies } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArtistAlbumsProps {
  albums: AlbumWithAllDependencies[];
  artistId: number;
}

const ArtistAlbums: React.FC<ArtistAlbumsProps> = ({ albums, artistId }) => {
  return (
    <div className="mt-10">
      <Link
        href={`/artists/${artistId}/albums`}
        className="font-semibold text-lg flex items-center gap-3 group hover:opacity-90 transition"
      >
        Artist Albums{" "}
        <ChevronRight
          stroke="#9b9b9b"
          className="group-hover:translate-x-1  transition"
        />
      </Link>
      <div className="mt-3 flex items-center gap-3 flex-wrap">
        {albums.map((album) => (
          <div key={album.id}>
            <Link
              href={`/albums/${album.id}`}
              className="relative w-[250px] h-[250px] block"
            >
              <Image
                src={album.image_url}
                alt={album.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <h5 className="font-bold text-sm text-white mt-2">{album.title}</h5>
            <p className="text-sm text-[#909090]">{album.artist.name}</p>
            <p className="text-sm text-[#909090]">
              {album.createdAt.getFullYear()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistAlbums;
