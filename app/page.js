"use client";

import { useEffect, useRef, useState } from "react";
import katex from "katex";

const K = 8.99e9;

function MathFormula({ children, block = false, className = "" }) {
  return (
    <span
      className={`math-formula ${block ? "math-block" : ""} ${className}`}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          displayMode: block,
          throwOnError: false,
          strict: false
        })
      }}
    />
  );
}

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
    const minSpread = Math.min(225, w * .64);
    const maxSpread = Math.min(380, w * .8);
    const spread = minSpread + ((distance - .1) / .9) * (maxSpread - minSpread);
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
  const [charges, setCharges] = useState([
    { id: 1, q: 1, x: .34, y: .5 },
    { id: 2, q: -1, x: .66, y: .5 }
  ]);
  const [sensor, setSensor] = useState({ x: .5, y: .24 });
  const [dragTarget, setDragTarget] = useState(null);
  const [showVectors, setShowVectors] = useState(true);

  const fieldAt = (x, y, width = 1, height = 1) => charges.reduce((sum, charge) => {
    const dx = (x - charge.x) * width;
    const dy = (y - charge.y) * height;
    const r2 = Math.max(dx * dx + dy * dy, 900);
    const scale = charge.q / Math.pow(r2, 1.5);
    return { x: sum.x + dx * scale, y: sum.y + dy * scale };
  }, { x: 0, y: 0 });

  const sensorField = fieldAt(sensor.x, sensor.y, 800, 420);
  const sensorMagnitude = Math.hypot(sensorField.x, sensorField.y) * 1.8e10;
  const sensorAngle = Math.atan2(-sensorField.y, sensorField.x) * 180 / Math.PI;
  const potentialAt = (x, y) => charges.reduce((total, charge) => {
    const dx=(x-charge.x)*1.2,dy=(y-charge.y)*.63;
    return total + K * charge.q * 1e-6 / Math.max(Math.hypot(dx,dy),.035);
  },0);
  const sensorVoltage=potentialAt(sensor.x,sensor.y);
  const formatVoltage=value=>Math.abs(value)>=1000?`${(value/1000).toFixed(2)} kV`:`${value.toFixed(1)} V`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d"), ratio = window.devicePixelRatio || 1, rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio; canvas.height = rect.height * ratio; ctx.scale(ratio, ratio);
    const w = rect.width, h = rect.height;
    ctx.fillStyle = "#102736"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(255,255,255,.055)";
    for (let x = 0; x < w; x += 28) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
    for (let y = 0; y < h; y += 28) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }

    if (showVectors) for (let x = 24; x < w; x += 42) for (let y = 24; y < h; y += 42) {
      if (charges.some(c => Math.hypot(x-c.x*w,y-c.y*h) < 35)) continue;
      const f = fieldAt(x/w,y/h,w,h), mag = Math.hypot(f.x,f.y);
      if (!mag) continue;
      const ux=f.x/mag, uy=f.y/mag, length=8+Math.min(11,Math.log10(mag*1e8+1)*3);
      ctx.strokeStyle="rgba(105,183,255,.66)"; ctx.fillStyle="rgba(105,183,255,.8)"; ctx.lineWidth=1.4;
      ctx.beginPath(); ctx.moveTo(x-ux*length/2,y-uy*length/2); ctx.lineTo(x+ux*length/2,y+uy*length/2); ctx.stroke();
      ctx.save(); ctx.translate(x+ux*length/2,y+uy*length/2); ctx.rotate(Math.atan2(uy,ux));
      ctx.beginPath(); ctx.moveTo(4,0); ctx.lineTo(-3,-3); ctx.lineTo(-3,3); ctx.closePath(); ctx.fill(); ctx.restore();
    }

    charges.forEach(charge => {
      const x=charge.x*w,y=charge.y*h;
      ctx.shadowColor=charge.q>0?"rgba(255,103,77,.5)":"rgba(46,126,246,.5)";ctx.shadowBlur=18;
      ctx.fillStyle=charge.q>0?"#ff674d":"#2e7ef6";ctx.beginPath();ctx.arc(x,y,25,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      ctx.fillStyle="#fff";ctx.font="700 24px Arial";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(charge.q>0?"+":"−",x,y-1);
    });

    const px=sensor.x*w,py=sensor.y*h,f=fieldAt(sensor.x,sensor.y,w,h),mag=Math.hypot(f.x,f.y),ux=mag?f.x/mag:0,uy=mag?f.y/mag:0;
    ctx.strokeStyle="#f8d15e";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px+ux*50,py+uy*50);ctx.stroke();
    ctx.fillStyle="#f8d15e";ctx.beginPath();ctx.arc(px,py,10,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#f8d15e";ctx.font="700 10px Arial";ctx.textAlign="center";ctx.fillText("VOLTAGE PROBE",px,py-20);
    ctx.font="700 11px Arial";ctx.fillText(formatVoltage(potentialAt(sensor.x,sensor.y)),px,py+25);
  }, [charges, sensor, showVectors]);

  const pointerPosition = e => {
    const r=e.currentTarget.getBoundingClientRect();
    return {x:Math.max(.04,Math.min(.96,(e.clientX-r.left)/r.width)),y:Math.max(.08,Math.min(.92,(e.clientY-r.top)/r.height)),w:r.width,h:r.height};
  };
  const startDrag = e => {
    const p=pointerPosition(e);
    const charge=charges.find(c=>Math.hypot((c.x-p.x)*p.w,(c.y-p.y)*p.h)<32);
    const sensorHit=Math.hypot((sensor.x-p.x)*p.w,(sensor.y-p.y)*p.h)<25;
    setDragTarget(charge?{type:"charge",id:charge.id}:sensorHit?{type:"sensor"}:null);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = e => {
    if(!dragTarget)return;
    const p=pointerPosition(e);
    if(dragTarget.type==="sensor") setSensor({x:p.x,y:p.y});
    else setCharges(items=>items.map(c=>c.id===dragTarget.id?{...c,x:p.x,y:p.y}:c));
  };
  const addCharge = q => setCharges(items=>items.length>=8?items:[...items,{id:Date.now(),q,x:.5+(Math.random()-.5)*.14,y:.5+(Math.random()-.5)*.14}]);
  const resetLab=()=>{setCharges([{id:1,q:1,x:.34,y:.5},{id:2,q:-1,x:.66,y:.5}]);setSensor({x:.5,y:.24});};

  return (
    <div className="sim-card field-card">
      <div className="sim-top"><div><span className="eyebrow">Simulator 02 · Sandbox</span><h2>Charges &amp; fields lab</h2></div><div className="status-pill live"><i /> Live field</div></div>
      <div className="field-toolbar">
        <div className="charge-tools"><button onClick={()=>addCharge(1)}><i className="tool-charge positive">+</i> Add positive</button><button onClick={()=>addCharge(-1)}><i className="tool-charge negative">−</i> Add negative</button></div>
        <div className="view-tools"><button className={showVectors?"active":""} onClick={()=>setShowVectors(v=>!v)}>↗ Field vectors</button><button onClick={()=>setCharges([])}>Clear all</button><button onClick={resetLab}>Reset</button></div>
      </div>
      <canvas ref={canvasRef} className="field-canvas" aria-label="Interactive electric field sandbox. Drag charges and the yellow voltage probe." onPointerDown={startDrag} onPointerUp={()=>setDragTarget(null)} onPointerCancel={()=>setDragTarget(null)} onPointerMove={move} />
      <div className="field-controls sandbox-readout">
        <div><span>Charges placed</span><b>{charges.length}</b><small>Drag any charge to reposition it</small></div>
        <div><span>Field at sensor</span><b>{sensorMagnitude>1e6?`${(sensorMagnitude/1e6).toFixed(2)} MN/C`:`${(sensorMagnitude/1000).toFixed(1)} kN/C`}</b><small>Yellow arrow shows the field direction</small></div>
        <div className="voltage-readout"><span>Voltage at probe</span><b>{formatVoltage(sensorVoltage)}</b><small>Drag the yellow probe to measure a new point</small></div>
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
          <article className="lesson-card"><span className="lesson-num">02</span><div className="lesson-icon equation"><MathFormula block>{String.raw`F \propto \frac{q_1q_2}{r^2}`}</MathFormula></div><span className="duration">6 MIN</span><h3>Coulomb's law</h3><p>Calculate the force between any two point charges.</p><a href="#simulator">Explore lesson <ArrowIcon /></a></article>
          <article className="lesson-card"><span className="lesson-num">03</span><div className="lesson-icon field-lines"><span>+</span><i/><i/><i/><i/></div><span className="duration">7 MIN</span><h3>Electric fields</h3><p>Map the force that a charge would feel at every point in space.</p><a href="#field-lesson">Explore lesson <ArrowIcon /></a></article>
          <article className="lesson-card"><span className="lesson-num">04</span><div className="lesson-icon plates"><i/><span>+ + +</span><span>− − −</span><i/></div><span className="duration">7 MIN</span><h3>Electric potential</h3><p>Connect energy, voltage, and the motion of charges.</p><a href="#formula">Explore lesson <ArrowIcon /></a></article>
        </div>
      </section>

      <section className="concept-section" id="charge-lesson">
        <div className="concept-copy"><span className="eyebrow">Quick lesson · Charge</span><h2>Three ideas unlock the chapter.</h2><div className="concept-list"><div><b>01</b><p><strong>Charge is conserved.</strong><span>It can move between objects, but the total amount never changes.</span></p></div><div><b>02</b><p><strong>Charge is quantized.</strong><span>Every charge is a multiple of <MathFormula>{String.raw`e = 1.60 \times 10^{-19}\ \mathrm{C}`}</MathFormula>.</span></p></div><div><b>03</b><p><strong>Forces come in pairs.</strong><span>Each charge pushes or pulls the other with equal magnitude.</span></p></div></div></div>
        <MiniQuiz />
      </section>

      <section className="lab-section"><div className="section-heading inverse"><div><span className="eyebrow">Interactive lab</span><h2>Don’t just read it. Test it.</h2></div><p>Change one variable at a time and watch the physics respond.</p></div><ForceSimulator/><FieldSimulator/></section>

      <section className="formula-section" id="formula">
        <div><span className="eyebrow">Keep this close</span><h2>Your electrostatics toolkit.</h2></div>
        <div className="formula-grid">
          <article><span>01 · FORCE</span><MathFormula block className="toolkit-equation">{String.raw`F = k\frac{\lvert q_1q_2\rvert}{r^2}`}</MathFormula><p><MathFormula>{String.raw`k = 8.99 \times 10^9\ \mathrm{N\,m^2/C^2}`}</MathFormula></p></article>
          <article><span>02 · FIELD</span><MathFormula block className="toolkit-equation">{String.raw`E = \frac{F}{q} = k\frac{\lvert Q\rvert}{r^2}`}</MathFormula><p>Direction: force on a positive test charge</p></article>
          <article><span>03 · POTENTIAL</span><MathFormula block className="toolkit-equation">{String.raw`V = k\frac{Q}{r}`}</MathFormula><p>Potential is a scalar measured in volts</p></article>
        </div>
      </section>

      <footer><a className="brand" href="#"><span><BoltIcon /></span> ELECTROSTATICS <small>LAB 12</small></a><p>Built for curious Physics 12 students.</p><a href="#">Back to top ↑</a></footer>
    </main>
  );
}
