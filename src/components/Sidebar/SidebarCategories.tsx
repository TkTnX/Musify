"use client";
import { cn } from "@/lib/utils";
import { Playlist } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarCategoriesProps {
  title: string;
  items?: { name: string; href: string; icon?: string }[];
  playlists?: Playlist[];
  onClick?: () => void;
}

const SidebarCategories: React.FC<SidebarCategoriesProps> = ({
  title,
  items,
  onClick,
}) => {
  const pathname = usePathname();

  if (items === undefined || items.length === 0) return null;

  return (
    <div className="mt-8 text-center sm:text-left">
      <h4 className="text-[#9898a6] text-xs font-medium">{title}</h4>

      <nav className="mt-1">
        <ul className="flex flex-col justify-center items-center sm:block">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                onClick={onClick}
                href={item.href}
                className={cn(
                  "leading-6 font-medium hover:bg-[#4c4e54] transition  w-full p-3 rounded-md flex items-center gap-2",
                  {
                    "text-[#00ffff]": pathname === item.href,
                  }
                )}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.name}
                  />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarCategories;
