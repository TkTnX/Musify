"use client";
import { sidebarNavItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavbarItems = ({ onClick }: { onClick?: () => void }) => {
  const pathname = usePathname();
  return (
    <nav className="mt-11">
      <ul className="flex items-center justify-center sm:block">
        {sidebarNavItems.map((item) => (
          <li key={item.href}>
            <Link
              onClick={onClick}
              className={cn(
                "leading-6 font-medium hover:bg-[#4c4e54] transition block w-full p-3 rounded-md",
                {
                  "text-[#00ffff]": pathname === item.href,
                }
              )}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavbarItems;
