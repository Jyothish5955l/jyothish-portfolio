import { motion, useReducedMotion } from "motion/react";

/**
 * Fades + slides its children into view once, when scrolled to.
 * Falls back to a plain render for users who prefer reduced motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 22,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
