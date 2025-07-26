"use client";
import { useRef } from "react";

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
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-3xl shadow-2xl w-full md:max-w-[480px] aspect-[5/3] border border-blue-700/30 bg-black/70
        transition-all duration-300 transform-gpu hover:scale-[1.025] cursor-pointer"
      style={{
        perspective: "1000px",
        transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
      }}
    >
      <img
        src={imageUrl}
        alt="3D Interactive"
        className="w-full h-full object-cover rounded-3xl"
        draggable={false}
      />
    </div>
  );
}
