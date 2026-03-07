export default function ComingSoonPage({ yearLabel }) {
  return (
    <div className="coming-soon">
      <span className="coming-soon-icon">🚧</span>
      <span className="coming-soon-pill">Coming Soon</span>
      <h2>Notes for {yearLabel}</h2>
      <p>
        We're working hard to organize all notes for {yearLabel}.
        Check back soon — it'll be worth the wait!
      </p>
    </div>
  );
}
