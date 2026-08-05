import Link from "next/link";
import { ArrowIcon,SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function InductionResourcesPage(){
  return <main><SiteNav/><UnitCatalogue section="Worksheets" currentUnit={8}/><div className="active-unit-heading"><span>Unit 08</span><h1>Electromagnetic induction worksheets</h1><p>Additional practice materials</p></div><section className="resource-hub-grid"><article><div className="lesson-page-top"><span>SECTION 01</span><b>EMF</b></div><small>ADDITIONAL PRACTICE</small><h2>Induced electromotive force (EMF)</h2><p>Practice induced EMF, moving conductors, generators, and Lenz&apos;s law.</p><Link href="/lessons/induced-electromotive-force/resources">Open worksheets <ArrowIcon/></Link></article><article><div className="lesson-page-top"><span>SECTION 02</span><b>Φ</b></div><small>ADDITIONAL PRACTICE</small><h2>Magnetic flux, transformers and efficiency</h2><p>Practice magnetic flux, induced EMF, transformers, and efficiency.</p><Link href="/lessons/magnetic-flux-and-faradays-law/resources">Open worksheets <ArrowIcon/></Link></article></section><SiteFooter/></main>;
}
