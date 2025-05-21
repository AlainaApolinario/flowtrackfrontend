// src/components/DataCard.js
import React from 'react';


const DataCard = ({ label, value, icon, color }) => (
  <div className="data-card" style={{ backgroundColor: color }}>
    <div className="icon-container">{icon}</div>
    <div className="text-container">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  </div>
);

export default DataCard;
