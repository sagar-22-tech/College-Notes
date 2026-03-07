import { useEffect } from "react";

export default function PreviewModal({ data, onClose }) {
  const { subject, section, unit, link } = data;

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleOpen = () => {
    window.open(link, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true">

        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon">{subject.icon}</div>
            <div>
              <div className="modal-title">{subject.name}</div>
              <div className="modal-subtitle">{section.label} · Unit {unit}</div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-info-row">
            <span className="modal-info-chip gold">📅 3rd Year</span>
            <span className="modal-info-chip">{section.icon} {section.label}</span>
            <span className="modal-info-chip gold">Unit {unit}</span>
          </div>
          <div className="modal-divider" />
          <div className="modal-no-link">
            <strong>Link not yet available</strong>
            The Drive link for this unit hasn't been added yet.
            Please check back soon — it'll be uploaded shortly!
          </div>
        </div>

      </div>
    </div>
  );
}
