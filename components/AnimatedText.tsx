"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
}

export default function AnimatedText({ children, className = "" }: AnimatedTextProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 17,
        duration: 0.9
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.h1>
  );
}
