import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";

/**
 * Project card with subtle hover lift, tech chips and repo/demo links.
 * Projects without a `github` link render a "Coming soon" state.
 */
export default function ProjectCard({ project, index = 0 }) {
  const reduce = useReducedMotion();
  const comingSoon = !project.github || project.status === "coming-soon";

  return (
    <motion.article
      className="group card relative flex h-full flex-col overflow-hidden p-6 transition-colors duration-300 hover:border-accent-2/40"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
    >
      {/* top accent line */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-accent/25 to-accent-2/15 font-display text-lg font-semibold text-ink">
          {project.title.charAt(0)}
        </span>

        {comingSoon ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
            <Clock size={12} /> Coming soon
          </span>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${project.title} on GitHub`}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-white/[0.05] hover:text-ink"
          >
            <GithubIcon size={18} />
          </a>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11.5px] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-2"
          >
            <GithubIcon size={16} /> View code
          </a>
        ) : (
          <span className="text-sm text-muted">In development</span>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent-2"
          >
            Live demo <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
