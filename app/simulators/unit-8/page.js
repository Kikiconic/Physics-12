import InductionSimulator from "../../induction-simulator";
import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function InductionSimulatorsPage(){
  return <main><SiteNav/><UnitCatalogue section="Simulators" currentUnit={8}/><div className="active-unit-heading dark-unit-heading"><span>Unit 08</span><h1>Electromagnetic induction simulators</h1><p>Explore how changing magnetic flux produces an induced EMF and current.</p></div><section className="standalone-lab induction-lab"><InductionSimulator/></section><SiteFooter/></main>;
}
