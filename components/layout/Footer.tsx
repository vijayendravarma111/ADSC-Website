import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side - Community Info */}
        <div className="text-left">
          <h3 className="text-2xl font-extrabold">
            <span className="text-[#ff3131]">AD</span>
            <span className="text-[#ff914d]">SC</span>
          </h3>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-md">
            Atharva Data Science Community (ADSC) is a student-led
            technology community focused on Data Science, AI,
            innovation, and industry-ready skill development.
          </p>
        </div>

        {/* Right Side - Contact */}
        <div className="flex justify-end">
          <div className="text-left">
            <h4 className="text-white font-semibold mb-4">
              Get in Touch
            </h4>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: atharvadscommunity@mrec.ac.in</li>
              <li>MallaReddy Deemed To Be University</li>
              <li>Hyderabad,Telangana,India</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-5 mt-5 text-gray-400 text-xl">

              <a
                href="https://www.instagram.com/atharvadsc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff3131] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/atharva-data-science-community/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff3131] transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ADSC. All rights reserved.
      </div>
    </footer>
  );
}