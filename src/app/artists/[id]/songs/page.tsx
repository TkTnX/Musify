import FavoritesListItem from "@/components/Favorites/FavoritesListItem";
import prisma from "@/prisma/prismaClient";

const ArtistSongsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const artist = await prisma.artist.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      songs: {
        include: {
          artist: true,
          album: true,
          playlist: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  if (!artist)
    return <div className="text-sm text-[#909090]">Songs not found</div>;

  return (
    <div className="">
      <h2 className="font-bold text-2xl">{artist.name}&apos;s Songs</h2>
      <div>
        {artist.songs.map((song) => (
          <FavoritesListItem song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default ArtistSongsPage;
