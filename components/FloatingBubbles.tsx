"use client"
import { motion } from "framer-motion"
export default function FloatingBubbles() {
  const blobs = [
    { className: "w-52 h-52 bg-pink-300", style: { top: '-42px', left: '-50px' }, delay: 0.22 },
    { className: "w-44 h-44 bg-blue-300", style: { top: '42%', left: '63%' }, delay: 0.6 },
    { className: "w-36 h-36 bg-violet-200", style: { bottom: '60px', right: '40px' }, delay: 1.1 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {blobs.map((b, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.18, y: [0, 49, 0], scale: [1, 1.09, 1] }}
          transition={{ duration: 13, repeat: Infinity, delay: b.delay }}
          className={`absolute rounded-full blur-3xl ${b.className}`}
          style={b.style}
        />
      ))}
    </div>
  );
}
