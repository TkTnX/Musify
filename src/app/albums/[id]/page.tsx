import Error from "@/app/error";
import AlbumControls from "@/components/Albums/AlbumControls";
import FavoritesListItem from "@/components/Favorites/FavoritesListItem";
import prisma from "@/prisma/prismaClient";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AlbumPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const album = await prisma.album.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      artist: true,
      songs: {
        include: {
          artist: true,
          album: true,
          playlist: true,
        },
      },
    },
  });

  if (!album || !album.artist) return <Error />;

  return (
    <div className="">
      {/* TOP */}
      <div className="flex items-start gap-10">
        <div className="relative w-[250px] h-[250px] rounded-lg">
          <Image
            src={album.image_url}
            alt={album.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-sm text-[#909090]">Album</p>
          <h2 className="font-bold text-4xl uppercase">{album.title}</h2>
          <div className="flex items-center gap-3 mt-3">
            <Image
              src={album.artist.avatar_url}
              alt={album.artist.name}
              width={25}
              height={25}
              className="rounded-full object-cover"
            />
            <Link
              href={`/artists/${album.artist.id}`}
              className="font-semibold text-sm text-[#909090] hover:text-white"
            >
              {album.artist.name}
            </Link>
            <Dot className="text-[#909090]" />
            <p className="text-sm text-[#909090]">
              {album.createdAt.getFullYear()}
            </p>
          </div>
          <AlbumControls albumId={album.id} songs={album.songs} />
        </div>
      </div>
      {/* SONGS LIST */}
      <div className="mt-10">
        {album.songs.map((song) => (
          <FavoritesListItem song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;