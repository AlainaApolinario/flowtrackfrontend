// src/components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Voltage (V)</th>
        <th>Current (A)</th>
        <th>Power (W)</th>
        <th>kWh</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, index) => (
        <tr key={index}>
          <td>{entry.id}</td>
          <td>{entry.voltage}</td>
          <td>{entry.current}</td>
          <td>{entry.power}</td>
          <td>{entry.kwh}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
