"use client";
import { ChevronRight } from "lucide-react";
import FavoritesListItem from "../Favorites/FavoritesListItem";
import { ArtistWithAllDependencies, SongWithAllDependencies } from "@/types";
import Link from "next/link";
import Image from "next/image";
import SongButtons from "../Song/SongButtons";
import { usePlayerControls } from "@/hooks/usePlayerControls";

const ArtistSongs = ({ artist }: { artist: ArtistWithAllDependencies }) => {
  const { handlePlay } = usePlayerControls({
    song: {
      ...artist.songs[0],
      artist: artist,
    } as unknown as SongWithAllDependencies,
  });
  return (
    <div className=" mt-10">
      <div className="flex flex-col-reverse lg:flex-row items-stretch gap-10 justify-between">
        <div className="flex-1">
          <Link
            href={`/artists/${artist.id}/songs`}
            className="font-semibold text-lg flex items-center gap-3 group hover:opacity-90 transition"
          >
            Artist Songs{" "}
            <ChevronRight
              stroke="#9b9b9b"
              className="group-hover:translate-x-1  transition"
            />
          </Link>
          {artist.songs.map((song) => (
            <FavoritesListItem
              key={song.id}
              song={
                {
                  ...song,
                  artist: artist,
                } as unknown as SongWithAllDependencies
              }
            />
          ))}
        </div>
        <div>
          <h4 className="font-semibold text-lg">Recent Release</h4>
          <div className="mt-3">
            <div className="relative w-[200px] h-[200px] group">
              <Image
                src={artist.songs[0].image_url}
                alt={artist.songs[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 transition left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <SongButtons
                  onClick={handlePlay}
                  isBigSong={true}
                  songId={artist.songs[0].id}
                />
              </div>
            </div>
            <h6 className="text-sm font-bold">{artist.songs[0].title}</h6>
            <p className="text-[#9b9b9b] text-xs">{artist.name}</p>
            <p className="text-xs text-[#9b9b9b]">
              {artist.songs[0].createdAt.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSongs;
