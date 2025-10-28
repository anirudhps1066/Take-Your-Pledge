import { useEffect, useState, useRef } from "react";

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export function useCounterAnimation({
  end,
  duration = 2000,
  startOnView = true,
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      // If not waiting for view, start animation immediately
      setHasAnimated(true);
      return;
    }

    if (!countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!hasAnimated || end === 0) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  return { count, countRef };
}
