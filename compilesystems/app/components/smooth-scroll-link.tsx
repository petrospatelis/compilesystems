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

function getHashTargetId(href: string): string | null {
  if (href.startsWith("#") && href.length > 1) {
    return href.slice(1);
  }

  const match = href.match(/^\/#(.+)$/);
  return match?.[1] ?? null;
}

export function SmoothScrollLink({
  href,
  onClick,
  children,
  ...props
}: SmoothScrollLinkProps) {
  const targetId = getHashTargetId(href);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !targetId) return;
    if (window.location.pathname !== "/") return;

    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const hashHref = `#${targetId}`;

    smoothScrollTo(target, {
      offset: HEADER_OFFSET,
      onComplete: () => {
        highlightSection(target);
        history.replaceState(null, "", hashHref);
      },
    });
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
