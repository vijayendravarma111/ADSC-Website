"use client"

export default function Page() {

const news = [

{
title:"AI-Native 6G Networks",
image:"/tech photos/1.jpg",
desc:"Telecom companies are developing AI-powered 6G networks capable of integrating sensing, computing, and ultra-fast connectivity for robotics, autonomous systems, and smart cities."
},

{
title:"Agentic AI Systems",
image:"/tech photos/2.jpg",
desc:"Next-generation AI agents are evolving beyond chatbots to perform complex tasks autonomously including research, coding, planning and workflow automation."
},

{
title:"Generative AI Revolution",
image:"/tech photos/3.jpg",
desc:"Generative AI is transforming industries including media, design, software development and education through automated content creation and advanced intelligence."
},

{
title:"AI Cybersecurity Arms Race",
image:"/tech photos/4.jpg",
desc:"Both attackers and defenders are now using AI systems to detect vulnerabilities, automate attacks and build advanced security defense systems."
},

{
title:"AI Chip Innovation",
image:"/tech photos/5.jpg",
desc:"Specialized AI chips are enabling faster machine learning training and inference, accelerating breakthroughs in artificial intelligence infrastructure."
},

{
title:"Humanoid Robots",
image:"/tech photos/6.jpg",
desc:"Companies worldwide are developing humanoid robots capable of assisting in manufacturing, logistics, healthcare and service industries."
},

{
title:"Quantum Computing Breakthrough",
image:"/tech photos/7.jpg",
desc:"Quantum computers are being developed to solve problems in cryptography, optimization and drug discovery that traditional computers cannot handle efficiently."
},

{
title:"AI in Healthcare",
image:"/tech photos/8.jpg",
desc:"Artificial intelligence is helping doctors analyze medical scans, predict diseases earlier and assist in personalized treatment planning."
},

{
title:"Autonomous Transportation",
image:"/tech photos/9.jpg",
desc:"Self-driving technology continues to improve with AI perception systems, smart sensors and real-time decision making algorithms."
}

]

return (

<div className="min-h-screen bg-black text-white px-6 py-32">

{/* PAGE TITLE */}

<h1 className="text-5xl font-extrabold mb-16 text-center">

Tech <span className="bg-gradient-to-r from-[#F65B3B] to-[#F38939] bg-clip-text text-transparent">
Updates 2026
</span>

</h1>


{/* NEWS GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

{news.map((item,index)=>(

<div
key={index}
className="glass-card overflow-hidden hover:scale-[1.02] transition duration-300"
>

{/* IMAGE */}

<div className="h-56 w-full overflow-hidden">

<img
src={item.image}
alt={item.title}
className="w-full h-full object-cover"
/>

</div>

{/* CONTENT */}

<div className="p-6">

<h3 className="text-xl font-semibold mb-3">
{item.title}
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
{item.desc}
</p>

</div>

</div>

))}

</div>

</div>

)

}