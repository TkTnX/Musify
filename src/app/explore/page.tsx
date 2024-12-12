import ExploreSection from "@/components/Explore/ExploreSection";

const ExplorePage = () => {
  return (
    <div className="mb-[100px]">
      <h2 className="font-bold text-2xl">Explore</h2>

      <div>
        <ExploreSection title="Songs" type="songs" />
        <ExploreSection title="Albums" type="albums" />
        <ExploreSection title="Artists" type="artists" />
      </div>
    </div>
  );
};

export default ExplorePage;
