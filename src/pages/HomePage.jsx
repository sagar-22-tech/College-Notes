export default function HomePage({ onBrowse }) {
  return (
    <div className="home-hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <span className="home-eyebrow">🎓 College Notes Portal</span>
      <h1 className="home-title">
        Your <span>Academic</span><br />Arsenal
      </h1>
      <p className="home-sub">
        Semester notes, PYQ papers, assignments — organized by subject, section, and unit.
      </p>
      <button className="btn-primary" onClick={onBrowse}>
        Browse Notes <span style={{ fontSize: "1.1rem" }}>→</span>
      </button>
      <div className="home-stats">
        <div className="stat">
          <div className="stat-num">15</div>
          <div className="stat-label">Subjects</div>
        </div>
        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Sections</div>
        </div>
        <div className="stat">
          <div className="stat-num">5</div>
          <div className="stat-label">Units</div>
        </div>
      </div>
    </div>
  );
}
