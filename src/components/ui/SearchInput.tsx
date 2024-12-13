import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useSearch } from "@/hooks/useSearch";
import SearchInputDropdown from "./SearchInputDropdown";

const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const matches = useSearch(value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const onClickItem = () => {
    setOpen(false);
    setValue("");
  };


  return (
    <div ref={ref} className="w-full vsm:w-auto relative ">
      <form
        onClick={() => setOpen(true)}
        className="flex items-center bg-[#1f1f22] border border-[#29292d] pl-2 rounded-xl lg:w-[390px] overflow-hidden"
      >
        <Search size={16} className="text-white" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search"
          className="text-sm p-2 bg-inherit outline-none placeholder:text-white w-full"
        />
      </form>
      {open && value !== "" && (
        <SearchInputDropdown matches={matches} onClick={onClickItem} />
      )}
    </div>
  );
};

export default SearchInput;
