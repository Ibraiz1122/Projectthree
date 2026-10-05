import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

/**
 * Initializes Lenis Scroll Smoother for the entire application.
 * Eases motion when moving to anchors or scrolling long pages so the page
 * glides gracefully instead of jumping abruptly.
 */
export function initScrollSmoother(): () => void {
  if (typeof window === 'undefined') return () => {};

  const lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential out glide
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.2,
    infinite: false,
  });

  lenisInstance = lenis;
  (window as unknown as { __lenis: Lenis }).__lenis = lenis;

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  // Global anchor click listener: intercept internal hash links and glide smoothly
  const handleAnchorClick = (e: MouseEvent) => {
    const targetLink = (e.target as HTMLElement).closest('a[href^="#"]');
    if (targetLink) {
      const href = targetLink.getAttribute('href');
      if (href && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          smoothGlideTo(targetElement as HTMLElement, { offset: -80, duration: 1.35 });
        }
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);

  return () => {
    cancelAnimationFrame(rafId);
    document.removeEventListener('click', handleAnchorClick);
    lenis.destroy();
    lenisInstance = null;
    delete (window as unknown as { __lenis?: Lenis }).__lenis;
  };
}

/**
 * Gracefully glides to a target element, selector string, or pixel offset
 * using custom smooth easing instead of abrupt jumping.
 */
export function smoothGlideTo(
  target: string | HTMLElement | number,
  options?: { offset?: number; duration?: number; immediate?: boolean }
) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target as unknown as HTMLElement, {
      offset: options?.offset ?? -80,
      duration: options?.duration ?? 1.3,
      immediate: options?.immediate ?? false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else if (typeof window !== 'undefined') {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (typeof target === 'string') {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
