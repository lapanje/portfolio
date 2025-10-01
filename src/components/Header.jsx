import { Github, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = {
	github: "https://github.com/lapanje",
	email: "mailto:kristjan.lapanje@gmail.com",
};

function Header() {
	return (
		<header
			className="sticky top-0 z-50 border-b backdrop-blur"
			style={{
				background: "var(--header-bg)",
				boxShadow: "0 1px 8px 0 rgba(0,0,0,0.03)",
			}}
		>
			<div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between relative">
				<a
					href="#home"
					className="font-bold text-sm md:text-base tracking-widest header-logo"
					style={{
						color: "var(--header-logo)",
						fontFamily: "Comfortaa, Arial, sans-serif",
						fontWeight: 700,
						letterSpacing: "0.06em",
					}}
				>
					Kristjan Lapanje
				</a>
				<nav
					className="hidden md:flex gap-6 text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					style={{ pointerEvents: "auto" }}
				>
					<a href="#projects" className="hover:opacity-80">
						Projekti
					</a>
					<a href="#experience" className="hover:opacity-80">
						Izkušnje
					</a>
					<a href="#education" className="hover:opacity-80">
						Izobraževanje
					</a>
					<a href="#about" className="hover:opacity-80">
						O meni
					</a>
					<a href="#contact" className="hover:opacity-80">
						Kontakt
					</a>
				</nav>
				<div className="flex items-center gap-4">
					<a
						aria-label="GitHub"
						href={LINKS.github}
						target="_blank"
						rel="noreferrer"
						className="rounded-lg border p-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
					>
						<Github size={18} />
					</a>
					<a
						aria-label="Email"
						href={LINKS.email}
						className="rounded-lg border p-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
					>
						<Mail size={18} />
					</a>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}

export default Header;
