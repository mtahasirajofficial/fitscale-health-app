import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center text-center">
      <div className="container">
        <h1 className="fw-bold mb-3 text-white">Calculate your BMI — know your health.</h1>
        <p className="text-light fs-5">
          Get an immediate BMI score, category and personalized suggestions — fast and easy.
        </p>
        <a href="#calculator" className="btn btn-light fw-semibold px-4  mt-3">Calculate BMI</a>
      </div>
    </section>
  );
};

export default Hero;
