"use client";
import { usePlayerStore } from "@/stores/usePlayerStore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import FavoritesListItem from "../Favorites/FavoritesListItem";

const PlayerSongsList = ({ children }: { children: React.ReactNode }) => {
  const songsList = usePlayerStore((state) => state.currentSongs);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:w-auto">
        <SheetTitle>Songs list</SheetTitle>
        <SheetDescription></SheetDescription>
        <div>
          {songsList.length > 0 ? (
            songsList.map((song) => (
              <FavoritesListItem key={song.id} song={song} />
            ))
          ) : (
            <p className="text-sm text-[#909090]">No songs in list</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PlayerSongsList;
