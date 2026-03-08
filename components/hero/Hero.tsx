'use client'

import { useRouter } from "next/navigation";
import Particles from "./Particles";

export default function Hero() {

  const router = useRouter();

  const goToWhyADSC = () => {
    router.push("/#why-adsc");
  };

  const goToUpcoming = () => {
    router.push("/upcoming-events");
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >

      {/* Floating Particles */}
      <Particles />

      {/* Glow Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#ff3131]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#ff914d]/20 rounded-full blur-[140px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* Tagline */}
        <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-6">
          Atharva Data Science Community
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          A Student{" "}
          <span className="text-[#ff3131]">Hub for Data</span>
          <br />
          Science{" "}
          <span className="text-[#ff914d]">Excellence</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          The Atharva Data Science Community is a student-driven initiative fostering learning and growth in data science, empowering students to apply concepts and build industry-ready skills.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* WHY ADSC BUTTON */}
          <button
            onClick={goToWhyADSC}
            className="px-13 py-4 rounded-full bg-[#ff3131] text-black font-semibold text-lg transition transform hover:scale-105 shadow-[0_0_20px_rgba(255,49,49,0.65)] cursor-pointer"
          >
            Explore Community
          </button>

          {/* UPCOMING EVENTS BUTTON */}
          <button
            onClick={goToUpcoming}
            className="px-10 py-4 rounded-full border border-gray-600 text-white font-semibold text-lg transition hover:border-[#ff914d] hover:text-[#ff914d] cursor-pointer"
          >
            Upcoming Events
          </button>

        </div>

      </div>
    </section>
  );
}