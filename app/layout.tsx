import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finland & Norway Adventure 2025',
  description: 'Explore the beautiful Nordic countries - Finland and Norway from September 28 to October 14, 2025',
  keywords: 'Finland, Norway, travel, adventure, Helsinki, Tromsø, Rovaniemi, Levi, Kilpisjärvi, Tallinn',
  authors: [{ name: 'Traveler' }],
  openGraph: {
    title: 'Finland & Norway Adventure 2025',
    description: 'Explore the beautiful Nordic countries - Finland and Norway from September 28 to October 14, 2025',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
} 