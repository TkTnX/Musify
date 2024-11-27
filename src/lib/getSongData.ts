import { supabase } from "./supabaseClient";

export const getSongData = async (bucketName: string, filePath: string) => {
  const { data } = await supabase.storage.from(bucketName).getPublicUrl(filePath);
  if (!data) {
    console.log(`Error! ${filePath} not found`);
    return;
  }

  return data.publicUrl;
};
