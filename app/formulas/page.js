import katex from "katex";
import { SiteFooter, SiteNav } from "../site-chrome";

function Formula({children}) {
  return <span className="standalone-formula" dangerouslySetInnerHTML={{__html:katex.renderToString(children,{displayMode:true,throwOnError:false})}} />;
}

const formulas=[
  {label:"01 · COULOMB FORCE",math:String.raw`F = k\frac{\lvert q_1q_2\rvert}{r^2}`,notes:["F in newtons (N)","q₁, q₂ in coulombs (C)","r in metres (m)"]},
  {label:"02 · ELECTRIC FIELD",math:String.raw`E = \frac{F}{q} = k\frac{\lvert Q\rvert}{r^2}`,notes:["E in N/C","Direction follows a positive test charge","Fields add as vectors"]},
  {label:"03 · ELECTRIC POTENTIAL",math:String.raw`V = k\frac{Q}{r}`,notes:["V in volts (V)","Potential is a scalar","Include the sign of Q"]},
  {label:"04 · POTENTIAL ENERGY",math:String.raw`\Delta U = q\Delta V`,notes:["Energy in joules (J)","Positive q follows ΔV","Work by field = −ΔU"]},
  {label:"05 · CONSTANT",math:String.raw`k = 8.99\times10^9\ \mathrm{N\,m^2/C^2}`,notes:["Coulomb’s constant","Use SI units before calculating"]},
  {label:"06 · ELEMENTARY CHARGE",math:String.raw`e = 1.60\times10^{-19}\ \mathrm{C}`,notes:["Proton: +e","Electron: −e","Charge is quantized"]}
];

export default function FormulasPage(){
  return <main><SiteNav/><header className="inner-hero"><span className="eyebrow">Quick reference</span><h1>Your electrostatics<br/><em>formula sheet.</em></h1><p>Equations, units, and direction rules for solving Physics 12 problems.</p></header><section className="standalone-formula-grid">{formulas.map(f=><article key={f.label}><span>{f.label}</span><Formula>{f.math}</Formula><ul>{f.notes.map(n=><li key={n}>{n}</li>)}</ul></article>)}</section><SiteFooter/></main>
}
