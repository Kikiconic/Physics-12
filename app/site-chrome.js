import Link from "next/link";

export function BoltIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2 5 13h6l-.5 9L19 10h-6l.5-8Z" /></svg>;
}

export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5" /></svg>;
}

export function SiteNav() {
  return (
    <nav>
      <Link className="brand" href="/"><span><BoltIcon /></span> HENRY&apos;S PHYSICS 12 <small>CLASSROOM</small></Link>
      <div className="nav-links">
        <Link href="/lessons">Lessons</Link>
        <Link href="/simulators">Simulators</Link>
        <Link href="/formulas">Formula sheet</Link>
        <Link href="/resources">Worksheets</Link>
        <a className="contact-link" href="mailto:lczhenry@hotmail.com">
          Contact Henry through this: lczhenry@hotmail.com
        </a>
      </div>
    </nav>
  );
}

export function UnitCatalogue({ section, currentUnit }) {
  const units = [1,2,3,4,5,6,7,8];

  return (
    <section className="unit-catalogue">
      <div className="unit-catalogue-heading">
        <span className="eyebrow">{section} by unit</span>
        <h2>Physics 12 course units</h2>
      </div>
      <div className="unit-slots">
        {units.map(unit => {
          if (unit === 6) {
            const content = (
              <>
                <span>Unit 06</span><b>Electrostatics</b><small>Available unit</small>
              </>
            );

            return section === "Lessons" ? (
              <Link className={`unit-slot active-unit${currentUnit === 6 ? " selected-unit" : ""}`} href="/lessons/unit-6" key={unit}>
                {content}
              </Link>
            ) : (
              <div className="unit-slot active-unit" key={unit}>{content}</div>
            );
          }

          if (unit === 7 && section === "Lessons") {
            return (
              <Link className={`unit-slot active-unit${currentUnit === 7 ? " selected-unit" : ""}`} href="/lessons/unit-7" key={unit}>
                <span>Unit 07</span><b>Magnetic force</b><small>Sections added</small>
              </Link>
            );
          }

          return (
            <div className="unit-slot empty-unit" key={unit}>
              <span>Unit {String(unit).padStart(2,"0")}</span><b>Future unit</b><small>Coming soon</small>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/"><span><BoltIcon /></span> HENRY&apos;S PHYSICS 12 <small>CLASSROOM</small></Link>
      <Link href="/">Home ↑</Link>
    </footer>
  );
}
