"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Returns a continuous scroll progress value (0 → 1) for an element.
 * 0 = element is fully below the viewport
 * 1 = element has scrolled to its reveal point
 * Reverses when scrolling back up (Apple-style).
 *
 * @param start - viewport fraction where reveal begins (default 0.95 = near bottom)
 * @param end   - viewport fraction where reveal completes (default 0.55 = just above center)
 */
export function useScrollReveal(start = 1.0, end = 0.4) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number>(0);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const top = rect.top;

    // Map element top position to 0-1 progress
    // When top is at (start * vh), progress = 0
    // When top is at (end * vh), progress = 1
    const raw = (start * vh - top) / ((start - end) * vh);
    setProgress(Math.max(0, Math.min(1, raw)));
  }, [start, end]);

  useEffect(() => {
    function onScroll() {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial check
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [update]);

  return { ref, progress };
}
