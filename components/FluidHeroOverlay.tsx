"use client";
import { useEffect, useRef } from "react";

// Glassy, colored fluid overlay only for post-hero sections
export default function FluidOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ✅ At this point, canvas and ctx are guaranteed non-null
    const safeCanvas = canvas as NonNullable<typeof canvas>;
    const safeCtx = ctx as CanvasRenderingContext2D;

    let width = (safeCanvas.width = window.innerWidth);
    let height = (safeCanvas.height = Math.max(window.innerHeight * 1.2, 1200));

    function resize() {
      width = safeCanvas.width = window.innerWidth;
      height = safeCanvas.height = Math.max(window.innerHeight * 1.2, 1200);
    }

    window.addEventListener("resize", resize);

    const blobs = Array.from({ length: 5 }).map((_, i) => ({
      color: `hsla(${Math.floor(200 + i * 35)},84%,60%,.10)`,
      r: 250 - i * 32,
      x: width / 2 + Math.sin(i) * width / 5,
      y: 1300 + Math.cos(i * i) * 120,
      px: 0,
      py: 0,
    }));

    let mx = width / 2;
    let my = height / 2 + 500;

    function move(e: MouseEvent | TouchEvent) {
      if ("touches" in e && e.touches.length) {
        mx = e.touches[0].clientX;
        my = e.touches[0].clientY;
      } else if ("clientX" in e) {
        mx = e.clientX;
        my = e.clientY;
      }
    }

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });

    let animationFrame: number;

    function animate() {
      safeCtx.clearRect(0, 0, width, height);
      blobs.forEach((b, i) => {
        b.px +=
          (b.x +
            Math.sin(Date.now() / 2000 + i) * 120 +
            (mx - width / 2) * 0.15 -
            b.px) *
          0.07;
        b.py +=
          (b.y +
            Math.cos(Date.now() / 1850 + i * i) * 110 +
            (my - height / 1.3) * 0.17 -
            b.py) *
          0.07;
        safeCtx.beginPath();
        safeCtx.arc(
          b.px,
          b.py,
          b.r + Math.sin(Date.now() / 330 + i) * 12,
          0,
          2 * Math.PI
        );
        safeCtx.fillStyle = b.color;
        safeCtx.globalAlpha = 1;
        safeCtx.shadowColor = b.color;
        safeCtx.shadowBlur = 39 + i * 17;
        safeCtx.fill();
      });
      safeCtx.globalAlpha = 1;
      safeCtx.shadowBlur = 0;
      animationFrame = requestAnimationFrame(animate);
    }

    blobs.forEach((b) => {
      b.px = b.x;
      b.py = b.y;
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 w-full h-full z-0 pointer-events-none select-none"
      style={{
        filter: "blur(38px)",
        top: "58vh",
        mixBlendMode: "screen",
        position: "fixed",
      }}
      width={1920}
      height={1600}
      aria-hidden
    />
  );
}
