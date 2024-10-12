import React from "react";
import EnergyChart from "./EnergyChart";
import Recommendations from "./Recommendations";

const Dashboard = () => {
  return (
    <div>
      <EnergyChart />
      <Recommendations />
    </div>
  );
};

export default Dashboard;
