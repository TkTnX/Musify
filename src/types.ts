import { Album, Artist, Playlist, Song } from "@prisma/client";

export type SongWithAllDependencies = Song & {
  artist: Artist,
  album: Album | null,
  playlist: Playlist | null,

}