const stats = [
  { label: "Active Members", value: "250+" },
  { label: "Startups", value: "5+" },
  { label: "Events Conducted", value: "20+" },
  { label: "Placements", value: "160+" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-black py-20">
      {/* Glow Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff3131] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-black/60 backdrop-blur border border-white/10 py-10 shadow-[0_0_30px_rgba(255,49,49,0.12)]"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                {stat.value}
              </div>

              <div className="mt-3 text-sm uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Glow Divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff914d] to-transparent opacity-60" />
    </section>
  );
}
