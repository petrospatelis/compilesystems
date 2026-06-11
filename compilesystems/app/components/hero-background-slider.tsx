"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/hero-background.jpg",
  "/hero-background-2.jpg",
  "/hero-background-3.jpg",
] as const;

const ROTATION_MS = 7000;

export function HeroBackgroundSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || HERO_IMAGES.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {HERO_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`hero-background-image object-cover object-center ${
            index === activeIndex ? "is-active" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/45 to-background/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--accent-muted)_0%,_transparent_55%)] opacity-35" />
    </div>
  );
}
