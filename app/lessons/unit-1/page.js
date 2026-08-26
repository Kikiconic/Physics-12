import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";
import { vectorsAndEquilibriumLessons } from "../unit-data";

export default function VectorsAndEquilibriumUnitPage(){
  return <main>
    <SiteNav/>
    <header className="inner-hero">
      <span className="eyebrow">Physics 12 · Unit 01</span>
      <h1>Vectors and static<br/><em>equilibrium.</em></h1>
      <p>This unit will study vectors in two dimensions and forces acting on objects in equilibrium.</p>
    </header>
    <UnitCatalogue section="Lessons" currentUnit={1}/>
    <div className="active-unit-heading">
      <span>Unit 01</span>
      <h2>Vectors and static equilibrium lessons</h2>
      <p>2 lesson sections added</p>
    </div>
    <section className="lessons-page-grid unit-one-lessons-grid">
      {vectorsAndEquilibriumLessons.map(lesson=><article key={lesson.n}>
        <div className="lesson-page-top"><span>{lesson.n}</span><b>{lesson.symbol}</b></div>
        <small>SECTION PLACEHOLDER</small>
        <h2>{lesson.title}</h2>
        <p>{lesson.text}</p>
        <Link href={`/lessons/${lesson.slug}`}>Open section <ArrowIcon/></Link>
      </article>)}
    </section>
    <SiteFooter/>
  </main>;
}
