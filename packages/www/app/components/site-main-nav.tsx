import { Link } from "@tanstack/react-router";

export function SiteMainNav() {
  return (
    <nav className="flex w-full items-center justify-center gap-4">
      <NavItem to="/blog">Blog</NavItem>
      <Link to="/" className="flex items-center space-x-2">
        <p className="text-xl font-bold lg:inline-block">
          <span className="text-blue-600">boogie</span>
          .wtf
        </p>
      </Link>
      <NavItem to="/about">About</NavItem>
    </nav>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      className="transition-colors hover:text-foreground/80"
      activeProps={{ className: "text-foreground" }}
      inactiveProps={{ className: "text-foreground/60" }}
    >
      {children}
    </Link>
  );
}
