import katex from "katex";

function Formula({children}) {
  return <span className="standalone-formula" dangerouslySetInnerHTML={{__html:katex.renderToString(children,{displayMode:true,throwOnError:false})}} />;
}

export default function FormulaGrid({formulas}) {
  return <section className="standalone-formula-grid">{formulas.map(formula=><article key={formula.label}><span>{formula.label}</span><Formula>{formula.math}</Formula><ul>{formula.notes.map(note=><li key={note}>{note}</li>)}</ul></article>)}</section>;
}
