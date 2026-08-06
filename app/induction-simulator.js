"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
const finiteOr=(value,fallback=0)=>Number.isFinite(value)?value:fallback;

export default function InductionSimulator(){
  const canvasRef=useRef(null),magnetXRef=useRef(.22),velocityRef=useRef(0),dragRef=useRef(false),lastMoveRef=useRef(null),frameRef=useRef(null);
  const [readout,setReadout]=useState({emf:0,current:0,direction:"No current",brightness:0});
  const [showField,setShowField]=useState(false);

  const reset=useCallback(()=>{magnetXRef.current=.22;velocityRef.current=0;lastMoveRef.current=null;setReadout({emf:0,current:0,direction:"No current",brightness:0});},[]);

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const positionFromEvent=event=>{const rect=canvas.getBoundingClientRect();return clamp((event.clientX-rect.left)/rect.width,.09,.88);};
    const down=event=>{const x=positionFromEvent(event);if(Math.abs(x-magnetXRef.current)<.14){dragRef.current=true;lastMoveRef.current={x,time:performance.now()};canvas.setPointerCapture(event.pointerId);}};
    const move=event=>{if(!dragRef.current)return;const now=performance.now(),x=positionFromEvent(event),last=lastMoveRef.current;if(last){const dt=Math.max(finiteOr((now-last.time)/1000,.016),.016);velocityRef.current=clamp(finiteOr((x-last.x)/dt),-2.4,2.4);}magnetXRef.current=finiteOr(x,.22);lastMoveRef.current={x:magnetXRef.current,time:now};};
    const up=event=>{dragRef.current=false;lastMoveRef.current=null;if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);};
    canvas.addEventListener("pointerdown",down);canvas.addEventListener("pointermove",move);canvas.addEventListener("pointerup",up);canvas.addEventListener("pointercancel",up);
    return()=>{canvas.removeEventListener("pointerdown",down);canvas.removeEventListener("pointermove",move);canvas.removeEventListener("pointerup",up);canvas.removeEventListener("pointercancel",up);};
  },[]);

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;let last=performance.now(),lastUpdate=0;
    const draw=time=>{
      const dt=Math.min((time-last)/1000,.05);last=time;if(!dragRef.current)velocityRef.current*=Math.pow(.025,dt);
      const rect=canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1,w=rect.width,h=rect.height;
      if(!Number.isFinite(w)||!Number.isFinite(h)||w<=0||h<=0){frameRef.current=requestAnimationFrame(draw);return;}
      if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}
      const ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      const bg=ctx.createLinearGradient(0,0,0,h);bg.addColorStop(0,"#061725");bg.addColorStop(1,"#020b12");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      ctx.fillStyle="rgba(143,201,255,.07)";for(let x=18;x<w;x+=30)for(let y=18;y<h;y+=30){ctx.beginPath();ctx.arc(x,y,1,0,Math.PI*2);ctx.fill();}
      const mx=magnetXRef.current*w,my=h*.47,magnetW=Math.min(170,w*.22),magnetH=70,coilX=w*.68,coilW=Math.min(185,w*.24),coilH=150;
      const distance=finiteOr((mx-coilX)/(w*.26)),coupling=finiteOr(Math.exp(-distance*distance*1.45)),emf=clamp(finiteOr(-velocityRef.current*coupling*5.4),-8,8),current=finiteOr(emf/12),brightness=clamp(finiteOr(Math.abs(emf)/6),0,1),direction=Math.abs(emf)<.06?"No current":emf>0?"Counterclockwise":"Clockwise";
      // Complete magnetic-field loops: N to S outside, S to N inside.
      if(showField){
        const southX=mx-magnetW/2,northX=mx+magnetW/2,drawArrow=(x,y,angle)=>{ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.fillStyle="#8fc9ff";ctx.shadowColor="#8fc9ff";ctx.shadowBlur=8;ctx.beginPath();ctx.moveTo(10,0);ctx.lineTo(-6,-5);ctx.lineTo(-6,5);ctx.closePath();ctx.fill();ctx.restore();};
        ctx.lineWidth=2;[58,88,120,154].forEach((spread,index)=>{const alpha=.82-index*.12;ctx.strokeStyle=`rgba(143,201,255,${alpha})`;[-1,1].forEach(side=>{const y=my+side*magnetH*.18;ctx.beginPath();ctx.moveTo(northX,y);ctx.bezierCurveTo(northX+spread,my+side*spread,southX-spread,my+side*spread,southX,y);ctx.stroke();drawArrow(mx,my+side*spread*.92,side>0?Math.PI:Math.PI);});});
        [-15,0,15].forEach(offset=>{ctx.strokeStyle="rgba(143,201,255,.92)";ctx.beginPath();ctx.moveTo(southX+8,my+offset);ctx.lineTo(northX-8,my+offset);ctx.stroke();drawArrow(mx,my+offset,0);});
        ctx.fillStyle="#8fc9ff";ctx.font="700 9px DM Mono";ctx.textAlign="center";ctx.fillText("OUTSIDE: N → S",mx,my-magnetH/2-52);ctx.fillText("INSIDE: S → N",mx,my+4);
      }
      // Coil and circuit
      ctx.strokeStyle="#d68b45";ctx.lineWidth=7;ctx.shadowColor="rgba(214,139,69,.35)";ctx.shadowBlur=10;for(let i=0;i<8;i++){const x=coilX-coilW/2+i*coilW/7;ctx.beginPath();ctx.ellipse(x,my,13,coilH/2,0,0,Math.PI*2);ctx.stroke();}ctx.shadowBlur=0;
      const bulbX=w*.86,bulbY=h*.27;ctx.strokeStyle="#a9c4d5";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(coilX+coilW/2,my);ctx.lineTo(bulbX, my);ctx.lineTo(bulbX,bulbY+38);ctx.moveTo(coilX-coilW/2,my);ctx.lineTo(coilX-coilW/2,h*.78);ctx.lineTo(bulbX,h*.78);ctx.lineTo(bulbX,bulbY-38);ctx.stroke();
      const light=clamp(finiteOr(Math.pow(brightness,.68)*1.35),0,1),glowRadius=finiteOr(65+light*115,65);const glow=ctx.createRadialGradient(bulbX,bulbY,2,bulbX,bulbY,glowRadius);glow.addColorStop(0,`rgba(255,255,240,${light})`);glow.addColorStop(.18,`rgba(255,235,90,${light*.96})`);glow.addColorStop(.48,`rgba(255,194,35,${light*.48})`);glow.addColorStop(1,"rgba(255,160,15,0)");ctx.fillStyle=glow;ctx.beginPath();ctx.arc(bulbX,bulbY,glowRadius,0,Math.PI*2);ctx.fill();if(light>.18){ctx.strokeStyle=`rgba(255,231,100,${light*.72})`;ctx.lineWidth=2;for(let ray=0;ray<12;ray++){const angle=ray*Math.PI/6,inner=42+light*8,outer=52+light*42;ctx.beginPath();ctx.moveTo(bulbX+Math.cos(angle)*inner,bulbY+Math.sin(angle)*inner);ctx.lineTo(bulbX+Math.cos(angle)*outer,bulbY+Math.sin(angle)*outer);ctx.stroke();}}ctx.fillStyle=`rgb(${145+light*110},${148+light*107},${120+light*135})`;ctx.strokeStyle=light>.28?"#fffde7":"#e8eef2";ctx.shadowColor="#ffe45e";ctx.shadowBlur=light*55;ctx.lineWidth=3;ctx.beginPath();ctx.arc(bulbX,bulbY,28,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.strokeStyle=light>.45?"#fff6a8":"#4d5d67";ctx.beginPath();ctx.moveTo(bulbX-11,bulbY+5);ctx.lineTo(bulbX,bulbY-8);ctx.lineTo(bulbX+11,bulbY+5);ctx.stroke();
      // Current arrows
      if(brightness>.02){ctx.fillStyle=emf>0?"#f7dc72":"#8fc9ff";const arrowY=h*.78,arrowX=coilX+(bulbX-coilX)*.55,sign=emf>0?1:-1;ctx.beginPath();ctx.moveTo(arrowX+sign*12,arrowY);ctx.lineTo(arrowX-sign*8,arrowY-7);ctx.lineTo(arrowX-sign*8,arrowY+7);ctx.closePath();ctx.fill();}
      // Bar magnet
      ctx.shadowColor="rgba(0,0,0,.45)";ctx.shadowBlur=18;ctx.fillStyle="#ef5b68";ctx.fillRect(mx-magnetW/2,my-magnetH/2,magnetW/2,magnetH);ctx.fillStyle="#318ee1";ctx.fillRect(mx,my-magnetH/2,magnetW/2,magnetH);ctx.shadowBlur=0;ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.strokeRect(mx-magnetW/2,my-magnetH/2,magnetW,magnetH);ctx.fillStyle="#fff";ctx.font="800 25px Manrope";ctx.textAlign="center";ctx.fillText("S",mx-magnetW/4,my+9);ctx.fillText("N",mx+magnetW/4,my+9);
      if(showField){ctx.strokeStyle="rgba(143,201,255,.96)";ctx.lineWidth=2;[-20,20].forEach(offset=>{ctx.beginPath();ctx.moveTo(mx-magnetW/2+8,my+offset);ctx.lineTo(mx+magnetW/2-8,my+offset);ctx.stroke();ctx.save();ctx.translate(mx,my+offset);ctx.fillStyle="#dff4ff";ctx.shadowColor="#8fc9ff";ctx.shadowBlur=9;ctx.beginPath();ctx.moveTo(9,0);ctx.lineTo(-6,-5);ctx.lineTo(-6,5);ctx.closePath();ctx.fill();ctx.restore();});}
      ctx.fillStyle="#f7dc72";ctx.font="700 11px DM Mono";ctx.fillText("DRAG THE MAGNET",mx,my-magnetH/2-18);ctx.fillStyle="#a9c4d5";ctx.fillText("SOLENOID",coilX,my+coilH/2+28);ctx.fillText("BULB",bulbX,bulbY-44);
      if(time-lastUpdate>70){lastUpdate=time;setReadout({emf,current,direction,brightness});}
      frameRef.current=requestAnimationFrame(draw);
    };frameRef.current=requestAnimationFrame(draw);return()=>cancelAnimationFrame(frameRef.current);
  },[showField]);

  return <div className="sim-card induction-sim-card">
    <div className="sim-top"><div><span className="eyebrow">Simulator 01</span><h2>Magnet, solenoid, and induced EMF</h2></div><div className={`status-pill ${readout.brightness>.03?"live":""}`}><i/>{readout.brightness>.03?"EMF induced":"No changing flux"}</div></div>
    <p className="induction-intro">Drag the bar magnet into or out of the solenoid. Motion changes the magnetic flux, producing an induced EMF and current that lights the bulb.</p>
    <div className="induction-toolbar"><button type="button" className={showField?"active":""} onClick={()=>setShowField(value=>!value)}><i/>{showField?"Hide magnetic field":"Show magnetic field"}</button></div>
    <canvas ref={canvasRef} className="induction-canvas" aria-label="Draggable bar magnet inducing current in a solenoid and lighting a bulb"/>
    <div className="induction-readout"><div><span>Induced EMF</span><strong>{Math.abs(readout.emf)<.01?"0.00":readout.emf.toFixed(2)} V</strong></div><div><span>Current</span><strong>{Math.abs(readout.current)<.01?"0.00":readout.current.toFixed(2)} A</strong></div><div><span>Direction</span><strong>{readout.direction}</strong></div><div><span>Bulb</span><strong>{readout.brightness<.03?"Off":readout.brightness>.65?"Bright":"Dim"}</strong></div></div>
    <div className="induction-actions"><button type="button" onClick={reset}>Reset magnet</button><p>Move faster for a brighter bulb. Stop the magnet and the induced EMF returns to zero.</p></div>
  </div>;
}
