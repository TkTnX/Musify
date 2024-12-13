import { SearchResultItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface SearchInputDropdownProps {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  matches: Fuse.FuseResult<SearchResultItem>[];
  onClick: () => void;
}

const SearchInputDropdown: React.FC<SearchInputDropdownProps> = ({
  matches,
  onClick,
}) => {
  return (
    <div className="absolute top-10 right-0 bg-[#1f1f22] border border-[#29292d]  rounded-lg p-5 z-30 max-h-[300px] overflow-y-auto scrollbar">
      {matches.length > 0 ? (
        matches.map((match) => (
          <Link
            onClick={onClick}
            href={`/${match.item.type}s/${match.item.id}`}
            key={`${match.item.id}-${match.item.type}`}
            className="hover:bg-[#29292d] py-2 px-3 rounded-md flex flex-col gap-1"
          >
            <p className="text-[10px] text-[#9b9b9b]">{match.item.type}</p>
            <div className="flex items-center gap-3">
              <Image
                src={match.item.image_url || match.item.avatar_url}
                alt={match.item.name || match.item.title}
                width={30}
                height={30}
                className="object-cover rounded-full w-[30px] h-[30px]"
              />
              <p className="no-text-wrap">
                {match.item.title ? match.item.title : match.item.name}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-sm text-[#909090]">No results</p>
      )}
    </div>
  );
};

export default SearchInputDropdown;
