import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ExploreListProps<T> {
  data: T[];
  fetchData: () => void;
  loading: boolean;
  error: boolean;
  filterKey: keyof T;
  displayKey: keyof T;
  linkPath: string;
  imageKey: keyof T;
  inputValue: string;
}

const ExploreList = <T extends { id: number }>({
  data,
  fetchData,
  loading,
  error,
  filterKey,
  displayKey,
  linkPath,
  imageKey,
  inputValue,
}: ExploreListProps<T>) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredData = data.filter((item) =>
    String(item[filterKey]).toLowerCase().includes(inputValue.toLowerCase())
  );

  if (!loading && error)
    return <div className="text-sm text-[#909090]">Error fetching songs</div>;

  if (loading) return <Loading />;

  return (
    <div className="flex items-center gap-3 scrollbar overflow-x-auto pb-3">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <Link
            href={`/${linkPath}/${item.id}`}
            key={item.id}
            className="block"
          >
            <div className="relative min-w-[250px] min-h-[250px]">
              <Image
                src={String(item[imageKey])}
                alt={String(item[displayKey])}
                fill
                priority
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h5 className="font-bold text-sm text-white mt-2 text-center">
              {String(item[displayKey])}
            </h5>
          </Link>
        ))
      ) : (
        <p className="text-sm text-[#909090]">No results</p>
      )}
    </div>
  );
};

export default ExploreList;
