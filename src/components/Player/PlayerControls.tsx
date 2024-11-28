import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { Slider } from "../ui/slider";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Song } from "@prisma/client";
import { useSound } from "use-sound";
import { useEffect } from "react";
const PlayerControls = ({ song }: { song: Song }) => {
  const usePlayer = usePlayerStore();

  const PlayerIcon = usePlayer.isPlaying ? Pause : Play;

  const [play, { pause, sound }] = useSound(song.song_url, {
    volume: usePlayer.volume[0],
    onplay: () => usePlayer.setIsPlaying(true),
    onend: () => {
      usePlayer.setIsPlaying(false);
      handlePlayNext();
    },
    onpause: () => usePlayer.setIsPlaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.upload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (usePlayer.isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handlePlayNext = () => {
    if (usePlayer.currentSongIds.length === 0) {
      return;
    }

    const currentIndex = usePlayer.currentSongIds.findIndex(
      (id) => id === usePlayer.currentSongId
    );
    const nextIndex = usePlayer.currentSongIds[currentIndex + 1];

    if (!nextIndex) {
      return usePlayer.setCurrentSongId(usePlayer.currentSongIds[0]);
    }

    usePlayer.setCurrentSongId(nextIndex);
  };
  const handlePlayPrev = () => {
    if (usePlayer.currentSongIds.length === 0) {
      return;
    }

    const currentIndex = usePlayer.currentSongIds.findIndex(
      (id) => id === usePlayer.currentSongId
    );

    const prevIndex = usePlayer.currentSongIds[currentIndex - 1];

    if (!prevIndex) {
      return usePlayer.setCurrentSongId(
        usePlayer.currentSongIds[usePlayer.currentSongIds.length - 1]
      );
    }

    usePlayer.setCurrentSongId(prevIndex);
  };

  console.log(sound)

  return (
    <div className="flex flex-row sm:flex-col items-center justify-center gap-6 w-full sm:w-auto">
      {/* TOP */}
      <div className="flex items-center gap-8">
        <button
          onClick={handlePlayPrev}
          type="button"
          className="hidden sm:block hover:opacity-80 hover:scale-110 transition"
        >
          <SkipBack fill="#fff" size={16} />
        </button>
        <button
          onClick={handlePlay}
          type="button"
          className="hover:opacity-80 hover:scale-110 transition"
        >
          <PlayerIcon size={24} fill="#fff" />
        </button>
        <button
          onClick={handlePlayNext}
          type="button"
          className="hidden sm:block hover:opacity-80 hover:scale-110 transition"
        >
          <SkipForward fill="#fff" size={16} />
        </button>
      </div>

      {/* BOTTOM */}
      <div className="rounded-full w-full sm:w-[300px] lg:w-[515px] h-[4px] bg-[#4c4e54]">
        <Slider
          className="rounded-full cursor-pointer"
          value={[12]}
          defaultValue={[0]}
          step={1}
          max={sound?.duration}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
