import React from 'react'
import {motion} from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="absolute inset-0 pointer-events-none -z-10"
    >
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#bffafe" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00bff6" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>
    </motion.div>
  )
}
