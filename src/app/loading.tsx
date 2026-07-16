export default function Loading() {
  return (
    <main id="main-content" className="loading-page section-shell" aria-busy="true" aria-label="Loading">
      <div className="loading-mark"><span>MS</span></div>
      <div className="loading-copy">
        <span />
        <span />
        <span />
      </div>
      <div className="loading-progress"><span /></div>
    </main>
  );
}
