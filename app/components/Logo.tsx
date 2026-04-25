"use client";

import { motion } from "framer-motion";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ showTagline = false, size = "md" }: LogoProps) {
  const heights = {
    sm: 36,
    md: 52,
    lg: 96,
  };

  const h = heights[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="logo-glow inline-flex items-center"
    >
      <img
        src="/logo.png"
        alt="easycarenet — IT Solutions & Services Group"
        style={{ height: h, width: "auto" }}
        className="select-none"
        draggable={false}
      />
      {showTagline && (
        <span className="sr-only">Engineered for Control. Built to Evolve.</span>
      )}
    </motion.div>
  );
}
