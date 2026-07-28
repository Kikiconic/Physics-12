import Link from "next/link";

export function BoltIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2 5 13h6l-.5 9L19 10h-6l.5-8Z" /></svg>;
}

export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5" /></svg>;
}

export function SiteNav() {
  return (
    <nav>
      <Link className="brand" href="/"><span><BoltIcon /></span> ELECTROSTATICS <small>LAB 12</small></Link>
      <div className="nav-links">
        <Link href="/lessons">Lessons</Link>
        <Link href="/simulators">Simulators</Link>
        <Link href="/formulas">Formula sheet</Link>
      </div>
      <Link className="nav-cta" href="/lessons">Start learning <ArrowIcon /></Link>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/"><span><BoltIcon /></span> ELECTROSTATICS <small>LAB 12</small></Link>
      <p>Built for curious Physics 12 students.</p>
      <Link href="/">Home ↑</Link>
    </footer>
  );
}
