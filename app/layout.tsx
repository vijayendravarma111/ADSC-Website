'use client'

import { useEffect, useState } from 'react'
import ADSCPreloader from '@/components/ui/ADSCPreloader'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [intro, setIntro] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setIntro(false)
    }, 1800)

    return () => clearTimeout(timer)

  }, [])

  return (
    <html lang="en">
      <body className="bg-[#050505] text-white">

        {/* Intro Animation */}
        <ADSCPreloader show={intro} />

        {!intro && (
          <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

          </div>
        )}

      </body>
    </html>
  )
}