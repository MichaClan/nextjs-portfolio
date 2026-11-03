import { Mail } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

// TODO: fill in your real links
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
const YOUTUBE_URL = "https://www.youtube.com/@your-channel";
const GITHUB_URL = "https://github.com/your-username";
const EMAIL = "you@example.com";

const linkClass =
  "text-muted underline-offset-4 transition-colors hover:text-fg hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Footer() {
  return (
    <footer className="mx-auto mt-16 max-w-6xl border-t border-border px-4 py-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <p className="font-semibold">Micha</p>
          <p className="text-muted">Creatief schrijver die code gebruikt om zich uit te drukken.</p>
          <p className="text-muted">Den Haag, Nederland</p>
        </div>

        <nav aria-label="Contact en socials" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a href={"https://www.linkedin.com/in/mihhail-o-b249b3360/"} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={"https://github.com/MichaClan"} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            YouTube
          </a>
          <a href={`mailto:${EMAIL}`} className={`${linkClass} inline-flex items-center gap-1.5`}>
            <Mail size={15} aria-hidden />
            Mail
          </a>
        </nav>

        <ThemeSwitcher />
      </div>

      <p className="mt-8 text-xs text-muted">© {new Date().getFullYear()} Micha</p>
    </footer>
  );
}