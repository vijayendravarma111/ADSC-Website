"use client"

import { useState } from "react"

export default function Page() {

const [showQR,setShowQR] = useState(false)

return (
<>

{/* HERO */}

<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

<div className="absolute w-[600px] h-[600px] bg-orange-500/20 blur-[180px] rounded-full -top-40 -left-40"></div>
<div className="absolute w-[600px] h-[600px] bg-orange-500/20 blur-[180px] rounded-full -bottom-40 -right-40"></div>

<p className="text-orange-400 tracking-widest text-sm mb-6">
ATHARVA DATA SCIENCE COMMUNITY PRESENTS
</p>

<h1 className="text-6xl md:text-7xl font-extrabold mb-6">
PRAESTO <span className="text-orange-400">2026</span>
</h1>

<p className="text-gray-300 text-lg mb-3">
5-Day Immersive Technical Experience
</p>

<p className="text-gray-500 mb-10">
March 9–13, 2026
</p>

<div className="flex gap-6">

<button
onClick={()=>setShowQR(true)}
className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F65B3B] to-[#F38939] hover:scale-105 transition"
>
Register Now — ₹229
</button>

<a
href="#domains"
className="px-8 py-4 rounded-full border border-orange-400 hover:bg-orange-500 transition"
>
Explore Domains
</a>

</div>

</section>


{/* QR POPUP */}

{showQR && (

<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

<div className="glass-card p-10 text-center max-w-md">

<h2 className="text-2xl font-bold mb-6">
Scan QR to Register
</h2>

<img
src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://docs.google.com/forms/d/e/1FAIpQLScMziYVEocCS8XffVUkkftZSbsHS9USrElJYffHxYjtNjPrCQ/viewform"
alt="Registration QR"
className="mx-auto mb-6"
/>

<a
href="https://docs.google.com/forms/d/e/1FAIpQLScMziYVEocCS8XffVUkkftZSbsHS9USrElJYffHxYjtNjPrCQ/viewform"
target="_blank"
className="block px-6 py-3 mb-4 rounded-full bg-gradient-to-r from-[#F65B3B] to-[#F38939]"
>
Open Registration Form
</a>

<button
onClick={()=>setShowQR(false)}
className="px-6 py-2 border border-gray-500 rounded-full hover:bg-gray-800"
>
Close
</button>

</div>

</div>

)}


{/* ABOUT PRAESTO */}

<section className="section text-center">

<h2 className="section-title">
About <span>PRAESTO</span>
</h2>

<div className="glass-card max-w-4xl mx-auto p-10 text-gray-300 leading-relaxed">

<p className="mb-6">
PRAESTO 2026 is the flagship annual technical initiative of the Data Science branch,
designed to foster innovation, technical excellence, and real-world problem-solving.
</p>

<p className="mb-6">
Structured as an intensive 5-day experiential learning program (March 9–13),
the event delivers a focused academic-industry experience.
</p>

<p>
The program features four cutting-edge workshops across high-impact domains including
Artificial Intelligence, Data Science, Cybersecurity, and modern software technologies —
emphasizing hands-on implementation and industry relevance.
</p>

</div>

</section>


{/* DOMAINS */}

<section id="domains" className="section text-center">

<h2 className="section-title">
Key Focus <span>Domains</span>
</h2>

<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

{[
{
title:"Data Science with Generative AI & ML",
desc:"Master cutting-edge AI/ML techniques with hands-on implementation"
},
{
title:"Generative AI Engineering",
desc:"Build next-generation AI applications and solutions"
},
{
title:"Cybersecurity & Ethical Hacking",
desc:"Learn advanced security practices and ethical hacking techniques"
},
{
title:"AI + UX",
desc:"Design intelligent, user-centric experiences powered by AI"
}
].map((domain,index)=>(

<div key={index} className="glass-card p-10 hover:scale-105 transition">

<h3 className="text-xl font-semibold mb-3">
{domain.title}
</h3>

<p className="text-gray-400">
{domain.desc}
</p>

</div>

))}

</div>

</section>


{/* EVENT HIGHLIGHTS */}

<section className="section text-center">

<h2 className="section-title">
Event <span>Highlights</span>
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{[
{
icon:"</>",
title:"4 Industry-Oriented Workshops",
desc:"Expert-led sessions on cutting-edge technologies"
},
{
icon:"✏",
title:"Hands-on Learning",
desc:"Live implementation and real-world project development"
},
{
icon:"🏆",
title:"₹30,000 Prize Pool",
desc:"Compete and win exciting prizes for innovation"
},
{
icon:"⭐",
title:"Certificates & Trophies",
desc:"Recognition for all participants and winners"
},
{
icon:"👥",
title:"Networking Opportunities",
desc:"Connect with mentors, experts, and peers"
},
{
icon:"🎁",
title:"Team Collaboration",
desc:"Innovation environment with goodies for everyone"
}
].map((item,index)=>(

<div key={index} className="glass-card p-10 text-center hover:scale-105 transition">

<div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F65B3B] to-[#F38939] text-black text-xl shadow-lg">
{item.icon}
</div>

<h3 className="text-lg font-semibold mb-2">
{item.title}
</h3>

<p className="text-gray-400">
{item.desc}
</p>

</div>

))}

</div>

</section>


{/* TRAINERS */}

<section className="section text-center">

<h2 className="section-title">
Our <span>Trainers</span>
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

{[
{
name:"E Sai Eshwar",
domain:"Generative AI",
exp:"Mentor, Advisor, Speaker, Jury at IITs and international startup programs",
image:"/tutors/eshwar.png"
},
{
name:"Ashwin Kumar",
domain:"Data Science",
exp:"Data Science and AI instructor in Teks Academy",
image:"/tutors/ashwin kumar.png"
},
{
name:"Sai Krishna Singupuram",
domain:"Cybersecurity",
exp:"Principal Cybersecurity Consultant & Cybersecurity Expert",
image:"/tutors/eshwar.png"
},
{
name:"Koteswar Rao S",
domain:"UI/UX Design",
exp:"20+ years in Web, Software & Graphic Design",
image:"/tutors/koteshwar.jpeg"
}
].map((trainer,index)=>(

<div key={index} className="glass-card p-10 text-center hover:scale-105 transition">

<img
src={trainer.image}
alt={trainer.name}
className="w-24 h-24 rounded-full object-cover border-2 border-orange-400 mx-auto mb-4"
/>

<h3 className="font-semibold">
{trainer.name}
</h3>

<p className="text-orange-400 text-sm">
{trainer.domain}
</p>

<p className="text-gray-400 text-sm">
{trainer.exp}
</p>

</div>

))}

</div>

</section>

{/* SPONSORS */}

<section className="section text-center">

<h2 className="section-title">
In Association <span>With</span>
</h2>

<p className="text-gray-400 mb-12">
We proudly collaborate with leading educational and technology partners
supporting innovation and technical excellence.
</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto items-center">

{/* Educatumy */}

<div className="glass-card p-8 flex items-center justify-center hover:scale-105 transition">

<img
src="/sponsors/educatumy.png"
alt="Educatumy"
className="h-30 object-contain"
/>

</div>

{/* UKLON */}

<div className="glass-card p-8 flex items-center justify-center hover:scale-105 transition">

<img
src="/sponsors/uklon.png"
alt="UKLON Overseas Educational Consultants"
className="h-30 object-contain"
/>

</div>

{/* Teksacademy */}

<div className="glass-card p-8 flex items-center justify-center hover:scale-105 transition">

<img
src="/sponsors/teksacademy.png"
alt="Teksacademy"
className="h-35 object-contain"
/>

</div>

{/* GeeksforGeeks */}

<div className="glass-card p-8 flex items-center justify-center hover:scale-105 transition">

<img
src="/sponsors/gfg.png"
alt="GeeksforGeeks"
className="h-30 object-contain"
/>

</div>

</div>

</section>

</>
)
}