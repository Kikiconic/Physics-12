import { SiteFooter, SiteNav, UnitCatalogue } from "../site-chrome";

export default function SimulatorsPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero dark-inner"><span className="eyebrow">Interactive lab</span><h1>Test the physics.<br/><em>See what changes.</em></h1><p>Adjust one variable at a time, make a prediction, and watch the model respond.</p></header>
      <UnitCatalogue section="Simulators" />
      <section className="unit-selection-note"><span>Choose a unit</span><h2>Select a unit to open its simulators.</h2><p>Unit 6 contains electrostatics labs. Unit 7 contains magnetic-field simulators. Unit 8 is ready for future induction simulators.</p></section>
      <SiteFooter />
    </main>
  );
}
