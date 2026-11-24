import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons.jsx";
import Button from "../ui/Button.jsx";

const CHIPS = ["Java", "Python", "JavaScript", "React", "FastAPI", "SQL", "Git"];

function RoleRotator({ roles }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || roles.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length, reduce]);

  if (reduce) {
    return <span className="text-gradient">{roles[0]}</span>;
  }

  return (
    <span className="inline-flex h-[1.3em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          className="text-gradient inline-block"
          initial={{ y: "0.7em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.7em", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero({ profile }) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
      <motion.div
        className="max-w-3xl"
        variants={reduce ? undefined : container}
        initial={reduce ? false : "hidden"}
        animate={reduce ? false : "show"}
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-2" />
          </span>
          Open to internships &amp; collaborations
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.4rem,7vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-ink"
        >
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 font-display text-xl font-medium tracking-tight text-ink/90 sm:text-2xl"
        >
          <RoleRotator roles={profile.roles} />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#projects" size="lg">
            View projects
          </Button>
          <Button href={profile.github} variant="outline" size="lg" external>
            <GithubIcon size={17} /> GitHub
          </Button>
          {profile.resumeUrl && (
            <Button href={profile.resumeUrl} variant="ghost" size="lg" external>
              <Download size={17} /> Resume
            </Button>
          )}
        </motion.div>

        <motion.ul variants={item} className="mt-10 flex flex-wrap gap-2">
          {CHIPS.map((chip) => (
            <li
              key={chip}
              className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted"
            >
              {chip}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>

      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-ink sm:hidden"
      >
        <Mail size={15} /> {profile.email}
      </a>
    </section>
  );
}
