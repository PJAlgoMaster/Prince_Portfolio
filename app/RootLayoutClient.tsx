'use client'

import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'
import FluidOverlay from '../components/FluidHeroOverlay'
import LenisProvider from '../components/LenisProvider'
import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08090D] text-white overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisProvider />
          <FluidOverlay />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
