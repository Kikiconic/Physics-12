import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function InductionSimulatorsPage(){
  return <main><SiteNav/><UnitCatalogue section="Simulators" currentUnit={8}/><div className="active-unit-heading dark-unit-heading"><span>Unit 08</span><h1>Electromagnetic induction simulators</h1><p>Simulator placeholders for this unit.</p></div><section className="unit-selection-note"><span>COMING SOON</span><h2>No simulators added yet</h2><p>This page is ready for future electromagnetic-induction simulators.</p></section><SiteFooter/></main>;
}
