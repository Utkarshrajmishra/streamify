"use client"

import { motion } from "framer-motion"

const ShineText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block text-6xl font-medium text-neutral-00">
      {text}

      <motion.span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.9) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        animate={{
          backgroundPositionX: ["200%", "-200%"],
        }}
        transition={{
          duration: 2.5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {text}
      </motion.span>
    </span>
  )
}

export default ShineText
