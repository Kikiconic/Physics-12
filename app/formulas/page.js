import { SiteFooter, SiteNav, UnitCatalogue } from "../site-chrome";

export default function FormulasPage(){
  return <main><SiteNav/><header className="inner-hero"><span className="eyebrow">Quick reference</span><h1>Your Physics 12<br/><em>formula sheets.</em></h1><p>Equations, units, and direction rules organized by course unit.</p></header><UnitCatalogue section="Formula sheets"/><section className="unit-selection-note"><span>Choose a unit</span><h2>Select a unit to open its formula sheet.</h2><p>Unit 6 contains electrostatics formulas. Unit 7 contains magnetic force and solenoid formulas.</p></section><SiteFooter/></main>;
}
