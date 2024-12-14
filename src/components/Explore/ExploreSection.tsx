"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import ExploreSongs from "./ExploreSongs";
import ExploreAlbums from "./ExploreAlbums";
import ExploreArtists from "./ExploreArtists";

interface ExploreSectionProps {
  title: string;
  type: "albums" | "artists" | "songs";
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ title, type }) => {
  const [value, setValue] = useState("");


  const componentsMap = {
    songs: <ExploreSongs value={value} />,
    albums: <ExploreAlbums value={value} />,
    artists: <ExploreArtists value={value} />,
  };

  return (
    <div className="mt-10">
      <h4 className="font-bold text-xl">Look for {title}</h4>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={`Search for ${title}`}
        className="mt-4"
      />
      <div className="mt-3">{componentsMap[type]}</div>
    </div>
  );
};

export default ExploreSection;
