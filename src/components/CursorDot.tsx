// components/CursorDot.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot() {
  // 1) Track raw mouse coords
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2) Spring‐smooth coords
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25 });
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  // 3) Interaction state
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // 4) Mouse movement
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // 5) Click feedback
  useEffect(() => {
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  // 6) Hover on links/buttons
  useEffect(() => {
    const selector = 'a, button, [role="button"]';
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // 7) Scale logic
  const ringScale = isClicking ? 0.8 : isHovering ? 2 : 1;
  const dotScale = isClicking ? 0.6 : isHovering ? 1.5 : 1;

  return (
    <>
      {/* Slower Ring */}
      <motion.div
        className="
          fixed pointer-events-none z-[9998]
          transform -translate-x-1/2 -translate-y-1/2
          border-2 border-[#10183D]
          w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10
          rounded-full
        "
        style={{ left: ringX, top: ringY }}
        animate={{ scale: ringScale }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Fast Dot */}
      <motion.div
        className="
          fixed pointer-events-none z-[9999]
          transform -translate-x-1/2 -translate-y-1/2
          bg-[#10183D]
          w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4
          rounded-full
        "
        style={{ left: dotX, top: dotY }}
        animate={{ scale: dotScale }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
