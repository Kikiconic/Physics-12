import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function Unit1Resources(){
  return <main>
    <SiteNav/>
    <UnitCatalogue section="Worksheets" currentUnit={1}/>
    <div className="active-unit-heading">
      <span>Unit 01</span>
      <h1>Vectors and static equilibrium worksheets</h1>
      <p>Additional practice materials</p>
    </div>
    <section className="resource-hub-grid">
      <article>
        <div className="lesson-page-top"><span>SECTION 01</span><b>→</b></div>
        <small>WORKSHEET AREA</small>
        <h2>Vectors in two dimensions</h2>
        <p>Worksheets and video solutions for two-dimensional vectors will be organized here.</p>
        <div className="resource-card-placeholder">No worksheets added yet</div>
      </article>
      <article>
        <div className="lesson-page-top"><span>SECTION 02</span><b>ΣF</b></div>
        <small>WORKSHEET AREA</small>
        <h2>Statics: forces in equilibrium</h2>
        <p>Numbered practice worksheets for translational equilibrium, arranged from lower to higher difficulty.</p>
        <Link href="/lessons/statics-forces-in-equilibrium/resources">Open worksheets <ArrowIcon/></Link>
      </article>
    </section>
    <SiteFooter/>
  </main>;
}
