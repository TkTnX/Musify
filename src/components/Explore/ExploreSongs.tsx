import { useSongsStore } from "@/stores/useSongsStore";
import ExploreList from "./ExploreList";

const ExploreSongs = ({ value }: { value: string }) => {
  const { songs, fetchSongs, loading, error } = useSongsStore();

  return (
    <ExploreList
      data={songs}
      fetchData={fetchSongs}
      loading={loading}
      error={error}
      filterKey="title"
      displayKey="title"
      linkPath="songs"
      imageKey="image_url"
      inputValue={value}
    />
  );
};

export default ExploreSongs;
