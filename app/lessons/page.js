import Link from "next/link";
import { MiniQuiz } from "../course-content";
import { ArrowIcon, SiteFooter, SiteNav } from "../site-chrome";

const lessons = [
  {n:"01",time:"5 MIN",title:"Electric charge",text:"Positive, negative, conservation, and the rules that determine how charges interact.",symbol:"+ −",slug:"electric-charge"},
  {n:"02",time:"6 MIN",title:"Coulomb’s law",text:"Calculate the magnitude and direction of force between two point charges.",symbol:"F",slug:"coulombs-law"},
  {n:"03",time:"7 MIN",title:"Electric fields",text:"Map the force that a positive test charge would feel at every point in space.",symbol:"E",slug:"electric-fields"},
  {n:"04",time:"7 MIN",title:"Electric potential",text:"Connect electric potential energy, voltage, and the motion of charges.",symbol:"V",slug:"electric-potential"}
];

export default function LessonsPage() {
  return (
    <main>
      <SiteNav />
      <header className="inner-hero"><span className="eyebrow">Physics 12 · Lessons</span><h1>Electrostatics,<br/><em>piece by piece.</em></h1><p>Four focused lessons. No filler—just the ideas, equations, and intuition you need.</p></header>
      <section className="lessons-page-grid">
        {lessons.map(x=><article key={x.n}><div className="lesson-page-top"><span>{x.n}</span><b>{x.symbol}</b></div><small>{x.time}</small><h2>{x.title}</h2><p>{x.text}</p><Link href={`/lessons/${x.slug}`}>Open lesson <ArrowIcon /></Link></article>)}
      </section>
      <section className="concept-section" id="lesson-notes">
        <div className="concept-copy"><span className="eyebrow">Quick lesson · Charge</span><h2>Three ideas unlock the chapter.</h2><div className="concept-list"><div><b>01</b><p><strong>Charge is conserved.</strong><span>It can move between objects, but the total amount never changes.</span></p></div><div><b>02</b><p><strong>Charge is quantized.</strong><span>Every charge is a whole-number multiple of the elementary charge.</span></p></div><div><b>03</b><p><strong>Forces come in pairs.</strong><span>Each charge pushes or pulls the other with equal magnitude.</span></p></div></div></div>
        <MiniQuiz />
      </section>
      <SiteFooter />
    </main>
  );
}
