import { useState } from "react";

export default function SubjectsPage({ yearConfig, onSelectSubject }) {
  const [query, setQuery] = useState("");

  const filtered = yearConfig.subjects.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="inner-page">
      <div className="subjects-header">
        <div className="subjects-title-group">
          <div className="page-eyebrow">{yearConfig.label} · CS/IT</div>
          <h1 className="page-heading" style={{ marginBottom: 0 }}>Choose a Subject</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span className="subject-count">{filtered.length} subjects</span>
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search subject…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)" }}>
          No subjects match "{query}"
        </div>
      ) : (
        <div className="subjects-grid">
          {filtered.map((s) => (
            <div key={s.name} className="subject-card" onClick={() => onSelectSubject(s)}>
              <div className="subject-icon-wrap">{s.icon}</div>
              <div className="subject-name">{s.name}</div>
              <span className="subject-arrow">↗</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
