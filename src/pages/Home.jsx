import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { motion as Motion } from 'framer-motion'
import { Briefcase, User, Code2, GraduationCap } from 'lucide-react'

const projects = [
  { title: 'Real-Time Chat', tech:['React','WebSocket','Node'], desc:'Optimistic UI, presence, message caching.', slug:'realtime-chat' },
  { title: 'Algorithm Visualizer', tech:['Canvas','React'], desc:'Path-finding and sorting visualizations with precise timing.', slug:'algo-visualizer' },
  { title: 'Portfolio CMS', tech:['Vite','React','MDX'], desc:'Content-based portfolio with MDX and code blocks.', slug:'portfolio-cms' },
  { title: '3D Configurator', tech:['React','Three.js'], desc:'Parametric materials, lighting settings, screenshots.', slug:'3d-configurator' },
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
        <Section id="projects" eyebrow="Selected Works" title="Projects">
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

        <Section id="experience" eyebrow="Work history" title="Experience" right={<Briefcase size={18} className="opacity-70" />}>
          <Reveal>
            <ol className="relative border-s pl-6">
              <li className="mb-8">
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--text-secondary)" }}>05/2022 – 07/2022</div>
                <div className="text-base font-semibold">Practical Training and Student Summer Work</div>
                <div className="text-sm mt-1 font-medium">Metronik d.o.o., Ljubljana</div>
                <ul className="list-disc pl-5 text-sm mt-2" style={{ color: 'var(--desc-text)' }}>
                  <li>Developed a C# application for monitoring and visualizing alarms using SQL queries</li>
                  <li>Data processing, filter configuration, and basic user interface preparation</li>
                  <li>Basic work with PLC and controller software</li>
                </ul>
              </li>
            </ol>
          </Reveal>
        </Section>

        <Section id="education" eyebrow="Academic background" title="Education" right={<GraduationCap size={18} className="opacity-70" />}>
          <Reveal>
            <ol className="relative border-s pl-6">
              <li className="mb-8">
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--text-secondary)" }}>2024 – Present</div>
                <div className="text-base font-semibold">Computer Science and Informatics Engineer</div>
                <div className="text-sm mt-1 font-medium">Šolski center Kranj</div>
                <div className="text-xs mt-1">Website <a href="https://www.sckr.si" className="underline">www.sckr.si</a> | NQF Level 6</div>
              </li>
              <li>
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--text-secondary)" }}>2019 – 2024</div>
                <div className="text-base font-semibold">Computer Technician</div>
                <div className="text-sm mt-1 font-medium">Vegova Ljubljana</div>
                <div className="text-xs mt-1">Website <a href="https://www.vegova.si" className="underline">www.vegova.si</a> | NQF Level 5</div>
              </li>
            </ol>
          </Reveal>
        </Section>

        <div className="flex flex-col gap-4">
          <Section id="about" eyebrow="Get to know me" title="About Me" right={<User size={18} className="opacity-70" />}>
            <Reveal>
              <div className="grid items-stretch gap-4 md:grid-cols-[1fr_1.2fr]">
                <div className="rounded-2xl border p-6 about-section-bg flex flex-col h-full">
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li><span className="font-bold">Name:</span> Kristjan Lapanje</li>
                    <li><span className="font-bold">Date of Birth:</span> 19/11/2004</li>
                    <li><span className="font-bold">Nationality:</span> Slovenian</li>
                    <li><span className="font-bold">Gender:</span> Male</li>
                  </ul>
                  <h3 className="font-semibold mt-5 mb-2">Contact</h3>
                  <ul className="pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li><span className="font-bold">Email:</span> kristjan.lapanje@gmail.com</li>
                    <li><span className="font-bold">Phone:</span> (+386) 41934490</li>
                  </ul>
                </div>
                <div className="rounded-2xl border p-6 flex flex-col h-full">
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><Code2 size={16}/> Skills</h3>
                  <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li><span className="font-bold">Programming Languages:</span> C++, C#, JS, PHP, HTML/CSS, SQL</li>
                    <li>Web application development</li>
                    <li>Database management</li>
                    <li>Basic networking knowledge</li>
                    <li>Advanced Windows and MS Office knowledge</li>
                    <li>Basic Linux knowledge</li>
                  </ul>
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
