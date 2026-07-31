"use client";

import { useEffect, useRef, useState } from "react";

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
