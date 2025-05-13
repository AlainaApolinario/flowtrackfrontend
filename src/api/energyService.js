// src//energyService.js
import axios from 'axios';

const API_URL = "http://localhost:8000/api/energy/";

export const getEnergyData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching energy data:", error);
    throw error;
  }
};
