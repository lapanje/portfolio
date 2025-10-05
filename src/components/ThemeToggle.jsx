import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
	// Helper to get current theme from DOM/localStorage
	function getTheme() {
		const saved = localStorage.getItem("theme");
		if (saved === "light" || saved === "dark") return saved;
		return document.documentElement.classList.contains("dark")
			? "dark"
			: "light";
	}

	const [theme, setTheme] = useState(getTheme());

	// Sync React state with DOM on mount and when theme changes externally
	useEffect(() => {
		const html = document.documentElement;
		const updateTheme = () => {
			setTheme(html.classList.contains("dark") ? "dark" : "light");
		};
		// Listen for storage changes (other tabs/windows)
		window.addEventListener("storage", updateTheme);
		// Listen for manual DOM changes (edge case)
		const observer = new MutationObserver(updateTheme);
		observer.observe(html, {
			attributes: true,
			attributeFilter: ["class"],
		});
		// Initial sync
		updateTheme();
		return () => {
			window.removeEventListener("storage", updateTheme);
			observer.disconnect();
		};
	}, []);

	function toggle() {
		const html = document.documentElement;
		const next = theme === "light" ? "dark" : "light";
		if (next === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
		html.style.colorScheme = next;
		localStorage.setItem("theme", next);
		setTheme(next);
	}

	return (
		<button
			onClick={toggle}
			className="rounded-lg border p-2 flex items-center gap-2 hover:bg-[var(--bg-secondary)] transition-colors"
			style={{
				background: "var(--card)",
				color: "var(--text)",
				borderColor: "var(--border)",
				fontWeight: 500,
			}}
			aria-label="Toggle theme"
		>
			{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
			<span
				className="text-sm font-semibold"
				style={{ color: "var(--text)" }}
			>
				{theme === "dark" ? "Dark" : "Light"}
			</span>
		</button>
	);
}
