"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiX } from "react-icons/fi"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import { eventsData } from "../../data/eventsData"

export default function EventDetailPage() {
  const params = useParams()
  const event = eventsData[params.eventId as keyof typeof eventsData]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!event) return notFound()

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* PARTICLE BACKGROUND */}
      <Particles />

      {/* FLOATING GLOW BACKGROUNDS */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-[#ff3131]/20 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ff914d]/20 rounded-full blur-[180px]"
      />

      {/* HERO */}
      <section className="relative py-32 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">

          <Link
            href="/#events"
            className="text-sm text-gray-400 hover:text-[#ff3131]"
          >
            ← Back to Events
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold mt-8"
          >
            {event.title}
          </motion.h1>

          <p className="text-gray-400 mt-4 text-lg">
            {event.date} • {event.location}
          </p>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-gray-300">
            {event.overview}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-28 space-y-28">

        {event.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {section.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {section.content.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-[#ff3131]/40 transition"
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* GALLERY */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Event Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {event.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer group relative h-72 rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff3131]/40 transition"
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </motion.section>

      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white text-3xl"
          >
            <FiX />
          </button>
          <img
            src={selectedImage}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}

    </div>
  )
}
function Particles() {
  return (
    <div className="absolute inset-0 -z-10">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -100], opacity: [0.5, 0] }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
          }}
        />
      ))}
    </div>
  )
}