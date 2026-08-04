import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";
import { inductionLessons } from "../unit-data";

export default function ElectromagneticInductionUnitPage(){
  return <main><SiteNav/><header className="inner-hero"><span className="eyebrow">Physics 12 · Unit 08</span><h1>Electromagnetic<br/><em>induction.</em></h1><p>This unit will study how changing magnetic fields can produce voltage and electric current.</p></header><UnitCatalogue section="Lessons" currentUnit={8}/><div className="active-unit-heading"><span>Unit 08</span><h2>Electromagnetic induction lessons</h2><p>4 lesson sections added</p></div><section className="lessons-page-grid">{inductionLessons.map(lesson=><article key={lesson.n}><div className="lesson-page-top"><span>{lesson.n}</span><b>{lesson.symbol}</b></div><small>AVAILABLE NOW</small><h2>{lesson.title}</h2><p>{lesson.text}</p><Link href={`/lessons/${lesson.slug}`}>Open section <ArrowIcon/></Link></article>)}</section><SiteFooter/></main>;
}
