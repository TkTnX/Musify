import { SongWithAllDependencies } from "@/types";
import { AudioPlayer, AudioPlayerRef } from "react-audio-play";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect, useRef } from "react";
import { usePlayerControls } from "@/hooks/usePlayerControls";
import SongButtons from "../Song/SongButtons";



const PlayerControls = ({ song }: { song: SongWithAllDependencies }) => {
  const playerRef = useRef<AudioPlayerRef>(null);
  const usePlayer = usePlayerStore();
  const { onPlayNext, onPlayPrev } = usePlayerControls({ song });
  useEffect(() => {
    if (playerRef.current) {
      usePlayer.setAudioPlayerRef(playerRef);
    }
  }, [playerRef]);

  return (
    <div
      key={song.id}
      className="flex flex-row sm:flex-col items-center justify-center gap-6 w-full sm:w-auto   sm:mx-auto flex-1 sm:absolute left-1/2 transform sm:-translate-x-1/2"
    >
      {/* AUDIO PLAYER */}
      <AudioPlayer
        ref={playerRef}
        src={song.song_url}
        onPause={() => {
          usePlayer.setIsPlaying(false);
        }}
        onPlay={() => {
          usePlayer.setIsPlaying(true);
        }}
        onEnd={() => {
          usePlayer.setIsPlaying(false);
          onPlayNext();
        }}
        autoPlay
        volume={usePlayer.volume[0]}
      />
      {/* TOP */}
      <div className="flex items-center gap-20 absolute top-0 z-0">
        <SongButtons
          songId={song.id}
          isBigSong={false}
          onPlayNext={onPlayNext}
          onPlayPrev={onPlayPrev}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
