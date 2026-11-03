import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Academics | Micha",
};

export default function AcademicsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <section className="rounded-lg bg-nav px-6 py-12 text-center text-nav-fg">
        <h1 className="text-4xl font-light md:text-5xl">Academics</h1>
        <p className="mt-2 text-lg text-nav-muted">MBO Software Development journey</p>
      </section>

      <section className="rounded-lg border border-border bg-card p-12 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
          <BookOpen className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-light">Under Maintenance</h2>
        <p className="mt-2 max-w-md mx-auto text-muted">
          Detailed coursework notes, certificates, and school module highlights will be listed here soon.
        </p>
        <div className="mt-6">
          <Link
            href="/skills"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background transition-colors"
          >
            View my technical skills →
          </Link>
        </div>
      </section>
    </div>
  );
}