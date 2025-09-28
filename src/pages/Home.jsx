import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { motion as Motion } from 'framer-motion'
import { Briefcase, User, Code2, GraduationCap } from 'lucide-react'

const projects = [
  { title: 'Klepet v realnem času', tech:['React','WebSocket','Node'], desc:'Optimistični vmesnik, prisotnost, predpomnjenje sporočil.', slug:'realtime-chat' },
  { title: 'Vizualizator algoritmov', tech:['Canvas','React'], desc:'Vizualizacije iskanja poti in sortiranja z natančnim časom.', slug:'algo-visualizer' },
  { title: 'Portfolio CMS', tech:['Vite','React','MDX'], desc:'Portfelj na osnovi vsebine z MDX in kodnimi bloki.', slug:'portfolio-cms' },
  { title: '3D konfigurator', tech:['React','Three.js'], desc:'Parametrični materiali, svetlobne nastavitve, posnetki zaslona.', slug:'3d-configurator' },
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
  <Section id="projects" eyebrow="Izbrana dela" title="Projekti">
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

        <Section id="experience" eyebrow="Delovne izkušnje" title="Izkušnje" right={<Briefcase size={18} className="opacity-70" />}>
          <Reveal>
            <ol className="relative border-s pl-6">
              <li className="mb-8">
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--text-secondary)" }}>05/2022 – 07/2022</div>
                <div className="text-base font-semibold">Praktično usposabljanje in dijaško počitniško delo</div>
                <div className="text-sm mt-1 font-medium">Metronik d.o.o., Ljubljana</div>
                <ul className="list-disc pl-5 text-sm mt-2" style={{ color: 'var(--desc-text)' }}>
                  <li>Razvoj aplikacije v C# za spremljanje in vizualizacijo alarmov z uporabo SQL poizvedb</li>
                  <li>Obdelava podatkov, konfiguracija filtrov in priprava osnovnega uporabniškega vmesnika</li>
                  <li>Osnovno delo s PLC in programsko opremo za krmilnike</li>
                </ul>
              </li>
            </ol>
          </Reveal>
        </Section>

  <Section id="education" eyebrow="Izobraževanje" title="Izobraževanje" right={<GraduationCap size={18} className="opacity-70" />}>
          <Reveal>
            <ol className="relative border-s pl-6">
              <li className="mb-8">
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--text-secondary)" }}>2024 – Trenutno</div>
                <div className="text-base font-semibold">Inženir računalništva in informatike</div>
                <div className="text-sm mt-1 font-medium">Šolski center Kranj</div>
                <div className="text-xs mt-1">Spletišče <a href="https://www.sckr.si" className="underline">www.sckr.si</a> | Raven EOK 6</div>
              </li>
              <li>
                <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900" style={{ background: "var(--card)" }}/>
                <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--text-secondary)" }}>2019 – 2024</div>
                <div className="text-base font-semibold">Tehnik računalništva</div>
                <div className="text-sm mt-1 font-medium">Vegova Ljubljana</div>
                <div className="text-xs mt-1">Spletišče <a href="https://www.vegova.si" className="underline">www.vegova.si</a> | Raven EOK 5</div>
              </li>
            </ol>
          </Reveal>
        </Section>

        <div className="flex flex-col gap-4">
          <Section id="about" eyebrow="O meni" title="O meni" right={<User size={18} className="opacity-70" />}>
            <Reveal>
              <div className="grid items-stretch gap-4 md:grid-cols-[1fr_1.2fr]">
                <div className="rounded-2xl border p-6 about-section-bg flex flex-col h-full">
                  <h3 className="font-semibold mb-2">Osebni podatki</h3>
                  <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li><span className="font-bold">Ime:</span> Kristjan Lapanje</li>
                    <li><span className="font-bold">Datum rojstva:</span> 19/11/2004</li>
                    <li><span className="font-bold">Državljanstvo:</span> slovensko</li>
                    <li><span className="font-bold">Spol:</span> Moški</li>
                  </ul>
                  <h3 className="font-semibold mt-5 mb-2">Kontakt</h3>
                  <ul className="pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li><span className="font-bold">Email:</span> kristjan.lapanje@gmail.com</li>
                    <li><span className="font-bold">Telefon:</span> (+386) 41934490</li>
                  </ul>
                </div>
                <div className="rounded-2xl border p-6 flex flex-col h-full">
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><Code2 size={16}/> Spretnosti</h3>
                  <ul className="list-disc pl-5 text-sm" style={{ color: 'var(--desc-text)' }}>
                    <li><span className="font-bold">Programski jeziki:</span> C++, C#, JS, PHP, HTML/CSS, SQL</li>
                    <li>Razvoj spletnih aplikacij</li>
                    <li>Upravljanje podatkovnih baz</li>
                    <li>Osnovno znanje omrežij</li>
                    <li>Napredno znanje Windows in MS Office</li>
                    <li>Osnovno znanje linuxa</li>
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
