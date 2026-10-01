"use client";

import { useEffect, useRef, useState } from "react";

export interface AnimatedNumberProps {
  /** Delay in milliseconds before the count starts once the number is visible. */
  startDelay?: number;
  /** A formatted value such as "55%", "12K" or "70+"; the leading digits are counted up. */
  value: string;
}

const COUNT_DURATION_MS = 900;
const COUNT_START = 1;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const VALUE_PATTERN = /^(\d+)(.*)$/;

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export function AnimatedNumber({ startDelay = 0, value }: AnimatedNumberProps) {
  const parsed = VALUE_PATTERN.exec(value);
  const target = parsed ? Number.parseInt(parsed[1], 10) : null;
  const suffix = parsed ? parsed[2] : "";
  const start = target === null ? 0 : Math.min(COUNT_START, target);

  const containerRef = useRef<HTMLSpanElement>(null);

  // The finished value renders on the server so the number stays correct without JS;
  // the count-up replays from 1 once the value scrolls into view.
  const [count, setCount] = useState(target ?? 0);

  useEffect(() => {
    const node = containerRef.current;

    if (target === null || !node || window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      return;
    }

    const end = target;
    const total = startDelay + COUNT_DURATION_MS;
    let animationFrame = 0;
    let startTime = 0;

    function step(timestamp: number) {
      if (startTime === 0) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      if (elapsed < startDelay) {
        setCount(start);
      } else {
        const progress = Math.min((elapsed - startDelay) / COUNT_DURATION_MS, 1);
        setCount(Math.round(start + (end - start) * easeOutCubic(progress)));
      }

      if (elapsed < total) {
        animationFrame = window.requestAnimationFrame(step);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          animationFrame = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [start, startDelay, target]);

  if (target === null) {
    return <>{value}</>;
  }

  return (
    <>
      <span aria-hidden="true" ref={containerRef}>{count}{suffix}</span>
      <span className="sr-only">{value}</span>
    </>
  );
}
