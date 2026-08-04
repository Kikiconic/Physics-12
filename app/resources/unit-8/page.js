import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function InductionResourcesPage(){
  return <main><SiteNav/><UnitCatalogue section="Worksheets" currentUnit={8}/><div className="active-unit-heading"><span>Unit 08</span><h1>Electromagnetic induction worksheets</h1><p>Worksheet placeholder for this unit.</p></div><section className="unit-selection-note"><span>COMING SOON</span><h2>No worksheets added yet</h2><p>This page is ready for future electromagnetic-induction worksheets and video solutions.</p></section><SiteFooter/></main>;
}
