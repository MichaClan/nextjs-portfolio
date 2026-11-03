"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { filters, projects, type Category } from "@/data/projects";

export default function ProjectBrowser() {
  const [active, setActive] = useState<"all" | Category>("all");

  const visible = projects
    .filter((p) => active === "all" || p.category === active)
    // featured first, everything else keeps the order from projects.ts
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  const countFor = (id: "all" | Category) =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map(({ id, label }) => {
          const count = countFor(id);
          if (count === 0) return null;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              aria-pressed={active === id}
              className={`rounded-md border px-4 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                active === id
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-card text-muted hover:text-fg"
              }`}
            >
              {label} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}