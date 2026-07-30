"use client";

import { useMemo, useState } from "react";

const K = 8.99e9;

export default function ElectricFieldStrengthSimulator() {
  const [positive, setPositive] = useState(true);
  const [chargeMicroCoulombs, setChargeMicroCoulombs] = useState(2);
  const [distance, setDistance] = useState(0.5);

  const fieldStrength = useMemo(
    () => K * (chargeMicroCoulombs * 1e-6) / (distance * distance),
    [chargeMicroCoulombs, distance]
  );

  return (
    <div className="field-lesson-simulator">
      <div className="field-simulator-heading">
        <div>
          <span>INTERACTIVE SIMULATOR</span>
          <h3>Electric field around one charge</h3>
        </div>
        <button type="button" onClick={() => setPositive((value) => !value)}>
          Source charge: {positive ? "Positive +" : "Negative −"}
        </button>
      </div>

      <div className={`field-source-view ${positive ? "positive-source" : "negative-source"}`}>
        <svg viewBox="0 0 720 340" role="img" aria-label={`Electric field around a ${positive ? "positive" : "negative"} source charge`}>
          <defs>
            <marker id="lesson-field-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          {[0,45,90,135,180,225,270,315].map((angle) => {
            const radians = angle * Math.PI / 180;
            const inner = positive ? 54 : 145;
            const outer = positive ? 145 : 54;
            const x1 = 360 + Math.cos(radians) * inner;
            const y1 = 170 + Math.sin(radians) * inner;
            const x2 = 360 + Math.cos(radians) * outer;
            const y2 = 170 + Math.sin(radians) * outer;
            return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} markerEnd="url(#lesson-field-arrow)" />;
          })}
          <circle cx="360" cy="170" r="48" />
          <text x="360" y="184">{positive ? "+" : "−"}</text>
          <circle className="probe-ring" cx={360 + Math.min(distance / 1.2, 1) * 245} cy="170" r="16" />
          <text className="probe-label" x={360 + Math.min(distance / 1.2, 1) * 245} y="210">FIELD POINT</text>
        </svg>
      </div>

      <div className="field-simulator-controls">
        <label>
          <span>Source charge, |Q|</span>
          <input
            type="range"
            min="1"
            max="5"
            step="0.5"
            value={chargeMicroCoulombs}
            onChange={(event) => setChargeMicroCoulombs(Number(event.target.value))}
          />
          <b>{chargeMicroCoulombs.toFixed(1)} μC</b>
        </label>
        <label>
          <span>Distance, r</span>
          <input
            type="range"
            min="0.2"
            max="1.2"
            step="0.05"
            value={distance}
            onChange={(event) => setDistance(Number(event.target.value))}
          />
          <b>{distance.toFixed(2)} m</b>
        </label>
      </div>

      <div className="field-simulator-result">
        <span>Electric field strength</span>
        <strong>{fieldStrength.toExponential(2)} N/C</strong>
        <p>
          The field points {positive ? "away from the positive source charge" : "toward the negative source charge"}.
        </p>
      </div>
    </div>
  );
}
