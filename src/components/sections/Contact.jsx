import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons.jsx";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import Button from "../ui/Button.jsx";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Mailto-only: no backend or third-party service required.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "@Jyothish5955l",
      href: profile.github,
      external: true,
    },
    profile.linkedin
      ? {
          icon: LinkedinIcon,
          label: "LinkedIn",
          value: "Connect",
          href: profile.linkedin,
          external: true,
        }
      : null,
    { icon: MapPin, label: "Location", value: profile.location, href: "" },
  ].filter(Boolean);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have an internship, project or idea in mind? Send a message — I usually reply within a day."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <Reveal>
          <ul className="space-y-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent-2">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
                      {label}
                    </span>
                    <span className="block truncate text-[14.5px] text-ink">{value}</span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className="card flex items-center gap-4 p-4 transition-colors duration-200 hover:border-accent-2/45"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="card p-6 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-medium text-ink">Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-line bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-accent-2/60 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[13px] font-medium text-ink">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-line bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-accent-2/60 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-[13px] font-medium text-ink">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-line bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-accent-2/60 focus:outline-none"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send size={16} /> Send message
              </Button>
              <p className="text-xs text-muted">Opens your email app with the message ready to send.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
