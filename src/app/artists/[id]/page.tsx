import ArtistSongs from "@/components/Artists/ArtistSongs";
import ArtistTop from "@/components/Artists/ArtistTop";
import prisma from "@/prisma/prismaClient";

// TODO: Кнопка listen у артиста которая будет включать все его треки,
// TODO: Страница с треками пользователя

const ArtistPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const artist = await prisma.artist.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      songs: {
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      },
      albums: true,
    },
  });
  if (!artist)
    return <div className="text-sm text-[#909090]">Artist not found</div>;
  return (
    <div className="mb-[100px]">
      <ArtistTop artist={artist} />
      {artist.songs.length === 0 && (
        <p className="text-sm text-[#909090] mt-5">No songs found</p>
      )}
      {artist.songs.length > 0 && <ArtistSongs artist={artist} />}
    </div>
  );
};

export default ArtistPage;
