import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import localFont from 'next/font/local'

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Pablo Fogliazza · UI Designer & Front-end Developer · Open to remote work · pablofogliazza.dev',
  description:
    'Web developer with 17+ years of experience specializing in converting design into code.',
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="stylesheet" href="https://use.typekit.net/fli3bzs.css" />
      </head>
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
