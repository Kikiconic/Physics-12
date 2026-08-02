import Link from "next/link";
import katex from "katex";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";
import { magneticLessons } from "../unit-data";

const magneticFormulas=[String.raw`F_B=\lvert q\rvert vB\sin\theta`,String.raw`F_B=BIL\sin\theta`,String.raw`B=\mu_0nI`];

function UnitFormula({children}){return <span dangerouslySetInnerHTML={{__html:katex.renderToString(children,{displayMode:true,throwOnError:false})}}/>;}

export default function MagneticForceUnitPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero">
        <span className="eyebrow">Physics 12 · Unit 07</span>
        <h1>Magnetic<br /><em>force.</em></h1>
        <p>Learn how moving charges create magnetic fields and how those fields act around magnets, wires, loops, and solenoids.</p>
      </header>
      <UnitCatalogue section="Lessons" currentUnit={7} />
      <div className="active-unit-heading">
        <span>Unit 07</span>
        <h2>Magnetic force lessons</h2>
        <p>4 lessons available</p>
      </div>
      <section className="unit-learning-overview">
        <div className="unit-learning-copy">
          <span>UNIT OVERVIEW</span>
          <h2>What this unit covers</h2>
          <p>By the end of this unit, you should be able to:</p>
          <ul>
            <li>Describe permanent magnets, magnetic poles, magnetic fields, and field-line direction.</li>
            <li>Explain how current creates magnetic fields around straight wires, loops, and solenoids.</li>
            <li>Use right-hand rules to find current, magnetic-field, pole, and magnetic-force directions.</li>
            <li>Calculate magnetic force on a moving charge and on a current-carrying wire.</li>
            <li>Calculate the field inside a solenoid and explain how an iron core makes an electromagnet stronger.</li>
          </ul>
        </div>
        <div className="unit-formula-overview">
          <span>FORMULAS TO RECOGNIZE</span>
          <p>You will learn when to use each relationship and what every variable means.</p>
          <div>{magneticFormulas.map(formula=><UnitFormula key={formula}>{formula}</UnitFormula>)}</div>
        </div>
      </section>
      <section className="lessons-page-grid magnetic-lessons-grid">
        {magneticLessons.map((lesson) => (
          <article key={lesson.n}>
            <div className="lesson-page-top"><span>{lesson.n}</span><b>{lesson.symbol}</b></div>
            <small>AVAILABLE NOW</small>
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
