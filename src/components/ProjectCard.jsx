import { motion as Motion } from "framer-motion";
import { ExternalLink, Rocket } from "lucide-react";
import { useRef, useState } from "react";

export default function ProjectCard({ title, tech, desc, href }) {
	const ref = useRef(null);
	const [pos, setPos] = useState({ x: -9999, y: -9999 });
	const onMove = (e) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
	};

	return (
		<Motion.a
			href={href || "#"}
			ref={ref}
			onMouseMove={onMove}
			onMouseLeave={() => setPos({ x: -9999, y: -9999 })}
			className="group relative block overflow-hidden rounded-2xl border p-5 transition-shadow hover:shadow-lg"
			whileHover={{ scale: 1.01 }}
			transition={{ type: "spring", stiffness: 240, damping: 20 }}
		>
			<div
				className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				style={{
					background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.12), transparent 60%)`,
				}}
			/>
			<div className="mb-3 flex flex-wrap gap-2">
				{tech.map((t, i) => (
					<span
						key={t}
						className="rounded-md px-2 py-1 text-xs font-semibold"
						style={{
							background: `var(--badge-bg, ${
								i % 2 === 0 ? "#e0f2fe" : "#fef9c3"
							})`,
							color: "var(--badge-text, #18181b)",
							border: "1px solid #e5e7eb",
							boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)",
						}}
					>
						{t}
					</span>
				))}
			</div>
			<div className="flex items-center gap-2">
				<Rocket size={16} className="opacity-60" />
				<h3 className="text-lg font-semibold">{title}</h3>
			</div>
			<p className="mt-1 text-sm" style={{ color: "var(--desc-text)" }}>
				{desc}
			</p>
			<div className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
				View{" "}
				<ExternalLink
					size={16}
					className="transition-transform group-hover:translate-x-0.5"
				/>
			</div>
		</Motion.a>
	);
}
