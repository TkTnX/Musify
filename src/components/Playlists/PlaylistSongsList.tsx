"use client";
import { SongWithAllDependencies } from "@/types";
import FavoritesListItem from "../Favorites/FavoritesListItem";
import { Input } from "../ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const PlaylistSongsList = ({ songs }: { songs: SongWithAllDependencies[] }) => {
  const [value, setValue] = useState("");

  const filteredSongs = songs.filter((song) =>
    value !== "" ? song.title.toLowerCase() === value.toLowerCase() : song
  );

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 border p-2 rounded-lg">
        <Search />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for a song"
          className="bg-inherit border-none outline-none p-0 focus:ring-0 focus-visible:ring-0 focus:outline-none"
        />
      </div>
      <div className="grid gap-3 mt-4">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <FavoritesListItem key={song.id} song={song} />
          ))
        ) : (
          <p className="text-sm text-[#909090] mt-5">No songs found</p>
        )}
      </div>
    </div>
  );
};

export default PlaylistSongsList;
