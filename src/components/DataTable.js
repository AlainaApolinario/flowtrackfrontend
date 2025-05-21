// src/components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Voltage (V)</th>
        <th>Current (A)</th>
        <th>Power (W)</th>
        <th>Energy (kWh)</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((entry, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{entry.voltage}</td>
            <td>{entry.current}</td>
            <td>{entry.power}</td>
            <td>{entry.kwh}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" style={{ textAlign: 'center' }}>
            No data available.
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default DataTable;
