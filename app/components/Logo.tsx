"use client";

import { motion } from "framer-motion";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ showTagline = false, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 34, text: "text-lg", descriptor: "text-[9px]", gap: "gap-2.5" },
    md: { icon: 44, text: "text-2xl", descriptor: "text-[10px]", gap: "gap-3" },
    lg: { icon: 72, text: "text-5xl md:text-6xl", descriptor: "text-xs", gap: "gap-4" },
  };

  const s = sizes[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`logo-glow inline-flex items-center ${s.gap}`}
    >
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 80 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="infGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A84FF" />
            <stop offset="55%" stopColor="#2FD3FF" />
            <stop offset="100%" stopColor="#7FE7FF" />
          </linearGradient>
          <linearGradient id="infGradDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A6BE0" />
            <stop offset="100%" stopColor="#1FAFE6" />
          </linearGradient>
          <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer infinity ribbon (filled) */}
        <path
          d="M 22 24 C 22 11, 36 11, 40 24 C 44 37, 58 37, 58 24 C 58 11, 44 11, 40 24 C 36 37, 22 37, 22 24 Z"
          fill="url(#infGradMain)"
          opacity="0.95"
          filter="url(#logoGlow)"
        />

        {/* Inner shadow stroke for depth */}
        <path
          d="M 22 24 C 22 11, 36 11, 40 24 C 44 37, 58 37, 58 24 C 58 11, 44 11, 40 24 C 36 37, 22 37, 22 24 Z"
          stroke="url(#infGradDeep)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />

        {/* Highlight specular */}
        <path
          d="M 26 19 C 28 16, 33 16, 36 21"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 46 27 C 48 30, 53 30, 56 25"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
        />

        {/* Pixel dissolve trail (left edge) */}
        <g fill="#2FD3FF" opacity="0.85">
          <circle cx="18" cy="24" r="0.9" />
          <circle cx="14" cy="22" r="0.7" />
          <circle cx="14" cy="26" r="0.7" />
          <circle cx="10" cy="24" r="0.5" />
          <circle cx="10" cy="20" r="0.4" />
          <circle cx="10" cy="28" r="0.4" />
          <circle cx="6" cy="22" r="0.35" />
          <circle cx="6" cy="26" r="0.35" />
          <circle cx="3" cy="24" r="0.3" opacity="0.5" />
        </g>
      </svg>

      <div className="flex flex-col leading-none">
        <div className={`${s.text} font-semibold tracking-tight leading-none font-display`}>
          <span className="text-white">easycare</span>
          <span className="gradient-text-brand">net</span>
        </div>
        {showTagline && (
          <div className={`${s.descriptor} tracking-[0.22em] text-steel mt-2 font-light uppercase`}>
            IT Solutions &amp; Services Group
          </div>
        )}
      </div>
    </motion.div>
  );
}
