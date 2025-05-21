// src/api/energyService.js

export const getEnergyData = async () => {
  const response = await fetch("https://flowtrackbackend.onrender.com/data");
  if (!response.ok) {
    throw new Error("Failed to fetch energy data");
  }
  const data = await response.json();
  return data;  // will be a single object
};
