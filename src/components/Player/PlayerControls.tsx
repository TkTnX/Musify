import { SkipBack, SkipForward } from "lucide-react";
import { Slider } from "../ui/slider";
import { SongWithAllDependencies } from "@/types";
import { usePlayerControls } from "@/hooks/usePlayerControls";
import { useEffect } from "react";

// TODO: Пофиксить ошибку TypeError: sound?.upload is not a function при смене трека при включении через MainSectionItem
// TODO: В большой экран песни добавить controls

const PlayerControls = ({ song }: { song: SongWithAllDependencies }) => {
  const { PlayerIcon, handlePlay, duration, sound, timing, setTiming } =
    usePlayerControls(song);

  useEffect(() => {
    if (!sound) return;

    const interval = setInterval(() => {
      setTiming(sound.seek() || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTiming, sound]);

  return (
    <div className="flex flex-row sm:flex-col items-center justify-center gap-6 w-full sm:w-auto">
      {/* TOP */}
      <div className="flex items-center gap-8">
        <button
          type="button"
          className="hidden sm:block hover:opacity-80 hover:scale-110 transition"
        >
          <SkipBack fill="#fff" size={16} />
        </button>

        <button onClick={handlePlay}>
          <PlayerIcon size={16} color={"#fff"} fill={"#fff"} />
        </button>

        <button
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
          value={[timing]}
          step={1}
          max={duration}
          onValueChange={(values) => {
            if (sound) sound.seek(values[0]);
            setTiming(values[0]);
          }}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
