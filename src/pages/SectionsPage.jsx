import { SECTIONS } from "../data/subjects";

export default function SectionsPage({ subject, yearLabel, onSelectSection }) {
  return (
    <div className="inner-page">
      <div className="subject-hero">
        <div className="subject-hero-icon">{subject.icon}</div>
        <div>
          <div className="page-eyebrow" style={{ marginBottom: "0.4rem" }}>
            {yearLabel} Subject
          </div>
          <h1 className="page-heading" style={{ marginBottom: 0 }}>{subject.name}</h1>
        </div>
      </div>
      <p className="page-sub">Pick a section to browse unit-wise material</p>

      <div className="sections-grid">
        {SECTIONS.map((sec) => (
          <div key={sec.key} className="section-card" onClick={() => onSelectSection(sec)}>
            <div className="section-card-icon">{sec.icon}</div>
            <div className="section-card-label">{sec.label}</div>
            <div className="section-card-desc">{sec.desc}</div>
            <div className="section-card-footer">
              <span className="section-units-pill">5 Units</span>
              <span className="section-card-arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
