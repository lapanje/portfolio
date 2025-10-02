import TechStrip from "./TechStrip";
import { MoveRight } from "lucide-react";

export default function Hero() {
	return (
		<section id="home" className="relative z-0 py-20 md:py-32">
			{/* CONTAINER */}
			<div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
				{/* LEFT: TEXT */}
				<div>
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
						Open to internships & collabs
					</span>

					<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
						Hi, I’m <span className="gradient-clip">Kristjan</span>
					</h1>

					{/* CS tag + role */}
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

					<p
						className="mt-4 text-lg max-w-xl"
						style={{ color: "var(--desc-text)" }}
					>
						I’m passionate about learning by building — always
						exploring how software can solve problems or create new
						experiences.
					</p>

					<div className="mt-6 flex gap-4">
						<a
							href="#projects"
							className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium transition hover:shadow-sm"
							style={{
								borderColor: "var(--border)",
								color: "var(--text)",
							}}
						>
							Projects <MoveRight size={16} />
						</a>
					</div>
				</div>

				{/* RIGHT: IMAGE (contained; no overflow) */}
				<div className="flex justify-end relative">
					<div
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full pointer-events-none"
						style={{
							background: "var(--hero-glow)",
							filter: "blur(var(--hero-glow-blur))",
							zIndex: 0,
						}}
					/>
					<img
						src="/codePc.svg"
						alt="Developer illustration"
						className="relative w-full max-w-[22rem] md:max-w-[26rem] h-auto object-contain z-10"
						draggable={false}
					/>
				</div>
			</div>

			{/* TECH STRIP – same width as hero */}
			<div className="mt-14">
				<div className="mx-auto max-w-6xl px-5">
					<TechStrip />
				</div>
			</div>
		</section>
	);
}
