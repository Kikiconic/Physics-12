export default function ElectricFieldBackground() {
  const paths = [
    "M 390 250 C 470 250 550 250 620 250 C 690 250 740 250 790 250",
    "M 394 232 C 455 154 540 132 610 145 C 690 160 746 202 786 235",
    "M 394 268 C 455 346 540 368 610 355 C 690 340 746 298 786 265",
    "M 400 218 C 330 105 210 64 112 128 C 30 181 42 300 125 357 C 300 478 655 450 760 330 C 785 301 794 274 790 260",
    "M 400 282 C 330 395 210 436 112 372 C 30 319 42 200 125 143 C 300 22 655 50 760 170 C 785 199 794 226 790 240",
    "M 408 208 C 370 134 308 102 250 115 C 170 133 146 222 186 284 C 255 391 535 414 700 326 C 758 295 782 269 790 256",
    "M 408 292 C 370 366 308 398 250 385 C 170 367 146 278 186 216 C 255 109 535 86 700 174 C 758 205 782 231 790 244"
  ];

  return (
    <svg
      className="electric-field-background"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Electric field lines extending around a positive and negative point charge"
    >
      <defs>
        <marker id="field-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#cfeaff" />
        </marker>
        <radialGradient id="positive-glow">
          <stop offset="0" stopColor="#bfe3ff" stopOpacity=".7" />
          <stop offset=".4" stopColor="#318ee1" stopOpacity=".3" />
          <stop offset="1" stopColor="#318ee1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="negative-glow">
          <stop offset="0" stopColor="#fff" stopOpacity=".62" />
          <stop offset=".4" stopColor="#8fc9ff" stopOpacity=".24" />
          <stop offset="1" stopColor="#8fc9ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="static-field-lines">
        {paths.map(path => (
          <path key={path} d={path} markerMid="url(#field-arrow)" markerEnd="url(#field-arrow)" />
        ))}
      </g>

      <circle cx="390" cy="250" r="68" fill="url(#positive-glow)" />
      <circle cx="790" cy="250" r="68" fill="url(#negative-glow)" />
      <circle cx="390" cy="250" r="31" fill="#318ee1" stroke="#d9efff" strokeWidth="2" />
      <circle cx="790" cy="250" r="31" fill="#edf7ff" stroke="#fff" strokeWidth="2" />
      <text x="390" y="252" className="field-charge positive-charge">+</text>
      <text x="790" y="249" className="field-charge negative-charge">−</text>
      <text x="390" y="307" className="field-charge-label">POSITIVE</text>
      <text x="790" y="307" className="field-charge-label">NEGATIVE</text>
    </svg>
  );
}
