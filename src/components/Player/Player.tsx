"use client";

import PlayerControls from "./PlayerControls";
import PlayerCurrentSong from "./PlayerCurrentSong";
import PlayerSettings from "./PlayerSettings";

const Player = () => {
    // TEMP
    const song = {
      id: "6",
      title: "After Hours",
      image_url: "/images/01.jpg",
      song_url: "",
      author: "The Weekend",
      album: null,
    };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1f1f22] h-[100px] sm:h-[93px]  z-10 p-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-0 sm:items-center justify-between">
      {/* Current Song */}
      <PlayerCurrentSong song={song} />

      {/* Controls */}
      <PlayerControls />

      {/* Volume & Settings */}
      <PlayerSettings song={song} />
    </div>
  );
};

export default Player;
