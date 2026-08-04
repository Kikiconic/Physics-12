import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function InductionFormulaPage(){
  return <main><SiteNav/><UnitCatalogue section="Formula sheets" currentUnit={8}/><div className="active-unit-heading"><span>Unit 08</span><h1>Electromagnetic induction formulas</h1><p>Formula-sheet placeholder for this unit.</p></div><section className="unit-selection-note"><span>COMING SOON</span><h2>No formulas added yet</h2><p>This page is ready for future electromagnetic-induction formulas.</p></section><SiteFooter/></main>;
}
