import { ThemeToggle } from "~/components/theme-toggle";
import { MainNavCentered } from "./main-nav-centered";

export function SiteHeaderCentered() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-center">
        <MainNavCentered />
        {/* <MobileNav /> */}
        <div className="fixed right-1 top-1 z-50 m-2 flex h-6 w-6 items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
