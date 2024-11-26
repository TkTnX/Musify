import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { Slider } from "../ui/slider";

const PlayerControls = () => {
  const timing = 15;
  const isPlaying = false;

  const PlayerIcon = isPlaying ? Pause : Play;
  return (
    <div className="flex flex-row sm:flex-col items-center justify-center gap-6 w-full sm:w-auto">
      {/* TOP */}
      <div className="flex items-center gap-8">
        <button className="hidden sm:block hover:opacity-80 hover:scale-110 transition">
          <SkipBack fill="#fff" size={16} />
        </button>
        <button className="hover:opacity-80 hover:scale-110 transition">
          <PlayerIcon size={24} fill="#fff" />
        </button>
        <button className="hidden sm:block hover:opacity-80 hover:scale-110 transition">
          <SkipForward fill="#fff" size={16} />
        </button>
      </div>

      {/* BOTTOM */}
      <div className="rounded-full w-full sm:w-[300px] lg:w-[515px] h-[4px] bg-[#4c4e54]">
        <Slider className="rounded-full cursor-pointer" value={[0]} defaultValue={[0]} step={1} max={timing} />
      </div>
    </div>
  );
};

export default PlayerControls;
