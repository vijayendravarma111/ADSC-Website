import HorizontalSlider from "../ui/HorizontalSlider";
import Image from "next/image";

const mentors = [
  {
    name: "Dr. Shiva Prasad Satla",
    role: "Data Science Hod",
    image: "/faculty/facultyyy1.jpg",
  }
];

export default function FacultyMentors() {
  return (
    <section
      id="advisors"
      className="bg-[#0a0a0a] py-28"
    >
      {/* SECTION HEADER – SAME STYLE AS TEAM */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Faculty Advisors &{" "}
          <span className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
            Mentors
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl text-lg">
          Experienced faculty and industry professionals guiding ADSC
          with mentorship, vision, and academic excellence.
        </p>
      </div>

      {/* SLIDER – SAME AS TEAM SECTION */}
      <HorizontalSlider>
        {mentors.map((m) => (
          <div
            key={m.name}
            className="
              min-w-[300px]
              max-w-[320px]
              rounded-2xl
              bg-black/60
              backdrop-blur
              border border-white/10
              p-5
              shadow-[0_0_40px_rgba(255,49,49,0.15)]
              hover:shadow-[0_0_60px_rgba(255,145,77,0.25)]
              transition
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden mb-4">
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover"
              />
            </div>

            {/* NAME */}
            <h3 className="text-lg font-semibold text-white">
              {m.name}
            </h3>

            {/* ROLE */}
            <p className="text-sm text-gray-400 mt-1">
              {m.role}
            </p>
          </div>
        ))}
      </HorizontalSlider>
    </section>
  );
}
