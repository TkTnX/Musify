import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddFile from "./elements/AddFile";
import { useSongsStore } from "@/stores/useSongsStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { AddVideoType } from "@/types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useVideosStore } from "@/stores/useVideosStore";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const AddVideo = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [songId, setSongId] = useState<number | null>(null);
  const { addVideo, loading, error } = useVideosStore();
  const { songs, fetchSongs } = useSongsStore();

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      video_url: [],
      songId: null,
    },
  });

  const onSubmit = async (data: AddVideoType) => {
    try {
      if (!songId) return toast.error("Please select a song");
      const video = await addVideo({
        ...data,
        songId,
      });

      if (!video) return toast.error("Video not created");

      if (!loading && !error) toast.success("Video created successfully!");
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add a Video</DialogTitle>
        <DialogDescription></DialogDescription>
        <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <AddFile label="Add a Video" register={register} name="video_url" />
          {errors.video_url && (
            <p className="text-red-500">{errors.video_url.message}</p>
          )}
          <Select
            onValueChange={(value) => setSongId(Number(value))}
            {...register("songId")}
            name="songId"
          >
            <SelectTrigger className="w-full h-auto disabled:opacity-50 disabled:pointer-events-none">
              <SelectValue placeholder="Choose a Song" />
            </SelectTrigger>
            <SelectContent>
              {songs.map((song) => (
                <SelectItem
                  disabled={loading}
                  value={String(song.id)}
                  key={song.id}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={song.image_url}
                      alt={song.title}
                      width={40}
                      height={40}
                      className="object-cover w-10 h-10"
                    />
                    <p>{song.title}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            disabled={loading}
            className="w-full disabled:opacity-50 disabled:pointer-events-none"
            type="submit"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Add a Video"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddVideo;
