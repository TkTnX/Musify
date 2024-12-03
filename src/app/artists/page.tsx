import AddArtistButton from "@/components/Artists/AddArtistButton";
import ArtistsList from "@/components/Artists/ArtistsList";
import { auth } from "@clerk/nextjs/server";


const ArtistsPage = async () => {
  const user = await auth();
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Artists</h2>
        {user && <AddArtistButton />}
      </div>
      <ArtistsList />
    </div>
  );
};

export default ArtistsPage;
