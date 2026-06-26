import React from "react";
import "./ResultCard.css";

const ResultCard = ({ title, value, unit, description, icon }) => {
  return (
    <div className="result-card">
      <div className="icon">{icon}</div>
      <h3 className="result-title">{title}</h3>
      <p className="result-value">
        {value} <span className="result-unit">{unit}</span>
      </p>
      {description && <p className="result-description">{description}</p>}
    </div>
  );
};

export default ResultCard;
