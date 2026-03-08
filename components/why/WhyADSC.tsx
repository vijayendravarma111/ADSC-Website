const reasons = [
  {
    title: "Student-Built Technical Initiatives",
    desc: "Members collaborate on real-world technical projects that strengthen analytical thinking, teamwork, and problem-solving skills.",
  },
  {
    title: "Consistent Skill Development",
    desc: "Through regular activities and challenges, ADSC promotes continuous learning and peer-driven growth.",
  },
  {
    title: "Industry-Aligned Learning",
    desc: "We focus on practical, industry-relevant technologies that bridge the gap between theory and real-world application.",
  },
  {
    title: "Career-Oriented Growth",
    desc: "Every initiative builds strong technical foundations and prepares students for internships and placements.",
  },
];

export default function WhyADSC() {
  return (
    <section
  id="why-adsc"
  className="relative bg-[#0a0a0a] py-28 section-animate"
>
 
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
          Why Choose ADSC
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Not Just a Club.{" "}
          <span className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
            A Career-Focused Tech Community
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">

          {reasons.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl bg-black/60 backdrop-blur border border-white/10 p-10 shadow-[0_0_40px_rgba(255,49,49,0.15)] hover:shadow-[0_0_60px_rgba(255,145,77,0.25)] transition"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
