"use client";
import { AddNewPlaylistType, PlaylistWithAllDependencies } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AddFile from "./elements/AddFile";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { usePlaylistsStore } from "@/stores/usePlaylistsStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "@/stores/useUserStore";

interface EditPlaylistProps {
  children: React.ReactNode;
  playlist: PlaylistWithAllDependencies;
}

const EditPlaylist: React.FC<EditPlaylistProps> = ({ children, playlist }) => {
  const { error, loading, editPlaylist, deletePlaylist } = usePlaylistsStore();
  const fetchUser = useUserStore((state) => state.fetchUser);
  const router = useRouter();
  const [open, setOpen] = useState(false);
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

  const onSubmit = async (data: AddNewPlaylistType) => {
    try {
      if (!data) return toast.error("Data is Null");
      const updatedPlaylist = await editPlaylist({
        id: playlist.id,
        title: data.title || playlist.title,
        image_url: data.image_url || playlist.image_url,
      });

      if (!updatedPlaylist || error) return toast.error("Playlist not updated");
      setOpen(false);
      toast.success("Playlist updated successfully!");
      return router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const deletePlaylistFunc = async () => {
    try {
      deletePlaylist(playlist.id);
      fetchUser();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit {playlist.title}</DialogTitle>
        <DialogDescription></DialogDescription>
        <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("title")}
            placeholder={playlist.title}
            defaultValue={playlist.title}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <AddFile label="Edit an Image" register={register} name="image_url" />
          {errors.image_url && (
            <p className="text-red-500">{errors.image_url.message}</p>
          )}
          <Button
            disabled={loading}
            className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Update Playlist"}
          </Button>
        </form>
        <button
          type="button"
          onClick={deletePlaylistFunc}
          className="text-left text-sm text-[#909090] hover:text-red-500 transition w-fit"
        >
          Delete Playlist
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default EditPlaylist;
