"use client";

import { useEffect, useRef } from "react";

export default function BlackHoleMotion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;
    let width = 0;
    let height = 0;
    let particles = [];
    let shootingStars = [];

    const createParticles = () => Array.from({ length: 360 }, (_, index) => ({
      phase: Math.random() * Math.PI * 2,
      speed: .0025 + Math.random() * .006,
      orbit: .78 + Math.random() * .42,
      thickness: .35 + Math.random() * 1.25,
      alpha: .08 + Math.random() * .42,
      trail: .025 + Math.random() * .075,
      lift: index % 5 === 0 ? .34 + Math.random() * .2 : 0
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = createParticles();
    };

    const pointOnOrbit = (particle, angle, cx, cy, radiusX, radiusY) => {
      const backHalf = Math.sin(angle) < 0;
      const lensLift = particle.lift && backHalf
        ? -Math.sin(angle) * radiusY * particle.lift
        : 0;
      const tilt = -.12;
      const orbitX = Math.cos(angle) * radiusX * particle.orbit;
      const orbitY = Math.sin(angle) * radiusY * particle.orbit - lensLift;
      return {
        x: cx + orbitX * Math.cos(tilt) - orbitY * Math.sin(tilt),
        y: cy + orbitX * Math.sin(tilt) + orbitY * Math.cos(tilt)
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width * .70;
      const cy = height * .48;
      const radiusX = Math.min(width * .29, height * .54);
      const radiusY = radiusX * .28;

      ctx.globalCompositeOperation = "screen";
      particles.forEach(particle => {
        particle.phase = (particle.phase - particle.speed + Math.PI * 2) % (Math.PI * 2);
        const head = pointOnOrbit(particle, particle.phase, cx, cy, radiusX, radiusY);
        const tail = pointOnOrbit(particle, particle.phase + particle.trail, cx, cy, radiusX, radiusY);
        const gradient = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(1, `rgba(255,255,255,${particle.alpha})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = particle.thickness;
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.quadraticCurveTo((tail.x + head.x) / 2, (tail.y + head.y) / 2, head.x, head.y);
        ctx.stroke();
      });

      if (shootingStars.length === 0 && Math.random() < .0032) {
        const groupSize = Math.random() < .55 ? 2 : 3;
        const groupY = height * (.1 + Math.random() * .45);

        shootingStars = Array.from({ length: groupSize }, (_, index) => ({
          x: -90 - index * (50 + Math.random() * 45),
          y: groupY + index * (22 + Math.random() * 22),
          speed: 3.8 + Math.random() * 1.7,
          drift: .14 + Math.random() * .28,
          length: 64 + Math.random() * 54,
          alpha: .78 + Math.random() * .18,
          thickness: .9 + Math.random() * .45
        }));
      }

      shootingStars.forEach(star => {
        star.x += star.speed;
        star.y += star.drift;
        const crossingProgress = Math.max(0, Math.min(1, (star.x + 90) / (width + 180)));
        const visibleAlpha = star.alpha * (.14 + .86 * Math.pow(1 - crossingProgress, 1.35));
        const gradient = ctx.createLinearGradient(star.x - star.length, star.y, star.x, star.y);
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(1, `rgba(255,255,255,${visibleAlpha})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.thickness;
        ctx.shadowColor = `rgba(255,255,255,${visibleAlpha * .65})`;
        ctx.shadowBlur = 5 * (1 - crossingProgress);
        ctx.beginPath();
        ctx.moveTo(star.x - star.length, star.y - star.drift * 5);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
      shootingStars = shootingStars.filter(star => star.x < width + star.length);

      ctx.globalCompositeOperation = "source-over";
      frame = requestAnimationFrame(draw);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion.matches) draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="black-hole-motion" aria-hidden="true" />;
}
