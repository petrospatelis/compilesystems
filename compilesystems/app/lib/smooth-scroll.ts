const easeInOutSmooth = (t: number) =>
  t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;

export const HEADER_HEIGHT = 64;
export const HEADER_OFFSET = HEADER_HEIGHT;

const MIN_DURATION = 950;
const MAX_DURATION = 2200;
const MS_PER_PIXEL = 0.72;

let activeFrame: number | null = null;
let isAnimating = false;

export function isSmoothScrolling() {
  return isAnimating;
}

function getScrollDuration(distance: number) {
  return Math.round(
    Math.min(MAX_DURATION, Math.max(MIN_DURATION, Math.abs(distance) * MS_PER_PIXEL)),
  );
}

export function smoothScrollTo(
  target: HTMLElement,
  options?: {
    offset?: number;
    duration?: number;
    onComplete?: () => void;
  },
) {
  const offset = options?.offset ?? HEADER_OFFSET;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start - offset;
  const distance = end - start;

  if (prefersReducedMotion || Math.abs(distance) < 2) {
    isAnimating = false;
    window.scrollTo(0, end);
    options?.onComplete?.();
    window.dispatchEvent(new CustomEvent("smoothscroll:complete"));
    return;
  }

  const duration = options?.duration ?? getScrollDuration(distance);
  let startTime: number | null = null;
  isAnimating = true;

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutSmooth(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step);
      return;
    }

    isAnimating = false;
    activeFrame = null;
    options?.onComplete?.();
    window.dispatchEvent(new CustomEvent("smoothscroll:complete"));
  }

  activeFrame = requestAnimationFrame(step);
}

export function highlightSection(element: HTMLElement) {
  element.classList.remove("scroll-target-highlight");
  void element.offsetWidth;
  element.classList.add("scroll-target-highlight");
  element.addEventListener(
    "animationend",
    () => element.classList.remove("scroll-target-highlight"),
    { once: true },
  );
}
