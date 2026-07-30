import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../site-chrome";
import { electricPotentialWorksheets } from "./resource-data";

export default function ElectricPotentialsResources() {
  return (
    <main>
      <SiteNav />
      <header className="lesson-detail-hero resource-page-hero">
        <div>
          <Link href="/lessons/electric-potentials">← Electric potentials</Link>
          <span>Section 04 · Resources</span>
        </div>
        <h1>Electric potential resources</h1>
        <p>Worksheets for additional practice and videos that explain selected challenging questions.</p>
      </header>

      <section className="lesson-resource-sections resource-index-sections">
        <article className="resource-library-section">
          <div className="resource-section-heading">
            <span>01 · WORKSHEETS</span>
            <h2>Additional Practice</h2>
            <p>Electric potential and voltage worksheets will be organized here.</p>
            <p>The overall difficulty is ranked by worksheet number. You should start with No. 1.</p>
          </div>
          <div className="worksheet-resource-grid">
            {electricPotentialWorksheets.map((worksheet) => (
              <div className="worksheet-resource-card" key={worksheet.slug}>
                <div>
                  <span>WORKSHEET NO. {worksheet.number}</span>
                  <h3>{worksheet.title}</h3>
                  <p>{worksheet.videos.length} video solutions available</p>
                </div>
                <Link href={`/lessons/electric-potentials/resources/${worksheet.slug}`}>
                  Open worksheet <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </article>
      </section>

      <div className="resource-back-link">
        <Link href="/lessons/electric-potentials">
          Return to the lesson <ArrowIcon />
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
