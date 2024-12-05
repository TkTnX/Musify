import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { toast } from "react-toastify";
import { AddAlbumType, AddSongFormType } from "@/types";
import { Input } from "../ui/input";
import ArtistsSelector from "./elements/ArtistsSelector";
import { useEffect, useState } from "react";
import { useArtistsStore } from "@/stores/useArtistsStore";
import AddFile from "./elements/AddFile";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSongsStore } from "@/stores/useSongsStore";
import { useAlbumsStore } from "@/stores/useAlbumsStore";

interface AddAlbumProps {
  children: React.ReactNode;
}

const AddAlbum: React.FC<AddAlbumProps> = ({ children }) => {
  const [artistId, setArtistId] = useState<number | null>(null);
  const [addedSongs, setAddedSongs] = useState<AddSongFormType[]>([]);
  const addAlbum = useAlbumsStore((state) => state.addAlbum);
  const {
    loading: addSongLoading,
    addSong,
    error: addSongError,
  } = useSongsStore();
  const {
    fetchArtists,
    artists,
    loading: artistsLoading,
    error,
  } = useArtistsStore();

  useEffect(() => {
    fetchArtists();

    if (error) {
      toast.error("Something went wrong");
    }
  }, [error, fetchArtists]);

  const addAlbumForm = useForm({
    defaultValues: {
      title: "",
      image_url: [],
      songs: [],
    },
  });

  const addSongForm = useForm({
    defaultValues: {
      title: "",
      image_url: [],
      song_url: [],
      albumId: null,
      artistId: null,
    },
  });

  const onAddSong = async (data: AddSongFormType) => {
    try {
      setAddedSongs([...addedSongs, data]);
    } catch (error) {
      console.log(error);
      toast.error("Couldn't add song");
    }
  };

  console.log(addedSongs);
  const onSubmit = async (data: AddAlbumType) => {
    try {
      if (!data || !artistId || addedSongs.length === 0)
        return toast.error("Please fill all the fields");

      const album = await addAlbum({
        ...data,
        artistId,
        image_url: "",
      });

      if (!album) return toast.error("Album not created");

      addedSongs.forEach(async (song) => {
        const newSong = await addSong({ ...song, artistId, albumId: album.id });
        if (newSong) {
          data.songs.push(newSong);
        }
      });

      if (addSongError) return toast.error("Something went wrong");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add an Album</DialogTitle>
        <DialogDescription></DialogDescription>
        <form
          onSubmit={addAlbumForm.handleSubmit(onSubmit)}
          className="grid gap-3"
        >
          <Input
            type="text"
            {...addAlbumForm.register("title")}
            placeholder="Album title"
          />
          {addAlbumForm.formState.errors.title && (
            <p className="text-red-500 text-xs">
              {addAlbumForm.formState.errors.title.message}
            </p>
          )}
          <ArtistsSelector
            setArtistId={setArtistId}
            loading={artistsLoading}
            artists={artists}
          />
          <AddFile
            register={addAlbumForm.register}
            name="image_url"
            label="Album Cover"
          />
          {/* SONGS LIST */}
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Add Song Form</AccordionTrigger>
              <AccordionContent>
                <Input
                  placeholder="Song Name"
                  {...addSongForm.register("title")}
                />
                {addSongForm.formState.errors.title && (
                  <p className="text-red-500">
                    {addSongForm.formState.errors.title.message}
                  </p>
                )}

                <div className="flex items-center ">
                  <AddFile
                    label="Add an Image"
                    register={addSongForm.register}
                    name="image_url"
                  />
                  {addSongForm.formState.errors.image_url && (
                    <p className="text-red-500">
                      {addSongForm.formState.errors.image_url.message}
                    </p>
                  )}
                  <AddFile
                    label="Add a Song"
                    register={addSongForm.register}
                    name="song_url"
                  />

                  {addSongForm.formState.errors.song_url && (
                    <p className="text-red-500">
                      {addSongForm.formState.errors.song_url.message}
                    </p>
                  )}
                </div>
                <Button
                  onClick={() => onAddSong(addSongForm.getValues())}
                  type="button"
                  className="w-full flex items-center justify-center"
                >
                  Add
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Added Songs</AccordionTrigger>
              <AccordionContent>
                <div>
                  1
                  <br />2
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            disabled={artistsLoading || addSongLoading}
            type="submit"
            className="w-full flex items-center justify-center"
          >
            {artistsLoading ? <Loader2 className="animate-spin" /> : "Add"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAlbum;
