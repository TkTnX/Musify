import { Artist } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const ArtistsListItem = ({ artist }: { artist: Artist }) => {
  return (
    <div>
      <Link
        href={`/artists/${artist.id}`}
        className="relative block w-fit hover:opacity-50 transition "
      >
        <Image
          src={artist.avatar_url}
          alt={artist.name}
          width={250}
          height={250}
          className="object-cover rounded-full w-[250px] h-[250px]"
        />
        <h2 className="font-bold text-xl absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
          {artist.name}
        </h2>
      </Link>
    </div>
  );
};

export default ArtistsListItem;
