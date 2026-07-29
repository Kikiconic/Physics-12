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
          "Electric charge is a property of matter that causes electric forces. Protons carry positive charge, electrons carry negative charge, and neutrons are electrically neutral. An object is neutral when it contains equal amounts of positive and negative charge.",
          "Static electricity is a buildup of charge that remains in one place for a period of time. In most everyday situations, electrons transfer from one object to another while the protons remain bound inside atomic nuclei. An object that gains electrons becomes negatively charged; an object that loses electrons becomes positively charged.",
          "Like charges repel each other, while opposite charges attract. The attraction or repulsion between charged objects is called the electrostatic force."
        ]
      },
      {
        title: "Positive and negative parallel plates",
        paragraphs: [
          "Two flat conducting plates can be given equal and opposite charges. The positive plate has an electron deficiency, and the negative plate has an excess of electrons.",
          "Between large, closely spaced parallel plates, the electric field is approximately uniform. Its direction is defined as the direction a positive test charge would move, so the field points from the positive plate toward the negative plate."
        ],
        diagram: true
      },
      {
        title: "How charges move between the plates",
        paragraphs: [
          "A proton is positively charged, so the electric force on it acts in the same direction as the electric field. A free proton therefore accelerates from the positive plate toward the negative plate.",
          "An electron is negatively charged, so the electric force on it acts opposite to the electric field. An electron therefore accelerates from the negative plate toward the positive plate.",
          "This proton motion is a useful model for a free positive charge. Inside an ordinary solid, protons are locked inside nuclei and do not travel through the material; the mobile particles are usually electrons."
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
