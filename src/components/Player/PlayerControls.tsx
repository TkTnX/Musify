import { SongWithAllDependencies } from "@/types";
import { AudioPlayer, AudioPlayerRef } from "react-audio-play";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect, useRef } from "react";
import PlayerContolsButtons from "./PlayerContolsButtons";

// TODO: Включение прошлого трека
// TODO: Включение следующего трека

const PlayerControls = ({ song }: { song: SongWithAllDependencies }) => {
  const playerRef = useRef<AudioPlayerRef>(null);
  const usePlayer = usePlayerStore();
  const onPlayNext = () => {};
  const onPlayPrev = () => {};

  useEffect(() => {
    if (playerRef.current) {
      usePlayer.setAudioPlayerRef(playerRef);
    }
  }, [playerRef]);

  return (
    <div
      key={song.id}
      className="flex flex-row sm:flex-col items-center justify-center gap-6 w-full sm:w-auto  mx-auto flex-1 absolute left-1/2 transform -translate-x-1/2"
    >
      <AudioPlayer
        ref={playerRef}
        src={song.song_url}
        onPause={() => {
          usePlayer.setIsPlaying(false);
        }}
        onPlay={() => {
          usePlayer.setIsPlaying(true);
        }}
        autoPlay
        volume={usePlayer.volume[0]}
        width={"100%"}
      />
      {/* TOP */}
      <div className="flex items-center gap-20 absolute top-0 z-0">
        <PlayerContolsButtons
          songId={song.id}
          isBigSong={false}
          onPlayNext={onPlayNext}
          onPlayPrev={onPlayPrev}
        />
      </div>

      {/* BOTTOM */}
      {/* <div className="rounded-full w-full sm:w-[300px] lg:w-[515px] h-[4px] bg-[#4c4e54]">
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
      </div> */}
    </div>
  );
};

export default PlayerControls;
