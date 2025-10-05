export default function EducationItem({ title, period, institution, url, badges = [] }) {
  return (
    <li className="mb-8">
      <span
        className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      />
      <div
        className="rounded-xl border p-4"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="text-base font-semibold" style={{ color: "var(--text)" }}>
            {title}
          </h4>
          <span
            className="text-[11px] rounded-md px-2 py-1 border"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            {period}
          </span>
        </div>

        {/* Institution */}
        {institution && (
          <div className="mt-1 text-sm font-medium" style={{ color: "var(--text)" }}>
            {institution}
          </div>
        )}

        {/* Link + Badges */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline"
              style={{ color: "var(--accent)" }}
            >
              {url.replace(/^https?:\/\//, "")}
            </a>
          )}
          {badges.map((b) => (
            <span
              key={b}
              className="text-[11px] rounded-md px-2 py-1 border"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
