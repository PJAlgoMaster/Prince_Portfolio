"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function SectionFadeIn({ children, className = "", delay = 0, id }: SectionFadeInProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
