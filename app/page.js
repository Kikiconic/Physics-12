import Link from "next/link";
import { SiteNav } from "./site-chrome";
import blackHoleHero from "../public/black-hole-hero.jpg";
import BlackHoleMotion from "./black-hole-motion";
import ElectricFieldBackground from "./electric-field-background";

const resources = [
  {
    label: "Course content",
    title: "Lessons",
    text: "Concept notes, equations, worked examples, and practice questions organized by unit.",
    href: "/lessons",
    className: "home-panel-lessons"
  },
  {
    label: "Interactive models",
    title: "Simulators",
    text: "Physics models for testing relationships between variables and observing results.",
    href: "/simulators",
    className: "home-panel-simulators"
  },
  {
    label: "Course reference",
    title: "Formula sheets",
    text: "Equations, constants, SI units, and direction conventions organized by unit.",
    href: "/formulas",
    className: "home-panel-formulas"
  }
];

export default function Home() {
  return (
    <main className="space-home">
      <SiteNav />
      <section className="space-hero">
        <div
          className="image-stage"
          style={{ "--hero-image": `url(${blackHoleHero.src})` }}
          role="img"
          aria-label="A black hole with a luminous accretion disk in deep space"
        />
        <BlackHoleMotion />
        <div className="space-hero-content">
          <p>Physics 12 course platform</p>
          <h1>Henry&apos;s Physics 12<br/>Classroom</h1>
          <Link href="/lessons">View course materials</Link>
        </div>
        <span className="scroll-mark" aria-hidden="true">⌄</span>
      </section>

      {resources.map(resource => (
        <section className={`space-resource-panel ${resource.className}`} key={resource.title}>
          {resource.title === "Lessons" && <ElectricFieldBackground />}
          <div>
            <p>{resource.label}</p>
            <h2>{resource.title}</h2>
            <span>{resource.text}</span>
            <Link href={resource.href}>Open {resource.title}</Link>
          </div>
        </section>
      ))}

      <footer className="space-footer">
        <span>Henry&apos;s Physics 12 Classroom</span>
        <Link href="/lessons">Lessons</Link>
        <Link href="/simulators">Simulators</Link>
        <Link href="/formulas">Formula sheet</Link>
      </footer>
    </main>
  );
}
