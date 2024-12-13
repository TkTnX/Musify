import { useArtistsStore } from "@/stores/useArtistsStore";
import ExploreList from "./ExploreList";

const ExploreArtists = ({ value }: { value: string }) => {
  const { artists, fetchArtists, loading, error } = useArtistsStore();

  return (
    <ExploreList
      data={artists}
      fetchData={fetchArtists}
      loading={loading}
      error={error}
      filterKey="name"
      displayKey="name"
      linkPath="artists"
      imageKey="avatar_url"
      inputValue={value}
    />
  );
};

export default ExploreArtists;
