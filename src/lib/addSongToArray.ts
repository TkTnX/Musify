import { AddSongFormType } from "@/types";

export const addSongToArray = (song: AddSongFormType): AddSongFormType[] => {
  const addedSongs: AddSongFormType[] = [];

  if (!song) return addedSongs;

  return [...addedSongs, song];
};
