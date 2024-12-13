import { AlbumWithAllDependencies } from "@/types";
import Image from "next/image";
import Link from "next/link";
import LikeAlbumButton from "../ui/LikeAlbumButton";
import ListenButton from "../ui/ListenButton";
import { cn } from "@/lib/utils";

const AlbumsListItem = ({
  album,
  isSlider,
}: {
  album: AlbumWithAllDependencies;
  isSlider?: boolean;
}) => {
  return (
    <div
      key={album.id}
      className={cn("border border-[#29292d] rounded-2xl w-fit", {
        "w-full": isSlider,
      })}
    >
      <div className="relative group">
        <Link
          href={`/albums/${album.id}`}
          className={cn("w-[250px] h-[250px] relative block", {
            "w-full ": isSlider,
          })}
        >
          <Image
            src={album.image_url}
            alt={album.title}
            fill
            priority
            className="object-cover rounded-2xl "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition flex items-center justify-between">
          <ListenButton songs={album.songs} isRounded />
          <LikeAlbumButton albumId={album.id} />
        </div>
      </div>
      <div className="p-3">
        <h5 className="font-semibold text-2xl    tracking-wider mt-3 no-text-wrap">
          {album.title}
        </h5>
        {album.artist && (
          <Link
            href={`/artists/${album.artist.id}`}
            className="text-sm text-[#909090] hover:text-white"
          >
            {album.artist.name}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AlbumsListItem;
