"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function MainNavCentered() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href={"/about"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          About
        </Link>
        <Link
          href={"/blog"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Blog
        </Link>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        <Link
          href={"/projects"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/projects")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Projects
        </Link>
        <Link
          href={"/now"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/now")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Now
        </Link>
      </nav>
    </div>
  );
}
