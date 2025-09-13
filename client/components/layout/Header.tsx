import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/map", label: "Map" },
  { to: "/library", label: "Library" },
  { to: "/resources", label: "Resources" },
  { to: "/forum", label: "Forum" },
  { to: "/admin", label: "Admin" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[hsl(30,100%,50%)] via-[hsl(30,85%,45%)] to-[hsl(160,70%,40%)] shadow-md" />
          <span className="font-extrabold tracking-tight text-lg md:text-xl">
            Bharat Heritage
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Button asChild className="bg-primary text-primary-foreground">
            <Link to="/map">Explore Map</Link>
          </Button>
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-foreground"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-3 grid gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/90 hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/map" onClick={() => setOpen(false)}>
                Explore Map
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
