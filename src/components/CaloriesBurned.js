import React, { useState } from "react";
import ResultCard from "./ResultCard";
import { Activity } from "lucide-react";

const CaloriesBurned = () => {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [activity, setActivity] = useState("running");
  const [calories, setCalories] = useState(null);

  const MET_VALUES = {
    running: 9.8,
    cycling: 7.5,
    walking: 3.5,
    swimming: 8.0,
  };

  const calculateCalories = () => {
    if (!weight || !duration) return;

    const w = parseFloat(weight);
    const d = parseFloat(duration);
    const met = MET_VALUES[activity];
    const burned = (met * w * d) / 60;

    setCalories(burned.toFixed(1));
  };

  return (
    <div className="calculator-container">
      <h2>Calories Burned Calculator</h2>

      <div className="input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Activity</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          <option value="walking">Walking</option>
          <option value="swimming">Swimming</option>
        </select>
      </div>

      <button onClick={calculateCalories}>Calculate</button>

      {calories && (
        <ResultCard
          title="Calories Burned"
          value={calories}
          unit="kcal"
          description="Estimated calories burned based on your weight, duration, and activity type."
          icon={<Activity />}
        />
      )}
    </div>
  );
};

export default CaloriesBurned;
