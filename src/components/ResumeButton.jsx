import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";

function getTheme() {
	const saved = localStorage.getItem("theme");
	if (saved === "light" || saved === "dark") return saved;
	return document.documentElement.classList.contains("dark")
		? "dark"
		: "light";
}

export default function ResumeButton() {
	const [theme, setTheme] = useState(getTheme());

	useEffect(() => {
		const html = document.documentElement;
		const updateTheme = () => {
			setTheme(html.classList.contains("dark") ? "dark" : "light");
		};
		window.addEventListener("storage", updateTheme);
		const observer = new MutationObserver(updateTheme);
		observer.observe(html, {
			attributes: true,
			attributeFilter: ["class"],
		});
		updateTheme();
		return () => {
			window.removeEventListener("storage", updateTheme);
			observer.disconnect();
		};
	}, []);

	const isDark = theme === "dark";
	return (
		<a
			href="/resume.pdf"
			className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium hover:opacity-90"
			style={{
				background: isDark ? "#fff" : "#18181b",
				color: isDark ? "#18181b" : "#fff",
				border: isDark ? "1px solid #fff" : "1px solid #18181b",
			}}
		>
			Življenjepis <FileDown size={16} />
		</a>
	);
}
