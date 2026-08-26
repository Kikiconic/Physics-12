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
        <h2>Select Unit 01, Unit 06, Unit 07, or Unit 08</h2>
        <p>Unit 1 contains vectors and static-equilibrium sections. Units 6 to 8 cover electrostatics, magnetic force, and electromagnetic induction.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
