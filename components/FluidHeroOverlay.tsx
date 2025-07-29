"use client";
import { useEffect, useRef } from "react";

/**
 * Fluid colored canvas overlay for desktop/tablet (>=768px width).
 * Composed of animated "blobs" that follow the pointer.
 * Add <FluidOverlay /> as the first child of <main> or your layout.
 */
export default function FluidOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only enable the overlay if in browser/desktop
    if (typeof window === "undefined" || !canvasRef.current) return;

    const minWidth = 768;
    if (window.innerWidth < minWidth) {
      canvasRef.current.style.display = "none";
      return;
    }

    const canvas = canvasRef.current;
    // Always match full viewport + scrollable doc
    function setCanvasSize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    }
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Blobs config
    const blobs = Array.from({ length: 6 }).map((_, i) => ({
      color: `hsla(${200 + i * 40},78%,60%,.18)`,
      r: 95 + i * 19,
      x: window.innerWidth / 2 + Math.sin(i) * (window.innerWidth / 4),
      y: 700 + Math.cos(i * i) * 150,
      px: 0, py: 0,
    }));

    let mx = window.innerWidth / 2, my = window.innerHeight * 0.7;

    function followMouse(e: MouseEvent | TouchEvent) {
      if ("touches" in e && e.touches.length) {
        mx = e.touches[0].clientX;
        my = e.touches[0].clientY;
      } else if ("clientX" in e) {
        mx = (e as MouseEvent).clientX;
        my = (e as MouseEvent).clientY;
      }
    }
    window.addEventListener("mousemove", followMouse as EventListener, { passive: true });
    window.addEventListener("touchmove", followMouse as EventListener, { passive: true });

    let animationFrame: number;
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach((b, i) => {
        b.px += (b.x + Math.sin(Date.now() / (1700 + i * 120)) * 90 +
          (mx - canvas.width / 2) * (0.13 + i * 0.029) - b.px) * 0.073;
        b.py += (b.y + Math.cos(Date.now() / (1500 - i * 95)) * 120 +
          (my - window.innerHeight / 1.2) * (0.10 + i * 0.023) - b.py) * 0.073;
        ctx.beginPath();
        ctx.arc(
          b.px,
          b.py,
          b.r + Math.sin(Date.now() / (1100 + i * 57)) * 9,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = b.color;
        ctx.globalAlpha = 1;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 26 + i * 12;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrame = requestAnimationFrame(animate);
    }
    blobs.forEach(b => { b.px = b.x; b.py = b.y; });
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", followMouse as EventListener);
      window.removeEventListener("touchmove", followMouse as EventListener);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Only render on desktop/tablet for perf
  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 w-full h-full z-0 pointer-events-none select-none hidden md:block"
      style={{
        filter: "blur(28px)",
        mixBlendMode: "screen"
      }}
      aria-hidden
    />
  );
}
