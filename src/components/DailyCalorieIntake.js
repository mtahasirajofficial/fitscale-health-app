import React, { useState } from "react";
import ResultCard from "./ResultCard";
import { Flame } from "lucide-react";

const DailyCalorieIntake = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState(1.2);
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    if (!weight || !height || !age) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    const baseBMR =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const totalCalories = baseBMR * activity;
    setBmr(totalCalories.toFixed(1));
  };

  return (
    <div className="calculator-container">
      <h2>Daily Calorie Intake Calculator</h2>

      <div className="input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="input-group">
        <label>Activity Level</label>
        <select
          value={activity}
          onChange={(e) => setActivity(parseFloat(e.target.value))}
        >
          <option value="1.2">Sedentary</option>
          <option value="1.375">Lightly active</option>
          <option value="1.55">Moderately active</option>
          <option value="1.725">Very active</option>
        </select>
      </div>

      <button onClick={calculateBMR}>Calculate</button>

      {bmr && (
        <ResultCard
          title="Your Daily Calorie Needs"
          value={bmr}
          unit="kcal/day"
          description="This is your estimated daily calorie requirement based on your activity level."
          icon={<Flame />}
        />
      )}
    </div>
  );
};

export default DailyCalorieIntake;
