import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Artist } from "@prisma/client";

interface ArtistsSelectorProps {
  loading: boolean;
  artists: Artist[];
  setArtistId: (artistId: number) => void;
}

const ArtistsSelector: React.FC<ArtistsSelectorProps> = ({
  loading,
  artists,
  setArtistId,
}) => {
  return (
    <Select
      disabled={loading}
      onValueChange={(value) => setArtistId(Number(value))}
      name="artistId"
    >
      <SelectTrigger className="w-full h-auto disabled:opacity-50 disabled:pointer-events-none">
        <SelectValue placeholder="Choose an Artist" />
      </SelectTrigger>
      <SelectContent>
        {artists.map((artist) => (
          <SelectItem value={String(artist.id)} key={artist.id}>
            <div className="flex items-center gap-3 cursor-pointer">
              <Image
                src={artist.avatar_url}
                alt={artist.name}
                width={40}
                height={40}
                className="rounded-full object-cover h-10 w-10"
              />
              <p>{artist.name}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ArtistsSelector;
