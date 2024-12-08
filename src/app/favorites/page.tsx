import FavoritesAlbums from "@/components/Favorites/FavoritesAlbums";
import FavoritesArtistsList from "@/components/Favorites/FavoritesArtistsList";
import FavoritesList from "@/components/Favorites/FavoritesList";

const FavoritesPage = () => {
  return (
    <div className="">
      <div>
        <h2 className="font-bold text-2xl">Liked Artists</h2>

        <FavoritesArtistsList />
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Liked Songs</h2>
        <FavoritesList />
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Liked Albums</h2>
        <FavoritesAlbums />
      </div>
    </div>
  );
};

export default FavoritesPage;
