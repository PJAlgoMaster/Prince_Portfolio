// app/layout.tsx (Server Component - No "use client")
import './globals.css';
import type { Metadata } from 'next';
import RootLayoutClient from './RootLayoutClient';

export const metadata: Metadata = {
  title: "Prince Kumar Jha | Portfolio",
  description: "Animated, interactive meisken.dev-style portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
