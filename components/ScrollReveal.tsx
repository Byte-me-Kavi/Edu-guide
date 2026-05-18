"use client";

import React, { useEffect, useRef } from "react";

type Variant = "up" | "left" | "right" | "fade" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number; // ms between each child animation
}

export default function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    // @ts-ignore
    <Tag ref={ref} className={`sr sr-${variant} ${className}`}>
      {children}
    </Tag>
  );
}

/**
 * A wrapper that staggers its direct children with ScrollReveal.
 * Wrap a list of items and each one animates in sequence.
 */
export function StaggerReveal({
  children,
  stagger = 80,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  stagger?: number;
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const kids = container.children;
          for (let i = 0; i < kids.length; i++) {
            const child = kids[i] as HTMLElement;
            child.style.transitionDelay = `${i * stagger}ms`;
            child.classList.add("sr-visible");
          }
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div key={i} className={`sr sr-${variant}`}>
          {child}
        </div>
      ))}
    </div>
  );
}
