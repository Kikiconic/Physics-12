import Link from "next/link";
import katex from "katex";
import { ArrowIcon, SiteFooter, SiteNav } from "../../site-chrome";

const lessons = {
  "electric-charge": {
    number:"01", title:"Electric charge", subtitle:"The property behind every electric force.", time:"5 min",
    goals:["Distinguish positive and negative charge","Apply conservation and quantization of charge","Predict attraction and repulsion"],
    sections:[
      {title:"Two kinds of charge",body:["Matter contains positive protons, negative electrons, and neutral neutrons. An object becomes charged when electrons move onto or off it; protons remain bound inside the nucleus.","Like charges repel. Opposite charges attract. A neutral object can still be attracted to a charged object because its charges can shift slightly—a process called polarization."],formula:String.raw`q = ne`},
      {title:"Charge is conserved",body:["Charge is transferred, never created or destroyed. In an isolated system, the total charge before an interaction equals the total charge afterward.","If one object gains 4.0 μC, another part of the system must lose 4.0 μC."],formula:String.raw`\sum q_{\mathrm{before}}=\sum q_{\mathrm{after}}`},
      {title:"Charge is quantized",body:["Every observable charge is a whole-number multiple of the elementary charge e. The integer n may be positive or negative.","To find the number of electrons transferred, divide the magnitude of the charge by e."],formula:String.raw`e=1.60\times10^{-19}\ \mathrm{C}`}
    ],
    example:{question:"An object has a charge of −3.20 μC. How many extra electrons does it have?",steps:[String.raw`n=\frac{|q|}{e}`,String.raw`n=\frac{3.20\times10^{-6}}{1.60\times10^{-19}}`,String.raw`n=2.00\times10^{13}\ \text{extra electrons}`]},
    mistake:"A negatively charged object has gained electrons; it has not gained negative protons.",
    practice:{question:"Two identical neutral spheres touch. Then 6.0 × 10¹² electrons move from sphere A to sphere B. What is the charge on each sphere?",answer:"Each charge has magnitude ne = (6.0 × 10¹²)(1.60 × 10⁻¹⁹ C) = 9.6 × 10⁻⁷ C. A lost electrons, so qA = +0.96 μC. B gained electrons, so qB = −0.96 μC."}
  },
  "coulombs-law": {
    number:"02", title:"Coulomb’s law", subtitle:"Calculate the force between point charges.", time:"7 min",
    goals:["Calculate electrostatic-force magnitude","Determine attraction or repulsion","Use vector addition for multiple forces"],
    sections:[
      {title:"The inverse-square relationship",body:["The electric force grows with both charge magnitudes and weakens with the square of their separation. Separation r is measured from centre to centre.","Doubling either charge doubles the force. Doubling the separation makes the force one quarter as large."],formula:String.raw`F_e=k\frac{|q_1q_2|}{r^2}`},
      {title:"Direction comes from the signs",body:["Use magnitudes in Coulomb’s equation, then determine direction separately. Same signs repel; different signs attract.","The force acts along the straight line joining the two charges. Newton’s third law means the forces on the two charges are equal in magnitude and opposite in direction."],formula:String.raw`\vec F_{12}=-\vec F_{21}`},
      {title:"More than two charges",body:["Calculate the force from each source charge separately. Assign directions, then add the force vectors.","In one dimension, choose a positive direction and use signs. In two dimensions, resolve each force into x- and y-components."],formula:String.raw`\vec F_{\mathrm{net}}=\sum_i\vec F_i`}
    ],
    example:{question:"Charges +3.0 μC and −5.0 μC are 0.40 m apart. Find the force on each.",steps:[String.raw`F_e=(8.99\times10^9)\frac{|(3.0\times10^{-6})(-5.0\times10^{-6})|}{(0.40)^2}`,String.raw`F_e=0.84\ \mathrm{N}`,String.raw`\text{The force is attractive, toward the other charge.}`]},
    mistake:"Always convert μC to C before substituting: 1 μC = 10⁻⁶ C.",
    practice:{question:"The distance between two point charges is tripled while both charges remain unchanged. What happens to the force?",answer:"Because F ∝ 1/r², replacing r with 3r gives Fnew = F/3² = F/9. The force becomes one ninth as large."}
  },
  "electric-fields": {
    number:"03", title:"Electric fields", subtitle:"Describe electric influence throughout space.", time:"8 min",
    goals:["Define electric-field strength","Calculate the field of a point charge","Interpret field vectors and field lines"],
    sections:[
      {title:"Force per unit charge",body:["An electric field tells us the force that each coulomb of positive test charge would experience at a point.","Field direction is defined as the direction of force on a positive test charge. A negative charge would experience force opposite to the field."],formula:String.raw`\vec E=\frac{\vec F}{q}`},
      {title:"Field of a point charge",body:["A positive source charge creates a field directed radially outward. A negative source charge creates a field directed radially inward.","Like electric force, field strength follows an inverse-square relationship with distance."],formula:String.raw`E=k\frac{|Q|}{r^2}`},
      {title:"Superposition",body:["Every charge creates its own field. The net field is the vector sum of all individual fields at the point.","Field lines never cross. Closely spaced lines indicate a stronger field, and arrows point from positive toward negative charge."],formula:String.raw`\vec E_{\mathrm{net}}=\sum_i\vec E_i`}
    ],
    example:{question:"Find the electric field 0.20 m from a +4.0 μC point charge.",steps:[String.raw`E=(8.99\times10^9)\frac{4.0\times10^{-6}}{(0.20)^2}`,String.raw`E=8.99\times10^5\ \mathrm{N/C}`,String.raw`\text{Direction: radially away from the positive charge.}`]},
    mistake:"Electric field is a vector. Fields from several charges must be added with direction, not just by adding magnitudes.",
    practice:{question:"A −2.0 μC charge is placed in a 3.0 × 10⁴ N/C field directed east. What force acts on it?",answer:"F = qE = (−2.0 × 10⁻⁶ C)(3.0 × 10⁴ N/C) = −0.060 N. The negative sign means the force is opposite the field: 0.060 N west."}
  },
  "electric-potential": {
    number:"04", title:"Electric potential", subtitle:"Connect voltage, energy, and charge motion.", time:"8 min",
    goals:["Distinguish potential from potential energy","Calculate point-charge potential","Relate voltage change to energy and work"],
    sections:[
      {title:"Energy per unit charge",body:["Electric potential V is potential energy per coulomb. It is a property of a location in an electric field, measured in volts.","Unlike electric field, potential is a scalar. Potentials from several charges add algebraically, including the sign of each source charge."],formula:String.raw`V=\frac{U}{q}`},
      {title:"Potential of a point charge",body:["Potential is positive near a positive source charge and negative near a negative source charge. The conventional zero is infinitely far away.","Potential decreases with 1/r, not 1/r². Keep the sign of Q when calculating."],formula:String.raw`V=k\frac{Q}{r}`},
      {title:"Voltage changes energy",body:["Voltage is a difference in electric potential between two points. Moving a charge through a potential difference changes its electric potential energy.","The electric field does positive work when potential energy decreases."],formula:String.raw`\Delta U=q\Delta V\qquad W_{\mathrm{field}}=-\Delta U`}
    ],
    example:{question:"A proton moves through a potential difference of −250 V. Find its change in electric potential energy.",steps:[String.raw`\Delta U=q\Delta V`,String.raw`\Delta U=(1.60\times10^{-19})(-250)`,String.raw`\Delta U=-4.00\times10^{-17}\ \mathrm{J}`]},
    mistake:"Potential V is not a vector. Add potentials algebraically; do not resolve them into components.",
    practice:{question:"What is the electric potential 0.30 m from a −6.0 μC point charge?",answer:"V = kQ/r = (8.99 × 10⁹)(−6.0 × 10⁻⁶)/(0.30) = −1.8 × 10⁵ V. The potential is negative because the source charge is negative."}
  }
};

function Formula({children}) {
  return <span className="lesson-formula" dangerouslySetInnerHTML={{__html:katex.renderToString(children,{displayMode:true,throwOnError:false})}} />;
}

export function generateStaticParams(){return Object.keys(lessons).map(slug=>({slug}));}

export default async function LessonDetail({params}) {
  const {slug}=await params,lesson=lessons[slug];
  return (
    <main>
      <SiteNav/>
      <header className="lesson-detail-hero"><div><Link href="/lessons">← All lessons</Link><span>Lesson {lesson.number} · {lesson.time}</span></div><h1>{lesson.title}</h1><p>{lesson.subtitle}</p></header>
      <section className="lesson-objectives"><span>By the end, you can:</span>{lesson.goals.map((g,i)=><p key={g}><b>0{i+1}</b>{g}</p>)}</section>
      <article className="lesson-body">
        {lesson.sections.map((section,i)=><section key={section.title} className="lesson-content-block"><div className="content-number">0{i+1}</div><div><h2>{section.title}</h2>{section.body.map(p=><p key={p}>{p}</p>)}<Formula>{section.formula}</Formula></div></section>)}
        <section className="worked-example"><span>Worked example</span><h2>{lesson.example.question}</h2><div className="solution-steps">{lesson.example.steps.map((step,i)=><div key={step}><b>{i+1}</b><Formula>{step}</Formula></div>)}</div></section>
        <aside className="common-mistake"><b>Common mistake</b><p>{lesson.mistake}</p></aside>
        <section className="practice-check"><span>Check your understanding</span><h2>{lesson.practice.question}</h2><details><summary>Reveal solution</summary><p>{lesson.practice.answer}</p></details></section>
        <div className="lesson-next"><Link href="/simulators">Test it in the simulator <ArrowIcon/></Link><Link href="/formulas">Open formula sheet <ArrowIcon/></Link></div>
      </article>
      <SiteFooter/>
    </main>
  );
}
