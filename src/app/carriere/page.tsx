import type { Metadata } from "next";
import Link from "next/link";
import { Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Carrière | Micha",
};

export default function CarrierePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <section className="rounded-lg bg-nav px-6 py-12 text-center text-nav-fg">
        <h1 className="text-4xl font-light md:text-5xl">Carrière</h1>
        <p className="mt-2 text-lg text-nav-muted">Work experience & internships</p>
      </section>

      <section className="rounded-lg border border-border bg-card p-12 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
          <Wrench className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-light">Under Maintenance</h2>
        <p className="mt-2 max-w-md mx-auto text-muted">
          I&apos;m currently structuring my career timeline and upcoming internship goals here.
        </p>
        <div className="mt-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background transition-colors"
          >
            Check out my projects instead →
          </Link>
        </div>
      </section>
    </div>
  );
}