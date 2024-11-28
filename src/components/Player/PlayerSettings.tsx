import { ChevronUp, ListMusic } from "lucide-react";
import PlayerSettingsVolume from "./PlayerSettingsVolume";
import PlayerBigSong from "./PlayerBigSong";
import { Song } from "@prisma/client";

const PlayerSettings = ({ song }: { song: Song }) => {
  return (
    <div className="hidden sm:flex items-center gap-4 md:gap-8">
      <PlayerSettingsVolume />

      <button>
        <ListMusic size={24} />
      </button>

      <PlayerBigSong song={song}>
        <button className="border border-[#29292d] rounded-md p-3 ">
          <ChevronUp size={16} />
        </button>
      </PlayerBigSong>
    </div>
  );
};

export default PlayerSettings;
