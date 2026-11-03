import Image from "next/image";
import Link from "next/link";

const linkClass =
  "text-accent underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Intro */}
      <section className="grid gap-10 pt-6 md:grid-cols-[1fr_280px] md:items-center">
        <div>
          <h1 className="text-4xl font-light tracking-tight md:text-6xl">
            Mihhail “Micha” Oleinikov
          </h1>
          <p className="mt-3 text-xl text-muted">Creative developer</p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card">
          <Image
            src="/DSC08156.jpg"
            alt="Portrait of Micha"
            fill
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About */}
      <section className="mt-14 max-w-prose space-y-5 text-lg leading-relaxed">
        <p>
          I build things with code, and I have a background in AI, including
          basic LLM lessons at school. I&apos;ve made a lot of projects, alone
          and in teams. You can find them on the{" "}
          <Link href="/portfolio" className={linkClass}>
            portfolio
          </Link>{" "}
          page, and the languages and frameworks I&apos;ve worked with under{" "}
          <Link href="/skills" className={linkClass}>
            skills
          </Link>
          .
        </p>
        <p>
          But all of that is a stepping stone. What I really am is a dreamer.
          I see code as a way to build whatever I can imagine, with whichever
          method I want, and I want to keep learning and inspire people along
          the way.
        </p>
      </section>

      {/* Outside of code */}
      <section className="mt-16 grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card">
          <Image
            src="/7d3857ba-c9be-44cb-9205-5f272e01f0db.jpeg"
            alt="Dunes on a grey winter day, a photo I took"
            fill
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-prose space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl font-light">Outside of code</h2>
          <p>
            I write fiction too. I love a good story and the meaning people
            find in it. It&apos;s the same itch as programming: making
            something that wasn&apos;t there before.
          </p>
          <p>
            Most of what I do ends up somewhere between the two: worlds,
            characters and systems that I can both write and build.
          </p>
        </div>
      </section>
    </div>
  );
}