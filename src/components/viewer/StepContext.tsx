"use client";

import React, { createContext, useContext } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

interface StepContextValue {
  currentStep: number;
  totalSteps: number;
  isExport: boolean;
}

const StepContext = createContext<StepContextValue>({
  currentStep: 0,
  totalSteps: 0,
  isExport: false,
});

export function StepProvider({
  children,
  currentStep,
  totalSteps,
  isExport = false,
}: {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  isExport?: boolean;
}) {
  return (
    <StepContext.Provider value={{ currentStep, totalSteps, isExport }}>
      {children}
    </StepContext.Provider>
  );
}

export function useStep(): StepContextValue {
  return useContext(StepContext);
}

/**
 * StepReveal animates element visibility based on current reveal step.
 * When isExport is true, everything is immediately rendered visible.
 */
interface StepRevealProps extends HTMLMotionProps<"div"> {
  step: number;
  children: React.ReactNode;
  className?: string;
  dimUnfocused?: boolean;
}

export function StepReveal({
  step,
  children,
  className = "",
  dimUnfocused = false,
  ...rest
}: StepRevealProps) {
  const { currentStep, isExport } = useStep();
  const isVisible = isExport || currentStep >= step;
  const isCurrent = currentStep === step;

  const opacity = isExport
    ? 1
    : isVisible
    ? dimUnfocused && !isCurrent && currentStep > step
      ? 0.55
      : 1
    : 0;

  const y = isVisible ? 0 : 18;

  return (
    <motion.div
      initial={false}
      animate={{
        opacity,
        y,
        scale: isVisible ? 1 : 0.98,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
        ...rest.style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
