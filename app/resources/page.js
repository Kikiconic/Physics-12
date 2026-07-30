import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../site-chrome";

export default function ResourcesPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero">
        <span className="eyebrow">Physics 12 · Worksheets</span>
        <h1>Course<br /><em>worksheets.</em></h1>
        <p>Practice worksheets organized by course unit and lesson section.</p>
      </header>

      <UnitCatalogue section="Worksheets" />

      <div className="active-unit-heading">
        <span>Unit 06</span>
        <h2>Electrostatics worksheets</h2>
        <p>Additional practice materials</p>
      </div>

      <section className="resource-hub-grid">
        <article>
          <div className="lesson-page-top">
            <span>SECTION 02</span>
            <b>F</b>
          </div>
          <small>PRACTICE + VIDEOS</small>
          <h2>The electric force</h2>
          <p>Additional practice and recorded solutions for Coulomb&apos;s law and electric-force questions.</p>
          <Link href="/lessons/electric-force/resources">
            Open worksheets <ArrowIcon />
          </Link>
        </article>
        <article>
          <div className="lesson-page-top">
            <span>SECTION 03</span>
            <b>E</b>
          </div>
          <small>PRACTICE + VIDEOS</small>
          <h2>Electric field strength</h2>
          <p>Additional practice and recorded solutions for electric fields, field direction, and field strength.</p>
          <Link href="/lessons/electric-field-strength/resources">
            Open worksheets <ArrowIcon />
          </Link>
        </article>
        <article>
          <div className="lesson-page-top">
            <span>SECTION 04</span>
            <b>V</b>
          </div>
          <small>PRACTICE + VIDEOS</small>
          <h2>Electric potentials</h2>
          <p>Additional practice and recorded solutions for electric potential, potential energy, voltage, and parallel plates.</p>
          <Link href="/lessons/electric-potentials/resources">
            Open worksheets <ArrowIcon />
          </Link>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
