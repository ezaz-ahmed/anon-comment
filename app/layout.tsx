import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Caveat } from 'next/font/google'

const caveat = Caveat({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hey! 💖 Alert: Love Warning',
  description: 'Love Alert offers cute reminders to keep your heart safe while navigating the unpredictable world of romance. Stay informed, stay adorable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={caveat.className}>{children}</body>
      <Analytics />
    </html>
  )
} 
