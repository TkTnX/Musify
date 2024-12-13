import MainSection from "@/components/MainSection/MainSection";
import MainSectionSongs from "@/components/MainSection/MainSectionSongs";
import prisma from "@/prisma/prismaClient";
import { AlbumWithAllDependencies } from "@/types";

export const revalidate = 0;

export default async function Home() {
  const initialSongs = await prisma.song.findMany({
    include: { artist: true, album: true },
    take: 5,
  });

  const albums = await prisma.album.findMany({
    take: 5,
    include: {
      songs: {
        include: {
          artist: true,
          album: true,
        },
      },
      artist: true,
    },
  });
  return (
    <main className="mb-[100px]">
      {/* Title section */}
      <MainSectionSongs title="Songs" initialSongs={initialSongs} />

      {/* Albums section */}
      <MainSection
        title="Albums"
        albums={albums as AlbumWithAllDependencies[]}
      />
    </main>
  );
}
