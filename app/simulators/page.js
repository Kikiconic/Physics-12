import { FieldSimulator, ForceSimulator } from "../course-content";
import { SiteFooter, SiteNav, UnitCatalogue } from "../site-chrome";

export default function SimulatorsPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero dark-inner"><span className="eyebrow">Interactive lab</span><h1>Test the physics.<br/><em>See what changes.</em></h1><p>Adjust one variable at a time, make a prediction, and watch the model respond.</p></header>
      <UnitCatalogue section="Simulators" />
      <div className="active-unit-heading dark-unit-heading"><span>Unit 04</span><h2>Electrostatics simulators</h2><p>2 interactive labs</p></div>
      <section className="standalone-lab"><ForceSimulator /><FieldSimulator /></section>
      <SiteFooter />
    </main>
  );
}
