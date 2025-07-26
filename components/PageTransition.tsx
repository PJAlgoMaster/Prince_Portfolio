"use client"
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.77, ease: [.55,0,.32,1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
