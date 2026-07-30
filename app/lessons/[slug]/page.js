import Link from "next/link";
import katex from "katex";
import { notFound } from "next/navigation";
import { ArrowIcon, SiteFooter, SiteNav } from "../../site-chrome";
import ElectricFieldStrengthSimulator from "../electric-field-strength-simulator";

const lessons = {
  "static-electric-charges": {
    number: "01",
    unit: "06",
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
    unit: "06",
    title: "The electric force",
    introduction: "Introduction to Coulomb’s law and how to use it.",
    sections: [
      {
        title: "What is electric force?",
        paragraphs: [
          "Electric force is the push or pull between charged objects. The objects do not need to touch. Each charge creates an electric effect in the space around it, so it can exert a force on another charge from a distance.",
          "Charges with the same sign repel. Two positive charges push apart, and two negative charges also push apart. Charges with opposite signs attract, so a positive charge and a negative charge pull toward each other.",
          "Electric force has both a size and a direction. The force acts along the straight line that joins the two charges. Each charge feels a force of the same size, but the two forces point in opposite directions.",
          "A negative electric force means attraction, while a positive electric force means repulsion."
        ]
      },
      {
        title: "Introduction to Coulomb’s law",
        paragraphs: [
          "Coulomb’s law tells us the size of the electric force between two point charges. A point charge is a charged object that is small compared with the distance between the objects.",
          "The force becomes stronger when either charge becomes larger. The force becomes weaker when the distance between the charges becomes larger.",
          "Electric force is inversely proportional to the square of the distance between the charges.",
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
          { symbol: String.raw`F_e`, name: "Electric force", meaning: "The size of the force between the two charges." },
          { symbol: String.raw`k`, name: "Coulomb’s constant", meaning: "A constant used for electric force in empty space or air.", example: String.raw`8.99\times10^9\ \mathrm{N\,m^2/C^2}` },
          { symbol: String.raw`q_1`, name: "First charge", meaning: "The electric charge of the first object, measured in coulombs." },
          { symbol: String.raw`q_2`, name: "Second charge", meaning: "The electric charge of the second object, measured in coulombs." },
          { symbol: String.raw`r`, name: "Separation distance", meaning: "The distance from the centre of one charge to the centre of the other, measured in metres." }
        ]
      },
      {
        title: "How to use the formula",
        paragraphs: [
          "First, write down the two charges and the distance between their centres. Convert every charge to coulombs and every distance to metres.",
          "Second, substitute the charge magnitudes and distance into Coulomb’s law. Square the distance, multiply the charge values, and then multiply by Coulomb’s constant.",
          "A negative electric force means attraction, while a positive electric force means repulsion.",
          "Charges with the same sign repel, while charges with opposite signs attract."
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
    unit: "06",
    title: "Electric field strength",
    introduction: "Learn what an electric field is, how it behaves near charged plates, and how to calculate its strength.",
    sections: [
      {
        title: "What is an electric field?",
        paragraphs: [
          "An electric field is the region around a charged object where another charge can feel an electric force. The two charges do not need to touch.",
          "Every charged object creates an electric field around itself. A larger source charge creates a stronger field. The field becomes weaker as the distance from the source charge increases.",
          "We use a small positive test charge to define field direction. The field points in the direction that this positive test charge would move."
        ],
        fieldDiagram: true,
        fieldSimulator: true
      },
      {
        title: "Electric field versus electric force",
        paragraphs: [
          "An electric field exists around a source charge even when no other charge is present. Electric force appears when another charge is placed inside that field.",
          "Electric field direction is defined by the direction a positive test charge would move.",
          "A positive charge feels force in the same direction as the electric field. A negative charge feels force in the opposite direction to the electric field."
        ]
      },
      {
        title: "Electric field lines",
        paragraphs: [
          "Electric field lines are a simple picture of an electric field. The arrow on each line shows the direction of the field.",
          "Field lines point away from positive charges and toward negative charges.",
          "Lines that are close together show a stronger field. Lines that are farther apart show a weaker field. Electric field lines never cross."
        ]
      },
      {
        title: "Electric fields and parallel plates",
        paragraphs: [
          "Two oppositely charged parallel plates create an electric field in the space between them. The field points from the positive plate to the negative plate.",
          "Near the middle of two large plates, the field lines are straight, parallel, and evenly spaced. This means the electric field has almost the same strength and direction everywhere in that region.",
          "A positive charge feels a force toward the negative plate. A negative charge feels a force toward the positive plate because its force is opposite to the field direction."
        ],
        diagram: true
      },
      {
        title: "What is electric field strength?",
        paragraphs: [
          "Electric field strength tells us how much electric force acts on each coulomb of positive test charge at one point.",
          "A strong electric field produces a large force on a test charge. A weak electric field produces a smaller force on the same test charge.",
          "Electric field strength is a vector. It has both a size and a direction. Its unit is newtons per coulomb, written as N/C."
        ],
        formula: String.raw`E=\frac{F_e}{\left|q\right|}`,
        variables: [
          { symbol: String.raw`E`, name: "Electric field strength", meaning: "The electric force per coulomb at a point, measured in N/C." },
          { symbol: String.raw`F_e`, name: "Electric force", meaning: "The electric force acting on the test charge, measured in newtons." },
          { symbol: String.raw`q`, name: "Test charge", meaning: "The charge placed in the field, measured in coulombs." }
        ]
      },
      {
        title: "Electric field strength formulas",
        paragraphs: [
          "Use the force form when the force on a test charge is known. The same relationship can be rearranged to find force or test charge.",
          "Use the point-charge form when a source charge and its distance from the field point are known. Measure distance from the centre of the source charge.",
          "Use charge magnitudes when calculating field strength. Then state the direction separately: away from a positive source charge or toward a negative source charge."
        ],
        formulaSet: [
          { label: "Field from force", math: String.raw`E=\frac{F_e}{\left|q\right|}` },
          { label: "Force in a field", math: String.raw`F_e=\left|q\right|E` },
          { label: "Test charge", math: String.raw`\left|q\right|=\frac{F_e}{E}` },
          { label: "Field from a point charge", math: String.raw`E=k\frac{\left|Q\right|}{r^2}` },
          { label: "Source charge", math: String.raw`\left|Q\right|=\frac{Er^2}{k}` },
          { label: "Distance from source", math: String.raw`r=\sqrt{\frac{k\left|Q\right|}{E}}` }
        ]
      }
    ]
  },
  "electric-potentials": {
    number: "04",
    unit: "06",
    title: "Electric potentials",
    introduction: "Learn electric potential, electric potential energy, voltage, and their relationship with electric fields.",
    sections: [
      {
        title: "What is electric potential?",
        paragraphs: [
          "Electric potential describes the electric potential energy available at one point for each coulomb of charge.",
          "Potential belongs to a location in an electric field. A charge does not need to be placed there for the potential to exist.",
          "Electric potential is a scalar. It has a size and a sign, but it does not have a direction. Its unit is the volt, written as V. One volt is equal to one joule per coulomb."
        ],
        formula: String.raw`V=\frac{E_p}{q}`,
        variables: [
          { symbol: String.raw`V`, name: "Electric potential", meaning: "Electric potential energy per coulomb at a point, measured in volts." },
          { symbol: String.raw`E_p`, name: "Electric potential energy", meaning: "Energy stored because of a charge’s position, measured in joules." },
          { symbol: String.raw`q`, name: "Charge", meaning: "The charge placed at that point, measured in coulombs." }
        ]
      },
      {
        title: "Electric potential around a point charge",
        paragraphs: [
          "A source charge creates electric potential around itself. A positive source charge creates positive potential, and a negative source charge creates negative potential.",
          "Potential becomes smaller in magnitude as distance from the source charge increases. Because potential is a scalar, potentials from several source charges are added using their positive or negative signs.",
          "Measure r from the centre of the source charge to the point where the potential is being found."
        ],
        formulaSet: [
          { label: "Electric potential", math: String.raw`V=k\frac{Q}{r}` },
          { label: "Source charge", math: String.raw`Q=\frac{Vr}{k}` },
          { label: "Distance from source", math: String.raw`r=k\frac{\left|Q\right|}{\left|V\right|}` }
        ]
      },
      {
        title: "What is electric potential energy?",
        paragraphs: [
          "Electric potential energy is energy stored because of the positions of charged objects.",
          "Two charges with the same sign have positive electric potential energy. They naturally repel and move farther apart. Two charges with opposite signs have negative electric potential energy. They naturally attract and move closer together.",
          "The potential energy between two point charges depends on both charge values and the distance between them. Keep the signs of both charges in this formula."
        ],
        formulaSet: [
          { label: "Potential energy at a potential", math: String.raw`E_p=qV` },
          { label: "Two point charges", math: String.raw`E_p=k\frac{q_1q_2}{r}` }
        ]
      },
      {
        title: "Electric potential difference and voltage",
        paragraphs: [
          "Electric potential difference compares the electric potential at two points. It tells us how much electric potential energy changes for each coulomb of charge moving between those points.",
          "Electric potential difference is also called voltage. We write it as ΔV. The symbol Δ means final value minus initial value.",
          "A voltage of 12 V means that the potential energy changes by 12 joules for every coulomb of charge."
        ],
        formulaSet: [
          { label: "Potential difference", math: String.raw`\Delta V=V_f-V_i` },
          { label: "Voltage from energy", math: String.raw`\Delta V=\frac{\Delta E_p}{q}` },
          { label: "Change in potential energy", math: String.raw`\Delta E_p=q\Delta V` },
          { label: "Charge", math: String.raw`q=\frac{\Delta E_p}{\Delta V}` }
        ]
      },
      {
        title: "The energy-hill model",
        paragraphs: [
          "Think of electric potential as the height of an energy hill. The hill exists even when no charge is placed on it. A higher position represents higher electric potential, and a lower position represents lower electric potential.",
          "Voltage, or potential difference, is the change in height between two points on the hill. Electric potential energy depends on both the hill position and the charge placed there. This is why the relationship is Ep = qV.",
          "Electric field describes the slope of the hill. A steeper slope means a stronger electric field. Electric force is the push or pull felt by a charge placed on that slope.",
          "A positive charge naturally moves downhill toward lower electric potential. A negative charge naturally moves toward higher electric potential. Both motions lower the charge’s electric potential energy."
        ],
        energyHillDiagram: true
      },
      {
        title: "How charges move through voltage",
        paragraphs: [
          "The electric field points from higher electric potential to lower electric potential.",
          "A free positive charge naturally moves in the direction of the electric field. It moves from higher potential to lower potential.",
          "A free negative charge naturally moves opposite to the electric field. It moves from lower potential to higher potential.",
          "When a charge moves naturally because of the electric field, its electric potential energy decreases. The lost potential energy can become kinetic energy."
        ]
      },
      {
        title: "Electric field and voltage between parallel plates",
        paragraphs: [
          "Oppositely charged parallel plates create an almost uniform electric field between them. The positive plate is at higher electric potential, and the negative plate is at lower electric potential.",
          "The electric field points from the positive plate to the negative plate. For a uniform field, field strength equals the magnitude of the voltage difference divided by the plate separation.",
          "Use the magnitude of ΔV when calculating field strength. State the field direction separately. The distance d must be measured in metres."
        ],
        diagram: true,
        formulaSet: [
          { label: "Electric field strength", math: String.raw`E=\frac{\left|\Delta V\right|}{d}` },
          { label: "Voltage difference", math: String.raw`\left|\Delta V\right|=Ed` },
          { label: "Plate separation", math: String.raw`d=\frac{\left|\Delta V\right|}{E}` }
        ]
      }
    ]
  },
  "introduction-to-magnets": {
    number: "01",
    unit: "07",
    title: "Introduction to magnets",
    introduction: "Unit 07 · Magnetic Force",
    placeholder: true
  },
  "magnetic-field-strength": {
    number: "02",
    unit: "07",
    title: "Magnetic field strength B",
    introduction: "Unit 07 · Magnetic Force",
    placeholder: true
  },
  "magnetic-field-and-the-electron": {
    number: "03",
    unit: "07",
    title: "Magnetic field and the electron",
    introduction: "Unit 07 · Magnetic Force",
    placeholder: true
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

function ElectricFieldDiagram() {
  return (
    <figure className="electric-field-lesson-diagram">
      <svg viewBox="0 0 820 350" role="img" aria-labelledby="field-picture-title field-picture-description">
        <title id="field-picture-title">Electric fields around positive and negative charges</title>
        <desc id="field-picture-description">Field arrows point away from a positive charge and toward a negative charge.</desc>
        <defs>
          <marker id="field-picture-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        {[0,45,90,135,180,225,270,315].map((angle) => {
          const radians = angle * Math.PI / 180;
          return (
            <line
              key={`positive-${angle}`}
              x1={220 + Math.cos(radians) * 54}
              y1={175 + Math.sin(radians) * 54}
              x2={220 + Math.cos(radians) * 125}
              y2={175 + Math.sin(radians) * 125}
              markerEnd="url(#field-picture-arrow)"
            />
          );
        })}
        {[0,45,90,135,180,225,270,315].map((angle) => {
          const radians = angle * Math.PI / 180;
          return (
            <line
              key={`negative-${angle}`}
              x1={600 + Math.cos(radians) * 125}
              y1={175 + Math.sin(radians) * 125}
              x2={600 + Math.cos(radians) * 54}
              y2={175 + Math.sin(radians) * 54}
              markerEnd="url(#field-picture-arrow)"
            />
          );
        })}
        <circle className="diagram-positive-charge" cx="220" cy="175" r="45" />
        <circle className="diagram-negative-charge" cx="600" cy="175" r="45" />
        <text className="diagram-charge-sign" x="220" y="189">+</text>
        <text className="diagram-charge-sign" x="600" y="188">−</text>
        <text className="diagram-direction-label" x="220" y="330">AWAY FROM POSITIVE</text>
        <text className="diagram-direction-label" x="600" y="330">TOWARD NEGATIVE</text>
      </svg>
      <figcaption>Electric field direction is defined by the force on a positive test charge.</figcaption>
    </figure>
  );
}

function PotentialEnergyHillDiagram() {
  return (
    <figure className="energy-hill-diagram">
      <svg viewBox="0 0 900 390" role="img" aria-labelledby="energy-hill-title energy-hill-description">
        <title id="energy-hill-title">Electric potential shown as energy hills</title>
        <desc id="energy-hill-description">A positive charge moves downhill toward lower electric potential. A negative charge moves toward higher electric potential. Both move toward lower electric potential energy.</desc>
        <defs>
          <marker id="hill-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>

        <g className="hill-panel">
          <text x="225" y="35" className="hill-title">POSITIVE CHARGE</text>
          <path d="M 45 280 C 130 255 160 90 260 90 C 350 90 375 235 420 280" className="hill-curve" />
          <circle cx="260" cy="74" r="24" className="hill-positive" />
          <text x="260" y="83" className="hill-sign">+</text>
          <path d="M 285 92 C 325 120 348 180 370 236" className="hill-motion" markerEnd="url(#hill-arrow)" />
          <text x="105" y="315" className="hill-low-label">LOWER V</text>
          <text x="260" y="125" className="hill-high-label">HIGHER V</text>
          <text x="338" y="265" className="hill-note">MOVES DOWNHILL</text>
        </g>

        <line x1="450" y1="50" x2="450" y2="335" className="hill-divider" />

        <g className="hill-panel">
          <text x="675" y="35" className="hill-title">NEGATIVE CHARGE</text>
          <path d="M 480 280 C 555 255 590 90 690 90 C 785 90 815 235 855 280" className="hill-curve" />
          <circle cx="535" cy="245" r="24" className="hill-negative" />
          <text x="535" y="253" className="hill-sign">−</text>
          <path d="M 560 229 C 590 190 618 135 660 105" className="hill-motion" markerEnd="url(#hill-arrow)" />
          <text x="535" y="315" className="hill-low-label">LOWER V</text>
          <text x="690" y="125" className="hill-high-label">HIGHER V</text>
          <text x="646" y="265" className="hill-note">MOVES TOWARD HIGHER V</text>
        </g>

        <text x="450" y="370" className="hill-caption">BOTH CHARGES MOVE TOWARD LOWER ELECTRIC POTENTIAL ENERGY, Eₚ</text>
      </svg>
      <figcaption>Potential is the hill, voltage is the change in height, field is the slope, and force is the push or pull on the charge.</figcaption>
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

  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <SiteNav />
      <header className="lesson-detail-hero">
        <div>
          <Link href="/lessons">← All lessons</Link>
          <span>{lesson.unit ? `Unit ${lesson.unit} · ` : ""}Section {lesson.number}</span>
        </div>
        <h1>{lesson.title}</h1>
        <p>{lesson.introduction}</p>
      </header>
      <article className="lesson-body">
        {lesson.placeholder ? (
          <section className="lesson-content-block lesson-placeholder-block">
            <div className="content-number">—</div>
            <div>
              <h2>Learning materials coming soon</h2>
              <p>This section has been created as a placeholder. Lesson content has not been added yet.</p>
            </div>
          </section>
        ) : lesson.sections ? lesson.sections.map((section, index) => (
          <section className="lesson-content-block" key={section.title}>
            <div className="content-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.formula && <Formula>{section.formula}</Formula>}
              {section.formulaSet && (
                <div className="field-formula-grid">
                  {section.formulaSet.map(item => (
                    <div key={item.label}>
                      <span>{item.label}</span>
                      <Formula>{item.math}</Formula>
                    </div>
                  ))}
                </div>
              )}
              {section.variables && (
                <div className="variable-grid">
                  {section.variables.map(variable => (
                    <div className="variable-card" key={variable.name}>
                      <Formula inline>{variable.symbol}</Formula>
                      <div>
                        <h3>{variable.name}</h3>
                        <p>{variable.meaning}</p>
                        {variable.example && <Formula>{variable.example}</Formula>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {section.diagram && <ParallelPlateDiagram />}
              {section.fieldDiagram && <ElectricFieldDiagram />}
              {section.energyHillDiagram && <PotentialEnergyHillDiagram />}
              {section.fieldSimulator && <ElectricFieldStrengthSimulator />}
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
        {slug === "electric-force" && (
          <section className="lesson-resource-link">
            <span>Practice and review</span>
            <h2>Electric force resources</h2>
            <p>Open the resource page for additional worksheets and video solutions.</p>
            <Link href="/lessons/electric-force/resources">
              Open resources <ArrowIcon />
            </Link>
          </section>
        )}
        {slug === "electric-field-strength" && (
          <section className="lesson-resource-link">
            <span>Practice and review</span>
            <h2>Electric field resources</h2>
            <p>Open the resource page for additional worksheets and video solutions.</p>
            <Link href="/lessons/electric-field-strength/resources">
              Open resources <ArrowIcon />
            </Link>
          </section>
        )}
        {slug === "electric-potentials" && (
          <section className="lesson-resource-link">
            <span>Practice and review</span>
            <h2>Electric potential resources</h2>
            <p>Open the resource page for additional worksheets and video solutions.</p>
            <Link href="/lessons/electric-potentials/resources">
              Open resources <ArrowIcon />
            </Link>
          </section>
        )}
      </article>
      <SiteFooter />
    </main>
  );
}
