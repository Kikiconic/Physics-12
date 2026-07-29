import Link from "next/link";
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
    introduction: "Introduction to Coulomb’s law and how to use it."
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
