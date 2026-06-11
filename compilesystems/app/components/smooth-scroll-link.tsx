"use client";

import type { ComponentPropsWithoutRef } from "react";
import {
  HEADER_OFFSET,
  highlightSection,
  smoothScrollTo,
} from "../lib/smooth-scroll";

type SmoothScrollLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export function SmoothScrollLink({
  href,
  onClick,
  children,
  ...props
}: SmoothScrollLinkProps) {
  const isHashLink = href.startsWith("#") && href.length > 1;

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !isHashLink) return;

    event.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    smoothScrollTo(target, {
      offset: HEADER_OFFSET,
      onComplete: () => {
        highlightSection(target);
        history.replaceState(null, "", href);
      },
    });
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
