"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Cloud, Heart } from "lucide-react";

const themes = [
  { id: "light", label: "Licht", Icon: Sun },
  { id: "dark", label: "Donker", Icon: Moon },
  { id: "gray", label: "Grijs", Icon: Cloud },
  { id: "pink", label: "Roze", Icon: Heart },
] as const;

type Theme = (typeof themes)[number]["id"];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync with whatever the inline script in layout.tsx already applied
  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    if (current) setTheme(current);
  }, []);

  const choose = (id: Theme) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem("theme", id);
    } catch {
      /* storage blocked, theme just won't persist */
    }
  };

  return (
    <div role="group" aria-label="Kleurthema" className="flex gap-1">
      {themes.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => choose(id)}
          aria-pressed={theme === id}
          title={label}
          className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            theme === id
              ? "border-accent bg-accent text-white"
              : "border-border bg-card text-muted hover:text-fg"
          }`}
        >
          <Icon size={15} aria-hidden />
          {label}
        </button>
      ))}
    </div>
  );
}