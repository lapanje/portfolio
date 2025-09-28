import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { motion as Motion } from 'framer-motion'
import { Briefcase, GraduationCap, User } from 'lucide-react'

const projects = [
  { title: 'Realtime Chat', tech:['React','WebSocket','Node'], desc:'Optimistic UI, presence, message caching.', slug:'realtime-chat' },
  { title: 'Algo Visualizer', tech:['Canvas','React'], desc:'Pathfinding & sorting visualizations with precise timing.', slug:'algo-visualizer' },
  { title: 'Portfolio CMS', tech:['Vite','React','MDX'], desc:'Content-driven portfolio with MDX & code blocks.', slug:'portfolio-cms' },
  { title: '3D Configurator', tech:['React','Three.js'], desc:'Parametric materials, lighting presets, snapshots.', slug:'3d-configurator' },
]

const gridVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { when:'beforeChildren', staggerChildren: .08 } }
}
const itemVariants = { hidden:{ opacity:0, y:12 }, show:{ opacity:1, y:0, transition:{ duration:.45 } } }

export default function Home() {
  return (
    <div className="antialiased" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <Header />
      <Hero />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Section id="projects" eyebrow="Selected work" title="Projects">
          <Motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 md:grid-cols-2"
          >
              {projects.map((p) => (
              <Motion.div key={p.title} variants={itemVariants}>
                  <ProjectCard {...p} />
              </Motion.div>
              ))}
          </Motion.div>
        </Section>

        <Section id="experience" eyebrow="Background" title="Experience" right={<Briefcase size={18} className="opacity-70" />}>
          <Reveal>
            <ol className="relative border-s pl-6">
              <li className="mb-8">
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>2025 — now</div>
                <div className="text-base font-semibold">Freelance</div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Building small products and tools with React + Node.</p>
              </li>
              <li>
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>2024 — 2025</div>
                <div className="text-base font-semibold">University projects</div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Led teams, focused on DX, testing and CI.</p>
              </li>
            </ol>
          </Reveal>
        </Section>

        <div className="flex flex-col gap-4">
          <Section id="about" eyebrow="Who I am" title="About" right={<User size={18} className="opacity-70" />}>
            <Reveal>
              <div className="grid items-stretch gap-4 md:grid-cols-[1fr_1.2fr]">
                <div className="rounded-2xl border p-6 about-section-bg flex flex-col h-full">
                  <h3 className="font-semibold mb-2">Strengths</h3>
                  <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li>Clean, readable code and thoughtful UI</li>
                    <li>Performance-minded: fast loads, smooth UX</li>
                    <li>Testing & shipping discipline</li>
                  </ul>
                  <h3 className="font-semibold mt-5 mb-2">Tools</h3>
                  <p className="text-sm" style={{ color: 'var(--desc-text)' }}>
                    React, Vite, Tailwind, Node, PostgreSQL, Prisma, Playwright, Docker
                  </p>
                </div>
                <div className="rounded-2xl border p-6 flex flex-col h-full">
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><GraduationCap size={16}/> Currently studying</h3>
                  <p className="text-sm" style={{ color: 'var(--desc-text)' }}>
                    I’m a software developer in the making, focused on building well-designed, production-ready interfaces.
                  </p>
                  <p className="text-sm mt-3" style={{ color: 'var(--desc-text)' }}>
                    Outside code, I like fitness and design—both shape how I approach clean UI.
                  </p>
                </div>
              </div>
            </Reveal>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
