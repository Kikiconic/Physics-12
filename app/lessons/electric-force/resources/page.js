import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../site-chrome";

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

      <section className="lesson-resource-sections">
        <article className="resource-library-section">
          <div className="resource-section-heading">
            <span>01 · WORKSHEETS</span>
            <h2>Additional Practice</h2>
            <p>Worksheets and practice-question sets for the electric force section will be stored here.</p>
          </div>
          <div className="empty-resource-box">
            <span>PDF / DOCUMENT</span>
            <h3>No worksheets added yet</h3>
            <p>Worksheet links and downloadable files can be added here later.</p>
          </div>
        </article>

        <article className="resource-library-section">
          <div className="resource-section-heading">
            <span>02 · VIDEOS</span>
            <h2>Video Solutions</h2>
            <p>Recorded explanations of selected electric-force questions will be organized here.</p>
          </div>
          <div className="empty-resource-box video-resource-box">
            <span>VIDEO</span>
            <h3>No videos added yet</h3>
            <p>Your video walkthroughs can be embedded or linked here later.</p>
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
