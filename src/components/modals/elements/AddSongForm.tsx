import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import AddFile from "./AddFile";
import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { AddSongFormType } from "@/types";
interface AddSongFormProps {
  handleSubmit: UseFormHandleSubmit<AddSongFormType>;
  errors: FieldErrors<AddSongFormType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  onSubmit: (data: AddSongFormType) => Promise<void>;
  loading: boolean;
  isInAlbum?: boolean;
}

const AddSongForm: React.FC<AddSongFormProps> = ({
  handleSubmit,
  errors,
  register,
  onSubmit,
  loading,
  isInAlbum,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <Input placeholder="Song Name" {...register("title")} />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <div className="flex items-center ">
        <AddFile label="Add an Image" register={register} name="image_url" />
        {errors.image_url && (
          <p className="text-red-500">{errors.image_url.message}</p>
        )}
        <AddFile label="Add a Song" register={register} name="song_url" />

        {errors.song_url && (
          <p className="text-red-500">{errors.song_url.message}</p>
        )}
      </div>
      <Button
        disabled={loading}
        type={isInAlbum ? "button" : "submit"}
        className="w-full flex items-center justify-center"
      >
        {loading ? <Loader2 className="animate-spin" /> : "Add"}
      </Button>
    </form>
  );
};

export default AddSongForm;
