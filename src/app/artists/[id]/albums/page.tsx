import AlbumsListItem from "@/components/Albums/AlbumsListItem";
import prisma from "@/prisma/prismaClient";
import { AlbumWithAllDependencies } from "@/types";

const ArtistAlbumsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const artist = await prisma.artist.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      albums: {
        include: {
          songs: true,
          artist: true,
        },
      },
    },
  });
  if (!artist)
    return <div className="text-sm text-[#909090]">Album not found</div>;

  return (
    <div className="">
      <h2 className="font-bold text-2xl">{artist.name}&apos;s Albums</h2>
      <div className="mt-10 flex items-center gap-3">
        {artist.albums.map((album) => (
          <AlbumsListItem
            key={album.id}
            album={album as AlbumWithAllDependencies}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistAlbumsPage;
