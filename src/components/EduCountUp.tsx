import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface EduCountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function EduCountUp({ value, duration = 1.5, suffix = "", prefix = "", decimals = 0 }: EduCountUpProps) {
  const count = useMotionValue(0);
  
  const displayValue = useTransform(count, (latest) => {
    return prefix + latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, value, { 
      duration: duration,
      ease: [0.4, 0, 0.2, 1] 
    });
    return controls.stop;
  }, [value, count, duration]);

  return <motion.span>{displayValue}</motion.span>;
}