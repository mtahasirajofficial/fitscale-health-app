import React, { useState } from "react";
import "./BMICalculator.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BMICalculator = () => {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [advice, setAdvice] = useState(null);
  const [showPlan, setShowPlan] = useState(false);

  const calculateBMI = () => {
    let bmiValue = 0;

    if (unitSystem === "metric") {
      const heightM = heightCm / 100;
      bmiValue = weight / (heightM * heightM);
    } else {
      const totalInches = Number(heightFt) * 12 + Number(heightIn);
      bmiValue = (weight / (totalInches * totalInches)) * 703;
    }

    const result = bmiValue.toFixed(1);
    setBmi(result);

    let categoryText = "";
    if (bmiValue < 18.5) categoryText = "Underweight";
    else if (bmiValue < 24.9) categoryText = "Normal weight";
    else if (bmiValue < 29.9) categoryText = "Overweight";
    else categoryText = "Obese";

    setCategory(categoryText);
    setAdvice(null);
    setShowPlan(false);
  };

  const handleShowPlan = () => {
    let plan = {};
    if (bmi < 18.5) {
      plan = {
        diet: "Increase calorie intake with healthy foods like nuts, avocados, and whole grains.",
        exercise: "Focus on light strength training to build muscle mass.",
        macros: [50, 30, 20], // carbs, protein, fat
      };
    } else if (bmi < 24.9) {
      plan = {
        diet: "Maintain a balanced diet with lean proteins, fruits, and vegetables.",
        exercise: "Continue regular moderate exercise like cycling or jogging 3–5 times a week.",
        macros: [45, 30, 25],
      };
    } else if (bmi < 29.9) {
      plan = {
        diet: "Reduce sugar and processed food intake. Add more fiber and greens.",
        exercise: "Include cardio 4–5 times per week and strength training twice a week.",
        macros: [40, 35, 25],
      };
    } else {
      plan = {
        diet: "Adopt a calorie deficit plan with nutrient-dense meals.",
        exercise: "Start with low-impact workouts (like walking) and gradually increase intensity.",
        macros: [35, 40, 25],
      };
    }
    setAdvice(plan);
    setShowPlan(true);
  };

  const bmiChartData = {
    labels: ["Your BMI", "Remaining"],
    datasets: [
      {
        data: [bmi ? Math.min(bmi, 40) : 0, bmi ? 40 - Math.min(bmi, 40) : 40],
        backgroundColor: ["#4CAF50", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  const macroChartData = advice
    ? {
        labels: ["Carbs", "Protein", "Fat"],
        datasets: [
          {
            data: advice.macros,
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            borderWidth: 1,
          },
        ],
      }
    : null;

  const chartOptions = {
    cutout: "80%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "700px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">BMI Calculator</h2>

        {/* Unit Toggle */}
        <div className="text-center mb-3">
          <div className="btn-group">
            <button
              className={`btn ${
                unitSystem === "metric" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setUnitSystem("metric")}
            >
              Metric (cm/kg)
            </button>
            <button
              className={`btn ${
                unitSystem === "imperial" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setUnitSystem("imperial")}
            >
              Imperial (ft/in/lbs)
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="row g-3">
          {unitSystem === "metric" ? (
            <div className="col-12">
              <label className="form-label">Height (cm)</label>
              <input
                type="number"
                className="form-control"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
              />
            </div>
          ) : (
            <>
              <div className="col-6">
                <label className="form-label">Height (ft)</label>
                <input
                  type="number"
                  className="form-control"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="form-label">Height (in)</label>
                <input
                  type="number"
                  className="form-control"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="col-12">
            <label className="form-label">
              Weight ({unitSystem === "metric" ? "kg" : "lbs"})
            </label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="col-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="col-6">
            <label className="form-label">Sex</label>
            <select
              className="form-select"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-success px-4 py-2" onClick={calculateBMI}>
              Calculate BMI
            </button>
          </div>
        </div>

        {/* BMI Result */}
        {bmi && (
          <div className="text-center mt-5">
            <div className="d-flex justify-content-center mb-3">
              <div style={{ width: "180px", height: "180px" }}>
                <Doughnut data={bmiChartData} options={chartOptions} />
              </div>
            </div>
            <h4>
              Your BMI: <span className="text-primary">{bmi}</span>
            </h4>
            <p className="fw-semibold text-capitalize">{category}</p>

            {!showPlan && (
              <div className="mt-4">
                <p className="fw-medium">Would you like a personalized diet plan?</p>
                <button
                  className="btn btn-outline-success me-2"
                  onClick={handleShowPlan}
                >
                  Yes, show me
                </button>
              </div>
            )}
          </div>
        )}

        {/* Health Plan + Macronutrient Chart */}
        {showPlan && advice && (
          <div className="health-plan mt-5">
            <h5 className="fw-bold text-center mb-3 text-success">
              Your Personalized Health Plan
            </h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="plan-card p-3 rounded shadow-sm bg-light h-100">
                  <h6 className="text-primary fw-bold mb-2">🍎 Diet Advice</h6>
                  <p>{advice.diet}</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="plan-card p-3 rounded shadow-sm bg-light h-100">
                  <h6 className="text-primary fw-bold mb-2">💪 Exercise Tips</h6>
                  <p>{advice.exercise}</p>
                </div>
              </div>
            </div>

            {/* Macronutrient Chart */}
            <div className="text-center mt-4">
              <h6 className="fw-bold text-info mb-2">
                Ideal Macronutrient Distribution
              </h6>
              <div style={{ width: "220px", height: "220px" }} className="mx-auto">
                <Doughnut data={macroChartData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
