import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";
import { magneticLessons } from "../unit-data";

export default function MagneticForceUnitPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero">
        <span className="eyebrow">Physics 12 · Unit 07</span>
        <h1>Magnetic<br /><em>force.</em></h1>
        <p>Section placeholders for the Magnetic Force unit. Learning materials will be added later.</p>
      </header>
      <UnitCatalogue section="Lessons" currentUnit={7} />
      <div className="active-unit-heading">
        <span>Unit 07</span>
        <h2>Magnetic force lessons</h2>
        <p>3 section placeholders</p>
      </div>
      <section className="lessons-page-grid magnetic-lessons-grid">
        {magneticLessons.map((lesson) => (
          <article key={lesson.n}>
            <div className="lesson-page-top"><span>{lesson.n}</span><b>{lesson.symbol}</b></div>
            <small>COMING SOON</small>
            <h2>{lesson.title}</h2>
            <p>{lesson.text}</p>
            <Link href={`/lessons/${lesson.slug}`}>Open section <ArrowIcon /></Link>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
