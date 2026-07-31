import { FieldSimulator, ForceSimulator } from "../../course-content";
import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

export default function ElectrostaticsSimulatorsPage() {
  return <main><SiteNav /><UnitCatalogue section="Simulators" currentUnit={6} /><div className="active-unit-heading dark-unit-heading"><span>Unit 06</span><h1>Electrostatics simulators</h1><p>Two interactive labs for electric force and electric fields.</p></div><section className="standalone-lab"><ForceSimulator /><FieldSimulator /></section><SiteFooter /></main>;
}
