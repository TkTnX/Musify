import MainSection from "@/components/MainSection/MainSection";
import prisma from "@/prisma/prismaClient";
import { AlbumWithAllDependencies } from "@/types";

export const revalidate = 0;

export default async function Home() {
  const songs = await prisma.song.findMany({
    include: { artist: true, album: true, playlist: true },
  });

  const albums = await prisma.album.findMany({
    include: {
      songs: {
        include: {
          artist: true,
          album: true,
          playlist: true,
        },
      },
      artist: true,
    },
  });
  return (
    <main className="mb-[100px]">
      {/* Title section */}
      <MainSection title="Trending" songs={songs} isTitleSection />

      {/* Albums section */}
      <MainSection
        title="Albums"
        albums={albums as AlbumWithAllDependencies[]}
      />
    </main>
  );
}
