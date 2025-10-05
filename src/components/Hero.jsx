// Hero.jsx
import { MoveRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section id="home" className="relative z-0 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {/* Row: left defines height, right matches it */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* LEFT — content drives the height */}
          <div className="md:flex-[1.1] self-start">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset mb-4"
              style={{
                background: "var(--badge-bg)",
                color: "var(--accent2)",
                borderColor: "var(--border)",
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ background: "var(--accent2)" }}
              />
              Open to projects & collabs
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Hi, I’m <span className="gradient-clip">Kristjan Lapanje</span>
            </h1>

            <div className="mt-1 flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center rounded-md px-2 h-10 text-xl font-semibold leading-none border mt-2"
                style={{
                  background: "var(--badge-bg)",
                  color: "var(--accent2)",
                  borderColor: "var(--accent2)",
                  letterSpacing: "0.08em",
                }}
              >
                CS
              </span>
              <span className="text-4xl md:text-5xl font-semibold leading-none">
                student & developer
              </span>
            </div>

            <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--desc-text)" }}>
              I build fast, clean solutions with thoughtful details.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium transition hover:shadow-sm"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Projects <MoveRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Contact
              </a>
            </div>

            <div
              className="mt-3 text-sm opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Based in Slovenia · Always learning
            </div>
          </div>

          {/* RIGHT — stretches to same height as the left */}
          <div className="md:flex-1 flex items-center justify-end">
            {/* This wrapper inherits the row height; the animation fills it */}
            <div className="h-full w-full max-w-[48rem]">
              <DotLottieReact
                src="anim4.json"
                loop
                autoplay
                style={{
                  height: "100%",      // match the left column’s height
                  width: "100%",       // scale to available width
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
