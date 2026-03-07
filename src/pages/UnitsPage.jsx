import { UNITS } from "../data/subjects";

export default function UnitsPage({ subject, section, yearLinks, onNoLink }) {
  // Get links for this subject + section from the year's links file
  const links = yearLinks?.[subject.key]?.[section.key] ?? {};

  return (
    <div className="inner-page">
      <div className="subject-hero">
        <div className="subject-hero-icon">{subject.icon}</div>
        <div>
          <div className="page-eyebrow" style={{ marginBottom: "0.4rem" }}>
            {subject.name}
          </div>
          <h1 className="page-heading" style={{ marginBottom: 0 }}>{section.label}</h1>
        </div>
      </div>
      <div className="section-badge">{section.icon} {section.label}</div>
      <p className="page-sub" style={{ marginBottom: "2rem" }}>
        Select a unit to open its Drive folder
      </p>

      <div className="units-grid">
        {UNITS.map((n) => {
          const key    = `unit${n}`;
          const link   = links[key] ?? "";
          const hasLink = !!link;

          const handleClick = () => {
            if (hasLink) {
              window.open(link, "_blank", "noopener,noreferrer");
            } else {
              onNoLink({ subject, section, unit: n });
            }
          };

          return (
            <div
              key={n}
              className={`unit-card ${!hasLink ? "no-link" : ""}`}
              onClick={handleClick}
              title={hasLink ? `Open Unit ${n}` : "Link not yet available"}
            >
              <div className="unit-number">{n}</div>
              <div className="unit-label">Unit {n}</div>
              <div className="unit-hint">
                {hasLink ? <>Open ↗</> : <>Not yet available</>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
