import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Tivemark's Recept",
  description: "En samling älskade familjerecept, förda vidare med kärlek.",
  openGraph: {
    title: "Tivemark's Recept",
    description: "Familjerecept förda vidare med kärlek.",
    url: "https://tivemarksrecept.vercel.app",
    siteName: "Tivemark's Recept",
    images: [
      {
        url: "/tivemarks_W.jpg",
        width: 1200,
        height: 630,
        alt: "Tivemark's Recept",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tivemark's Recept",
    description: "Familjerecept förda vidare med kärlek.",
    images: ["/tivemarks_W.jpg"],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
