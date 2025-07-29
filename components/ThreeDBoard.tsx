"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ThreeDBoard({ imageUrl }: { imageUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);
  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--rx', `${-(y - rect.height / 2) / 15}deg`);
    card.style.setProperty('--ry', `${(x - rect.width / 2) / 10}deg`);
  }
  function handleMouseLeave() {
    const card = ref.current;
    if (card) {
      card.style.setProperty('--rx', `0deg`);
      card.style.setProperty('--ry', `0deg`);
    }
  }
  return (
    <motion.div
      ref={ref}
      className="rounded-3xl shadow-2xl w-full max-w-full md:max-w-[420px] aspect-[5/3] bg-black/60 border border-blue-700/30 hover:scale-[1.025] transition-all duration-300"
      style={{
        perspective: "1000px",
        transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        cursor: "pointer"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      <img
        src={imageUrl}
        alt="3D Interactive Showcase"
        className="w-full h-full object-cover rounded-3xl"
        draggable={false}
      />
    </motion.div>
  );
}
