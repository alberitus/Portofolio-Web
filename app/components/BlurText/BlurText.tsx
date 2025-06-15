'use client'

import { motion, Transition } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const paragraphs = text.split(/\n\s*\n/); // Pisah berdasarkan \n\n
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <div ref={ref} className={`blur-text ${className} flex flex-col gap-4`}>
      {paragraphs.map((para, paraIndex) => {
        const segments = animateBy === "words" ? para.split(" ") : para.split("");

        return (
          <div key={paraIndex} className="flex flex-wrap">
            {segments.map((segment, index) => {
              const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

              const spanTransition: Transition = {
                duration: totalDuration,
                times,
                delay: ((paraIndex * 999) + index * delay) / 1000, // Delay bertahap antar paragraf
              };
              (spanTransition as any).ease = easing;

              return (
                <motion.span
                  key={index}
                  initial={fromSnapshot}
                  animate={inView ? animateKeyframes : fromSnapshot}
                  transition={spanTransition}
                  onAnimationComplete={
                    paraIndex === paragraphs.length - 1 &&
                    index === segments.length - 1
                      ? onAnimationComplete
                      : undefined
                  }
                  style={{
                    display: "inline-block",
                    willChange: "transform, filter, opacity",
                  }}
                >
                  {segment === " " ? "\u00A0" : segment}
                  {animateBy === "words" && index < segments.length - 1 && "\u00A0"}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BlurText;
