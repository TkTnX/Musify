import { Loader2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { getSongData } from "@/lib/getSongData";
import { addSongData } from "@/lib/addSongData";
import { AddSongFormType } from "@/types";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface AddSongProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (b: boolean) => void;
}

const AddSong: React.FC<AddSongProps> = ({ children, open, setOpen }) => {
  const [loading, setLoading] = useState(false);
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
      artistId: 1,
    },
  });

  const onSubmit = async (data: AddSongFormType) => {
    try {
      setLoading(true);
      //   GETTING IMAGE
      const imageFile = data.image_url[0] ?? null;
      const imagePath = await addSongData("images", imageFile);

      //   GETTING SONG
      const songFile = data.song_url[0] ?? null;
      const songPath = await addSongData("songs", songFile);

      if (!imagePath || !songPath) {
        console.log("Error uploading files");
        return;
      }

      const imagePublicUrl = await getSongData("images", imagePath);
      const songPublicUrl = await getSongData("songs", songPath);

      if (!imagePublicUrl || !songPublicUrl) {
        console.log("Error getting public url");
        return;
      }

      await axios.post("/api/song", {
        ...data,
        image_url: imagePublicUrl,
        song_url: songPublicUrl,
      });
      toast.success("Song added successfully! ");
      setOpen(false);

      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
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
          <Input placeholder="Album" {...register("albumId")} />
          {errors.albumId && (
            <p className="text-red-500">{errors.albumId.message}</p>
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
            disabled={loading}
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
