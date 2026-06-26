import React, { useState } from "react";
import ResultCard from "./ResultCard";
import { Scale } from "lucide-react";

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateIdealWeight = () => {
    if (!height) return;

    const h = parseFloat(height);
    const weight =
      gender === "male" ? 50 + 0.91 * (h - 152.4) : 45.5 + 0.91 * (h - 152.4);
    setIdealWeight(weight.toFixed(1));
  };

  return (
    <div className="calculator-container">
      <h2>Ideal Body Weight Calculator</h2>

      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button onClick={calculateIdealWeight}>Calculate</button>

      {idealWeight && (
        <ResultCard
          title="Your Ideal Weight"
          value={idealWeight}
          unit="kg"
          description="This is your healthy weight range based on your height and gender."
          icon={<Scale />}
        />
      )}
    </div>
  );
};

export default IdealWeightCalculator;
