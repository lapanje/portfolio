// ProjectCard.jsx
import { motion as Motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

export default function ProjectCard({
  title,
  tech = [],
  desc,
  href,           // optional live/demo link
  repo,           // optional repo link
  isPrivate = false, // set true when code can't be shared
}) {
  const slug = (title || "").toLowerCase().replace(/\s+/g, "-");

  return (
    <Motion.article
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative rounded-xl border overflow-hidden"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--accent2)" }}
          />
          <span
            className="font-mono text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            /{slug}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isPrivate && (
            <span
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs border"
              style={{
                background: "transparent",
                color: "var(--text-secondary)",
                borderColor: "var(--border)",
              }}
              title="Source code is private"
            >
              <Lock size={14} />
              Private
            </span>
          )}

          {!isPrivate && repo && (
            <a
              href={repo}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs border"
              style={{
                background: "transparent",
                color: "var(--text-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <Github size={14} />
              Code
            </a>
          )}

          {href && (
            <a
              href={href}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs border"
              style={{
                background: "transparent",
                color: "var(--text-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
          {title}
        </h3>

        <p
          className="mt-1 text-sm leading-relaxed"
          style={{ color: "var(--desc-text)" }}
        >
          {desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
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
      </div>
    </Motion.article>
  );
}
