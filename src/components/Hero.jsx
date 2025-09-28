import { useRef } from 'react'
import { motion as Motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import TechStrip from './TechStrip'
import ResumeButton from './ResumeButton'
import { MoveRight, FileDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)

  // normalized mouse position (0..1); start centered
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  // soften motion
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.25 })
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.25 })

  // spotlight position: tiny travel range to keep it subtle
  const spotLeft = useTransform(sx, v => `${45 + v * 10}%`)
  const spotTop  = useTransform(sy, v => `${44 + v * 12}%`)

  // gentle gradient drift on highlighted words
  const gradX = useTransform(sx, v => `${45 + v * 10}%`)
  const gradY = useTransform(sy, v => `${55 - v * 10}%`)

  function onMove(e) {
    // skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set(Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1))
    my.set(Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1))
  }
  function onLeave() { mx.set(0.5); my.set(0.5) }

  return (
    <section id="home" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="relative">
      {/* soft base wash + subtle moving spotlight */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(70rem_60rem_at_50%_-8rem,rgba(120,120,180,.045),transparent)] dark:bg-[radial-gradient(70rem_60rem_at_50%_-8rem,rgba(120,120,180,.05),transparent)]" />
        <Motion.div
          className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            left: spotLeft,
            top: spotTop,
            background: 'radial-gradient(closest-side, rgba(99,102,241,0.08), rgba(16,185,129,0.06), transparent 70%)'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16 md:py-24 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset"
          style={{
            background: "rgba(16,185,129,0.08)",
            color: "#059669",
            borderColor: "#a7f3d0"
          }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to internships & collabs
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          I build{' '}
          <Motion.span
            className="gradient-clip"
            style={{ backgroundPositionX: gradX, backgroundPositionY: gradY, backgroundSize: '180% 180%', backgroundRepeat: 'no-repeat' }}
          >
            fast, clean
          </Motion.span>{' '}
          web apps.
        </h1>

        <p
          className="mt-4 max-w-xl mx-auto"
          style={{ color: 'var(--desc-text)' }}
        >
          Strong UX, composable systems, and disciplined shipping. Explore selected work below.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm">
            View projects <MoveRight size={16} />
          </a>
          <ResumeButton />
        </div>

        <div className="mt-10">
          <TechStrip />
        </div>
      </div>
    </section>
  )
}
