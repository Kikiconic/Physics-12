import Link from "next/link";
import katex from "katex";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";
import { electrostaticsFormulas, electrostaticsLessons } from "../unit-data";

function UnitFormula({ children }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          displayMode: true,
          throwOnError: false
        })
      }}
    />
  );
}

export default function ElectrostaticsUnitPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero">
        <span className="eyebrow">Physics 12 · Unit 06</span>
        <h1>Electrostatics,<br /><em>piece by piece.</em></h1>
        <p>Static charge, electric force, electric fields, potential energy, and voltage.</p>
      </header>
      <UnitCatalogue section="Lessons" currentUnit={6} />
      <div className="active-unit-heading">
        <span>Unit 06</span>
        <h2>Electrostatics lessons</h2>
        <p>4 lesson sections</p>
      </div>
      <section className="unit-learning-overview">
        <div className="unit-learning-copy">
          <span>UNIT OVERVIEW</span>
          <h2>What this unit covers</h2>
          <p>By the end of this unit, you should be able to:</p>
          <ul>
            <li>Explain static charge, charge transfer, conductors, insulators, and conservation of charge.</li>
            <li>Describe attraction and repulsion and calculate electric force using Coulomb&apos;s law.</li>
            <li>Explain electric fields, field direction, field strength, and fields between parallel plates.</li>
            <li>Connect electric potential, potential energy, voltage, electric fields, and charge motion.</li>
          </ul>
        </div>
        <div className="unit-formula-overview">
          <span>FORMULAS TO RECOGNIZE</span>
          <p>You will learn when to use each relationship and what every variable means.</p>
          <div>
            {electrostaticsFormulas.map((formula) => <UnitFormula key={formula}>{formula}</UnitFormula>)}
          </div>
        </div>
      </section>
      <section className="lessons-page-grid">
        {electrostaticsLessons.map((lesson) => (
          <article key={lesson.n}>
            <div className="lesson-page-top"><span>{lesson.n}</span><b>{lesson.symbol}</b></div>
            <small>SECTION INTRODUCTION</small>
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
