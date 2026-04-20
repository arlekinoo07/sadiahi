"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pageLinks } from "@/data/site-data";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2">
      {pageLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-center text-sm font-semibold transition-all duration-300 ${
              active
                ? "bg-[#ff8a3d] text-white shadow-[0_10px_30px_rgba(255,138,61,0.3)]"
                : "bg-white/6 text-white/72 hover:bg-white/12 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
