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
        <span>Unit 04</span>
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
      </section>

      <SiteFooter />
    </main>
  );
}
