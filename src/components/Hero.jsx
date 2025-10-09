// Hero.jsx
import { MoveRight } from "lucide-react";

export default function Hero() {
	return (
		<section id="home" className="relative z-0 py-20 md:py-32">
			<div className="mx-auto max-w-6xl px-5">
				{/* FIXED HEIGHT ON DESKTOP; natural stack on mobile */}
				<div className="flex flex-col md:flex-row items-stretch gap-12 md:h-[320px]">
					{/* LEFT (unchanged) */}
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

						<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
							Hi, I'm{" "}
							<span className="gradient-clip">
								Kristjan Lapanje
							</span>
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

							<span className="text-4xl md:text-5xl font-semibold leading-none md:whitespace-nowrap">
								student & developer
							</span>
						</div>

						<p
							className="mt-4 text-lg max-w-xl"
							style={{ color: "var(--desc-text)" }}
						>
							Just learning, creating, and figuring things out as
							I go.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href="#projects"
								className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
								style={{
									borderColor: "var(--border)",
									color: "var(--text)",
									backgroundColor: "var(--badge-bg)",
								}}
							>
								Projects <MoveRight size={16} />
							</a>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium"
								style={{
									background: "var(--accent)",
									color: "#fff",
									borderColor: "var(--border)",
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

					{/* RIGHT – fixed height match, no crop, no glow */}
					{/* RIGHT — simple, centered image */}
					<div className="md:flex-1 flex items-center justify-center">
						<img
							src="/selfie.jpeg"
							alt="Kristjan Lapanje"
							className="h-[300px] w-auto rounded-2xl border block"
							style={{ borderColor: "var(--border)" }}
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
