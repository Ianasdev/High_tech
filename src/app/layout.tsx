import type { Metadata } from 'next'
import './globals.css'
import AOSProvider from '../components/AOSProvider'

export const metadata: Metadata = {
  title: 'HighTech Information Technology Company',
  description: 'Your Arm in Digital Transformation — Odoo ERP, Web Development, Social Media, Software & Cloud.',
  keywords: ['Odoo ERP', 'IT company Saudi Arabia', 'digital transformation', 'web development', 'cloud management'],
  openGraph: {
    title: 'HighTech IT Company',
    description: 'Your Arm in Digital Transformation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AOSProvider />
        {children}
      </body>
    </html>
  )
}
