export default function SimulatorPreview() {
  const vectors = Array.from({ length: 45 }, (_, index) => {
    const column = index % 9;
    const row = Math.floor(index / 9);
    const x = 56 + column * 67;
    const y = 132 + row * 54;
    const angle = Math.atan2(y - 240, x < 324 ? x - 218 : 430 - x) * 180 / Math.PI;
    return { x, y, angle };
  });

  return (
    <svg className="simulator-preview" viewBox="0 0 700 470" aria-hidden="true">
      <rect x="1" y="1" width="698" height="468" rx="3" className="preview-frame" />
      <text x="30" y="38" className="preview-label">SIMULATOR 02 · SANDBOX</text>
      <text x="30" y="70" className="preview-title">Charges &amp; fields lab</text>
      <circle cx="622" cy="43" r="4" className="preview-live-dot" />
      <text x="635" y="47" className="preview-live">LIVE FIELD</text>

      <rect x="26" y="91" width="648" height="43" rx="2" className="preview-toolbar" />
      <rect x="39" y="101" width="105" height="24" rx="2" className="preview-button" />
      <circle cx="52" cy="113" r="8" className="preview-positive" />
      <text x="49" y="117" className="preview-sign">+</text>
      <text x="65" y="117" className="preview-button-text">Positive</text>
      <rect x="153" y="101" width="105" height="24" rx="2" className="preview-button" />
      <circle cx="166" cy="113" r="8" className="preview-negative" />
      <text x="163" y="117" className="preview-sign">−</text>
      <text x="179" y="117" className="preview-button-text">Negative</text>
      <text x="494" y="117" className="preview-button-text">↗ Field vectors</text>

      <rect x="26" y="147" width="648" height="254" rx="2" className="preview-field" />
      <g className="preview-vectors">
        {vectors.map(({ x, y, angle }) => (
          <path key={`${x}-${y}`} d="M -7 0 L 7 0 M 3 -4 L 7 0 L 3 4" transform={`translate(${x} ${y}) rotate(${angle})`} />
        ))}
      </g>

      <circle cx="232" cy="267" r="27" className="preview-positive" />
      <text x="222" y="277" className="preview-charge-sign">+</text>
      <circle cx="468" cy="267" r="27" className="preview-negative" />
      <text x="458" y="277" className="preview-charge-sign">−</text>
      <circle cx="353" cy="190" r="13" className="preview-probe" />
      <path d="M 353 190 L 353 158 M 348 165 L 353 158 L 358 165" className="preview-probe-arrow" />

      <text x="31" y="430" className="preview-readout-label">CHARGES PLACED</text>
      <text x="31" y="452" className="preview-readout">2</text>
      <text x="268" y="430" className="preview-readout-label">FIELD AT SENSOR</text>
      <text x="268" y="452" className="preview-readout">24.8 kN/C</text>
      <text x="514" y="430" className="preview-readout-label">VOLTAGE AT PROBE</text>
      <text x="514" y="452" className="preview-readout">0 V</text>
    </svg>
  );
}
