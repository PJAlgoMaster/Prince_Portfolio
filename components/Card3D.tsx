"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Card3D({
  className = "",
  children,
  url,
}: {
  className?: string;
  children: React.ReactNode;
  url: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--rx", `${-(y - rect.height / 2) / 16}deg`);
    card.style.setProperty("--ry", `${(x - rect.width / 2) / 13}deg`);
  }

  function handleMouseLeave() {
    const card = ref.current;
    if (card) {
      card.style.setProperty("--rx", `0deg`);
      card.style.setProperty("--ry", `0deg`);
    }
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      ref={ref}
      style={{
        perspective: "950px",
        transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl shadow-2xl p-6 pb-8 border border-gray-600 hover:scale-105 transition-all duration-300 transform hover:shadow-blue-600/40 ${className}`}
    >
      {children}
    </motion.a>
  );
}
