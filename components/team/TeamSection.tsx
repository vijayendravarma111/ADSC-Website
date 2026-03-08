import HorizontalSlider from "../ui/HorizontalSlider";
import Image from "next/image";

const teamMembers = [
  {
    name: "Trigun",
    role: "President",
    image: "/team/memberr.jpeg",
  },
  {
    name: "Madhumitha",
    role: "Vice President",
    image: "/team/memberr2.jpeg",
  },
  {
    name: "Satya",
    role: "General Secretary",
    image: "/team/member3.jpeg",
  },
  {
    name: "Vijayendra Varma",
    role: "Tech Member",
    image: "/team/member4.jpg",
  },
  {
    name: "Ajay",
    role: "Graphic Designer",
    image: "/team/member5.jpeg",
  },
  {
    name: "Sai Ram",
    role: "Tech Member",
    image: "/team/memberr6.jpeg",
  },
  {
    name: "Sanjeevani",
    role: "PR Member",
    image: "/team/member7.jpeg",
  },
  {
    name: "srujana",
    role: "PR Member",
    image: "/team/memberr8.jpeg",
  },
    {
    name: "Triveni",
    role: "Content Lead",
    image: "/team/member9.png",
  },
    {
    name: "Gowthami", 
    role: "Tresury",
    image: "/team/memberrr10.jpeg",
  },
    {
    name: "Harsha Preethik",
    role: "Social Media Manager",
    image: "/team/member11.jpeg",
  },
    {
    name: "Geethanjali",
    role: "Documentation Lead",
    image: "/team/member12.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#0a0a0a] py-28">
      
      {/* SECTION HEADER – SAME AS FLAGSHIP WORK */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          The People Behind{" "}
          <span className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
            ADSC
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl text-lg">
          Meet the core team driving innovation, leadership, and impact
          at Atharva Data Science Community.
        </p>
      </div>

      {/* SLIDER – SAME AS FLAGSHIP WORK */}
      <HorizontalSlider>
        {teamMembers.map((member) => (
          <div
            key={member.name}
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
            {/* IMAGE (INSTAGRAM SIZE) */}
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT BELOW IMAGE */}
            <h3 className="text-lg font-semibold text-white">
              {member.name}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </HorizontalSlider>
    </section>
  );
}
