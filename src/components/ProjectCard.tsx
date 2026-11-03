import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const buttonBase =
  "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, imageAlt, badge, featured, details, liveUrl, repoUrl } =
    project;
  const mainUrl = liveUrl ?? repoUrl;

  const pictureWrapClass = featured ? "block md:w-1/2 md:shrink-0" : "block";
  const pictureClass = featured
    ? "relative aspect-[4/3] overflow-hidden bg-bg md:aspect-auto md:h-full md:min-h-[340px]"
    : "relative aspect-[4/3] overflow-hidden bg-bg";

  const picture = (
    <div className={pictureClass}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        className="object-cover"
      />
    </div>
  );

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-lg border bg-card ${
        featured ? "border-accent md:col-span-2 md:flex-row" : "border-border"
      }`}
    >
      {mainUrl ? (
        <a
          href={mainUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className={pictureWrapClass}
        >
          {picture}
        </a>
      ) : (
        <div className={pictureWrapClass}>{picture}</div>
      )}

      <div className={`flex flex-1 flex-col p-5 ${featured ? "md:p-8" : ""}`}>
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className={`font-semibold ${featured ? "text-2xl" : "text-lg"}`}>{title}</h3>
          {badge && (
            <span className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-xs text-white">
              {badge}
            </span>
          )}
        </div>

        <p className="mb-4 leading-relaxed">{description}</p>

        <dl className="mb-5 space-y-1 text-sm">
          {details.map(({ label, value }) => (
            <div key={label} className="flex gap-2">
              <dt className="shrink-0 font-semibold">{label}:</dt>
              <dd className="text-muted">{value}</dd>
            </div>
          ))}
        </dl>

        {(liveUrl || repoUrl) && (
          <div className="mt-auto flex flex-wrap gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} border-accent bg-accent text-white hover:opacity-90`}
              >
                <ExternalLink size={15} aria-hidden />
                Live demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} border-border text-fg hover:border-fg`}
              >
                <Code size={15} aria-hidden />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}