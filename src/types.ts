import {
  Album,
  Artist,
  LikedArtists,
  LikedSongs,
  Playlist,
  PlaylistSongs,
  Song,
  User,
  Video,
} from "@prisma/client";

export type SongWithAllDependencies = Song & {
  artist: Artist;
  album?: Album | null;
  video?: Video[];
};

export type AddSongFormType = {
  title: string;
  image_url: File[];
  song_url: File[];
  albumId: number | null;
  artistId: number | null;
};

export type LikedSongsWithSong = LikedSongs & {
  song: SongWithAllDependencies;
};

export type AddArtistType = {
  name: string;
  avatar_url: File[];
};

export type ArtistWithAllDependencies = Artist & {
  songs: SongWithAllDependencies[];
  albums: Album[];
};

export type LikedArtistsWithArtist = LikedArtists & {
  artist: Artist;
};

export type AddAlbumType = {
  title: string;
  cover_url: File[];
  songs: Song[];
};

export type AlbumWithAllDependencies = Album & {
  artist: Artist;
  songs: SongWithAllDependencies[];
};

export type AddNewPlaylistType = {
  title: string;
  image_url: File[] | null;
};

export type EditPlaylistType = {
  title?: string;
  image_url?: File[] | string | null;
  id: number;
};

export type UserWithDependencies = User & {
  playlists: Playlist[];
};

export type PlaylistSongsWithSong = PlaylistSongs & {
  song: SongWithAllDependencies;
};

export type PlaylistWithAllDependencies = Playlist & {
  playlistSongs: PlaylistSongsWithSong[];
};

export type VideoWithSong = Video & {
  song: SongWithAllDependencies;
};

export type AddVideoType = {
  video_url: File[];
  songId: number | null;
};


export type SearchResultItem =
  | (Song & { type: "song" })
  | (Album & { type: "album" })
  | (Artist & { type: "artist" });