import Link from "next/link";
import { ArrowIcon, SiteFooter, SiteNav, UnitCatalogue } from "../site-chrome";

const lessons = [
  {n:"01",title:"Static electric charges",text:"Introduction to the electrostatics chapter and what electrostatic force is.",symbol:"+ −",slug:"static-electric-charges"},
  {n:"02",title:"The electric force",text:"Introduction to Coulomb’s law and how to use it.",symbol:"F",slug:"electric-force"},
  {n:"03",title:"Electric field strength",text:"Introduction to electric field strength, what it means, and its formula.",symbol:"E",slug:"electric-field-strength"},
  {n:"04",title:"Electric potentials",text:"Introduction to electric potential, electric potential energy, and electric potential difference.",symbol:"V",slug:"electric-potentials"},
  {n:"05",title:"Electric field and voltage",text:"Introduction to the relationship between electric fields and voltage.",symbol:"ΔV",slug:"electric-field-and-voltage"}
];

export default function LessonsPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero"><span className="eyebrow">Physics 12 · Lessons</span><h1>Electrostatics,<br/><em>piece by piece.</em></h1><p>Five sections organized around the main ideas in the electrostatics chapter.</p></header>
      <UnitCatalogue section="Lessons" />
      <div className="active-unit-heading"><span>Unit 04</span><h2>Electrostatics lessons</h2><p>5 lesson sections</p></div>
      <section className="lessons-page-grid">
        {lessons.map(x=><article key={x.n}><div className="lesson-page-top"><span>{x.n}</span><b>{x.symbol}</b></div><small>SECTION INTRODUCTION</small><h2>{x.title}</h2><p>{x.text}</p><Link href={`/lessons/${x.slug}`}>Open section <ArrowIcon /></Link></article>)}
      </section>
      <SiteFooter />
    </main>
  );
}
