import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../site-chrome";

const worksheets = [
  {
    title: "Coulomb's law worksheet 1",
    file: "/worksheets/coulombs-law-worksheet-1.pdf"
  },
  {
    title: "Coulomb's law worksheet 2",
    file: "/worksheets/coulombs-law-worksheet-2.pdf"
  },
  {
    title: "Coulomb's law worksheet 3",
    file: "/worksheets/coulombs-law-worksheet-3.pdf"
  },
  {
    title: "Coulomb's law worksheet 4",
    file: "/worksheets/coulombs-law-worksheet-4.pdf"
  }
];

export default function ElectricForceResources() {
  const mediaBasePath = process.env.GITHUB_ACTIONS === "true" ? "/Physics-12" : "";

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
            <p>The overall difficulty is ranked by worksheet number. You should start with No. 1.</p>
          </div>
          <div className="worksheet-resource-grid">
            {worksheets.map((worksheet) => (
              <div className="worksheet-resource-card" key={worksheet.file}>
                <div>
                  <span>PDF DOCUMENT</span>
                  <h3>{worksheet.title}</h3>
                  <p>Practice questions about electric force and electric fields.</p>
                </div>
                <Link
                  href={worksheet.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open PDF <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </article>

        <article className="resource-library-section">
          <div className="resource-section-heading">
            <span>02 · VIDEOS</span>
            <h2>Video Solutions</h2>
            <p>Recorded explanations will focus on challenging types of electric-force questions.</p>
          </div>
          <div className="video-solution-card">
            <video controls playsInline preload="metadata">
              <source
                src={`${mediaBasePath}/videos/coulombs-law-worksheet-1.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video player.
            </video>
            <div>
              <span>VIDEO SOLUTION</span>
              <h3>Coulomb&apos;s law worksheet 1</h3>
            </div>
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
