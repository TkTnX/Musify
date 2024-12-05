import { Plus } from "lucide-react";

interface AddFileType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  label: string;
}

const AddFile: React.FC<AddFileType> = ({ register, name, label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer border p-2 flex-1 justify-center hover:bg-white hover:text-black transition">
      <Plus /> <p>{label}</p>
      <input
        hidden
        type="file"
        accept={name === "image_url" ? ".png, .jpg, .webp, .jpeg" : ".mp3"}
        {...register(name)}
      />
    </label>
  );
};

export default AddFile;
