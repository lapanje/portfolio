import { useEffect, useState } from "react";

function getTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function TechStrip() {
  const items = [
    "React", "JavaScript", "Vite", "Node", "PostgreSQL",
    "Prisma", "Tailwind", "Framer Motion", "Playwright",
    "Docker", "CI/CD"
  ];
  const scroll = items.concat(items);
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => {
      setTheme(html.classList.contains("dark") ? "dark" : "light");
    };
    window.addEventListener("storage", updateTheme);
    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    updateTheme();
    return () => {
      window.removeEventListener("storage", updateTheme);
      observer.disconnect();
    };
  }, []);

  const isDark = theme === "dark";
  return (
    <div className="relative overflow-hidden">
      <div className="tech-marquee h-10 whitespace-nowrap">
        {scroll.map((t, i) => (
          <span
            key={i}
            className={
              isDark
                ? "mr-4 inline-flex items-center rounded-lg border px-3 py-1 text-xs md:text-sm backdrop-blur"
                : "mr-4 inline-flex items-center rounded-lg border px-3 py-1 text-xs md:text-sm bg-white border border-neutral-200 shadow-sm"
            }
            style={{
              background: isDark ? 'rgba(24,24,27,0.7)' : undefined,
              color: isDark ? '#fafaf9' : '#18181b',
              border: isDark ? '1px solid #23272f' : undefined
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
