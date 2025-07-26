"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ParallaxBlobProps {
  children: ReactNode
  speed?: number
  className?: string
  [key: string]: any                 // for spreading any extra props
}

export default function ParallaxBlob({ children, speed = 30, ...props }: ParallaxBlobProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const translateY = useTransform(
    scrollY,
    [0, 1000],
    [0, speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: translateY }}
      className="z-10"
      {...props}
    >
      {children}
    </motion.div>
  );
}
