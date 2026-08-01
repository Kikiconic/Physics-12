"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

function fieldAt(point, strength, earth, magnet = { x: .5, y: .5 }, solenoid = false) {
  const angle = earth ? -Math.PI / 2 : 0;
  const dx = point.x - magnet.x, dy = point.y - magnet.y;
  const x = dx * Math.cos(angle) + dy * Math.sin(angle);
  const y = -dx * Math.sin(angle) + dy * Math.cos(angle);
  let bx, by;
  if (Math.abs(x) < .17 && Math.abs(y) < .065) {
    bx = -(solenoid ? 150 : 82) * strength; by = 0;
  } else {
    const r2 = Math.max(x * x + y * y, .0064), r = Math.sqrt(r2), dot = -x / r;
    const scale = 1.05 * strength / (r2 * r);
    bx = scale * (3 * dot * x / r + 1);
    by = scale * (3 * dot * y / r);
    const magnitude = Math.hypot(bx, by), maximum = solenoid ? 70 * strength : 180;
    if (magnitude > maximum) { bx *= maximum / magnitude; by *= maximum / magnitude; }
  }
  return { x: bx * Math.cos(angle) - by * Math.sin(angle), y: bx * Math.sin(angle) + by * Math.cos(angle) };
}

function Toggle({ children, active, onClick }) {
  return <button type="button" className={active ? "active" : ""} aria-pressed={active} onClick={onClick}><i />{children}</button>;
}

export default function MagneticBarSimulator({ variant = "bar" }) {
  const isSolenoid = variant === "solenoid";
  const canvasRef = useRef(null), drag = useRef(null);
  const flowRef = useRef(.25), lastFrameRef = useRef(null);
  const [showField, setShowField] = useState(true), [showInside, setShowInside] = useState(true);
  const [earth, setEarth] = useState(false), [compass, setCompass] = useState(true);
  const [meter, setMeter] = useState(true), [live, setLive] = useState(true);
  const [strength, setStrength] = useState(1);
  const [compassPos, setCompassPos] = useState({ x: .77, y: .3 });
  const [meterPos, setMeterPos] = useState({ x: .76, y: .72 });
  const [magnetPos, setMagnetPos] = useState({ x: .5, y: .5 });
  const reading = useMemo(() => {
    const f = fieldAt(meterPos, strength, earth, magnetPos, isSolenoid);
    return { bx: f.x, by: -f.y, b: Math.hypot(f.x, f.y), theta: Math.atan2(-f.y, f.x) * 180 / Math.PI };
  }, [meterPos, strength, earth, magnetPos, isSolenoid]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame;
    const draw = time => {
      if(lastFrameRef.current===null)lastFrameRef.current=time;
      const elapsed=Math.min(time-lastFrameRef.current,50);lastFrameRef.current=time;
      if(live)flowRef.current=(flowRef.current+elapsed*strength/4200)%1;
      const rect = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      if (canvas.width !== Math.round(rect.width*dpr) || canvas.height !== Math.round(rect.height*dpr)) { canvas.width=Math.round(rect.width*dpr); canvas.height=Math.round(rect.height*dpr); }
      const ctx=canvas.getContext("2d"), w=rect.width, h=rect.height, cx=magnetPos.x*w, cy=magnetPos.y*h;
      ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,w,h);
      const bg=ctx.createRadialGradient(cx,cy,20,cx,cy,Math.max(w,h)*.7); bg.addColorStop(0,"#102e43");bg.addColorStop(1,"#03101a");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      ctx.fillStyle="rgba(143,201,255,.08)";for(let x=18;x<w;x+=28)for(let y=18;y<h;y+=28){ctx.beginPath();ctx.arc(x,y,1,0,Math.PI*2);ctx.fill();}
      const rotation=earth?-Math.PI/2:0;
      const flow=flowRef.current;
      if(earth){const radius=Math.min(w,h)*.39;ctx.save();ctx.translate(w/2,h/2);const globe=ctx.createRadialGradient(-radius*.25,-radius*.3,5,0,0,radius);globe.addColorStop(0,"rgba(70,154,207,.32)");globe.addColorStop(1,"rgba(11,51,78,.16)");ctx.fillStyle=globe;ctx.strokeStyle="rgba(143,201,255,.45)";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.strokeStyle="rgba(143,201,255,.15)";ctx.beginPath();ctx.ellipse(0,0,radius*.42,radius,0,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.ellipse(0,0,radius,radius*.35,0,0,Math.PI*2);ctx.stroke();ctx.fillStyle="#a9c4d5";ctx.font="600 11px DM Mono";ctx.textAlign="center";ctx.fillText("GEOGRAPHIC NORTH",0,-radius-12);ctx.restore();}
      ctx.save();ctx.translate(cx,cy);ctx.rotate(rotation);
      if(showField){[.1,.15,.21,.28,.36,.45].forEach((bend,index)=>[-1,1].forEach(side=>{const start=-w*.17,end=w*.17,lift=h*bend*side,a={x:start,y:0},b={x:start-w*.11,y:lift},c={x:end+w*.11,y:lift},d={x:end,y:0};ctx.strokeStyle=`rgba(143,201,255,${.62-index*.055})`;ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(start,0);ctx.bezierCurveTo(b.x,b.y,c.x,c.y,end,0);ctx.stroke();const arrowT=.56,am=1-arrowT,ax=am**3*a.x+3*am**2*arrowT*b.x+3*am*arrowT**2*c.x+arrowT**3*d.x,ay=am**3*a.y+3*am**2*arrowT*b.y+3*am*arrowT**2*c.y+arrowT**3*d.y,adx=3*am**2*(b.x-a.x)+6*am*arrowT*(c.x-b.x)+3*arrowT**2*(d.x-c.x),ady=3*am**2*(b.y-a.y)+6*am*arrowT*(c.y-b.y)+3*arrowT**2*(d.y-c.y);ctx.save();ctx.translate(ax,ay);ctx.rotate(Math.atan2(ady,adx));ctx.fillStyle="#8fc9ff";ctx.beginPath();ctx.moveTo(7,0);ctx.lineTo(-4,-4);ctx.lineTo(-4,4);ctx.closePath();ctx.fill();ctx.restore();const t=live?Math.min(flow/.72,1):.35,mt=1-t,px=mt**3*a.x+3*mt**2*t*b.x+3*mt*t*t*c.x+t**3*d.x,py=mt**3*a.y+3*mt**2*t*b.y+3*mt*t*t*c.y+t**3*d.y;if(!live||flow<.72){ctx.fillStyle="#e7f6ff";ctx.shadowColor="#8fc9ff";ctx.shadowBlur=10;ctx.beginPath();ctx.arc(px,py,3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}}));}
      const mw=Math.min(w*.34,330),mh=Math.min(h*.16,86);
      if(isSolenoid){
        const coreGlow=ctx.createLinearGradient(-mw/2,0,mw/2,0);coreGlow.addColorStop(0,"rgba(143,201,255,.08)");coreGlow.addColorStop(.5,"rgba(143,201,255,.32)");coreGlow.addColorStop(1,"rgba(143,201,255,.08)");ctx.shadowColor="rgba(143,201,255,.55)";ctx.shadowBlur=22;ctx.fillStyle=coreGlow;ctx.fillRect(-mw/2,-mh*.29,mw,mh*.58);ctx.shadowBlur=0;
        ctx.strokeStyle="#8fc9ff";ctx.lineWidth=4;
        for(let i=0;i<11;i++){const x=-mw/2+i*mw/10;ctx.beginPath();ctx.ellipse(x,0,mw*.035,mh*.5,0,0,Math.PI*2);ctx.stroke();}
        ctx.strokeStyle="rgba(255,255,255,.55)";ctx.lineWidth=1.5;ctx.strokeRect(-mw/2,-mh*.29,mw,mh*.58);
        ctx.fillStyle="#fff";ctx.font="800 18px Manrope";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("N",-mw*.58,0);ctx.fillText("S",mw*.58,0);
        ctx.fillStyle="#8fc9ff";ctx.font="700 9px DM Mono";ctx.fillText("CURRENT-CARRYING COIL",0,mh*.72);
      }else{
        ctx.shadowColor="rgba(0,0,0,.45)";ctx.shadowBlur=18;ctx.fillStyle="#287fc4";ctx.fillRect(-mw/2,-mh/2,mw/2,mh);ctx.fillStyle="#d64f59";ctx.fillRect(0,-mh/2,mw/2,mh);ctx.shadowBlur=0;ctx.strokeStyle="rgba(255,255,255,.72)";ctx.lineWidth=2;ctx.strokeRect(-mw/2,-mh/2,mw,mh);ctx.fillStyle="#fff";ctx.font=`800 ${Math.max(24,mh*.43)}px Manrope`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("N",-mw/4,0);ctx.fillText("S",mw/4,0);
      }
      if(showInside){
        ctx.strokeStyle="#f7dc72";ctx.fillStyle="#f7dc72";ctx.lineWidth=isSolenoid?3:2;
        const insideProgress=live?clamp((flow-.72)/.28,0,1):.35;
        const insideRows=isSolenoid?[-mh*.3,-mh*.1,mh*.1,mh*.3]:[-mh*.31,mh*.31],insideReach=isSolenoid?.35:.13;
        insideRows.forEach(y=>{
          ctx.beginPath();ctx.moveTo(mw*insideReach,y);ctx.lineTo(-mw*insideReach,y);ctx.stroke();
          ctx.beginPath();ctx.moveTo(-mw*insideReach,y);ctx.lineTo(-mw*(insideReach-.04),y-3.5);ctx.lineTo(-mw*(insideReach-.04),y+3.5);ctx.closePath();ctx.fill();
          if(!live||flow>=.72){const dotX=mw*.42-insideProgress*mw*.84;ctx.fillStyle="#fff";ctx.shadowColor="#f7dc72";ctx.shadowBlur=isSolenoid?14:9;ctx.beginPath();ctx.arc(dotX,y,isSolenoid?3.7:3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle="#f7dc72";}
        });
      }ctx.restore();
      if(showField){for(let y=.08;y<.95;y+=.09)for(let x=.05;x<.97;x+=.075){if(Math.abs(x-magnetPos.x)<.2&&Math.abs(y-magnetPos.y)<.1)continue;const f=fieldAt({x,y},strength,earth,magnetPos,isSolenoid),m=Math.hypot(f.x,f.y),len=clamp(7+Math.log(m+1)*2,8,17),ang=Math.atan2(f.y,f.x),px=x*w,py=y*h;ctx.save();ctx.translate(px,py);ctx.rotate(ang);ctx.strokeStyle="rgba(143,201,255,.48)";ctx.fillStyle="rgba(143,201,255,.65)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-len/2,0);ctx.lineTo(len/2,0);ctx.stroke();ctx.beginPath();ctx.moveTo(len/2,0);ctx.lineTo(len/2-4,-3);ctx.lineTo(len/2-4,3);ctx.closePath();ctx.fill();ctx.restore();}}
      const drawCompass=(p,label)=>{const px=p.x*w,py=p.y*h,f=fieldAt(p,strength,earth,magnetPos,isSolenoid),ang=Math.atan2(f.y,f.x);ctx.save();ctx.translate(px,py);ctx.fillStyle="rgba(3,16,26,.9)";ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,27,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.rotate(ang);ctx.fillStyle="#ef5b68";ctx.beginPath();ctx.moveTo(22,0);ctx.lineTo(-4,-6);ctx.lineTo(-4,6);ctx.closePath();ctx.fill();ctx.fillStyle="#dbe8ef";ctx.beginPath();ctx.moveTo(-22,0);ctx.lineTo(4,-6);ctx.lineTo(4,6);ctx.closePath();ctx.fill();ctx.restore();ctx.fillStyle="#fff";ctx.font="700 9px DM Mono";ctx.textAlign="center";ctx.fillText(label,px,py+42);};
      if(compass)drawCompass(compassPos,"DRAG COMPASS");if(meter){const px=meterPos.x*w,py=meterPos.y*h;ctx.strokeStyle="#f7dc72";ctx.lineWidth=2;ctx.beginPath();ctx.arc(px,py,14,0,Math.PI*2);ctx.moveTo(px-20,py);ctx.lineTo(px+20,py);ctx.moveTo(px,py-20);ctx.lineTo(px,py+20);ctx.stroke();ctx.fillStyle="#f7dc72";ctx.font="700 9px DM Mono";ctx.textAlign="center";ctx.fillText("FIELD METER",px,py+35);}if(live)frame=requestAnimationFrame(draw);
    };
    draw(performance.now());return()=>{cancelAnimationFrame(frame);lastFrameRef.current=null;};
  },[showField,showInside,earth,compass,meter,live,strength,compassPos,meterPos,magnetPos,isSolenoid]);

  const pointer=e=>{const r=e.currentTarget.getBoundingClientRect(),p={x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height};if(e.type==="pointerdown"){const dc=Math.hypot(p.x-compassPos.x,p.y-compassPos.y),dm=Math.hypot(p.x-meterPos.x,p.y-meterPos.y),dx=p.x-magnetPos.x,dy=p.y-magnetPos.y,insideMagnet=earth?(Math.abs(dx)<.07&&Math.abs(dy)<.2):(Math.abs(dx)<.2&&Math.abs(dy)<.09);drag.current=compass&&dc<.08?"compass":meter&&dm<.08?"meter":insideMagnet?"magnet":null;e.currentTarget.setPointerCapture(e.pointerId);}if(drag.current){if(drag.current==="compass")setCompassPos({x:clamp(p.x,.05,.95),y:clamp(p.y,.08,.92)});else if(drag.current==="meter")setMeterPos({x:clamp(p.x,.05,.95),y:clamp(p.y,.08,.92)});else setMagnetPos({x:clamp(p.x,.2,.8),y:clamp(p.y,.18,.82)});}};

  return <div className="sim-card magnetic-sim-card"><div className="sim-top"><div><span className="eyebrow">Simulator {isSolenoid ? "02" : "01"}</span><h2>{isSolenoid ? "Solenoid and magnetic field" : "Bar magnet and magnetic field"}</h2></div><div className="status-pill live"><i/>Interactive model</div></div><div className="magnetic-toolbar"><Toggle active={showField} onClick={()=>setShowField(v=>!v)}>Field arrows</Toggle><Toggle active={showInside} onClick={()=>setShowInside(v=>!v)}>Inside field</Toggle><Toggle active={earth} onClick={()=>setEarth(v=>!v)}>Earth view</Toggle><Toggle active={compass} onClick={()=>setCompass(v=>!v)}>Compass</Toggle><Toggle active={meter} onClick={()=>setMeter(v=>!v)}>Field meter</Toggle><Toggle active={live} onClick={()=>setLive(v=>!v)}>Live motion</Toggle></div><canvas ref={canvasRef} className="magnetic-canvas" aria-label={`Interactive ${isSolenoid ? "solenoid" : "bar magnet"} field simulator`} onPointerDown={pointer} onPointerMove={pointer} onPointerUp={()=>drag.current=null} onPointerCancel={()=>drag.current=null}/><div className="magnetic-controls"><label>Relative magnetic field strength <strong>{strength.toFixed(1)}×</strong><input type="range" min="0.5" max="2.5" step="0.1" value={strength} onChange={e=>setStrength(+e.target.value)}/></label>{meter?<div className="magnetic-meter-readout"><div><span>B</span><b>{reading.b.toFixed(1)} μT</b></div><div><span>B<sub>x</sub></span><b>{reading.bx.toFixed(1)} μT</b></div><div><span>B<sub>y</sub></span><b>{reading.by.toFixed(1)} μT</b></div><div><span>θ</span><b>{reading.theta.toFixed(1)}°</b></div></div>:<p className="magnetic-hint">Turn on the field meter to measure the field.</p>}</div><p className="magnetic-explanation">Outside the {isSolenoid ? "solenoid" : "magnet"}, the field points from N to S. Inside, it points from S to N. Drag the {isSolenoid ? "solenoid" : "magnet"}, compass, and field meter to investigate different locations.</p></div>;
}
