import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./PersonalizedDietPlanner.css";

const PersonalizedDietPlanner = () => {
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
  });
  const [macros, setMacros] = useState(null);

  const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateDietPlan = () => {
    const { age, gender, height, weight, activity } = formData;
    if (!age || !gender || !height || !weight || !activity) {
      alert("Please fill all fields!");
      return;
    }

    // Calculate BMR (Mifflin-St Jeor Formula)
    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    // Activity multipliers
    const activityLevels = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    const dailyCalories = bmr * activityLevels[activity];

    // Macronutrient breakdown
    const proteinCalories = dailyCalories * 0.3;
    const carbsCalories = dailyCalories * 0.45;
    const fatCalories = dailyCalories * 0.25;

    const protein = proteinCalories / 4;
    const carbs = carbsCalories / 4;
    const fat = fatCalories / 9;

    setMacros({
      calories: Math.round(dailyCalories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
    });

    setShowResults(true);
  };

  return (
    <div className="diet-planner-container">
      <div className="diet-bg-wrapper">
        <img
          src="/images/healthy-food.jpeg"
          alt="Healthy food"
          className="diet-bg-img"
        />

        <div className="diet-overlay">
          <h2 className="diet-title">Personalized Diet Planner</h2>
          {!showForm && (
            <button
              className="start-diet-btn"
              onClick={() => setShowForm(true)}
            >
              Start Your Diet Plan
            </button>
          )}

          {showForm && !showResults && (
            <div className="diet-form">
              <div className="form-group">
                <label>Age (years):</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Height (cm):</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Weight (kg):</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Activity Level:</label>
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Lightly Active</option>
                  <option value="moderate">Moderately Active</option>
                  <option value="active">Active</option>
                  <option value="very_active">Very Active</option>
                </select>
              </div>
              <button className="calc-btn" onClick={calculateDietPlan}>
                Calculate Plan
              </button>
            </div>
          )}

          {showResults && macros && (
            <div className="diet-results">
              <h3>Your Personalized Plan</h3>
              <p>
                <strong>Daily Calories:</strong> {macros.calories} kcal
              </p>
              <PieChart width={300} height={250}>
                <Pie
                  data={[
                    { name: "Protein", value: macros.protein },
                    { name: "Carbs", value: macros.carbs },
                    { name: "Fat", value: macros.fat },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={color}
                      className="chart-cell"
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

              <div className="macro-details">
                <p>Protein: {macros.protein}g</p>
                <p>Carbs: {macros.carbs}g</p>
                <p>Fat: {macros.fat}g</p>
              </div>

              <button
                className="reset-btn"
                onClick={() => {
                  setShowForm(false);
                  setShowResults(false);
                  setMacros(null);
                }}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedDietPlanner;
