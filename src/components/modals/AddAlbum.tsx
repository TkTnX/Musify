import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { toast } from "react-toastify";
import { Input } from "../ui/input";
import ArtistsSelector from "./elements/ArtistsSelector";
import { useEffect } from "react";
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
import { useAddAlbum } from "@/hooks/useAddAlbum";
import { AddAlbumType, AddSongFormType } from "@/types";
import { addSongToArray } from "@/lib/addSongToArray";
import { Song } from "@prisma/client";

interface AddAlbumProps {
  children: React.ReactNode;
}

const AddAlbum: React.FC<AddAlbumProps> = ({ children }) => {
  const addAlbumForm = useForm<AddAlbumType>({
    defaultValues: {
      title: "",
      cover_url: [] as File[],
      songs: [] as Song[],
    },
  });

  const addSongForm = useForm<AddSongFormType>({
    defaultValues: {
      title: "",
      image_url: [] as File[],
      song_url: [] as File[],
      albumId: null,
      artistId: null,
    },
  });

  const { addedSongs, onAddAlbum, setArtistId, loading } = useAddAlbum(
    addAlbumForm,
    addSongForm
  );

  const artistsStore = useArtistsStore();

  useEffect(() => {
    artistsStore.fetchArtists();

    if (artistsStore.error) {
      toast.error("Something went wrong");
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add an Album</DialogTitle>
        <DialogDescription></DialogDescription>
        <form
          onSubmit={addAlbumForm.handleSubmit(onAddAlbum)}
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
            loading={loading}
            artists={artistsStore.artists}
          />
          <AddFile
            register={addAlbumForm.register}
            name="cover_url"
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
                  disabled={loading}
                  onClick={() => addSongToArray(addSongForm.getValues())}
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
                {addedSongs.length > 0 ? (
                  addedSongs.map((song, index) => (
                    <div className="flex items-center gap-3" key={index}>
                      <span>{index + 1}. </span>
                      <p>{song.title}</p>
                      <div>
                        <p className="text-xs text-[#909090]">
                          Audio file:{" "}
                          {song.image_url[0] && song.song_url[0]?.name}
                        </p>
                        <p className="text-xs text-[#909090]">
                          Image file:{" "}
                          {song.image_url[0] && song.image_url[0].name}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#909090]">No songs added yet</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            disabled={loading || artistsStore.loading}
            type="submit"
            className="w-full flex items-center justify-center"
          >
            {artistsStore.loading || loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Add"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAlbum;
