export default function Breadcrumb({ crumbs, onCrumbClick }) {
  if (crumbs.length <= 1) return null;
  return (
    <div className="breadcrumb-wrap">
      <div className="breadcrumb">
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            {i < crumbs.length - 1
              ? <button className="crumb-btn" onClick={() => onCrumbClick(i)}>{c}</button>
              : <span className="crumb-current">{c}</span>
            }
            {i < crumbs.length - 1 && <span className="crumb-sep">›</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
