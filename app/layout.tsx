import './globals.css'
import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'
import FluidOverlay from '../components/FluidHeroOverlay'
import LenisProvider from '../components/LenisProvider'
import type { ReactNode } from "react"

export const metadata = {
  title: "Prince Kumar Jha | Portfolio",
  description: "Animated, interactive meisken.dev-style portfolio",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#08090D] text-white">
        <LenisProvider />
        <FluidOverlay />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
