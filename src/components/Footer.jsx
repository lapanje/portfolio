import { Github, Mail } from "lucide-react";

export default function Footer() {
	return (
		<section
			id="contact"
			className="border-t py-16"
			style={{ marginTop: "2.5rem" }}
		>
			<div className="max-w-5xl mx-auto px-5 text-center">
				<h3 className="text-2xl font-semibold">
                    Open to new ideas and projects
				</h3>
				<p
					className="max-w-prose mx-auto mt-2"
					style={{ color: "var(--desc-text)" }}
				>
                    Available for internships, student jobs, or team projects.
				</p>
				<div className="mt-6 flex justify-center gap-3">
					<a
						href="mailto:kristjan.lapanje@gmail.com"
                        className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
					>
						<Mail size={16} /> E-mail
					</a>
					<a
						href="https://github.com/lapanje"
						className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
					>
						<Github size={16} /> GitHub
					</a>
				</div>
				<footer className="mt-10 text-center text-xs text-neutral-500 dark:text-neutral-400">
					© {new Date().getFullYear()} Kristjan Lapanje. Made with
					React + Vite + Tailwind.
				</footer>
			</div>
		</section>
	);
}
