import { GraduationCap, MapPin, Target } from "lucide-react";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function About({ profile, about }) {
  const facts = [
    { icon: GraduationCap, label: "Education", value: profile.college },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Target, label: "Focus", value: "AI · Software · Full-Stack" },
  ];

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A builder who likes turning ideas into working software"
    >
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div>
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="mb-5 text-[15.5px] leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="card p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-[15px] font-semibold text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pt-2">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-line px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted">about.js</span>
            </div>

            <div className="space-y-4 px-5 py-6">
              <p className="font-mono text-[13px] leading-relaxed text-muted">
                <span className="text-accent-2">const</span>{" "}
                <span className="text-ink">developer</span> = {"{"}
              </p>
              <ul className="space-y-2 pl-4 font-mono text-[13px]">
                <li className="text-muted">
                  name: <span className="text-ink">&quot;{profile.name}&quot;</span>,
                </li>
                <li className="text-muted">
                  role: <span className="text-ink">&quot;{profile.role}&quot;</span>,
                </li>
                <li className="text-muted">
                  learning: <span className="text-ink">&quot;AI &amp; Full-Stack&quot;</span>,
                </li>
                <li className="text-muted">
                  open to: <span className="text-ink">&quot;internships&quot;</span>,
                </li>
              </ul>
              <p className="font-mono text-[13px] text-muted">{"}"};</p>
            </div>

            <ul className="divide-y divide-line border-t border-line">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3 px-5 py-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-accent-2">
                    <Icon size={15} />
                  </span>
                  <span className="text-sm text-muted">{label}</span>
                  <span className="ml-auto text-right text-[13px] font-medium text-ink">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
