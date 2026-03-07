import { YEARS_CONFIG } from "../data/subjects";

export default function YearsPage({ onSelectYear }) {
  return (
    <div className="years-section">
      <h1 className="section-title">Select Your Year</h1>
      <p className="section-sub">Choose your academic year to access notes</p>
      <div className="years-grid">
        {YEARS_CONFIG.map((y) => (
          <div
            key={y.value}
            className={`year-card ${y.active ? "active-year" : ""}`}
            onClick={() => onSelectYear(y)}
          >
            <span className="year-emoji">{y.emoji}</span>
            <span className="year-label">{y.label}</span>
            <span className="year-badge">{y.active ? "Available" : "Coming Soon"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
