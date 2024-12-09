"use client";
import { useUserStore } from "@/stores/useUserStore";
import PlaylistsListItem from "./PlaylistsListItem";
import AddPlaylist from "../modals/AddPlaylist";
import { Plus } from "lucide-react";

const PlaylistsList = () => {
  const user = useUserStore((state) => state.user);
  if (!user) return null;
  return (
    <div className="flex items-center gap-3 flex-wrap mt-10">
      <AddPlaylist className="cursor-pointer hover:opacity-80 transition">
        <div>
          <div className="w-[250px] h-[250px] bg-[#2f2f2f] flex items-center justify-center">
            <Plus size={60} />
          </div>
          <h4 className="mt-2 font-bold text-lg">Add an Playlist</h4>
        </div>
      </AddPlaylist>
      {user.playlists.length > 0 ? (
        user.playlists.map((playlist) => (
          <PlaylistsListItem key={playlist.id} playlist={playlist} />
        ))
      ) : (
        <p className="text-sm text-[#909090]">No Playlists yet</p>
      )}
    </div>
  );
};

export default PlaylistsList;
