"use client"

import { useState } from "react"

export default function Page() {

const [active,setActive] = useState<any>(null)

const resources = [

{
title:"AI Roadmaps",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995",
desc:"Step-by-step learning path for AI & Machine Learning.",
details:[
{title:"AI Roadmap",link:"https://roadmap.sh/ai"},
{title:"Machine Learning Roadmap",link:"https://roadmap.sh/ml"},
{title:"Deep Learning Specialization",link:"https://www.coursera.org/specializations/deep-learning"}
]
},

{
title:"Coding Practice",
image:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
desc:"Practice programming and algorithms.",
details:[
{title:"LeetCode",link:"https://leetcode.com"},
{title:"GeeksForGeeks",link:"https://www.geeksforgeeks.org"},
{title:"HackerRank",link:"https://www.hackerrank.com"},
{title:"Codeforces",link:"https://codeforces.com"}
]
},

{
title:"AI Tools",
image:"https://images.unsplash.com/photo-1677756119517-756a188d2d94",
desc:"Popular AI tools used by developers.",
details:[
{title:"ChatGPT",link:"https://chat.openai.com"},
{title:"HuggingFace",link:"https://huggingface.co"},
{title:"LangChain",link:"https://www.langchain.com"},
{title:"OpenAI API",link:"https://platform.openai.com"}
]
},

{
title:"Datasets",
image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
desc:"Open datasets for ML & Data Science projects.",
details:[
{title:"Kaggle Datasets",link:"https://www.kaggle.com/datasets"},
{title:"Google Dataset Search",link:"https://datasetsearch.research.google.com"},
{title:"UCI ML Repository",link:"https://archive.ics.uci.edu"},
{title:"HuggingFace Datasets",link:"https://huggingface.co/datasets"}
]
},

{
title:"Research Papers",
image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
desc:"Latest research in AI & Computer Science.",
details:[
{title:"arXiv AI Papers",link:"https://arxiv.org/list/cs.AI/recent"},
{title:"Papers With Code",link:"https://paperswithcode.com"},
{title:"OpenAI Research",link:"https://openai.com/research"},
{title:"DeepMind Research",link:"https://deepmind.google/research"}
]
},

{
title:"Project Ideas",
image:"https://images.unsplash.com/photo-1504639725590-34d0984388bd",
desc:"Real project ideas for building portfolio.",
details:[
{title:"AI Project Ideas (Kaggle)",link:"https://www.kaggle.com/code"},
{title:"GitHub AI Projects",link:"https://github.com/topics/artificial-intelligence"},
{title:"Machine Learning Projects",link:"https://machinelearningmastery.com/projects/"}
]
},

{
title:"Developer Tools",
image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c",
desc:"Essential tools for developers and engineers.",
details:[
{title:"GitHub",link:"https://github.com"},
{title:"Docker",link:"https://www.docker.com"},
{title:"VS Code",link:"https://code.visualstudio.com"},
{title:"Postman",link:"https://www.postman.com"}
]
},

{
title:"Career Resources",
image:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
desc:"Resources for tech careers and internships.",
details:[
{title:"LinkedIn Jobs",link:"https://www.linkedin.com/jobs"},
{title:"Internshala",link:"https://internshala.com"},
{title:"Wellfound Startup Jobs",link:"https://wellfound.com/jobs"},
{title:"Glassdoor",link:"https://glassdoor.com"}
]
},

{
title:"Community Resources",
image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c",
desc:"Learning resources shared by the ADSC community.",
details:[
{title:"Kaggle Community",link:"https://www.kaggle.com"},
{title:"HuggingFace Community",link:"https://huggingface.co/community"},
{title:"Stack Overflow",link:"https://stackoverflow.com"},
{title:"Reddit Machine Learning",link:"https://www.reddit.com/r/MachineLearning"}
]
}

]

return (

<div className="min-h-screen bg-black text-white px-6 py-32">

{/* TITLE */}

<h1 className="text-5xl font-extrabold mb-16 text-center">

Resources <span className="bg-gradient-to-r from-[#F65B3B] to-[#F38939] bg-clip-text text-transparent">
Hub
</span>

</h1>


{/* GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

{resources.map((item,index)=>(

<div
key={index}
onClick={()=>setActive(item)}
className="glass-card cursor-pointer overflow-hidden hover:scale-[1.03] transition duration-300"
>

<img
src={item.image}
alt={item.title}
className="w-full h-48 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-semibold mb-2">

{item.title}

</h3>

<p className="text-gray-400 text-sm">

{item.desc}

</p>

</div>

</div>

))}

</div>


{/* MODAL */}

{active && (

<div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

<div className="glass-card max-w-xl p-10">

<h2 className="text-2xl font-bold mb-4 text-center">

{active.title}

</h2>

<ul className="space-y-4">

{active.details.map((link:any,i:number)=>(

<li key={i}>

<a
href={link.link}
target="_blank"
className="block px-5 py-3 rounded-lg bg-gradient-to-r from-[#F65B3B] to-[#F38939] text-black font-medium hover:scale-105 transition"
>

{link.title}

</a>

</li>

))}

</ul>

<button

onClick={()=>setActive(null)}

className="mt-8 w-full py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"

>

Close

</button>

</div>

</div>

)}

</div>

)

}