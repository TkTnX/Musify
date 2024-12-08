"use client";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Button } from "./button";
import { Pause, Play } from "lucide-react";

const ListenButton = ({onClick}: {onClick: () => void}) => {
    const usePlayer = usePlayerStore()
  return (
    <Button
      onClick={onClick}
      className="bg-[#00ffff] hover:opacity-80 hover:bg-[#00ffff] rounded-2xl h-12"
    >
      {usePlayer.isPlaying ? <Pause fill="#000" /> : <Play fill="#000" />}

      <span>Listen</span>
    </Button>
  );
};

export default ListenButton;
