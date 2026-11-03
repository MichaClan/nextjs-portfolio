"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/carriere", label: "Carrière" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/academics", label: "Academics" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto max-w-6xl rounded-lg bg-nav text-nav-fg shadow-lg"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            Micha
          </Link>

          {/* Desktop */}
          <ul className="hidden gap-7 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`border-b-2 pb-0.5 text-sm transition-colors hover:text-nav-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-fg ${
                    isActive(href)
                      ? "border-nav-fg text-nav-fg"
                      : "border-transparent text-nav-muted"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Sluit menu" : "Open menu"}
            className="rounded p-1 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="flex flex-col gap-1 border-t border-nav-hover px-3 py-3 md:hidden">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block rounded px-3 py-2 text-sm ${
                    isActive(href)
                      ? "bg-nav-hover text-nav-fg"
                      : "text-nav-muted hover:text-nav-fg"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}