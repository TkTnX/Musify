import PlaylistSongsList from "@/components/Playlists/PlaylistSongsList";
import PlaylistTop from "@/components/Playlists/PlaylistTop";
import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";

const PlaylistPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { userId } = await auth();
  if (!id || !userId) return null;

  const playlist = await prisma.playlist.findFirst({
    where: { id: Number(id), userId: userId },
    include: {
      playlistSongs: {
        include: {
          song: {
            include: {
              artist: true,
              album: true,
              playlist: true,
            },
          },
        },
      },
    },
  });

  if (!playlist)
    return <p className="text-sm text-[#909090]">Playlist not found</p>;
  return (
    <div className="">
      {/* TOP */}
      <PlaylistTop playlist={playlist} />
      {/* SONGS LIST */}
      {playlist.playlistSongs.length > 0 ? (
        <PlaylistSongsList
          playlistId={playlist.id}
          songs={playlist.playlistSongs.map((song) => song.song)}
        />
      ) : (
        <p className="text-sm text-[#909090] mt-10">No songs in playlist</p>
      )}
    </div>
  );
};

export default PlaylistPage;
