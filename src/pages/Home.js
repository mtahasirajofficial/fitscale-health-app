import React from "react";
import { Link } from "react-router-dom";
import PersonalizedDietPlanner from "../components/PersonalizedDietPlanner";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-left">
            <h1 className="hero-title">Your health — measured, planned, and improved.</h1>
            <p className="hero-sub">
              FitScale gives you smart calculators, personalized diet plans and simple tools
              to reach your goals. Fast, reliable and friendly.
            </p>

            <div className="hero-cta-row">
              <Link to="/bmi" className="btn btn-primary">Calculate BMI</Link>
              <a href="#features" className="btn btn-ghost">Explore Tools</a>
            </div>

            <div className="hero-highlights">
              <div>
                <strong>✓</strong> Personalized diet plans
              </div>
              <div>
                <strong>✓</strong> Activity & calorie tracking
              </div>
              <div>
                <strong>✓</strong> History & progress (local)
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* use image in public/images/hero-plate.jpg */}
            <img src="/images/hero-plate.jpeg" alt="Healthy food" className="hero-image" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features container">
        <h2 className="section-title">What FitScale offers</h2>
        <div className="feature-grid">
          <div className="feature">
            <img src="/images/icon-bmi.png" alt="BMI" />
            <h3>BMI Calculator</h3>
            <p>Fast BMI calculation with age & sex. Friendly actions and tips.</p>
            <Link to="/bmi" className="feature-link">Open calculator →</Link>
          </div>

          <div className="feature">
            <img src="/images/icon-weight.png" alt="Weight" />
            <h3>Ideal Weight</h3>
            <p>Calculate your ideal body weight using standard formulas.</p>
            <Link to="/ideal-weight" className="feature-link">Open calculator →</Link>
          </div>

          <div className="feature">
            <img src="/images/icon-calorie.png" alt="Calories" />
            <h3>Daily Calories</h3>
            <p>Estimate your BMR and TDEE based on activity level.</p>
            <Link to="/daily-calorie" className="feature-link">Open calculator →</Link>
          </div>

          <div className="feature">
            <img src="/images/icon-burn.png" alt="Burn" />
            <h3>Calories Burned</h3>
            <p>Calculate how much you burn during workouts and activities.</p>
            <Link to="/calories-burned" className="feature-link">Open calculator →</Link>
          </div>
        </div>
      </section>

      {/* DIET PREVIEW */}
      <section className="diet-preview container">
        <div className="diet-grid">
          <div className="diet-left">
            <h3>Personalized Diet Planner</h3>
            <p>
              Get a quick preview of your calorie needs and macronutrient split.
              Try it now — it asks a few quick questions and shows a tailored plan.
            </p>
            <Link to="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('diet-component-anchor')?.scrollIntoView({behavior:'smooth'}); }}>
              Try the Planner ↓
            </Link>
          </div>

          <div className="diet-right">
            {/* render the existing component but make sure it has an anchor id so it can be scrolled to */}
            <div id="diet-component-anchor">
              <PersonalizedDietPlanner />
            </div>
          </div>
        </div>
      </section>

    {/* TESTIMONIALS */}
  {/*   <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src="/images/testimonial-1.jpg" alt="User 1" />
          <p>“FitScale completely changed how I track my fitness goals. The personalized plans are amazing!”</p>
          <h4>— Sarah Khan</h4>
        </div>

        <div className="testimonial-card">
          <img src="/images/testimonial-2.jpg" alt="User 2" />
          <p>“I’ve lost 8kg in two months using FitScale’s BMI and diet planner tools. Love the interface!”</p>
          <h4>— Ali Raza</h4>
        </div>

        <div className="testimonial-card">
          <img src="/images/testimonial-3.jpg" alt="User 3" />
          <p>“Everything I need — from calorie tracking to health tips — in one simple dashboard.”</p>
          <h4>— Fatima Ahmed</h4>
        </div>
      </div>
    </section>
    */}


      {/* CTA */}
      <section className="final-cta container">
        <div className="cta-inner">
          <h3>Ready to start your health journey?</h3>
          <Link to="/bmi" className="btn btn-primary large">Get Started — Calculate BMI</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
