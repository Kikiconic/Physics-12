import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../site-chrome";
import { worksheetResources } from "./resource-data";

export default function ElectricForceResources() {
  return (
    <main>
      <SiteNav />
      <header className="lesson-detail-hero resource-page-hero">
        <div>
          <Link href="/lessons/electric-force">← The electric force</Link>
          <span>Section 02 · Resources</span>
        </div>
        <h1>Electric force resources</h1>
        <p>Worksheets for additional practice and videos that explain selected questions.</p>
      </header>

      <section className="lesson-resource-sections resource-index-sections">
        <article className="resource-library-section">
          <div className="resource-section-heading">
            <span>01 · WORKSHEETS</span>
            <h2>Additional Practice</h2>
            <p>Worksheets and practice-question sets for the electric force section will be stored here.</p>
            <p>The overall difficulty is ranked by worksheet number. You should start with No. 1.</p>
          </div>
          <div className="worksheet-resource-grid">
            {worksheetResources.map((worksheet) => (
              <div className="worksheet-resource-card" key={worksheet.slug}>
                <div>
                  <span>WORKSHEET NO. {worksheet.number}</span>
                  <h3>{worksheet.title}</h3>
                  <p>{worksheet.videos.length} video solution{worksheet.videos.length === 1 ? "" : "s"} available</p>
                </div>
                <Link
                  href={`/lessons/electric-force/resources/${worksheet.slug}`}
                >
                  Open worksheet <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </article>
      </section>

      <div className="resource-back-link">
        <Link href="/lessons/electric-force">
          Return to the lesson <ArrowIcon />
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
