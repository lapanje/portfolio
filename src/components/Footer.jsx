export default function Footer() {
	return (
		<footer
			className="border-t py-16"
			style={{
				marginTop: "2.5rem",
				color: "var(--desc-text)",
				borderColor: "var(--border)",
			}}
		>
			<div className="max-w-5xl mx-auto px-5 text-center">
				<p
					style={{
						color: "var(--desc-text)",
						fontSize: "0.9rem",
					}}
				>
					Built with React, Vite and Tailwind CSS.
				</p>
				<p
					style={{
						color: "var(--text-secondary)",
						fontSize: "0.75rem",
						marginTop: "0.5rem",
					}}
				>
					© {new Date().getFullYear()} Kristjan Lapanje
				</p>
			</div>
		</footer>
	);
}
