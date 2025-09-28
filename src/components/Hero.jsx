import TechStrip from './TechStrip'
import ResumeButton from './ResumeButton'
import { MoveRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset"
          style={{
            background: "rgba(16,185,129,0.08)",
            color: "#059669ff",
            borderColor: "#a7f3d0",
          }}
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Open to internships & collabs
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          I build fast, clean web apps.
        </h1>

        <p className="mx-auto mt-4 max-w-xl" style={{ color: "var(--desc-text)" }}>
          Strong UX, composable systems, and disciplined shipping. Explore selected work below.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
          >
            View projects <MoveRight size={16} />
          </a>
          <ResumeButton />
        </div>

        <div className="mt-10 -mb-6">
          <TechStrip />
        </div>
      </div>
    </section>
  )
}
