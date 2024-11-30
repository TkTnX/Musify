import { usePlayerStore } from "@/stores/usePlayerStore";
import { SongWithAllDependencies } from "@/types";
import { Pause, Play } from "lucide-react";
import { useSound as useSoundHook } from "use-sound";

export const usePlayerControls = (song: SongWithAllDependencies) => {
  const usePlayer = usePlayerStore();
  const [play, { pause, sound, stop }] = useSoundHook(song.song_url, {
    volume: usePlayer.volume[0],
    onplay: () => usePlayer.setIsPlaying(true),
    onend: () => usePlayer.setIsPlaying(false),
    onpause: () => usePlayer.setIsPlaying(false),
    format: ["mp3"],
  });

  const handlePlay = () => {
    const globalSound = usePlayer.soundInstance;

    if (globalSound === sound) {
      if (usePlayer.isPlaying) {
        pause();
        usePlayer.setIsPlaying(false);
      } else {
        play();
        usePlayer.setIsPlaying(true);
      }
    } else {
      if (globalSound) {
        globalSound.stop();
      }
      usePlayer.setSoundInstance(sound);
      usePlayer.setCurrentSong(song);
      play();
      usePlayer.setIsPlaying(true);
    }
  };

  const PlayerIcon =
    usePlayer.isPlaying && usePlayer.currentSong?.id === song.id ? Pause : Play;

  return { play, pause, stop, sound, handlePlay, PlayerIcon };
};
