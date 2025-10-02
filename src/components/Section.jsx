export default function Section({ eyebrow, title, right, children, id }) {
	return (
		<section id={id} style={{ marginBottom: "var(--section-gap)" }}>
			<div className="max-w-6xl mx-auto px-5">
				{eyebrow && (
					<p className="mb-2 text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
						{eyebrow}
					</p>
				)}
				<div className="flex items-end justify-between gap-4">
					<h2 className="text-2xl md:text-3xl font-semibold">
						{title}
					</h2>
					{right}
				</div>
				<div className="mt-8">{children}</div>
			</div>
		</section>
	);
}
