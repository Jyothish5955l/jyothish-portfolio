import Reveal from "./Reveal.jsx";

/**
 * Consistent section shell: id anchor, vertical rhythm, max width and heading.
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-accent-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-[15px] leading-relaxed text-muted">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
