import ArtistAlbums from "@/components/Artists/ArtistAlbums";
import ArtistSongs from "@/components/Artists/ArtistSongs";
import ArtistTop from "@/components/Artists/ArtistTop";
import prisma from "@/prisma/prismaClient";
import { AlbumWithAllDependencies } from "@/types";

const ArtistPage = async ({ params }: { params: { id: string } }) => {
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
        take: 5,
      },
      albums: {
        include: {
          artist: true,
          songs: true,
        },
      },
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
      {artist.albums.length > 0 && (
        <ArtistAlbums
          artistId={artist.id}
          albums={artist.albums as unknown as AlbumWithAllDependencies[]}
        />
      )}
    </div>
  );
};

export default ArtistPage;
