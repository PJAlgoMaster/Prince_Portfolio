"use client";
import { motion } from "framer-motion";

export default function ServicesCard({
  num, title, desc
}: { num: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 12px 36px rgba(0,255,255,0.12)",
      }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-bl from-[#11142B]/84 to-[#07090D]/85 rounded-3xl shadow-2xl
        border border-cyan-700/17 px-7 py-8 min-h-[180px] flex flex-col backdrop-blur-lg transition duration-300"
    >
      <div className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent mb-2 drop-shadow-md">
        {num}
      </div>
      <div className="text-2xl font-extrabold mb-3 text-white">{title}</div>
      <div className="text-base font-medium text-white/85">{desc}</div>
    </motion.div>
  );
}
