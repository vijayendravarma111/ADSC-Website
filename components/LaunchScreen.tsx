"use client"

import { useState } from "react"

export default function LaunchScreen({ onFinish }: { onFinish: () => void }) {

  const [count, setCount] = useState<number | null>(null)
  const [flash, setFlash] = useState(false)

  const startLaunch = () => {

    setCount(5)

    setTimeout(() => setCount(4), 1000)
    setTimeout(() => setCount(3), 2000)
    setTimeout(() => setCount(2), 3000)
    setTimeout(() => setCount(1), 4000)

    setTimeout(() => {
      setFlash(true)
    }, 4500)

    setTimeout(() => {

      sessionStorage.setItem("adscLaunchDone","true")

      onFinish()

    }, 5200)
  }

  return (

    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-[9999] overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[900px] h-[900px] bg-red-500/20 blur-[220px] rounded-full"></div>

      {/* Flash reveal */}
      {flash && (
        <div className="absolute inset-0 bg-white opacity-80 animate-ping"></div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center z-10">
        Atharva Data Science Community
      </h1>

      {/* Launch Button */}
      {count === null ? (

        <div className="relative flex items-center justify-center">

          {/* Wave 1 */}
          <span className="absolute w-[260px] h-[260px] rounded-full border border-red-500 animate-ping"></span>

          {/* Wave 2 */}
          <span className="absolute w-[320px] h-[320px] rounded-full border border-red-400 animate-ping delay-300"></span>

          {/* Wave 3 */}
          <span className="absolute w-[380px] h-[380px] rounded-full border border-red-300 animate-ping delay-700"></span>

          <button
            onClick={startLaunch}
            className="relative z-10 w-[200px] h-[200px] rounded-full
            bg-gradient-to-br from-red-500 via-orange-500 to-red-600
            flex items-center justify-center
            text-2xl font-bold
            shadow-[0_0_60px_rgba(255,60,60,0.9)]
            hover:scale-110 transition-all duration-300"
          >
            LAUNCH
          </button>

        </div>

      ) : (

        <div className="text-[140px] font-extrabold animate-pulse z-10">
          {count}
        </div>

      )}

      <p className="mt-12 text-gray-400 text-lg z-10">
        Official Website Launch Ceremony
      </p>

    </div>
  )
}