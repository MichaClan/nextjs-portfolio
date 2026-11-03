import type { Metadata } from "next";
import SkillsBrowser from "@/components/SkillsBrowser";

export const metadata: Metadata = {
  title: "Skills | Micha",
};

export default function SkillsPage() {
  return (
    <div>
      <section className="mb-12 rounded-lg bg-nav px-6 py-12 text-center text-nav-fg">
        <h1 className="text-4xl font-light md:text-5xl">Skills</h1>
        <p className="mt-2 text-lg text-nav-muted">
          My languages, frameworks, and tools
        </p>
      </section>

      <SkillsBrowser />
    </div>
  );
}