import FormulaGrid from "../formula-grid";
import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

const formulas=[
  {label:"01 · FORCE ON A MOVING CHARGE",math:String.raw`F_B=\lvert q\rvert vB\sin\theta`,notes:["Use for one electron, proton, or ion","θ is the angle between v and B","Fᵦ in newtons (N)"]},
  {label:"02 · FORCE ON A CURRENT-CARRYING WIRE",math:String.raw`F_B=BIL\sin\theta`,notes:["Use for a wire inside a magnetic field","θ is the angle between I and B","L is the wire length inside the field"]},
  {label:"03 · AIR-CORE SOLENOID FIELD",math:String.raw`B=\mu_0nI`,notes:["Calculates magnetic field, not force","n is turns per metre","μ₀ is pronounced mu zero"]}
];

export default function Unit7FormulaPage(){return <main><SiteNav/><UnitCatalogue section="Formula sheets" currentUnit={7}/><div className="active-unit-heading"><span>Unit 07</span><h1>Magnetic force formula sheet</h1><p>3 essential formula families</p></div><FormulaGrid formulas={formulas}/><SiteFooter/></main>;}
