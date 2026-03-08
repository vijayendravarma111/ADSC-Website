import Link from "next/link"

export default function ProjectDetailPage({
  params,
}: {
  params?: { projectId?: string }
}) {
  const projectId = params?.projectId ?? "project"

  const projectTitle = projectId
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          href="/#projects"
          className="text-sm text-gray-400 hover:text-[#ff3131] transition"
        >
          ← Back to Flagship Work
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
          {projectTitle}
        </h1>

        {/* Overview */}
        <p className="text-gray-300 mt-6 leading-relaxed">
          This flagship ADSC project focuses on solving a real-world
          academic or institutional problem using data science,
          machine learning, and analytics-driven decision making.
        </p>

        {/* Key Highlights */}
        <div className="mt-12 grid gap-6">
          <div className="bg-[#0b0b0b] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Problem Statement
            </h3>
            <p className="text-gray-400 text-sm">
              Identifying inefficiencies and improving outcomes through
              data-driven models and insights.
            </p>
          </div>

          <div className="bg-[#0b0b0b] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Tech Stack
            </h3>
            <p className="text-gray-400 text-sm">
              Python • Machine Learning • Data Analysis • Visualization
            </p>
          </div>

          <div className="bg-[#0b0b0b] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Outcome
            </h3>
            <p className="text-gray-400 text-sm">
              Delivered actionable insights, predictive models,
              and measurable performance improvements.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
