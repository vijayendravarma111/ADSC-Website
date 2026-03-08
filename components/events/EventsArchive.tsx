'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ADSCPreloader from '../ui/ADSCPreloader'
import HorizontalSlider from '../ui/HorizontalSlider'

const events = [
  {
    id: 'praesto-2k24',
    title: 'Praesto 2k24',
    subtitle: 'Flagship Technical Fest & Hackathon',
    image: '/thumbnails/preastoo.png',
  },
  {
    id: 'vishesh-2k24',
    title: 'Vishesh 2k24',
    subtitle: 'Inter-College Project Expo',
    image: '/thumbnails/vishesh.jpeg',
  },
  {
    id: 'generative-ai-seminar',
    title: 'Generative AI Seminar',
    subtitle: 'Exploring AI Tools & Creativity',
    image: '/thumbnails/gen-ai.JPG',
  },
  {
    id: 'stratum24',
    title: 'Stratum24 Hackathon',
    subtitle: '24-Hour National-Level Hackathon',
    image: '/thumbnails/stratum.JPG',
  },
  {
    id: 'idea-forge',
    title: 'IdeaForge',
    subtitle: 'Innovation & Startup Ideation Platform',
    image: '/thumbnails/idea.jpeg',
  },
  {
    id: 'upswing',
    title: 'Upswing Program',
    subtitle: 'Continuous Learning & Career Growth',
    image: '/thumbnails/upswing.jpeg',
  },
]

export default function EventsArchive() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const openEvent = (id: string) => {
    setLoading(true)

    setTimeout(() => {
      router.push(`/events/${id}`)
      setLoading(false)
    }, 900)
  }

  return (
    <>
      <ADSCPreloader show={loading} />

      <section id="events" className="bg-[#0a0a0a] py-28">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Events &{" "}
            <span className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
              Archive
            </span>
          </h2>
        </div>

        <HorizontalSlider>
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => openEvent(event.id)}
              className="
                min-w-[300px]
                max-w-[320px]
                rounded-2xl
                bg-black/60
                backdrop-blur
                border border-white/10
                p-5
                cursor-pointer
                shadow-[0_0_40px_rgba(255,49,49,0.15)]
                hover:shadow-[0_0_60px_rgba(255,145,77,0.25)]
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* EVENT IMAGE */}
              <div className="h-[200px] rounded-xl mb-4 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {event.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {event.subtitle}
              </p>

            </div>
          ))}
        </HorizontalSlider>
      </section>
    </>
  )
}