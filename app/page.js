import Link from "next/link";
import { ArrowIcon, BoltIcon, SiteFooter, SiteNav } from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <section className="platform-hero">
        <div className="platform-copy">
          <div className="unit-tag">Physics 12 <span /> Course materials</div>
          <h1>Physics 12<br/><em>course resources.</em></h1>
          <p>Lessons, interactive simulations, and formula sheets organized by course unit. Unit 04: Electrostatics is currently available.</p>
          <div className="hero-actions">
            <Link href="/lessons" className="primary-btn">View lessons <ArrowIcon /></Link>
            <Link href="/simulators" className="text-btn"><span>→</span> Open simulators</Link>
          </div>
        </div>
        <div className="platform-visual">
          <div className="summary-orbit orbit-a" />
          <div className="summary-orbit orbit-b" />
          <div className="summary-charge plus">+</div>
          <div className="summary-charge minus">−</div>
          <div className="summary-center"><BoltIcon /><span>Physics 12<br/>course materials</span></div>
        </div>
      </section>

      <section className="platform-summary">
        <div className="section-heading">
          <div><span className="eyebrow">Course resources</span><h2>Available materials</h2></div>
          <p>Resources are grouped by unit and type.</p>
        </div>
        <div className="summary-grid">
          <Link href="/lessons" className="summary-card lessons-link">
            <span>01 · LESSONS</span><b>Lesson notes</b>
            <p>Concept explanations, equations, worked examples, common errors, and practice questions.</p>
            <i>View lessons <ArrowIcon /></i>
          </Link>
          <Link href="/simulators" className="summary-card simulator-link">
            <span>02 · SIMULATORS</span><b>Interactive models</b>
            <p>Models for examining Coulomb force, electric fields, and electric potential.</p>
            <i>View simulators <ArrowIcon /></i>
          </Link>
          <Link href="/formulas" className="summary-card formula-link">
            <span>03 · FORMULAS</span><b>Formula sheets</b>
            <p>Equations, physical constants, SI units, and direction conventions for each unit.</p>
            <i>View formula sheets <ArrowIcon /></i>
          </Link>
        </div>
      </section>

      <section className="home-progress">
        <div><strong>1</strong><span>Unit available</span></div>
        <div><strong>4</strong><span>Lessons</span></div>
        <div><strong>2</strong><span>Simulators</span></div>
        <div><strong>6</strong><span>Reference formulas</span></div>
      </section>
      <SiteFooter />
    </main>
  );
}
