import React, { useEffect, useState } from "react";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("/api/recommendations")
      .then((response) => response.json())
      .then((data) => setRecommendations(data));
  }, []);

  return (
    <div>
      <h2>Energy Saving Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
