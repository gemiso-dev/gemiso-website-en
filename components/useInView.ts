"use client";

import { useEffect, useRef, useState } from "react";

/**
 * inView=true once the target element (or its nearest <svg>) enters the viewport.
 * Triggers once by default. When attached to an SVG child, observes the wrapping <svg>.
 */
export function useInView<T extends Element = HTMLElement>({
  threshold = 0.3,
  once = true,
}: { threshold?: number; once?: boolean } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = el.closest("svg") ?? el;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [threshold, once]);

  return [ref, inView] as const;
}
