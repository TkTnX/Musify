import { addSongToArray } from "@/lib/addSongToArray";
import { useAlbumsStore } from "@/stores/useAlbumsStore";
import { useSongsStore } from "@/stores/useSongsStore";
import { AddAlbumType, AddSongFormType } from "@/types";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";

export const useAddAlbum = (
  addAlbumForm: UseFormReturn<AddAlbumType>,
  addSongForm: UseFormReturn<AddSongFormType>
) => {
  const [artistId, setArtistId] = useState<number | null>(null);
  const albumsStore = useAlbumsStore();
  const songsStore = useSongsStore();

  // ADD SONG FUNCTION
  const addedSongs = addSongToArray(addSongForm.getValues());

  // CREATE NEW ALBUM FUNCTION
  const onAddAlbum = async (data: AddAlbumType) => {
    try {
      if (!data || !artistId || addedSongs.length === 0)
        return toast.error("Please fill all the fields");

      const album = await albumsStore.addAlbum({
        title: data.title,
        image_url: data.cover_url,
        artistId,
      });

      if (!album) return toast.error("Album not created");

      const songPromises = addedSongs.map((song) =>
        songsStore.addSong({ ...song, artistId, albumId: album.id })
      );

      const newSongs = await Promise.all(songPromises);

      data.songs.push(...newSongs.filter((song) => !!song));

      if (songsStore.error || albumsStore.error)
        return toast.error("Something went wrong");

      toast.success("Album created successfully");
      addAlbumForm.reset();
      addSongForm.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return {
    addedSongs,
    onAddAlbum,
    setArtistId,
    loading: songsStore.loading || albumsStore.loading,
  };
};
