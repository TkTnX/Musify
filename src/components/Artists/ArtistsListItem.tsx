import { Artist } from "@/prisma/generated/client";
import Image from "next/image";
import Link from "next/link";

const ArtistsListItem = ({ artist }: { artist: Artist }) => {
  return (
    <div className="justify-self-center md:justify-self-start">
      <Link
        href={`/artists/${artist.id}`}
        className="relative block w-fit hover:opacity-50 transition "
      >
        <div className="relative  w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]">
          <Image
            src={artist.avatar_url}
            alt={artist.name}
            fill
            priority
            className="object-cover rounded-full "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2 className="font-bold text-xl absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
          {artist.name}
        </h2>
      </Link>
    </div>
  );
};

export default ArtistsListItem;
