import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BMICalculator from "./components/BMICalculator";
import IdealWeightCalculator from "./components/IdealWeightCalculator";
import DailyCalorieIntake from "./components/DailyCalorieIntake";
import CaloriesBurned from "./components/CaloriesBurned";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
        <Route path="/daily-calorie" element={<DailyCalorieIntake />} />
        <Route path="/calories-burned" element={<CaloriesBurned />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
