import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AWS Community Day Chennai 2025',
  description: 'Join the largest gathering of AWS enthusiasts, developers, and cloud professionals in Chennai. Experience 3 specialized tracks: Gen-AI/Agentic AI, Serverless & Dev Tools, and Security.',
  keywords: 'AWS, Community Day, Chennai, Cloud Computing, AI, Serverless, Security, DevOps',
  authors: [{ name: 'AWS Community Day Chennai' }],
  icons: {
    icon: '/img/aws.png',
    shortcut: '/img/aws.png',
    apple: '/img/aws.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}