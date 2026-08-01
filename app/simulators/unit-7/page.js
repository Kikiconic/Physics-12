import MagneticBarSimulator from "../../magnetic-bar-simulator";
import RightHandRuleSimulator, { CurrentLoopRuleSimulator } from "../../right-hand-rule-simulator";
import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function MagneticSimulatorsPage() {
  return <main><SiteNav /><UnitCatalogue section="Simulators" currentUnit={7} /><div className="active-unit-heading dark-unit-heading magnetic-unit-heading"><span>Unit 07</span><h1>Magnetic field simulators</h1><p>Explore magnetic fields, solenoids, and right-hand rules.</p></div><section className="standalone-lab magnetic-lab"><MagneticBarSimulator /><MagneticBarSimulator variant="solenoid" /><RightHandRuleSimulator /><CurrentLoopRuleSimulator /></section><SiteFooter /></main>;
}
