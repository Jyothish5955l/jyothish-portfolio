const variants = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-[#06070c] font-semibold shadow-[0_8px_30px_-12px_rgba(99,102,241,0.8)] hover:shadow-[0_14px_44px_-12px_rgba(34,211,238,0.75)] hover:-translate-y-0.5",
  outline:
    "border border-line bg-white/[0.02] text-ink hover:border-accent-2/60 hover:bg-white/[0.05] hover:-translate-y-0.5",
  ghost: "text-muted hover:text-ink",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[15px]",
};

/**
 * Polymorphic button: renders <a> when `href` is provided, otherwise <button>.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noreferrer noopener" }
      : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
