import type { Language, Project, ProjectGalleryItem } from "@/types/content";

function Motif({ motif, shift }: { motif: Project["visual"]["motif"]; shift: number }) {
  if (motif === "routes") {
    return (
      <>
        <path d={`M100 ${330 - shift} C240 140 320 410 470 205 S690 135 760 255`} className="visual-line visual-line-strong" />
        <path d={`M70 ${225 + shift} C230 410 390 40 745 175`} className="visual-line" />
        {[{ x: 100, y: 330 - shift }, { x: 470, y: 205 }, { x: 742, y: 176 }].map((point) => (
          <g key={`${point.x}-${point.y}`}>
            <circle cx={point.x} cy={point.y} r="17" className="visual-node-halo" />
            <circle cx={point.x} cy={point.y} r="6" className="visual-node" />
          </g>
        ))}
      </>
    );
  }

  if (motif === "vision") {
    return (
      <>
        <ellipse cx={400 + shift} cy="242" rx="225" ry="126" className="visual-line visual-line-strong" />
        <circle cx={400 + shift} cy="242" r="88" className="visual-ring" />
        <circle cx={400 + shift} cy="242" r="34" className="visual-core" />
        <path d="M155 242h490M400 96v292" className="visual-line visual-line-dashed" />
      </>
    );
  }

  if (motif === "circuit") {
    return (
      <>
        <path d={`M90 130h190v${110 + shift}h210v-85h220`} className="visual-line visual-line-strong" />
        <path d={`M145 370h165v-${85 - shift}h145v80h210`} className="visual-line" />
        {[
          [90, 130], [280, 130], [280, 240 + shift], [490, 240 + shift], [710, 155],
          [145, 370], [310, 285 + shift], [455, 365], [665, 365],
        ].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="8" className="visual-node" />)}
      </>
    );
  }

  if (motif === "research") {
    return (
      <>
        <path d="M110 350 C220 320 235 120 335 195 S470 390 560 205 680 155 730 105" className="visual-line visual-line-strong" />
        {[145, 245, 345, 445, 545, 645].map((x, index) => (
          <rect key={x} x={x} y={295 - index * 22 + shift} width="38" height={90 + index * 22} rx="8" className="visual-bar" />
        ))}
      </>
    );
  }

  if (motif === "windows") {
    return (
      <>
        <rect x={130 + shift} y="110" width="350" height="245" rx="20" className="visual-panel" />
        <rect x={365 - shift} y="165" width="300" height="210" rx="20" className="visual-panel visual-panel-strong" />
        <path d="M165 165h180M165 205h120M400 225h210M400 270h150" className="visual-line" />
        <circle cx="175" cy="132" r="5" className="visual-node" />
        <circle cx="193" cy="132" r="5" className="visual-node" />
      </>
    );
  }

  return (
    <>
      <circle cx={400 + shift} cy="240" r="145" className="visual-ring" />
      <circle cx={400 + shift} cy="240" r="76" className="visual-ring visual-ring-strong" />
      <circle cx={400 + shift} cy="240" r="26" className="visual-core" />
      <ellipse cx={400 + shift} cy="240" rx="260" ry="110" className="visual-line visual-line-dashed" />
      <circle cx={652 + shift} cy="221" r="10" className="visual-node" />
      <circle cx={225 + shift} cy="320" r="7" className="visual-node" />
    </>
  );
}

export function ProjectVisual({
  project,
  language,
  galleryItem,
  className = "",
}: {
  project: Project;
  language: Language;
  galleryItem?: ProjectGalleryItem;
  className?: string;
}) {
  const scene = galleryItem?.scene ?? "overview";
  const shift = scene === "detail" ? 38 : scene === "system" ? -34 : 0;
  const gradientId = `visual-${project.slug}-${scene}`;
  const label = galleryItem?.caption[language] ?? project.title[language];
  const visualIndex = galleryItem
    ? project.gallery.findIndex((item) => item.id === galleryItem.id) + 1
    : 1;

  return (
    <svg
      viewBox="0 0 800 480"
      className={`project-visual ${className}`}
      role="img"
      aria-label={galleryItem?.alt[language] ?? project.shortDescription[language]}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={project.visual.primary} />
          <stop offset="0.52" stopColor={project.visual.secondary} />
          <stop offset="1" stopColor={project.visual.tertiary} />
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="50%" cy="42%" r="55%">
          <stop offset="0" stopColor={project.visual.primary} stopOpacity="0.3" />
          <stop offset="1" stopColor="#05070d" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${gradientId}-grid`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0v34" fill="none" stroke="#8db9ff" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="800" height="480" fill="#070b14" />
      <rect width="800" height="480" fill={`url(#${gradientId}-glow)`} />
      <rect width="800" height="480" fill={`url(#${gradientId}-grid)`} />
      <g style={{ "--visual-gradient": `url(#${gradientId})` } as React.CSSProperties}>
        <Motif motif={project.visual.motif} shift={shift} />
      </g>
      <rect x="32" y="32" width="112" height="30" rx="15" className="visual-pill" />
      <text x="48" y="52" className="visual-kicker">MSCI / {project.year}</text>
      <text x="38" y="430" className="visual-title">{label}</text>
      <text x="762" y="430" textAnchor="end" className="visual-index">{String(visualIndex).padStart(2, "0")}</text>
    </svg>
  );
}
