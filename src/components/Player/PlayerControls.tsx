import { SkipBack, SkipForward } from "lucide-react";
import { Slider } from "../ui/slider";
import { SongWithAllDependencies } from "@/types";
import { usePlayerControls } from "@/hooks/usePlayerContols";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";

// TODO: Синхронизировать трек в main section item и player
// TODO: Пофиксить ошибку TypeError: sound?.upload is not a function при смене трека при включении через MainSectionItem
// TODO: В большой экран песни добавить controls

const PlayerControls = ({ song }: { song: SongWithAllDependencies }) => {
  const { sound, pause, play, PlayerIcon } = usePlayerControls(song);
  const usePlayer = usePlayerStore();
  const handlePlayNext = () => {
    // if (usePlayer.currentSongIds.length === 0) {
    //   return;
    // }
    // const currentIndex = usePlayer.currentSongIds.findIndex(
    //   (id) => id === usePlayer.currentSongId
    // );
    // const nextIndex = usePlayer.currentSongIds[currentIndex + 1];
    // if (!nextIndex) {
    //   return usePlayer.setCurrentSongId(usePlayer.currentSongIds[0]);
    // }
    // usePlayer.setCurrentSongId(nextIndex);
  };
  const handlePlayPrev = () => {
    // if (usePlayer.currentSongIds.length === 0) {
    //   return;
    // }
    // const currentIndex = usePlayer.currentSongIds.findIndex(
    //   (id) => id === usePlayer.currentSongId
    // );
    // const prevIndex = usePlayer.currentSongIds[currentIndex - 1];
    // if (!prevIndex) {
    //   return usePlayer.setCurrentSongId(
    //     usePlayer.currentSongIds[usePlayer.currentSongIds.length - 1]
    //   );
    // }
    // usePlayer.setCurrentSongId(prevIndex);
  };

  const handleTogglePlay = () => {
    const globalSound = usePlayer.soundInstance;

    if (globalSound && globalSound !== sound) {
      globalSound.stop(); // Останавливаем старый экземпляр
    }

    usePlayer.setSoundInstance(sound);

    if (usePlayer.soundInstance === sound) {
      if (usePlayer.isPlaying) {
        pause();
        usePlayer.setIsPlaying(false);
      } else {
        play();
        usePlayer.setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    sound?.play();
    return () => {
      sound?.unload();
    };
  }, [sound]);

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

        <button onClick={handleTogglePlay}>
          <PlayerIcon size={16} color={"#fff"} fill={"#fff"} />
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
          defaultValue={[0]}
          step={1}
          onValueChange={(values) => {
            if (sound) sound.seek(values[0]);
          }}
          max={sound?.duration()}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
