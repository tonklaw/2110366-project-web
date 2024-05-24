'use client';

import React, { useState, useEffect } from 'react';

// Function to determine air quality status
const getAirQualityStatus = (value) => {
  if (value <= 50) return 'Good';
  if (value <= 100) return 'Moderate';
  if (value <= 150) return 'Unhealthy for Sensitive Groups';
  if (value <= 200) return 'Unhealthy';
  if (value <= 300) return 'Very Unhealthy';
  return 'Hazardous';
};

const Dust = () => {
  const [aqi, setAqi] = useState(0);
  const [status, setStatus] = useState(getAirQualityStatus(aqi));

  useEffect(() => {
    // Here you can fetch AQI data and update the state
    const intervalId = setInterval(() => {
      // Simulate fetching new AQI data
      const newAqi = Math.floor(Math.random() * 500); // Replace this with your actual data fetch
      setAqi(newAqi);
      setStatus(getAirQualityStatus(newAqi));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div class="p-6 w-96 h-48 m-2.5 border border-gray-300 rounded-lg bg-white">
          <div className="">Dust</div>
          <div className="flex flex-col">
        <p className="text-6xl font-semibold text-gray-700">
            {aqi}
        </p>
        <p className={`text-lg ${statusToColor(status)} font-medium`}>
            {status}
        </p>
        </div>
    </div>
    
  );
};

// Function to assign color based on status
const statusToColor = (status) => {
  switch (status) {
    case 'Good':
      return 'text-green-500';
    case 'Moderate':
      return 'text-yellow-500';
    case 'Unhealthy for Sensitive Groups':
      return 'text-orange-500';
    case 'Unhealthy':
      return 'text-red-500';
    case 'Very Unhealthy':
      return 'text-purple-500';
    case 'Hazardous':
      return 'text-maroon-500';
    default:
      return 'text-gray-500';
  }
};

export default Dust;