'use client'

export default function ADSCPreloader({ show }: { show: boolean }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 animate-logoIntroSlow">
        <div className="text-6xl font-extrabold text-[#ff3131] tracking-wide">
          ADSC
        </div>
        <div className="text-xs tracking-[0.4em] text-gray-400">
          ATHARVA DATA SCIENCE COMMUNITY
        </div>
      </div>
    </div>
  )
}
