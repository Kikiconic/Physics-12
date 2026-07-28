"use client";

import { useEffect, useRef } from "react";

export default function ElectricFieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const pointOnLine = (start, end, bend, progress) => {
      const inverse = 1 - progress;
      const controlX = (start.x + end.x) / 2;
      const controlY = (start.y + end.y) / 2 + bend;
      return {
        x: inverse * inverse * start.x + 2 * inverse * progress * controlX + progress * progress * end.x,
        y: inverse * inverse * start.y + 2 * inverse * progress * controlY + progress * progress * end.y
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += .0022;
      const positive = { x: width * .17, y: height * .48 };
      const negative = { x: width * .83, y: height * .48 };
      const lineCount = 13;

      ctx.globalCompositeOperation = "screen";
      for (let index = 0; index < lineCount; index += 1) {
        const bend = (index - (lineCount - 1) / 2) * Math.min(44, height * .055);
        const start = { x: positive.x, y: positive.y + bend * .12 };
        const end = { x: negative.x, y: negative.y + bend * .12 };

        ctx.strokeStyle = "rgba(121,190,255,.12)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.quadraticCurveTo((start.x + end.x) / 2, (start.y + end.y) / 2 + bend, end.x, end.y);
        ctx.stroke();

        for (let marker = 0; marker < 3; marker += 1) {
          const progress = (time + marker / 3 + index * .037) % 1;
          const point = pointOnLine(start, end, bend, progress);
          const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 6);
          glow.addColorStop(0, "rgba(210,235,255,.5)");
          glow.addColorStop(1, "rgba(110,180,255,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = "source-over";
      frame = requestAnimationFrame(draw);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    resize();
    window.addEventListener("resize", resize);
    draw();
    if (reduceMotion.matches) cancelAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="electric-field-background" aria-hidden="true" />;
}
