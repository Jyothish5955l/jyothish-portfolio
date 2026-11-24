import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons.jsx";

export default function Footer({ profile, links }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-ink">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent-2/50 hover:text-ink"
          >
            <Mail size={17} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent-2/50 hover:text-ink"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent-2/50 hover:text-ink"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>

      <div className="border-t border-line/70">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-center text-xs text-muted sm:px-8 sm:text-left">
          © {year} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
