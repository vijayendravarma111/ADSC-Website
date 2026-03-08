'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HorizontalSlider from '../ui/HorizontalSlider'
import ADSCPreloader from '../ui/ADSCPreloader'

const projects = [
  {
    id: 'placement-prediction',
    title: 'Placement Prediction System',
    desc: 'Predicts placement probability using academic and skill data.',
  },
  {
    id: 'attendance-fraud',
    title: 'Attendance Fraud Detection',
    desc: 'Detects proxy attendance using anomaly patterns.',
  },
  {
    id: 'student-performance',
    title: 'Student Performance Analyzer',
    desc: 'Analyzes marks, attendance, and trends.',
  },
]

export default function FlagshipProjects() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const openProject = (id: string) => {
    setLoading(true)
    setTimeout(() => {
      router.push(`/projects/${id}`)
      setLoading(false)
    }, 1100)
  }

  return (
    <>
      <ADSCPreloader show={loading} />

      <section id="projects" className="section bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Flagship{' '}
            <span className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </div>

        <HorizontalSlider>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => router.push(`/projects/${p.id}`)}
              className="min-w-[340px] max-w-[360px]
                         bg-black/60 border border-white/10
                         rounded-2xl p-8 text-left
                         shadow-[0_0_40px_rgba(255,49,49,0.15)]
                         hover:border-[#ff3131]
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold
                               rounded-full bg-gradient-to-r
                               from-[#ff3131] to-[#ff914d] text-black">
                Completed
              </span>

              <h3 className="text-xl font-bold text-white mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {p.desc}
              </p>
            </button>
          ))}
        </HorizontalSlider>
      </section>
    </>
  )
}
