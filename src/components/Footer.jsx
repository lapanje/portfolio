import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <section id="contact" className="border-t py-16" style={{ marginTop: '2.5rem' }}>
      <div className="max-w-5xl mx-auto px-5 text-center">
        <h3 className="text-2xl font-semibold">Let’s build something</h3>
        <p className="max-w-prose mx-auto mt-2" style={{ color: 'var(--desc-text)' }}>
          I’m open to internships, part-time work and collabs. Tell me about your problem; I’ll reply with a quick plan.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">
            <Mail size={16}/> Email
          </a>
          <a href="https://github.com/yourusername" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm">
            <Github size={16}/> GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm">
            <Linkedin size={16}/> LinkedIn
          </a>
        </div>
        <footer className="mt-10 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Kristjan Lapanje. Built with React + Vite + Tailwind v4.
        </footer>
      </div>
    </section>
  )
}
