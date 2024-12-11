"use client";

import { cn } from "@/lib/utils";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { SongWithAllDependencies } from "@/types";
import { useUser } from "@clerk/nextjs";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SongProps {
  song: SongWithAllDependencies;
  isTitleSection: boolean;
}

const Song: React.FC<SongProps> = ({ song, isTitleSection }) => {
  const router = useRouter();
  const usePlayer = usePlayerStore();
  const { user } = useUser();

  const PlayerIcon =
    usePlayer.isPlaying && usePlayer.currentSong?.id === song.id ? Pause : Play;
  const togglePlayer = () => {
    if (!user) return router.push("/sign-in");
    if (usePlayer.isPlaying && usePlayer.currentSong?.id === song.id) {
      usePlayer.setIsPlaying(false);
      usePlayer.audioPlayerRef?.current?.pause();
    } else {
      usePlayer.setIsPlaying(true);
      usePlayer.audioPlayerRef?.current?.play();
    }
    usePlayer.setCurrentSong(song);
    usePlayer.setCurrentSongs([...usePlayer.currentSongs, song]);
  };
  return (
    <div
      className={cn(
        "w-full  rounded-md overflow-hidden shadow cursor-pointer group",
        { "h-[375px]": isTitleSection }
      )}
    >
      <Link
        href={`/songs/${song.id}`}
        className={cn("relative w-full h-[200px] block", {
          "h-[250px]": isTitleSection,
        })}
      >
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-4 relative">
        <button
          key={song.id}
          onClick={togglePlayer}
          className={
            "bg-white rounded-full p-3 absolute top-0 right-0 z-10 -translate-x-1/2 -translate-y-[60%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition hover:scale-110"
          }
        >
          <PlayerIcon fill="#000" stroke="#000" />
        </button>
        <Image
          src={song.image_url}
          alt={song.title}
          fill
          priority
          className="object-cover blur-[72px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h5 className="font-semibold text-lg leading-6 relative z-10">
          {song.title}
        </h5>
        <Link
          href={`/artists/${song.artist.id}`}
          className="font-semibold text-sm leading-5 text-[#9898a6] relative z-10 mt-1 block  hover:text-white w-fit"
        >
          {song.artist.name}
        </Link>
        {song.album && (
          <Link
            href={`/albums/${song.album.id}`}
            className="font-semibold text-sm leading-5 text-[#9898a6] relative z-10 mt-1 hover:text-white"
          >
            {song.album.title}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Song;
