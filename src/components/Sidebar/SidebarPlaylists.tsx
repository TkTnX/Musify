import { cn } from "@/lib/utils";
import { Playlist } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarPlaylists = ({ playlists }: { playlists: Playlist[] }) => {
  const pathname = usePathname();
  return (
    <div className="mt-8 text-center sm:text-left max-h-[300px] overflow-y-auto scrollbar">
      <h4 className="text-[#9898a6] text-xs font-medium">MY PLAYLISTS</h4>

      <nav className="mt-1">
        <ul className="flex flex-col justify-center items-center sm:block">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link
                href={`/playlists/${playlist.id}`}
                className={cn(
                  "leading-6 font-medium hover:bg-[#4c4e54] transition  w-full p-3 rounded-md flex items-center gap-2",
                  {
                    "text-[#00ffff]": pathname === `/playlists/${playlist.id}`,
                  }
                )}
              >
                {playlist.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarPlaylists;
