"use client";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AddArtistType } from "@/types";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useArtistsStore } from "@/stores/useArtistsStore";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";

interface AddArtistProps {
  children: React.ReactNode;
}

const AddArtist: React.FC<AddArtistProps> = ({ children }) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const { addArtist, loading, error } = useArtistsStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      avatar_url: [],
    },
  });

  const onSubmit = async (data: AddArtistType) => {
    if (!user || !user.id) return router.push("/sign-in");
    try {
      if (!data.avatar_url) return toast.error("Please upload an avatar");

      await addArtist(data);

      if (!error && !loading)
        return toast.success("Artist added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Add an Artist</DialogTitle>
        <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register("name")}
            placeholder="Artist Name"
            required
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label className="flex items-center gap-2 cursor-pointer border p-2 flex-1 justify-center hover:bg-white hover:text-black transition">
            <Plus />
            <p>Upload Avatar</p>
            <input
              accept=".png, .jpg, .webp, .jpeg"
              type="file"
              {...register("avatar_url")}
              hidden
            />
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddArtist;
