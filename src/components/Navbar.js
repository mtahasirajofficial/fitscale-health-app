import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">FitScale</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bmi">BMI Calculator</Link></li>
          <li><Link to="/ideal-weight">Ideal Weight</Link></li>
          <li><Link to="/daily-calorie">Daily Calorie</Link></li>
          <li><Link to="/calories-burned">Calories Burned</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
