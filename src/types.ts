import { Album, Artist, LikedSongs, Playlist, Song } from "@prisma/client";

export type SongWithAllDependencies = Song & {
  artist: Artist;
  album: Album | null;
  playlist: Playlist | null;
};

export type AddSongFormType = {
  title: string;
  image_url: File[];
  song_url: File[];
  albumId: null;
  artistId: number | null;
};

export type LikedSongsWithSong = LikedSongs & {
  song: SongWithAllDependencies;
};

export type AddArtistType = {
  name: string;
  avatar_url: File[];
};
