import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useAlbumsStore } from "@/stores/useAlbumsStore";
import { useArtistsStore } from "@/stores/useArtistsStore";
import { useSongsStore } from "@/stores/useSongsStore";

export const useSearch = (value: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [matches, setMatches] = useState<Fuse.FuseResult<SearchResultItem>[]>(
    []
  );
  const { songs, fetchSongs } = useSongsStore();
  const { artists, fetchArtists } = useArtistsStore();
  const { albums, fetchAlbums } = useAlbumsStore();

  // FETCHING DATA
  useEffect(() => {
    if (songs.length === 0) {
      fetchSongs();
    } else if (albums.length === 0) {
      fetchAlbums();
    } else if (artists.length === 0) {
      fetchArtists();
    }
  }, [songs, albums, artists, fetchSongs, fetchAlbums, fetchArtists]);

  const searchData = [
    ...songs.map((song) => ({ ...song, type: "song" })),
    ...albums.map((album) => ({ ...album, type: "album" })),
    ...artists.map((artist) => ({ ...artist, type: "artist" })),
  ];

  // CREATING FUSE
  const fuse = new Fuse(searchData, { keys: ["title", "name"] });
  useEffect(() => {
    if (value.trim() === "") return;
    const matches = fuse.search(value);
    setMatches(matches);
  }, [value]);

  return matches;
};
