import { AlbumWithAllDependencies } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AlbumsListItem = ({ album }: { album: AlbumWithAllDependencies }) => {
  console.log(album)
  return (
    <div key={album.id} className="border border-[#29292d] rounded-2xl w-fit">
      <Link
        href={`/albums/${album.id}`}
        className="w-[250px] h-[250px] relative block"
      >
        <Image
          src={album.image_url}
          alt={album.title}
          fill
          className="object-cover rounded-2xl "
        />
      </Link>
      <div className="p-3">
        <h5 className="font-semibold text-2xl    tracking-wider mt-3">
          {album.title}
        </h5>
        <Link
          href={`/artists/${album.artist.id}`}
          className="text-sm text-[#909090] hover:text-white"
        >
          {album.artist.name}
        </Link>
      </div>
    </div>
  );
}

export default AlbumsListItem