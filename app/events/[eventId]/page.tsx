"use client"

import { useState } from "react"
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

    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff313110,transparent_60%)]" />

      {/* Back Button */}
      <Link
        href="/#events"
        className="fixed top-24 left-6 z-50 text-sm px-6 py-2.5 rounded-full
        bg-black/70 backdrop-blur-xl
        border border-[#ff3131]/30
        text-gray-300
        shadow-[0_0_20px_rgba(255,49,49,0.25)]
        transition"
      >
        ← Back to Events
      </Link>

      {/* Floating particles */}
      <Particles />

      {/* HERO SECTION */}

      <section className="relative py-32 px-6 border-b border-white/10">

        <div className="max-w-6xl mx-auto">

          <motion.h1
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:0.8 }}
            className="text-6xl md:text-7xl font-extrabold
            bg-gradient-to-r from-white via-gray-200 to-gray-400
            bg-clip-text text-transparent"
          >
            {event.title}
          </motion.h1>

          <p className="text-gray-400 mt-5 text-lg">
            {event.date} • {event.location}
          </p>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-gray-300">
            {event.overview}
          </p>

        </div>

      </section>


      {/* CONTENT */}

      <div className="max-w-6xl mx-auto px-6 py-28 space-y-32">

        {event.sections.map((section,index)=>(

          <motion.section
            key={index}
            initial={{ opacity:0,y:60 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
          >

            <h2
              className="text-3xl md:text-4xl font-bold mb-16
              bg-gradient-to-r from-white via-gray-200 to-gray-400
              bg-clip-text text-transparent"
            >
              {section.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">

              {section.content.map((item,i)=>(
                
                <div
                  key={i}
                  className="relative rounded-3xl p-[1px]
                  bg-gradient-to-br from-[#ff3131]/60 via-[#ff914d]/40 to-transparent
                  shadow-[0_0_40px_rgba(255,49,49,0.2)]"
                >

                  {/* glow background */}
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-40
                  bg-gradient-to-br from-[#ff3131]/40 via-transparent to-[#ff914d]/40"/>

                  <div
                    className="relative rounded-3xl bg-[#0a0a0a]/90 backdrop-blur-xl
                    border border-white/10 p-9
                    shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                  >

                    <p className="text-gray-300 leading-relaxed text-lg">
                      {item}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </motion.section>

        ))}


        {/* GALLERY */}

        <motion.section
          initial={{ opacity:0,y:60 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center
            bg-gradient-to-r from-white via-gray-200 to-gray-400
            bg-clip-text text-transparent"
          >
            Event Gallery
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

            {event.images.map((img,index)=>(
              
              <div
                key={index}
                onClick={()=>setSelectedImage(img)}
                className="relative rounded-3xl p-[1px]
                bg-gradient-to-br from-[#ff3131]/50 via-transparent to-[#ff914d]/50
                shadow-[0_0_30px_rgba(255,49,49,0.25)] cursor-pointer"
              >

                <div className="rounded-3xl overflow-hidden">

                  <img
                    src={img}
                    alt={`Event ${index+1}`}
                    className="w-full h-72 object-cover
                    transition duration-700"
                  />

                </div>

              </div>

            ))}

          </div>

        </motion.section>

      </div>


      {/* LIGHTBOX */}

      {selectedImage && (

        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50">

          <button
            onClick={()=>setSelectedImage(null)}
            className="absolute top-10 right-10 text-white text-3xl"
          >
            <FiX/>
          </button>

          <img
            src={selectedImage}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />

        </div>

      )}

    </div>

  )

}


function Particles(){

  return(

    <div className="absolute inset-0 -z-10">

      {[...Array(35)].map((_,i)=>(
        
        <motion.div
          key={i}
          animate={{ y:[0,-120], opacity:[0.6,0] }}
          transition={{
            duration:10 + Math.random()*10,
            repeat:Infinity,
            delay:Math.random()*5
          }}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left:`${Math.random()*100}%`,
            bottom:0
          }}
        />

      ))}

    </div>

  )

}