import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { useArtistsStore } from "@/stores/useArtistsStore";
import { useSongsStore } from "@/stores/useSongsStore";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

import { Loader2 } from "lucide-react";
import { AddSongFormType } from "@/types";
import ArtistsSelector from "./elements/ArtistsSelector";
import AddImage from "./elements/AddFile";

interface AddSongProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (b: boolean) => void;
}

const AddSong: React.FC<AddSongProps> = ({ children, open, setOpen }) => {
  const [artistId, setArtistId] = useState<number | null>(null);
  const {
    fetchArtists,
    artists,
    loading: artistsLoading,
    error,
  } = useArtistsStore();

  const { addSong, loading, error: songError } = useSongsStore();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      image_url: [],
      song_url: [],
      albumId: null,
      artistId: null,
    },
  });

  useEffect(() => {
    fetchArtists();

    if (error) {
      toast.error(error);
    }
  }, [fetchArtists, error]);

  const onSubmit = async (data: AddSongFormType) => {
    try {
      if (!artistId) {
        return toast.error("Please select an artist");
      }
      const res = await addSong({ ...data, artistId });
      if (error || songError || res === null) {
        return toast.error("Something went wrong");
      } else {
        toast.success("Song added successfully! ");
      }
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add a Song</DialogTitle>
        <DialogDescription></DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <Input placeholder="Song Name" {...register("title")} />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <ArtistsSelector
            loading={loading || artistsLoading}
            artists={artists}
            setArtistId={setArtistId}
          />
          {errors.artistId && (
            <p className="text-red-500">{errors.artistId.message}</p>
          )}

          <div className="flex items-center ">
            <AddImage
              label="Add an Image"
              register={register}
              name="image_url"
            />
            {errors.image_url && (
              <p className="text-red-500">{errors.image_url.message}</p>
            )}
            <AddImage label="Add a Song" register={register} name="song_url" />

            {errors.song_url && (
              <p className="text-red-500">{errors.song_url.message}</p>
            )}
          </div>
          <Button
            disabled={loading || artistsLoading}
            type="submit"
            className="w-full flex items-center justify-center"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Add"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSong;
