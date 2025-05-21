import React, { useEffect, useState } from 'react';
import DataCard from './DataCard';
import DataTable from './DataTable';
import { getEnergyData } from '../api/energyService';
import './Dashboard.css';
import {
  FaBolt,
  FaTachometerAlt,
  FaChargingStation,
  FaBatteryFull
} from 'react-icons/fa';

const Dashboard = () => {
  const [latestData, setLatestData] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await getEnergyData();
        const dataWithTimestamp = {
          ...rawData,
          timestamp: new Date().toISOString()
        };

        setLatestData(dataWithTimestamp);
        setHistory(prev => [...prev, dataWithTimestamp]); // Append to history
      } catch (err) {
        console.error('Failed to load energy data', err);
      }
    };

    // Fetch immediately
    fetchData();

    // Fetch every 5 seconds
    const interval = setInterval(fetchData, 5000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container fade-in">
      <h1 style={{ marginBottom: '0.2em' }}>FlowTrack Energy</h1>
      <p
        style={{
          color: '#1976d2',
          marginBottom: '2em',
          fontSize: '1.1em'
        }}
      >
        Real-time monitoring of your energy usage
      </p>
      <div className="card-grid">
        <DataCard
          label="Power"
          value={`${latestData.power ?? '--'} W`}
          color="#cde6f5"
          icon={<FaBolt size={32} color="#1976d2" />}
        />
        <DataCard
          label="Current"
          value={`${latestData.current ?? '--'} A`}
          color="#ffe8b3"
          icon={<FaTachometerAlt size={32} color="#f9a825" />}
        />
        <DataCard
          label="Voltage"
          value={`${latestData.voltage ?? '--'} V`}
          color="#f9d1d1"
          icon={<FaChargingStation size={32} color="#e57373" />}
        />
        <DataCard
          label="Energy"
          value={`${latestData.kwh ?? '--'} kWh`}
          color="#d0f0c0"
          icon={<FaBatteryFull size={32} color="#43a047" />}
        />
      </div>
      <div style={{ margin: '2.5rem 0 1.5rem 0' }}>
        <button className="history-button">Check Data History</button>
      </div>
      <DataTable data={history} />
    </div>
  );
};

export default Dashboard;
