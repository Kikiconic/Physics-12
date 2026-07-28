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
      const bounds = canvas.parentElement.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const pointOnLine = (start, end, bend, progress) => {
      const inverse = 1 - progress;
      const distance = end.x - start.x;
      const controlA = { x: start.x + distance * .27, y: start.y + bend };
      const controlB = { x: end.x - distance * .27, y: end.y + bend };
      return {
        x: inverse ** 3 * start.x + 3 * inverse ** 2 * progress * controlA.x + 3 * inverse * progress ** 2 * controlB.x + progress ** 3 * end.x,
        y: inverse ** 3 * start.y + 3 * inverse ** 2 * progress * controlA.y + 3 * inverse * progress ** 2 * controlB.y + progress ** 3 * end.y
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += .0022;
      const positive = { x: width * .58, y: height * .45 };
      const negative = { x: width * .89, y: height * .45 };
      const bends = [-340, -255, -185, -125, -75, 0, 75, 125, 185, 255, 340]
        .map(value => value * Math.min(1, height / 650));

      ctx.globalCompositeOperation = "screen";
      bends.forEach((bend, index) => {
        const start = { x: positive.x, y: positive.y };
        const end = { x: negative.x, y: negative.y };
        const distance = end.x - start.x;

        ctx.strokeStyle = "rgba(143,201,255,.38)";
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(
          start.x + distance * .27,
          start.y + bend,
          end.x - distance * .27,
          end.y + bend,
          end.x,
          end.y
        );
        ctx.stroke();

        [.38, .68].forEach(arrowProgress => {
          const point = pointOnLine(start, end, bend, arrowProgress);
          const next = pointOnLine(start, end, bend, arrowProgress + .012);
          const angle = Math.atan2(next.y - point.y, next.x - point.x);
          const arrowSize = 6.5;
          ctx.fillStyle = "rgba(205,233,255,.72)";
          ctx.beginPath();
          ctx.moveTo(
            point.x + Math.cos(angle) * arrowSize,
            point.y + Math.sin(angle) * arrowSize
          );
          ctx.lineTo(
            point.x + Math.cos(angle + 2.55) * arrowSize,
            point.y + Math.sin(angle + 2.55) * arrowSize
          );
          ctx.lineTo(
            point.x + Math.cos(angle - 2.55) * arrowSize,
            point.y + Math.sin(angle - 2.55) * arrowSize
          );
          ctx.closePath();
          ctx.fill();
        });

        for (let marker = 0; marker < 2; marker += 1) {
          const progress = (time * 1.35 + marker / 2 + index * .041) % 1;
          const point = pointOnLine(start, end, bend, progress);
          const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 8);
          glow.addColorStop(0, "rgba(235,247,255,.95)");
          glow.addColorStop(1, "rgba(110,180,255,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      [
        { ...positive, sign: "+", core: "#318ee1", signColor: "#ffffff" },
        { ...negative, sign: "−", core: "#e8f4ff", signColor: "#061522" }
      ].forEach(charge => {
        const aura = ctx.createRadialGradient(charge.x, charge.y, 4, charge.x, charge.y, 58);
        aura.addColorStop(0, "rgba(190,225,255,.62)");
        aura.addColorStop(.28, "rgba(105,183,255,.22)");
        aura.addColorStop(1, "rgba(105,183,255,0)");
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, 58, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = charge.core;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.72)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = charge.signColor;
        ctx.font = "800 34px Manrope, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(charge.sign, charge.x, charge.y - 1);
      });

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
