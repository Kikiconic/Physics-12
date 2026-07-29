import Link from "next/link";
import katex from "katex";
import { SiteFooter, SiteNav } from "../../site-chrome";

const lessons = {
  "static-electric-charges": {
    number: "01",
    title: "Static electric charges",
    introduction: "Introduction to the electrostatics chapter and what electrostatic force is.",
    sections: [
      {
        title: "What is static electric charge?",
        paragraphs: [
          "All matter is made of atoms. Inside each atom, protons have positive charge and electrons have negative charge. Neutrons have no electric charge. An object is neutral when it has the same amount of positive and negative charge.",
          "Static electric charge is a buildup of charge on an object. This happens when electrons move from one object to another. Protons stay inside the nuclei of atoms and usually do not move between objects.",
          "An object becomes negative when it gains electrons. It becomes positive when it loses electrons. The word static means that the extra charge stays in one place for some time.",
          "Charged objects can push or pull each other without touching. Two charges with the same sign repel. This means they push apart. Charges with opposite signs attract. This means they pull together. This push or pull is called the electrostatic force."
        ]
      },
      {
        title: "Positive and negative parallel plates",
        paragraphs: [
          "Parallel plates are two flat metal plates that face each other. One plate can be made positive, and the other plate can be made negative.",
          "The positive plate has fewer electrons than normal. The negative plate has more electrons than normal.",
          "The space between the plates has an electric field. The field points from the positive plate to the negative plate. Between large plates that are close together, the field is almost the same strength everywhere."
        ],
        diagram: true
      },
      {
        title: "How charges move between the plates",
        paragraphs: [
          "A positive charge moves in the same direction as the electric field. A free proton is positive, so it moves toward the negative plate.",
          "A negative charge moves in the opposite direction to the electric field. An electron is negative, so it moves toward the positive plate.",
          "A free proton can move between the plates, but protons inside a solid cannot move through the material. They are held inside atomic nuclei. In most solid materials, electrons are the charges that can move."
        ]
      },
      {
        title: "Conductors and insulators",
        paragraphs: [
          "A conductor is a material that lets electric charge move easily. Some electrons in a conductor are free to move from one atom to another. Metals such as copper and aluminum are good conductors.",
          "When charge is placed on a conductor, the electrons spread through the material. They move because charges with the same sign repel each other.",
          "An insulator is a material that does not let charge move easily. Its electrons are held tightly by their atoms. Rubber, glass, and dry plastic are common insulators.",
          "When charge is placed on an insulator, it usually stays close to the place where it was added. This is why static charge can remain on a plastic object."
        ]
      },
      {
        title: "Conservation of charge",
        paragraphs: [
          "Electric charge cannot be created or destroyed. It can only move from one object to another. This rule is called conservation of charge.",
          "Imagine that two neutral objects are rubbed together. If one object gains electrons, the other object must lose the same number of electrons. One object becomes negative, and the other becomes positive.",
          "In an isolated system, no charge can enter or leave. The total amount of charge in that system stays the same before and after any transfer."
        ]
      },
      {
        title: "Ways objects become charged",
        paragraphs: [
          "Charging by friction happens when two different materials are rubbed together. Electrons move from one material to the other. The object that gains electrons becomes negative, and the object that loses electrons becomes positive.",
          "Charging by contact happens when a charged object touches another object. Electrons move through the contact point. Some charge is transferred to the second object.",
          "Charging by induction happens without direct contact. A charged object is brought close to a conductor. Its electric force makes the electrons inside the conductor move to one side. If the conductor is also connected to the ground, electrons can enter or leave it. The conductor can then keep a net charge after the ground and nearby charged object are removed.",
          "In every charging method, only electrons are transferred. The total charge is still conserved."
        ]
      }
    ]
  },
  "electric-force": {
    number: "02",
    title: "The electric force",
    introduction: "Introduction to Coulomb’s law and how to use it.",
    sections: [
      {
        title: "What is electric force?",
        paragraphs: [
          "Electric force is the push or pull between charged objects. The objects do not need to touch. Each charge creates an electric effect in the space around it, so it can exert a force on another charge from a distance.",
          "Charges with the same sign repel. Two positive charges push apart, and two negative charges also push apart. Charges with opposite signs attract, so a positive charge and a negative charge pull toward each other.",
          "Electric force has both a size and a direction. The force acts along the straight line that joins the two charges. Each charge feels a force of the same size, but the two forces point in opposite directions."
        ]
      },
      {
        title: "Introduction to Coulomb’s law",
        paragraphs: [
          "Coulomb’s law tells us the size of the electric force between two point charges. A point charge is a charged object that is small compared with the distance between the objects.",
          "The force becomes stronger when either charge becomes larger. The force becomes weaker when the distance between the charges becomes larger.",
          "Distance has a very strong effect because it is squared in the formula. For example, if the distance doubles, the force becomes one quarter as large."
        ]
      },
      {
        title: "The Coulomb’s law formula",
        paragraphs: [
          "Use the following formula to calculate the magnitude, or size, of the electric force. The absolute-value signs mean that we use the charge sizes in the calculation. After calculating the magnitude, use the charge signs to decide whether the force is attractive or repulsive."
        ],
        formula: String.raw`F_e=k\frac{\left|q_1q_2\right|}{r^2}`,
        variables: [
          { symbol: String.raw`F_e`, name: "Electric force", meaning: "The size of the force between the two charges.", example: String.raw`2.5\ \mathrm{N}` },
          { symbol: String.raw`k`, name: "Coulomb’s constant", meaning: "A constant used for electric force in empty space or air.", example: String.raw`8.99\times10^9\ \mathrm{N\,m^2/C^2}` },
          { symbol: String.raw`q_1`, name: "First charge", meaning: "The electric charge of the first object, measured in coulombs.", example: String.raw`+3.0\ \mu\mathrm{C}=+3.0\times10^{-6}\ \mathrm{C}` },
          { symbol: String.raw`q_2`, name: "Second charge", meaning: "The electric charge of the second object, measured in coulombs.", example: String.raw`-2.0\ \mu\mathrm{C}=-2.0\times10^{-6}\ \mathrm{C}` },
          { symbol: String.raw`r`, name: "Separation distance", meaning: "The distance from the centre of one charge to the centre of the other.", example: String.raw`0.40\ \mathrm{m}` }
        ]
      },
      {
        title: "How to use the formula",
        paragraphs: [
          "First, write down the two charges and the distance between their centres. Convert every charge to coulombs and every distance to metres.",
          "Second, substitute the charge magnitudes and distance into Coulomb’s law. Square the distance, multiply the charge values, and then multiply by Coulomb’s constant.",
          "Finally, decide the direction. If the charge signs are the same, the force is repulsive. If the signs are different, the force is attractive."
        ]
      },
      {
        title: "Simple relationship examples",
        paragraphs: [
          "Charge example: If q₁ doubles while q₂ and r stay unchanged, the electric force doubles.",
          "Second-charge example: If q₂ becomes three times larger while q₁ and r stay unchanged, the electric force becomes three times larger.",
          "Distance example: If r doubles, r² becomes four times larger. The force therefore becomes one quarter as large.",
          "Direction example: +3.0 μC and −2.0 μC attract because their signs are different. +3.0 μC and +2.0 μC repel because their signs are the same.",
          "Force example: A result of 2.5 N describes the force magnitude. The final answer must also state a direction, such as 2.5 N toward the other charge."
        ]
      }
    ]
  },
  "electric-field-strength": {
    number: "03",
    title: "Electric field strength",
    introduction: "Introduction to electric field strength, what it means, and its formula."
  },
  "electric-potentials": {
    number: "04",
    title: "Electric potentials",
    introduction: "Introduction to electric potential, electric potential energy, and electric potential difference."
  },
  "electric-field-and-voltage": {
    number: "05",
    title: "Electric field and voltage",
    introduction: "Introduction to the relationship between electric fields and voltage."
  }
};

function ParallelPlateDiagram() {
  return (
    <figure className="parallel-plate-diagram">
      <svg viewBox="0 0 760 350" role="img" aria-labelledby="plate-diagram-title plate-diagram-description">
        <title id="plate-diagram-title">Charged particles between parallel plates</title>
        <desc id="plate-diagram-description">A positive plate is on the left and a negative plate is on the right. Electric-field arrows and a proton point right. An electron points left.</desc>
        <defs>
          <marker id="plate-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8fc9ff" />
          </marker>
          <marker id="plate-arrow-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f3d35a" />
          </marker>
        </defs>

        <rect x="76" y="48" width="38" height="252" rx="4" className="plate positive-plate" />
        <rect x="646" y="48" width="38" height="252" rx="4" className="plate negative-plate" />
        <text x="95" y="32" className="plate-label">POSITIVE PLATE</text>
        <text x="665" y="32" className="plate-label">NEGATIVE PLATE</text>
        <text x="95" y="185" className="plate-sign">+</text>
        <text x="665" y="181" className="plate-sign">−</text>

        {[95, 175, 255].map(y => (
          <path key={y} d={`M 135 ${y} L 625 ${y}`} className="field-direction" markerEnd="url(#plate-arrow-blue)" />
        ))}
        <text x="380" y="82" className="field-label">ELECTRIC FIELD</text>

        <circle cx="288" cy="175" r="24" className="particle proton" />
        <text x="288" y="183" className="particle-sign">+</text>
        <path d="M 320 175 L 430 175" className="particle-motion proton-motion" markerEnd="url(#plate-arrow-yellow)" />
        <text x="375" y="160" className="particle-label">PROTON</text>

        <circle cx="505" cy="255" r="24" className="particle electron" />
        <text x="505" y="262" className="particle-sign">−</text>
        <path d="M 473 255 L 363 255" className="particle-motion electron-motion" markerEnd="url(#plate-arrow-yellow)" />
        <text x="418" y="240" className="particle-label">ELECTRON</text>
      </svg>
      <figcaption>Electric field: positive → negative. Electron motion: negative → positive. Proton motion: positive → negative.</figcaption>
    </figure>
  );
}

function Formula({ children, inline = false }) {
  return (
    <span
      className={inline ? "lesson-inline-formula" : "lesson-equation"}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          displayMode: !inline,
          throwOnError: false
        })
      }}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(lessons).map(slug => ({ slug }));
}

export default async function LessonDetail({ params }) {
  const { slug } = await params;
  const lesson = lessons[slug];

  return (
    <main>
      <SiteNav />
      <header className="lesson-detail-hero">
        <div>
          <Link href="/lessons">← All lessons</Link>
          <span>Section {lesson.number} · Introduction</span>
        </div>
        <h1>{lesson.title}</h1>
        <p>{lesson.introduction}</p>
      </header>
      <article className="lesson-body">
        {lesson.sections ? lesson.sections.map((section, index) => (
          <section className="lesson-content-block" key={section.title}>
            <div className="content-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.formula && <Formula>{section.formula}</Formula>}
              {section.variables && (
                <div className="variable-grid">
                  {section.variables.map(variable => (
                    <div className="variable-card" key={variable.name}>
                      <Formula inline>{variable.symbol}</Formula>
                      <div>
                        <h3>{variable.name}</h3>
                        <p>{variable.meaning}</p>
                        <Formula>{variable.example}</Formula>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {section.diagram && <ParallelPlateDiagram />}
            </div>
          </section>
        )) : (
          <section className="lesson-content-block">
            <div className="content-number">01</div>
            <div>
              <h2>Introduction</h2>
              <p>{lesson.introduction}</p>
            </div>
          </section>
        )}
      </article>
      <SiteFooter />
    </main>
  );
}
