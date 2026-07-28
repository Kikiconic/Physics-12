import Link from "next/link";
import { SiteFooter, SiteNav } from "../../site-chrome";

const lessons = {
  "static-electric-charges": {
    number: "01",
    title: "Static electric charges",
    introduction: "Introduction to the electrostatics chapter and what electrostatic force is."
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
        <section className="lesson-content-block">
          <div className="content-number">01</div>
          <div>
            <h2>Introduction</h2>
            <p>{lesson.introduction}</p>
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
