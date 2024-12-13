import { useAlbumsStore } from "@/stores/useAlbumsStore";
import ExploreList from "./ExploreList";

const ExploreAlbums = ({ value }: { value: string }) => {
  const { albums, fetchAlbums, loading, error } = useAlbumsStore();

  return (
    <ExploreList
      data={albums}
      fetchData={fetchAlbums}
      loading={loading}
      error={error}
      filterKey="title"
      displayKey="title"
      linkPath="albums"
      imageKey="image_url"
      inputValue={value}
    />
  );
};

export default ExploreAlbums;
