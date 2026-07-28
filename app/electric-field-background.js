export default function ElectricFieldBackground() {
  return (
    <div className="electric-field-background chalkboard-background" aria-hidden="true">
      <svg className="chalk-grid-layer" viewBox="0 0 900 540" preserveAspectRatio="none">
        <defs>
          <pattern id="chalk-grid" width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M 42 0 L 0 0 0 42" fill="none" stroke="rgba(174,213,238,.12)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="900" height="540" fill="url(#chalk-grid)" />
      </svg>

      <svg className="chalk-material-layer" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="chalk-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </marker>
        </defs>

        <g className="chalk-writing">
          <text x="88" y="92" className="chalk-equation">F = ma</text>
          <text x="530" y="80" className="chalk-equation small">E = F/q</text>
          <text x="640" y="445" className="chalk-equation">v = Δx/Δt</text>
          <text x="120" y="462" className="chalk-equation small">Fₑ = kq₁q₂/r²</text>
          <text x="352" y="505" className="chalk-equation small">Eₖ = ½mv²</text>
          <text x="650" y="510" className="chalk-equation small">p⃗ = mv⃗</text>
          <text x="350" y="118" className="chalk-equation small">W = Fd cos θ</text>

          <g className="chalk-axis">
            <path d="M 520 330 L 520 140 M 520 330 L 760 330" />
            <path d="M 535 314 C 580 295 603 260 630 225 C 662 185 700 172 747 166" />
            <text x="746" y="352">t</text>
            <text x="496" y="154">v</text>
          </g>

          <g className="chalk-vector">
            <circle cx="270" cy="275" r="38" />
            <path d="M 270 275 L 398 210" markerEnd="url(#chalk-arrow)" />
            <path d="M 270 275 L 192 178" markerEnd="url(#chalk-arrow)" />
            <path d="M 270 275 L 267 392" markerEnd="url(#chalk-arrow)" />
            <text x="400" y="202">F⃗</text>
            <text x="164" y="170">N⃗</text>
            <text x="280" y="390">mg⃗</text>
          </g>

          <g className="chalk-wave">
            <path d="M 58 136 C 88 95 118 177 148 136 S 208 95 238 136 S 298 177 328 136" />
            <text x="61" y="171">λ</text>
          </g>

          <g className="chalk-charge">
            <circle cx="690" cy="240" r="20" />
            <circle cx="798" cy="240" r="20" />
            <text x="683" y="248">+</text>
            <text x="791" y="248">−</text>
            <path d="M 716 240 L 770 240" markerEnd="url(#chalk-arrow)" />
          </g>

          <g className="chalk-projectile">
            <path d="M 390 410 L 390 288 M 390 410 L 515 410" />
            <path d="M 398 401 C 432 322 472 315 510 397" strokeDasharray="6 8" />
            <path d="M 398 401 L 432 339" markerEnd="url(#chalk-arrow)" />
            <text x="440" y="350">v⃗₀</text>
          </g>

          <g className="chalk-circuit">
            <path d="M 72 330 L 105 330 M 105 310 L 105 350 M 116 318 L 116 342 M 116 330 L 154 330 L 164 318 L 180 342 L 196 318 L 212 342 L 228 318 L 240 330 L 270 330" />
            <text x="73" y="303">V</text>
            <text x="183" y="303">R</text>
          </g>

          <g className="chalk-pendulum">
            <path d="M 825 92 L 792 178" />
            <circle cx="790" cy="184" r="13" />
            <path d="M 825 92 L 825 191" strokeDasharray="5 8" />
            <path d="M 825 128 A 38 38 0 0 0 811 125" />
            <text x="796" y="120">θ</text>
          </g>

          <g className="chalk-notes">
            <text x="72" y="510">ΣF⃗ = 0</text>
            <text x="745" y="388">ΔU = qΔV</text>
            <text x="570" y="392">a = Δv/Δt</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
