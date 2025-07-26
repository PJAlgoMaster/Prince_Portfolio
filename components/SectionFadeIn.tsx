"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string; // ✅ allow id to be passed
}

export default function SectionFadeIn({
  children,
  className = "",
  delay = 0.16,
  id, // ✅ accept id
}: SectionFadeInProps) {
  return (
    <motion.section
      id={id} // ✅ apply id to the section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
