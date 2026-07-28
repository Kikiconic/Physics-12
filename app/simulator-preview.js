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
      <rect x="18" y="18" width="664" height="434" rx="3" className="preview-field" />
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
    </svg>
  );
}
