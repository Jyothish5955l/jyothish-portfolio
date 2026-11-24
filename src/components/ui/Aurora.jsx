/**
 * Fixed, decorative background: dark base + soft colour glows + a subtle grid.
 * Rendered once behind everything.
 */
export default function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      <div className="absolute -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]" />
      <div className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-2/15 blur-[150px]" />
      <div className="absolute -left-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/10 blur-[150px]" />

      <div className="aurora-grid absolute inset-0" />

      {/* fade the very bottom into the page colour */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
