export default function SyllabusPage({ yearConfig }) {
  const link = yearConfig.links?.syllabus ?? "";
  const hasLink = !!link;

  return (
    <div className="inner-page">
      <div className="subject-hero">
        <div className="subject-hero-icon">📄</div>
        <div>
          <div className="page-eyebrow" style={{ marginBottom: "0.4rem" }}>
            {yearConfig.label} · Full Year
          </div>
          <h1 className="page-heading" style={{ marginBottom: 0 }}>Syllabus</h1>
        </div>
      </div>
      <p className="page-sub">The complete syllabus PDF for the entire academic year</p>

      <div className="syllabus-card">
        <div className="syllabus-card-left">
          <div className="syllabus-icon-big">📄</div>
          <div>
            <div className="syllabus-card-title">{yearConfig.label} Syllabus</div>
            <div className="syllabus-card-sub">Full academic year · All subjects</div>
          </div>
        </div>
        {hasLink ? (
          <button
            className="btn-syllabus-open"
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          >
            Open PDF ↗
          </button>
        ) : (
          <span className="syllabus-coming">Coming Soon</span>
        )}
      </div>
    </div>
  );
}
