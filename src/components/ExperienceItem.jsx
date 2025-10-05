export default function ExperienceItem({
	title,
	period,
	bullets = [],
	tags = [],
}) {
	return (
		<li className="mb-8">
			<span
				className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
				style={{
					background: "var(--card)",
					borderColor: "var(--border)",
				}}
			/>
			<div
				className="rounded-xl border p-4"
				style={{
					background: "var(--card)",
					borderColor: "var(--border)",
				}}
			>
				{/* HEADER */}
				<div className="flex flex-wrap items-baseline justify-between gap-2">
					<h4
						className="text-base font-semibold"
						style={{ color: "var(--text)" }}
					>
						{title}
					</h4>
					<span
						className="text-[11px] rounded-md px-2 py-1 border"
						style={{
							borderColor: "var(--border)",
							color: "var(--text-secondary)",
						}}
					>
						{period}
					</span>
				</div>

				{/* BULLETS */}
				{bullets.length > 0 && (
					<ul
						className="list-disc pl-5 text-sm mt-3"
						style={{ color: "var(--desc-text)" }}
					>
						{bullets.map((b, i) => (
							<li key={i}>{b}</li>
						))}
					</ul>
				)}

				{/* TAGS */}
				{tags.length > 0 && (
					<div className="mt-3 flex flex-wrap gap-2">
						{tags.map((t) => (
							<span
								key={t}
								className="rounded-md px-2 py-1 text-[11px] font-medium"
								style={{
									background: "var(--badge-bg)",
									color: "var(--badge-text)",
									border: "1px solid var(--border)",
								}}
							>
								{t}
							</span>
						))}
					</div>
				)}
			</div>
		</li>
	);
}
