"use client";

import { useState } from "react";

import FlagshipProjects from "../projects/FlagshipProjects";
import EventsArchive from "../events/EventsArchive";
import FacultyMentors from "../faculty/FacultyMentors";
import TeamSection from "../team/TeamSection";

const sections = [
  { title: "Flagship Work", component: <FlagshipProjects /> },
  { title: "Events & Past Archive", component: <EventsArchive /> },
  { title: "Faculty Advisors & Mentors", component: <FacultyMentors /> },
  { title: "The People Behind ADSC", component: <TeamSection /> },
];

export default function ShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex < sections.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          {sections[activeIndex].title}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="px-4 py-2 rounded-full border border-white/20 text-white disabled:opacity-30 hover:border-[#ff3131] transition"
          >
            ◀
          </button>

          <button
            onClick={next}
            disabled={activeIndex === sections.length - 1}
            className="px-4 py-2 rounded-full border border-white/20 text-white disabled:opacity-30 hover:border-[#ff914d] transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="w-full shrink-0"
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
