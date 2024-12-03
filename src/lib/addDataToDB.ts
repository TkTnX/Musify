import { supabase } from "./supabaseClient";
import uniqid from "uniqid";
export const addDataToDB = async (bucketName: string, file: File) => {
  const UID = uniqid();
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(`${UID}${file.name[0]}`, file);

  if (error) {
    console.log(error);
    return;
  }

  return data.path;
};
