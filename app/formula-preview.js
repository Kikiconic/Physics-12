import katex from "katex";

const unitFormulas = [
  { unit: "01", topic: "Kinematics", math: String.raw`v_f=v_i+a\Delta t` },
  { unit: "02", topic: "Dynamics", math: String.raw`\sum \vec F=m\vec a` },
  { unit: "03", topic: "Energy", math: String.raw`E_k=\frac{1}{2}mv^2` },
  { unit: "04", topic: "Electrostatics", math: String.raw`F_e=k\frac{|q_1q_2|}{r^2}` },
  { unit: "05", topic: "Gravitation", math: String.raw`F_g=G\frac{m_1m_2}{r^2}` },
  { unit: "06", topic: "Magnetism", math: String.raw`F_B=qvB\sin\theta` }
];

export default function FormulaPreview() {
  return (
    <div className="formula-preview" aria-label="One representative formula from each Physics 12 unit">
      {unitFormulas.map(formula => (
        <div className="formula-preview-card" key={formula.unit}>
          <span>UNIT {formula.unit} · {formula.topic}</span>
          <div
            className="formula-preview-math"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(formula.math, {
                displayMode: true,
                throwOnError: false
              })
            }}
          />
        </div>
      ))}
    </div>
  );
}
