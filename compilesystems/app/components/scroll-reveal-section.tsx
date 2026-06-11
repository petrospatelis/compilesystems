"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealSectionProps = {
  id: string;
  className?: string;
  immediate?: boolean;
  children: ReactNode;
};

export function ScrollRevealSection({
  id,
  className = "",
  immediate = false,
  children,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || immediate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "-80px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-reveal ${immediate ? "is-visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
