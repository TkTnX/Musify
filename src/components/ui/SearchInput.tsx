import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="w-full vsm:w-auto">
      <form className="flex items-center bg-[#1f1f22] border border-[#29292d] pl-2 rounded-xl lg:w-[390px] overflow-hidden">
        <Search size={16} className="text-white" />
        <input
          type="text"
          placeholder="Search"
          className="text-sm p-2 bg-inherit outline-none placeholder:text-white w-full"
        />
      </form>
    </div>
  );
}

export default SearchInput