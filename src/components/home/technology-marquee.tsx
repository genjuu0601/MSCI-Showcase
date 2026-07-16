import { technologies } from "@/data/site";

function TechnologyList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined}>
      {technologies.map((technology, index) => (
        <li key={`${technology}-${index}`}>
          <span aria-hidden="true" />
          {technology}
        </li>
      ))}
    </ul>
  );
}

export function TechnologyMarquee() {
  return (
    <div className="technology-marquee" aria-label="Technology stack">
      <div className="technology-marquee-track">
        <TechnologyList />
        <TechnologyList hidden />
      </div>
    </div>
  );
}
