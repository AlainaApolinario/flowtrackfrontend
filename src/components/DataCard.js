// src/components/DataCard.js
import React from 'react';

const DataCard = ({ label, value, color, icon }) => (
  <div className="data-card" style={{ background: color }}>
    {icon && <div style={{ marginBottom: '0.5em' }}>{icon}</div>}
    <h3>{label}</h3>
    <p>{value}</p>
  </div>
);

export default DataCard;
