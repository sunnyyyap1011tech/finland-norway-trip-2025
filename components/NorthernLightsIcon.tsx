'use client';
import { motion } from 'framer-motion';

interface NorthernLightsIconProps {
  size?: number;
  className?: string;
}

export default function NorthernLightsIcon({ size = 20, className = '' }: NorthernLightsIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      title="Northern Lights Activity"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Aurora waves */}
        <path
          d="M2 12C2 12 4 10 6 12C8 14 10 10 12 12C14 14 16 10 18 12C20 14 22 12 22 12"
          stroke="url(#auroraGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 14C2 14 4 12 6 14C8 16 10 12 12 14C14 16 16 12 18 14C20 16 22 14 22 14"
          stroke="url(#auroraGradient2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M2 16C2 16 4 14 6 16C8 18 10 14 12 16C14 18 16 14 18 16C20 18 22 16 22 16"
          stroke="url(#auroraGradient3)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        
        {/* Stars */}
        <circle cx="6" cy="8" r="0.5" fill="#ffffff" opacity="0.8" />
        <circle cx="18" cy="6" r="0.5" fill="#ffffff" opacity="0.6" />
        <circle cx="12" cy="4" r="0.5" fill="#ffffff" opacity="0.9" />
        <circle cx="20" cy="10" r="0.5" fill="#ffffff" opacity="0.7" />
        <circle cx="4" cy="10" r="0.5" fill="#ffffff" opacity="0.5" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff7f" />
            <stop offset="25%" stopColor="#32ff64" />
            <stop offset="50%" stopColor="#00ff96" />
            <stop offset="75%" stopColor="#64ff32" />
            <stop offset="100%" stopColor="#00ff7f" />
          </linearGradient>
          <linearGradient id="auroraGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00bfff" />
            <stop offset="25%" stopColor="#00ff96" />
            <stop offset="50%" stopColor="#32ff64" />
            <stop offset="75%" stopColor="#00bfff" />
            <stop offset="100%" stopColor="#00ff96" />
          </linearGradient>
          <linearGradient id="auroraGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a2be2" />
            <stop offset="25%" stopColor="#00bfff" />
            <stop offset="50%" stopColor="#00ff7f" />
            <stop offset="75%" stopColor="#8a2be2" />
            <stop offset="100%" stopColor="#00bfff" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
} 