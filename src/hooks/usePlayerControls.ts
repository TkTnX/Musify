import { usePlayerStore } from "@/stores/usePlayerStore";
import { SongWithAllDependencies } from "@/types";
import { useUser } from "@clerk/nextjs";
import { Pause, Play } from "lucide-react";
import { useRouter } from "next/navigation";

export const usePlayerControls = ({
  song,
}: {
  song: SongWithAllDependencies;
}) => {
  const usePlayer = usePlayerStore();
  const router = useRouter();
  const user = useUser();

  const onPlayNext = () => {
    usePlayer.setIsPlaying(true);
    const currentIndex = usePlayer.currentSongs.findIndex(
      (s) => s.id === song.id
    );
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % usePlayer.currentSongs.length;
      const nextSong = usePlayer.currentSongs[nextIndex];

      if (!nextSong) {
        usePlayer.setCurrentSong(usePlayer.currentSongs[0]);
      } else {
        usePlayer.setCurrentSong(nextSong);
      }
    }
  };
  const onPlayPrev = () => {
    usePlayer.setIsPlaying(true);

    const currentIndex = usePlayer.currentSongs.findIndex(
      (s) => s.id === song.id
    );
    if (currentIndex !== -1) {
      const prevIndex =
        (currentIndex - 1 + usePlayer.currentSongs.length) %
        usePlayer.currentSongs.length;
      const prevSong = usePlayer.currentSongs[prevIndex];
      usePlayer.setCurrentSong(prevSong);
    }
  };

  const handlePlay = () => {
    if (usePlayer.isPlaying) {
      usePlayer.setIsPlaying(false);
      usePlayer.audioPlayerRef?.current?.pause();
    } else {
      usePlayer.setIsPlaying(true);
      usePlayer.setCurrentSong(song);
      usePlayer.audioPlayerRef?.current?.play();
    }
  };

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

  return {
    onPlayNext,
    onPlayPrev,
    handlePlay,
    PlayerIcon,
    togglePlayer,
  };
};
