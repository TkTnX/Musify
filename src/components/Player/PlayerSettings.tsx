import { ChevronUp, ListMusic } from "lucide-react";
import PlayerSettingsVolume from "./PlayerSettingsVolume";
import PlayerBigSong from "./PlayerBigSong";
import { SongWithAllDependencies } from "@/types";
import PlayerSongsList from "./PlayerSongsList";

const PlayerSettings = ({ song }: { song: SongWithAllDependencies }) => {
  return (
    <div className="hidden sm:flex items-center gap-4 md:gap-8">
      <PlayerSettingsVolume />

      <PlayerSongsList>
        <button>
          <ListMusic size={24} />
        </button>
      </PlayerSongsList>

      <PlayerBigSong song={song}>
        <button className="border border-[#29292d] rounded-md p-3 ">
          <ChevronUp size={16} />
        </button>
      </PlayerBigSong>
    </div>
  );
};

export default PlayerSettings;
