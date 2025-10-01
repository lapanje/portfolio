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
					Skupaj lahko ustvarimo nekaj novega
				</h3>
				<p
					className="max-w-prose mx-auto mt-2"
					style={{ color: "var(--desc-text)" }}
				>
					Na voljo sem za prakso, študentsko delo ali sodelovanje.
					Predstavite mi svoj izziv in odgovoril vam bom s hitrim
					načrtom.
				</p>
				<div className="mt-6 flex justify-center gap-3">
					<a
						href="mailto:you@example.com"
						className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
					>
						<Mail size={16} /> E-pošta
					</a>
					<a
						href="https://github.com/yourusername"
						className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:shadow-sm"
					>
						<Github size={16} /> GitHub
					</a>
				</div>
				<footer className="mt-10 text-center text-xs text-neutral-500 dark:text-neutral-400">
					© {new Date().getFullYear()} Kristjan Lapanje. Izdelano z
					React + Vite + Tailwind.
				</footer>
			</div>
		</section>
	);
}
