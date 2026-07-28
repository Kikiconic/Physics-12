"use client";

import { useEffect, useRef, useState } from "react";

const K = 8.99e9;

function BoltIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2 5 13h6l-.5 9L19 10h-6l.5-8Z" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5" /></svg>;
}

function formatForce(value) {
  if (value === 0) return "0 N";
  if (value >= 1000) return `${(value / 1000).toFixed(2)} kN`;
  if (value < 0.01) return `${value.toExponential(2)} N`;
  return `${value.toFixed(2)} N`;
}

function ChargeOrb({ sign, className = "" }) {
  return <div className={`charge-orb ${sign === "+" ? "positive" : "negative"} ${className}`}>{sign}</div>;
}

function ForceSimulator() {
  const canvasRef = useRef(null);
  const [q1, setQ1] = useState(3);
  const [q2, setQ2] = useState(-5);
  const [distance, setDistance] = useState(0.4);
  const force = K * Math.abs(q1 * 1e-6 * q2 * 1e-6) / (distance * distance);
  const attraction = q1 * q2 < 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
    const w = rect.width, h = rect.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#f7f3ea";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(16, 39, 54, .08)";
    ctx.lineWidth = 1;
    for (let x = 20; x < w; x += 26) for (let y = 20; y < h; y += 26) {
      ctx.beginPath(); ctx.arc(x, y, 1.2, 0, Math.PI * 2); ctx.stroke();
    }
    const spread = 80 + ((distance - .1) / .9) * Math.min(160, w / 3);
    const left = w / 2 - spread / 2, right = w / 2 + spread / 2, cy = h / 2 - 8;
    const drawCharge = (x, value) => {
      const pos = value >= 0;
      ctx.shadowColor = pos ? "rgba(255,103,77,.28)" : "rgba(46,126,246,.28)";
      ctx.shadowBlur = 18;
      ctx.fillStyle = pos ? "#ff674d" : "#2e7ef6";
      ctx.beginPath(); ctx.arc(x, cy, 27, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#fff"; ctx.font = "700 25px Arial"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(pos ? "+" : "−", x, cy - 1);
    };
    const arrow = (from, to, color) => {
      const dir = Math.sign(to - from);
      ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(from, cy); ctx.lineTo(to, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(to, cy); ctx.lineTo(to - dir * 9, cy - 6); ctx.lineTo(to - dir * 9, cy + 6); ctx.closePath(); ctx.fill();
    };
    const arrowLength = 30 + Math.min(45, Math.log10(force + 1) * 20);
    if (attraction) {
      arrow(left + 36, left + 36 + arrowLength, "#102736");
      arrow(right - 36, right - 36 - arrowLength, "#102736");
    } else {
      arrow(left - 36, left - 36 - arrowLength, "#102736");
      arrow(right + 36, right + 36 + arrowLength, "#102736");
    }
    drawCharge(left, q1); drawCharge(right, q2);
    ctx.strokeStyle = "rgba(16,39,54,.38)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(left, cy + 48); ctx.lineTo(right, cy + 48); ctx.stroke();
    ctx.fillStyle = "#5c6971"; ctx.font = "600 12px Arial"; ctx.fillText(`${distance.toFixed(2)} m`, w / 2, cy + 65);
  }, [q1, q2, distance, force, attraction]);

  return (
    <div className="sim-card" id="simulator">
      <div className="sim-top">
        <div><span className="eyebrow">Simulator 01</span><h2>Coulomb force lab</h2></div>
        <div className={`status-pill ${attraction ? "attract" : "repel"}`}><i /> {attraction ? "Attraction" : "Repulsion"}</div>
      </div>
      <canvas ref={canvasRef} className="force-canvas" aria-label="Two-charge force visualization" />
      <div className="control-grid">
        <label>Charge 1 <strong>{q1 > 0 ? "+" : ""}{q1} μC</strong><input type="range" min="-8" max="8" step="1" value={q1} onChange={e => setQ1(+e.target.value || 1)} /></label>
        <label>Charge 2 <strong>{q2 > 0 ? "+" : ""}{q2} μC</strong><input type="range" min="-8" max="8" step="1" value={q2} onChange={e => setQ2(+e.target.value || -1)} /></label>
        <label>Separation <strong>{distance.toFixed(2)} m</strong><input type="range" min=".1" max="1" step=".05" value={distance} onChange={e => setDistance(+e.target.value)} /></label>
      </div>
      <div className="result-row">
        <div><span>Force magnitude</span><b>{formatForce(force)}</b></div>
        <p><span>Try this:</span> double the separation. What happens to the force?</p>
      </div>
    </div>
  );
}

function FieldSimulator() {
  const canvasRef = useRef(null);
  const [source, setSource] = useState(4);
  const [probe, setProbe] = useState({ x: .73, y: .43 });
  const [dragging, setDragging] = useState(false);
  const magnitude = K * Math.abs(source * 1e-6) / Math.pow(0.2 + probe.x * .65, 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d"), ratio = window.devicePixelRatio || 1, rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio; canvas.height = rect.height * ratio; ctx.scale(ratio, ratio);
    const w = rect.width, h = rect.height, sx = w * .25, sy = h * .5;
    ctx.fillStyle = "#102736"; ctx.fillRect(0, 0, w, h);
    const outward = source > 0;
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 10) {
      const r1 = 38, r2 = Math.max(w, h) * .78, ex = sx + Math.cos(a) * r2, ey = sy + Math.sin(a) * r2;
      ctx.strokeStyle = "rgba(96, 190, 255, .28)"; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(sx + Math.cos(a) * r1, sy + Math.sin(a) * r1); ctx.lineTo(ex, ey); ctx.stroke();
      const ar = r1 + (r2-r1) * .52, dir = outward ? 1 : -1, ax = sx + Math.cos(a)*ar, ay = sy + Math.sin(a)*ar;
      ctx.fillStyle = "rgba(96,190,255,.72)"; ctx.save(); ctx.translate(ax,ay); ctx.rotate(a + (dir < 0 ? Math.PI : 0));
      ctx.beginPath(); ctx.moveTo(7,0); ctx.lineTo(-5,-4); ctx.lineTo(-5,4); ctx.closePath(); ctx.fill(); ctx.restore();
    }
    ctx.fillStyle = source > 0 ? "#ff674d" : "#2e7ef6"; ctx.beginPath(); ctx.arc(sx,sy,28,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="#fff"; ctx.font="700 25px Arial"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText(source>0?"+":"−",sx,sy);
    const px = probe.x*w, py=probe.y*h, dx=px-sx, dy=py-sy, len=Math.hypot(dx,dy), ux=dx/len*(outward?1:-1), uy=dy/len*(outward?1:-1);
    ctx.strokeStyle="#f8d15e"; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(px+ux*54,py+uy*54); ctx.stroke();
    ctx.fillStyle="#f8d15e"; ctx.beginPath(); ctx.arc(px,py,9,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="#f8d15e"; ctx.font="700 11px Arial"; ctx.fillText("TEST CHARGE",px,py-20);
  }, [source, probe]);

  const move = e => {
    if (!dragging) return;
    const r = e.currentTarget.getBoundingClientRect();
    setProbe({x: Math.max(.4, Math.min(.92,(e.clientX-r.left)/r.width)), y: Math.max(.15,Math.min(.85,(e.clientY-r.top)/r.height))});
  };

  return (
    <div className="sim-card field-card">
      <div className="sim-top"><div><span className="eyebrow">Simulator 02</span><h2>Electric field explorer</h2></div><div className="status-pill live"><i /> Live field</div></div>
      <canvas ref={canvasRef} className="field-canvas" onPointerDown={e=>{setDragging(true); e.currentTarget.setPointerCapture(e.pointerId)}} onPointerUp={()=>setDragging(false)} onPointerMove={move} />
      <div className="field-controls">
        <label>Source charge <strong>{source > 0 ? "+" : ""}{source} μC</strong><input type="range" min="-8" max="8" step="1" value={source} onChange={e=>setSource(+e.target.value || 1)} /></label>
        <div className="field-readout"><span>Field at probe</span><b>{magnitude > 1e6 ? `${(magnitude/1e6).toFixed(2)} MN/C` : `${(magnitude/1000).toFixed(1)} kN/C`}</b></div>
        <p>Drag the yellow test charge to map the field.</p>
      </div>
    </div>
  );
}

function MiniQuiz() {
  const [answer, setAnswer] = useState(null);
  return (
    <div className="quiz-card">
      <span className="eyebrow">Checkpoint 01 · 30 sec</span>
      <h3>If the distance between two charges triples, the electric force becomes…</h3>
      <div className="quiz-options">
        {["3× as large", "⅓ as large", "⅑ as large"].map((x,i)=><button key={x} className={answer===i ? (i===2?"correct":"wrong"):""} onClick={()=>setAnswer(i)}>{String.fromCharCode(65+i)} <span>{x}</span></button>)}
      </div>
      {answer !== null && <p className="feedback">{answer===2?"Exactly — force follows the inverse-square law.":"Not quite. Square the change in distance: 3² = 9."}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav>
        <a className="brand" href="#"><span><BoltIcon /></span> ELECTROSTATICS <small>LAB 12</small></a>
        <div className="nav-links"><a href="#lessons">Lessons</a><a href="#simulator">Simulators</a><a href="#formula">Formula sheet</a></div>
        <a className="nav-cta" href="#lessons">Start learning <ArrowIcon /></a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="unit-tag">Physics 12 <span /> Unit 04</div>
          <h1>Make the invisible<br/><em>electric</em> world visible.</h1>
          <p>Master charges, forces, and fields through quick lessons and interactive experiments built for your course.</p>
          <div className="hero-actions"><a href="#lessons" className="primary-btn">Begin lesson <ArrowIcon /></a><a href="#simulator" className="text-btn"><span>▶</span> Open simulator</a></div>
          <div className="hero-meta"><div><b>4</b><span>Quick lessons</span></div><div><b>2</b><span>Live simulators</span></div><div><b>~25</b><span>Minutes total</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="field-rings"><i/><i/><i/><i/></div>
          <ChargeOrb sign="+" className="hero-charge main-charge" />
          <ChargeOrb sign="−" className="hero-charge orbit-one" />
          <ChargeOrb sign="+" className="hero-charge orbit-two" />
          <div className="vector-label"><span>E</span> field direction <ArrowIcon /></div>
          <div className="note-card"><b>LIKE CHARGES REPEL</b><span>Opposites attract — always along the line joining them.</span></div>
        </div>
      </section>

      <section className="lesson-section" id="lessons">
        <div className="section-heading"><div><span className="eyebrow">Your learning path</span><h2>Electrostatics, piece by piece.</h2></div><p>Each lesson takes about five minutes.<br/>No filler—just the ideas that matter.</p></div>
        <div className="lesson-grid">
          <article className="lesson-card featured"><span className="lesson-num">01</span><div className="lesson-icon charge-pair"><ChargeOrb sign="+"/><ChargeOrb sign="−"/></div><span className="duration">5 MIN</span><h3>Electric charge</h3><p>Positive, negative, and the rules that determine how charges interact.</p><a href="#charge-lesson">Start here <ArrowIcon /></a></article>
          <article className="lesson-card"><span className="lesson-num">02</span><div className="lesson-icon equation">F ∝ <span>q₁q₂</span><i>r²</i></div><span className="duration">6 MIN</span><h3>Coulomb's law</h3><p>Calculate the force between any two point charges.</p><a href="#simulator">Explore lesson <ArrowIcon /></a></article>
          <article className="lesson-card"><span className="lesson-num">03</span><div className="lesson-icon field-lines"><span>+</span><i/><i/><i/><i/></div><span className="duration">7 MIN</span><h3>Electric fields</h3><p>Map the force that a charge would feel at every point in space.</p><a href="#field-lesson">Explore lesson <ArrowIcon /></a></article>
          <article className="lesson-card"><span className="lesson-num">04</span><div className="lesson-icon plates"><i/><span>+ + +</span><span>− − −</span><i/></div><span className="duration">7 MIN</span><h3>Electric potential</h3><p>Connect energy, voltage, and the motion of charges.</p><a href="#formula">Explore lesson <ArrowIcon /></a></article>
        </div>
      </section>

      <section className="concept-section" id="charge-lesson">
        <div className="concept-copy"><span className="eyebrow">Quick lesson · Charge</span><h2>Three ideas unlock the chapter.</h2><div className="concept-list"><div><b>01</b><p><strong>Charge is conserved.</strong><span>It can move between objects, but the total amount never changes.</span></p></div><div><b>02</b><p><strong>Charge is quantized.</strong><span>Every charge is a multiple of e = 1.60 × 10⁻¹⁹ C.</span></p></div><div><b>03</b><p><strong>Forces come in pairs.</strong><span>Each charge pushes or pulls the other with equal magnitude.</span></p></div></div></div>
        <MiniQuiz />
      </section>

      <section className="lab-section"><div className="section-heading inverse"><div><span className="eyebrow">Interactive lab</span><h2>Don’t just read it. Test it.</h2></div><p>Change one variable at a time and watch the physics respond.</p></div><ForceSimulator/><FieldSimulator/></section>

      <section className="formula-section" id="formula">
        <div><span className="eyebrow">Keep this close</span><h2>Your electrostatics toolkit.</h2></div>
        <div className="formula-grid">
          <article><span>01 · FORCE</span><b>F = k <em>|q₁q₂|</em><i>r²</i></b><p>k = 8.99 × 10⁹ N·m²/C²</p></article>
          <article><span>02 · FIELD</span><b>E = <em>F</em><i>q</i> = k <em>|Q|</em><i>r²</i></b><p>Direction: force on a positive test charge</p></article>
          <article><span>03 · POTENTIAL</span><b>V = k <em>Q</em><i>r</i></b><p>Potential is a scalar measured in volts</p></article>
        </div>
      </section>

      <footer><a className="brand" href="#"><span><BoltIcon /></span> ELECTROSTATICS <small>LAB 12</small></a><p>Built for curious Physics 12 students.</p><a href="#">Back to top ↑</a></footer>
    </main>
  );
}
