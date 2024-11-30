import { usePlayerStore } from "@/stores/usePlayerStore";
import { Song } from "@prisma/client";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export const usePlayerControls = (song?: Song) => {
  const [timing, setTiming] = useState(0);
  const usePlayer = usePlayerStore();
  const PlayerIcon = usePlayer.isPlaying ? Pause : Play;

  const onPlayNext = () => {};
  const onPlayPrev = () => {};
  onPlayPrev();

  // Player functionality
  const [play, { sound, pause }] = useSound(song ? song.song_url : "", {
    volume: usePlayer.volume[0],
    onplay: () => usePlayer.setIsPlaying(true),
    onend: () => {
      usePlayer.setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => usePlayer.setIsPlaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play();
    usePlayer.setDuration(sound?.duration() || 0);

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!usePlayer.isPlaying) {
      play();
    } else {
      pause();
    }
  };

  return {
    PlayerIcon,
    handlePlay,
    duration: usePlayer.duration,
    sound,
    timing,
    setTiming,
  };
};
