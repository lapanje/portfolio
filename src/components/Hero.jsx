import { useRef, useState } from "react";
import TechStrip from "./TechStrip";
import ResumeButton from "./ResumeButton";
import { MoveRight } from "lucide-react";

export default function Hero() {
	const ref = useRef(null);
	const [pos, setPos] = useState({ x: 0, y: 0, on: false });

	function onMove(e) {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
	}
	function onLeave() {
		setPos((p) => ({ ...p, on: false }));
	}

	return (
		<section
			id="home"
			ref={ref}
			onMouseMove={onMove}
			onMouseLeave={onLeave}
			className="relative z-0"
		>
			{/* Mouse-follow glow (same style as ProjectCard) */}
			<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<div
					className="absolute h-[500px] w-[500px] opacity-60 animate-[wiggle_6s_ease-in-out_infinite] blur-2xl"
					style={{
						left: `${pos.x - 250}px`,
						top: `${pos.y - 250}px`,
						background:
							"radial-gradient(ellipse at center, rgba(99,102,241,0.09), transparent 70%)",
						clipPath:
							"polygon(48% 0%, 61% 9%, 76% 20%, 89% 34%, 100% 50%, 89% 66%, 76% 80%, 61% 91%, 48% 100%, 34% 91%, 20% 80%, 9% 66%, 0% 50%, 9% 34%, 20% 20%, 34% 9%)",
						transform: pos.on ? "scale(1)" : "scale(0)",
						transition: "transform 0.3s ease-out",
					}}
				/>
			</div>

			{/* Content sits above the glow */}
			<div className="relative z-10 mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
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
					Živjo, sem <span className="gradient-clip">Kristjan</span> –
					razvijalec spletnih rešitev.
				</h1>

				<p
					className="mx-auto mt-4 max-w-xl"
					style={{ color: "var(--desc-text)" }}
				>
					Gradim odzivne, pregledne in hitre spletne aplikacije z
					uporabo sodobnih orodij.
				</p>

				<div className="mt-6 flex justify-center gap-3">
					<a
						href="#projects"
						className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
					>
						Projekti <MoveRight size={16} />
					</a>
					<ResumeButton />
				</div>

				<div className="mt-10 -mb-6">
					<TechStrip />
				</div>
			</div>
		</section>
	);
}
