"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  soon?: boolean; // Set to true to show a "Soon" badge next to the link
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/carriere", label: "Carrière", soon: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/academics", label: "Academics", soon: true },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact", soon: true },
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
          {/* Logo + DEMO Badge */}
          <div className="flex items-center gap-2.5">
            <Link href="/" className="font-semibold tracking-tight">
              Micha
            </Link>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-mono font-medium text-accent border border-accent/30 tracking-wide uppercase">
              DEMO
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden gap-7 md:flex items-center">
            {links.map(({ href, label, soon }) => (
              <li key={href} className="flex items-center gap-1.5">
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
                {soon && (
                  <span className="rounded bg-nav-hover px-1.5 py-0.5 text-[10px] font-mono text-nav-muted">
                    soon
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
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

        {/* Mobile Menu */}
        {open && (
          <ul className="flex flex-col gap-1 border-t border-nav-hover px-3 py-3 md:hidden">
            {links.map(({ href, label, soon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex items-center justify-between rounded px-3 py-2 text-sm ${
                    isActive(href)
                      ? "bg-nav-hover text-nav-fg"
                      : "text-nav-muted hover:text-nav-fg"
                  }`}
                >
                  <span>{label}</span>
                  {soon && (
                    <span className="rounded bg-nav px-1.5 py-0.5 text-[10px] font-mono text-nav-muted border border-nav-hover">
                      soon
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}