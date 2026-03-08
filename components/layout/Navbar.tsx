'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const goToSection = (id: string) => {
    setOpen(false)
    router.push(`/#${id}`)
  }

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full px-10 py-5 bg-black/40 backdrop-blur-2xl border-b border-white/10 flex justify-between">
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="text-xl text-white hover:text-[#ff3131] cursor-pointer transition"
          >
            ☰
          </button>

          <span className="text-xl font-extrabold text-[#ff3131] cursor-pointer">
            ADSC
          </span>
        </div>

<div className="hidden lg:flex gap-6 text-sm text-gray-300">
            
          <button
            onClick={() => goToSection('about')}
            className="cursor-pointer hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => goToSection('why-adsc')}
            className="cursor-pointer hover:text-white transition"
          >
            Why ADSC
          </button>

          <button
            onClick={() => goToSection('events')}
            className="cursor-pointer hover:text-white transition"
          >
            Events
          </button>

          <button
            onClick={() => goToSection('advisors')}
            className="cursor-pointer hover:text-white transition"
          >
            Advisors
          </button>

          <button
            onClick={() => goToSection('team')}
            className="cursor-pointer hover:text-white transition"
          >
            Team
          </button>

        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 left-0 h-full w-[320px] bg-[#0a0a0a] border-r border-white/10 px-6 py-8 animate-slideIn flex flex-col"
          >
            <div className="flex justify-between mb-10">
              <span className="text-xl font-extrabold text-[#ff3131]">ADSC</span>
              
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs uppercase text-gray-500 mb-3">Explore</p>

            <SidebarItem label="Upcoming Events" path="/upcoming-events" />

            <p className="text-xs uppercase text-gray-500 mt-8 mb-3">Resources</p>

            <SidebarItem label="Resource Library" path="/resources" />
            <SidebarItem label="Tech Updates" path="/tech-updates" />

            <div className="mt-auto text-xs text-gray-500">© ADSC</div>
          </aside>
        </div>
      )}
    </>
  )

  function SidebarItem({ label, path }: { label: string; path: string }) {
    return (
      <button
        onClick={() => {
          setOpen(false)
          router.push(path)
        }}
        className="text-left px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition cursor-pointer"
      >
        {label}
      </button>
    )
  }
}