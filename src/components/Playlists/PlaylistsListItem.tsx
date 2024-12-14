import { Playlist } from "@/prisma/generated/client";
import Image from "next/image";
import Link from "next/link";

const PlaylistsListItem = ({ playlist }: { playlist: Playlist }) => {
  if (!playlist) return null;
  return (
    <div className="">
      <Link
        href={`/playlists/${playlist.id}`}
        className="relative w-[250px] h-[250px] block"
      >
        <Image
          src={playlist.image_url}
          alt={playlist.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <h4 className="mt-2 font-bold text-lg">{playlist.title}</h4>
    </div>
  );
};

export default PlaylistsListItem;
