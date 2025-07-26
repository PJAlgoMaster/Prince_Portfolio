"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy && lenis.destroy()
  }, [])
  return null
}
