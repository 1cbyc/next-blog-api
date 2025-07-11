import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog API - Modern REST API for Blog Management',
  description: 'A modern REST API for blog management built with Next.js, Prisma, and TypeScript. Create, read, update, and delete blog posts with a beautiful interface.',
  keywords: ['blog', 'api', 'nextjs', 'prisma', 'typescript', 'rest'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
