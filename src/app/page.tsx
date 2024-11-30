import MainSection from "@/components/MainSection/MainSection";
import prisma from "@/prisma/prismaClient";

export const revalidate = 0;

export default async function Home() {
  const songs = await prisma.song.findMany({
    include: { artist: true, album: true, playlist: true },
  });
  return (
    <main className="mb-[100px]">
      {/* Title section */}
      <MainSection title="Trending" items={songs} isTitleSection />

      {/* Albums section */}
      <MainSection title="Albums" items={songs} />
    </main>
  );
}
