"use client";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import AddFile from "./elements/AddFile";
import { toast } from "react-toastify";
import { AddNewPlaylistType } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePlaylistsStore } from "@/stores/usePlaylistsStore";
import { Loader2 } from "lucide-react";
import { useUserStore } from "@/stores/useUserStore";

// TODO: Возможность создавать плейлист без картинки
// TODO: Проверить адаптив на всех страницах

interface AddPlaylistProps {
  children: React.ReactNode;
  className?: string;
}

const AddPlaylist: React.FC<AddPlaylistProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const fetchUser = useUserStore((state) => state.fetchUser);
  const router = useRouter();
  const { error, loading, addPlaylist } = usePlaylistsStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      image_url: null,
    },
  });

  useEffect(() => {
    if (!user) return router.push("/sign-in");
  }, [user, router]);

  const onSubmit = async (data: AddNewPlaylistType) => {
    try {
      if (!data) return toast.error("Data is Null");

      const playlist = await addPlaylist(data);

      if (!playlist || error) return toast.error("Playlist not created");
      setOpen(false);
      toast.success("Playlist created successfully!");
      fetchUser();
      return router.push(`/playlists/${playlist.id}`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={className} asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create new playlist</DialogTitle>
        <DialogDescription></DialogDescription>
        <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("title", { required: true })}
            placeholder="Playlist Name"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <AddFile label="Add an Image" register={register} name="image_url" />
          {errors.image_url && (
            <p className="text-red-500">{errors.image_url.message}</p>
          )}
          <Button
            disabled={loading}
            className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Create Playlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlaylist;
