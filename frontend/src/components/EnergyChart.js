import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";

const EnergyChart = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    // Fetch energy data from backend API
    fetch("/api/energy-data")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = {
          x: data.map((entry) => entry.timestamp),
          y: data.map((entry) => entry.energy_consumption),
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "blue" },
        };
        setEnergyData([formattedData]);
      });
  }, []);

  useEffect(() => {
    if (energyData.length > 0) {
      Plotly.newPlot("energy-chart", energyData);
    }
  }, [energyData]);

  return (
    <div>
      <h2>Real-Time Energy Consumption</h2>
      <div id="energy-chart" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default EnergyChart;
