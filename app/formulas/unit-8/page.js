import FormulaGrid from "../formula-grid";
import { SiteFooter, SiteNav, UnitCatalogue } from "../../site-chrome";

const formulas=[
  {label:"01 · STRAIGHT-WIRE INDUCED EMF",math:String.raw`\varepsilon=Blv\sin\theta`,notes:["Use for a straight conductor moving through a magnetic field","θ is the angle between v and B","ε is measured in volts (V)"]},
  {label:"02 · ROTATING COIL EMF",math:String.raw`\varepsilon=2NBlv\sin\theta`,notes:["Use for the simple rotating-coil model with two active sides","N is the number of turns","Maximum magnitude occurs when sin θ = ±1"]},
  {label:"03 · GENERATOR EMF AND ANGLE",math:String.raw`\varepsilon=\varepsilon_{\max}\sin\theta`,notes:["Shows how generator EMF changes during rotation","The sign shows the EMF direction","One full turn produces one complete AC cycle"]},
  {label:"04 · MAGNETIC FLUX",math:String.raw`\Phi=BA\cos\theta`,notes:["θ is measured between B and the coil axis (normal)","Φ is measured in webers (Wb)","Flux is maximum when the coil axis is parallel to B"]},
  {label:"05 · FARADAY'S LAW",math:String.raw`\varepsilon=-N\frac{\Delta\Phi}{\Delta t}`,notes:["N is the number of coil turns","The negative sign represents Lenz's law","A faster flux change produces a larger EMF"]},
  {label:"06 · BACK EMF",math:String.raw`E_{\mathrm{back}}=V-IR`,notes:["V is the source voltage","IR is the voltage across the armature resistance","Back EMF opposes the source voltage"]},
  {label:"07 · IDEAL TRANSFORMER",math:String.raw`\frac{E_s}{E_p}=\frac{N_s}{N_p}=\frac{I_p}{I_s}`,notes:["Voltage follows the turns ratio","The current ratio is reversed","p = primary and s = secondary"]},
  {label:"08 · TRANSFORMER INPUT POWER",math:String.raw`P_{\mathrm{in}}=E_pI_p`,notes:["Input power is measured in watts (W)","Eₚ is primary voltage","Iₚ is primary current"]},
  {label:"09 · TRANSFORMER OUTPUT POWER",math:String.raw`P_{\mathrm{out}}=E_sI_s`,notes:["Output power is measured in watts (W)","Eₛ is secondary voltage","Iₛ is secondary current"]},
  {label:"10 · POWER LOST AS HEAT",math:String.raw`P_{\mathrm{heat}}=P_{\mathrm{in}}-P_{\mathrm{out}}`,notes:["The difference between input and useful output power","An ideal transformer has no heat loss"]},
  {label:"11 · TRANSFORMER EFFICIENCY",math:String.raw`\eta=\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}}\times100\%`,notes:["Efficiency is written as a percentage","Real transformer efficiency is less than 100%"]},
  {label:"12 · MOTOR EFFICIENCY",math:String.raw`\eta=\frac{E_{\mathrm{back}}}{V}\times100\%`,notes:["Uses the motor's back EMF and source voltage","Eback and V must use the same voltage unit"]}
];

export default function InductionFormulaPage(){
  return <main><SiteNav/><UnitCatalogue section="Formula sheets" currentUnit={8}/><div className="active-unit-heading"><span>Unit 08</span><h1>Electromagnetic induction formula sheet</h1><p>One standard form of each Unit 8 relationship</p></div><FormulaGrid formulas={formulas}/><SiteFooter/></main>;
}
