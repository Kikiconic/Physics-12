import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav } from "../../../site-chrome";
import { translationalEquilibriumWorksheets } from "./resource-data";

export default function TranslationalEquilibriumResources(){
  return <main>
    <SiteNav/>
    <header className="lesson-detail-hero resource-page-hero">
      <div><Link href="/resources/unit-1">← Unit 1 Worksheets</Link><span>Unit 01 · Section 02</span></div>
      <h1>Translational equilibrium practice</h1>
      <p>Difficulty is ranked by worksheet number. Start with Worksheet 1 and continue in order.</p>
    </header>
    <section className="lesson-resource-sections resource-index-sections">
      <article className="resource-library-section">
        <div className="resource-section-heading"><span>ADDITIONAL PRACTICE</span><h2>Translational equilibrium worksheets</h2><p>These worksheets practise balanced forces and the conditions ΣFₓ = 0 and ΣFᵧ = 0. Higher worksheet numbers have a higher overall difficulty.</p></div>
        <div className="worksheet-resource-grid">
          {translationalEquilibriumWorksheets.map(worksheet=><div className="worksheet-resource-card" key={worksheet.slug}>
            <div><span>WORKSHEET NO. {worksheet.number}</span><h3>{worksheet.title}</h3><p>Difficulty level {worksheet.number} of {translationalEquilibriumWorksheets.length}</p></div>
            <Link href={`/lessons/statics-forces-in-equilibrium/resources/${worksheet.slug}`}>Open worksheet <ArrowIcon/></Link>
          </div>)}
        </div>
      </article>
    </section>
    <div className="resource-back-link"><Link href="/resources/unit-1">Return to Unit 1 worksheets <ArrowIcon/></Link></div>
    <SiteFooter/>
  </main>;
}
