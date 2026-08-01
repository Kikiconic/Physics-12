"use client";

import { useEffect, useRef, useState } from "react";

const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));

export default function RightHandRuleSimulator() {
  const canvasRef = useRef(null);
  const phaseRef = useRef(.18), lastFrameRef = useRef(null);
  const [currentUp, setCurrentUp] = useState(true);
  const [live, setLive] = useState(true);
  const [current, setCurrent] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame;
    const draw = time => {
      if(lastFrameRef.current===null)lastFrameRef.current=time;
      const elapsed=Math.min(time-lastFrameRef.current,50);lastFrameRef.current=time;
      if(live)phaseRef.current+=elapsed*current/3200*(currentUp?-1:1);
      const rect=canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
      if(canvas.width!==Math.round(rect.width*dpr)||canvas.height!==Math.round(rect.height*dpr)){canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);}
      const ctx=canvas.getContext("2d"),w=rect.width,h=rect.height,cx=w/2,cy=h/2;
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      const bg=ctx.createRadialGradient(cx,cy,15,cx,cy,Math.max(w,h)*.65);bg.addColorStop(0,"#12354b");bg.addColorStop(1,"#03101a");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      ctx.fillStyle="rgba(143,201,255,.08)";for(let x=18;x<w;x+=28)for(let y=18;y<h;y+=28){ctx.beginPath();ctx.arc(x,y,1,0,Math.PI*2);ctx.fill();}
      const direction=currentUp?-1:1;
      const fieldCy=cy+h*.2;
      [72,118,166].forEach((radius,index)=>{
        const ry=radius*.28;ctx.strokeStyle=`rgba(143,201,255,${.82-index*.16})`;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(cx,fieldCy,radius,ry,0,0,Math.PI*2);ctx.stroke();
        const base=phaseRef.current+index*.13;
        for(let n=0;n<3;n++){const angle=base+n*Math.PI*2/3,x=cx+Math.cos(angle)*radius,y=fieldCy+Math.sin(angle)*ry,tangent=Math.atan2(Math.cos(angle)*ry*direction,-Math.sin(angle)*radius*direction);ctx.save();ctx.translate(x,y);ctx.rotate(tangent);ctx.fillStyle="#dff4ff";ctx.shadowColor="#8fc9ff";ctx.shadowBlur=10;ctx.beginPath();ctx.moveTo(8,0);ctx.lineTo(-5,-4);ctx.lineTo(-5,4);ctx.closePath();ctx.fill();ctx.restore();}
      });
      const tipY=currentUp?cy-h*.38:cy+h*.38,tailY=currentUp?cy+h*.38:cy-h*.38;ctx.strokeStyle="#f7dc72";ctx.fillStyle="#f7dc72";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(cx,tailY);ctx.lineTo(cx,tipY);ctx.stroke();ctx.beginPath();ctx.moveTo(cx,tipY);ctx.lineTo(cx-10,tipY+(currentUp?16:-16));ctx.lineTo(cx+10,tipY+(currentUp?16:-16));ctx.closePath();ctx.fill();
      ctx.fillStyle="#f7dc72";ctx.font="700 11px DM Mono";ctx.textAlign="left";ctx.fillText(`CURRENT I: ${current.toFixed(1)} A ${currentUp?"UP":"DOWN"}`,cx+24,cy-h*.25);
      ctx.fillStyle="#8fc9ff";ctx.fillText(`CURLED FINGERS = MAGNETIC FIELD B: ${currentUp?"COUNTERCLOCKWISE":"CLOCKWISE"}`,24,h-28);
      if(live)frame=requestAnimationFrame(draw);
    };
    draw(performance.now());return()=>{cancelAnimationFrame(frame);lastFrameRef.current=null;};
  },[currentUp,live,current]);

  return <div className="sim-card ampere-card">
    <div className="sim-top"><div><span className="eyebrow">Simulator 03</span><h2>Ampère&apos;s right-hand rule</h2></div><div className="status-pill live"><i/>Right-hand grip rule</div></div>
    <div className="ampere-layout">
      <div className="ampere-canvas-wrap"><canvas ref={canvasRef} className="ampere-canvas" aria-label="Ampere right-hand rule around a straight current-carrying wire"/></div>
      <div className="ampere-panel">
        <div className="finger-key"><span className="thumb-key">Thumb</span><b>Conventional current, I</b><p>Point your right thumb in the direction of conventional current.</p></div>
        <div className="finger-key"><span className="index-key">Curled fingers</span><b>Magnetic field, B</b><p>Your curled fingers show the direction of the magnetic field around the wire.</p></div>
        <div className="ampere-controls"><label>Current strength <strong>{current.toFixed(1)} A</strong><input type="range" min="1" max="6" step="0.5" value={current} onChange={e=>setCurrent(+e.target.value)}/></label><button type="button" onClick={()=>setCurrentUp(value=>!value)}>Reverse current</button><button type="button" className={live?"active":""} onClick={()=>setLive(value=>!value)}>{live?"Pause field":"Start field"}</button></div>
      </div>
    </div>
    <div className="ampere-result"><div><span>Thumb</span><strong>Current {currentUp?"up":"down"}</strong></div><div><span>Curled fingers</span><strong>Field {currentUp?"counterclockwise":"clockwise"}</strong></div></div>
    <p className="magnetic-explanation">Reverse the current and the magnetic field reverses. Ampère&apos;s right-hand rule shows magnetic-field direction; it does not show magnetic force.</p>
  </div>;
}

export function CurrentLoopRuleSimulator() {
  const canvasRef=useRef(null),phaseRef=useRef(.2),fieldFlowRef=useRef(.12),lastFrameRef=useRef(null);
  const [counterclockwise,setCounterclockwise]=useState(true);
  const [live,setLive]=useState(true);
  const [current,setCurrent]=useState(3);

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;let frame;
    const draw=time=>{
      if(lastFrameRef.current===null)lastFrameRef.current=time;
      const elapsed=Math.min(time-lastFrameRef.current,50);lastFrameRef.current=time;
      const direction=counterclockwise?-1:1;
      if(live){phaseRef.current+=elapsed*current/3200*direction;fieldFlowRef.current=(fieldFlowRef.current+elapsed*current/5200)%1;}
      const rect=canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
      if(canvas.width!==Math.round(rect.width*dpr)||canvas.height!==Math.round(rect.height*dpr)){canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);}
      const ctx=canvas.getContext("2d"),w=rect.width,h=rect.height,cx=w/2,cy=h/2;
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      const bg=ctx.createRadialGradient(cx,cy,15,cx,cy,Math.max(w,h)*.65);bg.addColorStop(0,"#12354b");bg.addColorStop(1,"#03101a");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      ctx.fillStyle="rgba(143,201,255,.08)";for(let x=18;x<w;x+=28)for(let y=18;y<h;y+=28){ctx.beginPath();ctx.arc(x,y,1,0,Math.PI*2);ctx.fill();}
      const radius=Math.min(w,h)*.34,loopHeight=radius*.3,fieldTop=cy-radius*.95,fieldBottom=cy+radius*.95;
      const fieldTip=counterclockwise?fieldTop:fieldBottom,fieldTail=counterclockwise?fieldBottom:fieldTop;
      const northY=counterclockwise?fieldTop:fieldBottom,southY=counterclockwise?fieldBottom:fieldTop,fieldFlow=fieldFlowRef.current;
      [radius*.72,radius*1.02,radius*1.3].forEach((spread,index)=>[-1,1].forEach(side=>{const a={x:cx,y:northY},b={x:cx+side*spread,y:northY},c={x:cx+side*spread,y:southY},d={x:cx,y:southY};ctx.strokeStyle=`rgba(143,201,255,${.64-index*.12})`;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.bezierCurveTo(b.x,b.y,c.x,c.y,d.x,d.y);ctx.stroke();const arrowT=.56,am=1-arrowT,ax=am**3*a.x+3*am**2*arrowT*b.x+3*am*arrowT**2*c.x+arrowT**3*d.x,ay=am**3*a.y+3*am**2*arrowT*b.y+3*am*arrowT**2*c.y+arrowT**3*d.y,adx=3*am**2*(b.x-a.x)+6*am*arrowT*(c.x-b.x)+3*arrowT**2*(d.x-c.x),ady=3*am**2*(b.y-a.y)+6*am*arrowT*(c.y-b.y)+3*arrowT**2*(d.y-c.y);ctx.save();ctx.translate(ax,ay);ctx.rotate(Math.atan2(ady,adx));ctx.fillStyle="#8fc9ff";ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(-6,-5);ctx.lineTo(-6,5);ctx.closePath();ctx.fill();ctx.restore();if(!live||fieldFlow>=.35){const t=live?clamp((fieldFlow-.35)/.65,0,1):.45,mt=1-t,px=mt**3*a.x+3*mt**2*t*b.x+3*mt*t*t*c.x+t**3*d.x,py=mt**3*a.y+3*mt**2*t*b.y+3*mt*t*t*c.y+t**3*d.y;ctx.fillStyle="#fff";ctx.shadowColor="#8fc9ff";ctx.shadowBlur=12;ctx.beginPath();ctx.arc(px,py,5,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}}));
      ctx.strokeStyle="#8fc9ff";ctx.fillStyle="#8fc9ff";ctx.lineWidth=8;ctx.shadowColor="rgba(143,201,255,.65)";ctx.shadowBlur=18;ctx.beginPath();ctx.moveTo(cx,fieldTail);ctx.lineTo(cx,fieldTip);ctx.stroke();ctx.beginPath();ctx.moveTo(cx,fieldTip);ctx.lineTo(cx-13,fieldTip+(counterclockwise?20:-20));ctx.lineTo(cx+13,fieldTip+(counterclockwise?20:-20));ctx.closePath();ctx.fill();ctx.shadowBlur=0;
      if(!live||fieldFlow<.35){const t=live?fieldFlow/.35:.45,fieldDotY=fieldTail+(fieldTip-fieldTail)*t;ctx.fillStyle="#fff";ctx.shadowColor="#8fc9ff";ctx.shadowBlur=12;ctx.beginPath();ctx.arc(cx,fieldDotY,6,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}
      ctx.strokeStyle="#f7dc72";ctx.lineWidth=12;ctx.shadowColor="rgba(247,220,114,.5)";ctx.shadowBlur=18;ctx.beginPath();ctx.ellipse(cx,cy,radius,loopHeight,0,0,Math.PI*2);ctx.stroke();ctx.shadowBlur=0;
      for(let n=0;n<6;n++){const angle=phaseRef.current+n*Math.PI/3,x=cx+Math.cos(angle)*radius,y=cy+Math.sin(angle)*loopHeight,tangent=Math.atan2(Math.cos(angle)*loopHeight*direction,-Math.sin(angle)*radius*direction);ctx.save();ctx.translate(x,y);ctx.rotate(tangent);ctx.fillStyle="#fff7c9";ctx.shadowColor="#f7dc72";ctx.shadowBlur=12;ctx.beginPath();ctx.moveTo(15,0);ctx.lineTo(-9,-7);ctx.lineTo(-9,7);ctx.closePath();ctx.fill();ctx.restore();}
      ctx.fillStyle="#8fc9ff";ctx.font="800 13px DM Mono";ctx.textAlign="left";ctx.fillText(`MAGNETIC FIELD B ${counterclockwise?"UP":"DOWN"}`,cx+24,counterclockwise?fieldTop+12:fieldBottom-8);
      ctx.fillStyle="#fff";ctx.font="800 25px Manrope";ctx.textAlign="center";ctx.fillText(counterclockwise?"NORTH ABOVE · SOUTH BELOW":"SOUTH ABOVE · NORTH BELOW",cx,55);
      ctx.fillStyle="#f7dc72";ctx.font="700 11px DM Mono";ctx.fillText(`${counterclockwise?"COUNTERCLOCKWISE":"CLOCKWISE"} CURRENT · ${current.toFixed(1)} A`,cx,h-28);
      if(live)frame=requestAnimationFrame(draw);
    };
    draw(performance.now());return()=>{cancelAnimationFrame(frame);lastFrameRef.current=null;};
  },[counterclockwise,live,current]);

  return <div className="sim-card ampere-card">
    <div className="sim-top"><div><span className="eyebrow">Simulator 04</span><h2>Right-hand rule for a current loop</h2></div><div className="status-pill live"><i/>Single-loop rule</div></div>
    <div className="ampere-layout">
      <div className="ampere-canvas-wrap"><canvas ref={canvasRef} className="ampere-canvas" aria-label="Right-hand rule for a single current loop"/></div>
      <div className="ampere-panel">
        <div className="finger-key"><span className="thumb-key">Curled fingers</span><b>Current around the loop</b><p>Curl the fingers of your right hand in the direction of conventional current.</p></div>
        <div className="finger-key"><span className="index-key">Thumb</span><b>Magnetic field and north side</b><p>Your thumb shows the magnetic field through the centre and points toward the north side of the loop.</p></div>
        <div className="ampere-controls"><label>Current strength <strong>{current.toFixed(1)} A</strong><input type="range" min="1" max="6" step="0.5" value={current} onChange={e=>setCurrent(+e.target.value)}/></label><button type="button" onClick={()=>setCounterclockwise(value=>!value)}>Reverse current</button><button type="button" className={live?"active":""} onClick={()=>setLive(value=>!value)}>{live?"Pause current":"Start current"}</button></div>
      </div>
    </div>
    <div className="ampere-result"><div><span>Curled fingers</span><strong>{counterclockwise?"Counterclockwise":"Clockwise"} current</strong></div><div><span>Thumb</span><strong>Field points {counterclockwise?"up":"down"} through the loop</strong></div></div>
    <p className="magnetic-explanation">The loop acts like a small bar magnet. The field travels from south to north through the centre, then curves around outside from north back to south. Reversing the current reverses the field and exchanges the poles.</p>
  </div>;
}
