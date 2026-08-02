"use client";

import { useEffect, useRef, useState } from "react";

export default function MotorRuleSimulator(){
  const canvasRef=useRef(null);
  const [currentUp,setCurrentUp]=useState(true);
  const [fieldRight,setFieldRight]=useState(true);

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const rect=canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1;
    canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);
    const ctx=canvas.getContext("2d"),w=rect.width,h=rect.height,cx=w*.5,cy=h*.53;
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
    const bg=ctx.createRadialGradient(cx,cy,20,cx,cy,Math.max(w,h)*.72);bg.addColorStop(0,"#12354b");bg.addColorStop(1,"#03101a");ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
    ctx.fillStyle="rgba(143,201,255,.08)";for(let x=18;x<w;x+=28)for(let y=18;y<h;y+=28){ctx.beginPath();ctx.arc(x,y,1,0,Math.PI*2);ctx.fill();}
    const arrow=(x1,y1,x2,y2,color,width=7)=>{const angle=Math.atan2(y2-y1,x2-x1);ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=width;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.save();ctx.translate(x2,y2);ctx.rotate(angle);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-18,-10);ctx.lineTo(-18,10);ctx.closePath();ctx.fill();ctx.restore();};
    // Right hand seen from the palm or back: thumb follows I and four fingers follow B.
    const sx=fieldRight?1:-1,sy=currentUp?1:-1;
    ctx.save();ctx.translate(cx,cy);ctx.scale(sx,sy);ctx.fillStyle="#d9a96f";ctx.strokeStyle="#f4cf9d";ctx.lineWidth=3;
    ctx.beginPath();ctx.roundRect(-75,-57,132,114,42);ctx.fill();ctx.stroke();
    ctx.beginPath();ctx.roundRect(-170,-40,112,80,28);ctx.fill();ctx.stroke();
    [-43,-15,13,41].forEach((y,index)=>{ctx.beginPath();ctx.roundRect(25,y-11,128-index*5,22,11);ctx.fill();ctx.stroke();});
    ctx.save();ctx.translate(-37,-35);ctx.rotate(-.15);ctx.beginPath();ctx.roundRect(-13,-113,27,108,14);ctx.fill();ctx.stroke();ctx.restore();
    ctx.strokeStyle="rgba(102,62,34,.42)";ctx.lineWidth=2;ctx.beginPath();ctx.arc(-8,13,38,Math.PI*1.08,Math.PI*1.78);ctx.stroke();ctx.restore();
    const thumbX=cx+sx*-37,currentTip=currentUp?cy-195:cy+195,currentTail=currentUp?cy-35:cy+35;
    arrow(thumbX,currentTail,thumbX,currentTip,"#f7dc72");
    const fingerY=cy+sy*41,fieldTip=fieldRight?w-48:48,fieldTail=fieldRight?cx+25:cx-25;
    arrow(fieldTail,fingerY,fieldTip,fingerY,"#8fc9ff",6);
    const forceOut=currentUp!==fieldRight;
    ctx.strokeStyle="#ef6d79";ctx.fillStyle="#ef6d79";ctx.lineWidth=6;ctx.beginPath();ctx.arc(cx+130,cy,34,0,Math.PI*2);ctx.stroke();
    if(forceOut){ctx.beginPath();ctx.arc(cx+130,cy,9,0,Math.PI*2);ctx.fill();}else{ctx.beginPath();ctx.moveTo(cx+108,cy-22);ctx.lineTo(cx+152,cy+22);ctx.moveTo(cx+152,cy-22);ctx.lineTo(cx+108,cy+22);ctx.stroke();}
    ctx.font="800 12px DM Mono";ctx.textAlign="left";ctx.fillStyle="#fff";ctx.fillText(`RIGHT HAND · ${forceOut?"PALM":"BACK"} FACING YOU`,24,28);ctx.fillStyle="#f7dc72";ctx.fillText(`THUMB · CURRENT ${currentUp?"UP":"DOWN"}`,24,49);ctx.fillStyle="#8fc9ff";ctx.fillText(`FOUR FINGERS · FIELD ${fieldRight?"RIGHT":"LEFT"}`,24,70);ctx.fillStyle="#ef6d79";ctx.fillText(`PALM · FORCE ${forceOut?"OUT OF PAGE":"INTO PAGE"}`,24,91);
  },[currentUp,fieldRight]);

  const forceOut=currentUp!==fieldRight;
  return <div className="sim-card ampere-card" id="motor-rule">
    <div className="sim-top"><div><span className="eyebrow">Simulator 06</span><h2>Right-hand motor rule</h2></div><div className="status-pill live"><i/>Force direction</div></div>
    <div className="ampere-layout"><div className="ampere-canvas-wrap"><canvas ref={canvasRef} className="ampere-canvas" aria-label="Front-view right-hand motor rule showing current, magnetic field, and force"/></div><div className="ampere-panel">
      <div className="finger-key"><span className="thumb-key">Thumb</span><b>Conventional current, I</b><p>Point your thumb with the current, or with the motion of a positive charge.</p></div>
      <div className="finger-key"><span className="index-key">Fingers</span><b>Magnetic field, B</b><p>Point your straight fingers with the external magnetic field.</p></div>
      <div className="finger-key"><span className="palm-key">Palm</span><b>Magnetic force, F</b><p>Your palm faces in the force direction. Reverse this answer for a negative charge.</p></div>
      <div className="ampere-controls"><button type="button" onClick={()=>setCurrentUp(v=>!v)}>Reverse current</button><button type="button" onClick={()=>setFieldRight(v=>!v)}>Reverse field</button></div>
    </div></div>
    <div className="motor-result"><div><span>Current</span><strong>{currentUp?"Up":"Down"}</strong></div><div><span>Magnetic field</span><strong>{fieldRight?"Right":"Left"}</strong></div><div><span>Magnetic force</span><strong>{forceOut?"Out of the page ⊙":"Into the page ⊗"}</strong></div></div>
    <p className="magnetic-explanation">Reversing either current or magnetic field reverses the force. Reversing both keeps the force in the same direction.</p>
  </div>;
}
