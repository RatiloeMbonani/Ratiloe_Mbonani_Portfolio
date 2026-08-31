import React from "react";
import useReveal from "../hooks/useReveal";

/**
 * Wraps children in an element that fades/slides into view on scroll.
 * Usage: <Reveal delay={1}><h2>Hello</h2></Reveal>
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useReveal();
  const delayClass = delay ? ` reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
