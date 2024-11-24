"use client";
import { sidebarNavItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavbarItems = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-11">
      <ul>
        {sidebarNavItems.map((item) => (
          <li key={item.href}>
            <Link
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
