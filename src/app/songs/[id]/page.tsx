import AlbumControls from "@/components/Albums/AlbumControls";
import AlbumsListItem from "@/components/Albums/AlbumsListItem";
import SongLikeButton from "@/components/Song/SongLikeButton";
import VideosList from "@/components/Videos/VideosList";
import prisma from "@/prisma/prismaClient";
import { AlbumWithAllDependencies, SongWithAllDependencies } from "@/types";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SongPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) return <div className="text-sm text-[#909090]">Song not found</div>;

  const song = await prisma.song.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      video: true,
      artist: {
        include: {
          albums: {
            include: {
              artist: true,
              songs: {
                include: {
                  artist: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!song)
    return <div className="text-sm text-[#909090]">Song not found</div>;
  return (
    <div className="mb-[100px]">
      {/* SONG INFO */}
      <div className="flex flex-col  sm:flex-row  items-start gap-10">
        <div className="relative w-[200px] lg:min-w-[250px] h-[200px] lg:min-h-[250px] rounded-lg">
          <Image
            src={song.image_url}
            alt={song.title}
            fill
            className="object-cover rounded-lg"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <p className="text-sm text-[#909090]">Single</p>
          <h2 className="font-bold text-2xl lg:text-4xl uppercase">
            {song.title}
          </h2>
          <div className="flex items-center gap-3 mt-3 ">
            <Image
              src={song.artist.avatar_url}
              alt={song.artist.name}
              width={25}
              height={25}
              className="rounded-full object-cover w-[25px] h-[25px]"
            />
            <Link
              href={`/artists/${song.artist.id}`}
              className="font-semibold text-sm text-[#909090] hover:text-white"
            >
              {song.artist.name}
            </Link>
            <Dot className="text-[#909090]" />
            <p className="text-sm text-[#909090]">
              {song.createdAt.getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-10">
            <AlbumControls
              songs={[song] as unknown as SongWithAllDependencies[]}
              className="mt-0"
            />
            <SongLikeButton size="lg" songId={song.id} className="static" />
          </div>
        </div>
      </div>
      {/* ARTIST ALBUMS */}
      <div className="mt-10">
        <h3 className="font-bold text-2xl lg:text-3xl">
          More from {song.artist.name}
        </h3>
        <div className="flex items-start gap-10 mt-5 overflow-x-auto">
          {song.artist.albums.map((album: AlbumWithAllDependencies) => (
            <AlbumsListItem
              key={album.id}
              album={album as AlbumWithAllDependencies}
            />
          ))}
        </div>
      </div>
      {/* SONG VIDEO */}

      {song.video && song.video.length > 0 && <VideosList songs={[song]} />}
    </div>
  );
};

export default SongPage;
