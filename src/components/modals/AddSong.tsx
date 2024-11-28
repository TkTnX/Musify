import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Loader2, Plus } from "lucide-react";
import { AddSongFormType } from "@/types";

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

  const { addSong, loading } = useSongsStore();

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
      
      await addSong({ ...data, artistId });

      if (error) {
        throw new Error("Error adding song");
      }

      toast.success("Song added successfully! ");

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
          <Select
            disabled={loading || artistsLoading}
            onValueChange={(value) => setArtistId(Number(value))}
            name="artistId"
          >
            <SelectTrigger className="w-full h-auto disabled:opacity-50 disabled:pointer-events-none">
              <SelectValue placeholder="Choose an Artist" />
            </SelectTrigger>
            <SelectContent>
              {artists.map((artist) => (
                <SelectItem value={String(artist.id)} key={artist.id}>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <Image
                      src={artist.avatar_url}
                      alt={artist.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <p>{artist.name}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.artistId && (
            <p className="text-red-500">{errors.artistId.message}</p>
          )}

          <div className="flex items-center ">
            <label className="flex items-center gap-2 cursor-pointer border p-2 flex-1 justify-center hover:bg-white hover:text-black transition">
              <Plus /> <p>Add an Image</p>
              <input
                hidden
                type="file"
                accept=".jpg, .png, .jpeg"
                {...register("image_url")}
              />
            </label>
            {errors.image_url && (
              <p className="text-red-500">{errors.image_url.message}</p>
            )}
            <label className="flex items-center gap-2 cursor-pointer border p-2 flex-1 justify-center hover:bg-white hover:text-black transition">
              <Plus /> <p>Add a Song</p>
              <input
                hidden
                type="file"
                accept=".mp3"
                {...register("song_url")}
              />
              {errors.song_url && (
                <p className="text-red-500">{errors.song_url.message}</p>
              )}
            </label>
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
