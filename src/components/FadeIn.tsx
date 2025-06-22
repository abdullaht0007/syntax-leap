"use client";

import { createContext, useContext, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, amount: 0.2 }; // triggers slightly earlier

type FadeInProps = HTMLAttributes<HTMLDivElement> & MotionProps;

const FadeIn = ({ children, ...props }: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      initial={!isInStaggerGroup ? "hidden" : undefined}
      whileInView={!isInStaggerGroup ? "visible" : undefined}
      viewport={!isInStaggerGroup ? viewport : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type FadeInStaggerProps = {
  children: ReactNode;
  faster?: boolean;
} & MotionProps;

export const FadeInStagger = ({
  children,
  faster = false,
  ...props
}: FadeInStaggerProps) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
