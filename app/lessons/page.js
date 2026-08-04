import { SiteFooter, SiteNav, UnitCatalogue } from "../site-chrome";

export default function LessonsPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero">
        <span className="eyebrow">Physics 12 · Lessons</span>
        <h1>Choose a<br /><em>course unit.</em></h1>
        <p>Select an available unit below to open only the lessons and materials for that unit.</p>
      </header>
      <UnitCatalogue section="Lessons" />
      <section className="unit-selection-note">
        <span>AVAILABLE UNITS</span>
        <h2>Select Unit 06, Unit 07, or Unit 08</h2>
        <p>Electrostatics and magnetic force contain learning materials. Electromagnetic induction is ready for future lesson content.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
