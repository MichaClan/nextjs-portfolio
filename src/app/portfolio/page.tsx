import type { Metadata } from "next";
import ProjectBrowser from "@/components/ProjectBrowser";

export const metadata: Metadata = {
  title: "Portfolio | Micha",
};

export default function Portfolio() {
  return (
    <div>
      <section className="mb-12 rounded-lg bg-nav px-6 py-12 text-center text-nav-fg">
        <h1 className="text-4xl font-light md:text-5xl">Portfolio</h1>
        <p className="mt-2 text-lg text-nav-muted">My projects</p>
      </section>

      <ProjectBrowser />
    </div>
  );
}