// Hero.jsx
import { MoveRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero1() {
  return (
    <section id="home" className="relative z-0 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* LEFT */}
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

            {/* Slightly tighter leading so the new font fits nicer */}
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
              Hi, I'm <span className="gradient-clip">Kristjan Lapanje</span>
            </h1>

            <div className="mt-1 flex items-center gap-3">
							<span
								className="inline-flex items-center justify-center rounded-md px-2 h-9 text-xl font-semibold leading-none border mt-2"
								style={{
									background: "var(--badge-bg)",
									color: "var(--text)",
									borderColor: "var(--text)",
									letterSpacing: "0.08em",
								}}
							>
								CS
							</span>

              {/* <-- Key change: prevent wrap on md+ screens */}
              <span className="text-4xl md:text-5xl font-semibold leading-none md:whitespace-nowrap">
                student & developer
              </span>
            </div>

            <p className="mt-4 text-lg max-w-xl" style={{ color: "var(--desc-text)" }}>
              Just learning, creating, and figuring things out as I go.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
                style={{ borderColor: "var(--border)", color: "var(--text)", backgroundColor: "var(--badge-bg)" }}
              >
                Projects <MoveRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  borderColor: "var(--border)", // fixed missing parenthesis
                }}
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

          {/* RIGHT */}
          <div className="md:flex-1 flex items-center justify-end">
            <div className="h-full w-full max-w-[48rem]">
              <DotLottieReact
                src="anim4.json"
                loop
                autoplay
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
