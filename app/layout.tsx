import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sélection inspirée des petits sacs estivaux colorés de la marque Estellon - estellon.com',
  description: 'Site web Estellon avec menu multi-niveaux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main style={{ width: '100%', margin: 0, padding: '0 10px' }}>
          {children}
        </main>
      </body>
    </html>
  )
} 