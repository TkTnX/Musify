import MainSectionAlbums from "@/components/MainSection/MainSectionAlbums";
import MainSectionSongs from "@/components/MainSection/MainSectionSongs";
import prisma from "@/prisma/prismaClient";

export const revalidate = 0;

export default async function Home() {
  const initialSongs = await prisma.song.findMany({
    include: { artist: true, album: true },
    take: 5,
  });

  const albums = await prisma.album.findMany({
    take: 5,
    include: {
      artist: true,

      songs: {
        include: {
          artist: true,
          album: true,
          video: true,
        },
      },
    },
  });
  return (
    <main className="mb-[100px]">
      {/* Title section */}
      <MainSectionSongs title="Songs" initialSongs={initialSongs} />

      {/* Albums section */}
      <MainSectionAlbums title="Albums" initialAlbums={albums} />
    </main>
  );
}
