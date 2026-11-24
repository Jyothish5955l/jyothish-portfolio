import { Code2, GitBranch, Layers } from "lucide-react";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import SkillBadge from "../ui/SkillBadge.jsx";

const ICONS = {
  code: Code2,
  layers: Layers,
  git: GitBranch,
};

export default function Skills({ groups }) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The tools I build with"
      subtitle="A practical stack for shipping full-stack and AI-driven applications, from interface to API to version control."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => {
          const Icon = ICONS[group.icon] ?? Code2;
          return (
            <Reveal key={group.key} delay={i * 0.08}>
              <div className="card group h-full p-6 transition-colors duration-300 hover:border-accent-2/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-accent/25 to-accent-2/15 text-accent-2">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {group.title}
                  </h3>
                </div>

                <p className="mb-5 text-[13.5px] leading-relaxed text-muted">{group.blurb}</p>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <SkillBadge label={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
