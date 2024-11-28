import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Slider } from "../ui/slider";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { usePlayerStore } from "@/stores/usePlayerStore";

const PlayerSettingsVolume = () => {
  const { volume, setVolume } = usePlayerStore();

  const VolumeIcon =
    volume[0] === 0 ? VolumeX : volume[0] < 0.5 ? Volume1 : Volume2;

  const handleValueChange = (values: number[]) => {
    setVolume(values);
  };

  const handleClick = () => {
    if (volume[0] === 0) {
      setVolume([1]);
    } else {
      setVolume([0]);
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={handleClick}>
          <VolumeIcon size={24} />
        </TooltipTrigger>
        <TooltipContent className="w-[160px]  px-5 py-2 flex flex-col gap-3">
          <p>Volume: </p>
          <Slider
            value={volume}
            onValueChange={handleValueChange}
            step={0.1}
            max={1}
            min={0}
            defaultValue={volume}
            className="bg-[#4c4e54]"
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PlayerSettingsVolume;
