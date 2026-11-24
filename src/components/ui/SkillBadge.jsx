/**
 * A single skill pill.
 */
export default function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[13px] text-ink/90 transition-colors duration-200 hover:border-accent-2/50 hover:text-ink">
      {label}
    </span>
  );
}
