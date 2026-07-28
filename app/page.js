import Link from "next/link";
import { ArrowIcon, BoltIcon, SiteFooter, SiteNav } from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <section className="platform-hero">
        <div className="platform-copy">
          <div className="unit-tag">Physics 12 <span /> Complete course platform</div>
          <h1>Learn the concept.<br/><em>See</em> the physics.</h1>
          <p>A focused study platform for exploring every Physics 12 unit through clear lessons, interactive experiments, and useful formula sheets.</p>
          <div className="hero-actions">
            <Link href="/lessons" className="primary-btn">Start learning <ArrowIcon /></Link>
            <Link href="/simulators" className="text-btn"><span>▶</span> Try a simulator</Link>
          </div>
        </div>
        <div className="platform-visual">
          <div className="summary-orbit orbit-a" />
          <div className="summary-orbit orbit-b" />
          <div className="summary-charge plus">+</div>
          <div className="summary-charge minus">−</div>
          <div className="summary-center"><BoltIcon /><span>Physics 12<br/>made visible</span></div>
        </div>
      </section>

      <section className="platform-summary">
        <div className="section-heading">
          <div><span className="eyebrow">Explore the platform</span><h2>Everything has its place.</h2></div>
          <p>Learn, experiment, then keep the key equations close.</p>
        </div>
        <div className="summary-grid">
          <Link href="/lessons" className="summary-card lessons-link">
            <span>01 · LEARN</span><b>Quick lessons</b>
            <p>Four short explanations with checkpoints covering the complete electrostatics chapter.</p>
            <i>Open lessons <ArrowIcon /></i>
          </Link>
          <Link href="/simulators" className="summary-card simulator-link">
            <span>02 · EXPERIMENT</span><b>Live simulators</b>
            <p>Change charges, distance, and probe position to see forces and fields respond instantly.</p>
            <i>Open lab <ArrowIcon /></i>
          </Link>
          <Link href="/formulas" className="summary-card formula-link">
            <span>03 · REFERENCE</span><b>Formula sheet</b>
            <p>Clean LaTeX equations, constants, units, and direction rules in one quick reference.</p>
            <i>View formulas <ArrowIcon /></i>
          </Link>
        </div>
      </section>

      <section className="home-progress">
        <div><strong>4</strong><span>Quick lessons</span></div>
        <div><strong>2</strong><span>Interactive labs</span></div>
        <div><strong>1</strong><span>Formula toolkit</span></div>
        <div><strong>~25</strong><span>Minutes total</span></div>
      </section>
      <SiteFooter />
    </main>
  );
}
