'use client';

import React, { useState, useEffect } from 'react';

// Function to determine air quality status
const getAirQualityStatus = (value) => {
  if (value <= 15.4) return 'Good';
  if (value <= 40.4) return 'Moderate';
  if (value <= 65.4) return 'Unhealthy for Sensitive Groups';
  if (value <= 150.4) return 'Unhealthy';
  if (value <= 250.4) return 'Very Unhealthy';
  return 'Hazardous';
};

const Dust = ({ value }) => {
  const [aqi, setAqi] = useState(0);
  const [status, setStatus] = useState(getAirQualityStatus(aqi));

  useEffect(() => {
    // Here you can fetch AQI data and update the state
    // const intervalId = setInterval(() => {
      // Simulate fetching new AQI data
      const newAqi = value; // Replace this with your actual data fetch
      setAqi(newAqi);
      setStatus(getAirQualityStatus(newAqi));
    // }, 1000);

    // return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [value]);

  return (
    <div class={`relative p-6 w-96 h-48 m-2.5 ${statusToColor(status)} rounded-lg`}>
          <div className="font-semibold">Dust (V)</div>
          <div className="absolute top-[16px] left-[200px] z-[1]">
          <svg xmlns="http://www.w3.org/2000/svg" width="6.5em" height="6.5em" 
          viewBox="0 0 28 28"><path fill={status == 'Moderate' ? "gray-700" : "white"} d="M16.5 3a6.5 6.5 0 0 0-6.258 4.736a6.5 6.5 0 1 0 0 12.527A6.5 6.5 0 1 0 21.19 14A6.5 6.5 0 0 0 16.5 3m-4.955 5.829a5.001 5.001 0 1 1 8.068 4.584a.75.75 0 0 0 0 1.174a5 5 0 1 1-8.068 4.585a.75.75 0 0 0-1.044-.588a5 5 0 1 1 0-9.168a.75.75 0 0 0 1.044-.587M9 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m16 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2M8 25a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
          </div>
          <div className="flex flex-col">
        <p className="text-6xl pt-1 pb-1 font-semibold">
            {aqi}
        </p>
        <p className={status == 'Unhealthy for Sensitive Groups' ? "text-md font-medium " : "text-lg font-medium"}>
            {status}
        </p>
        <p className="absolute bottom-5 right-8 pt-1 text-sm">Data from GP2Y10</p>
        </div>
    </div>
    
  );
};

const statusToColor = (status) => {
  switch (status) {
    case 'Good':
      return 'bg-[#6bc8a3] text-white';
    case 'Moderate':
      return 'bg-[#ffee93] text-gray-700';
    case 'Unhealthy for Sensitive Groups':
      return 'bg-[#f6bc66] text-white';
    case 'Unhealthy':
      return 'bg-[#f57c73] text-white';
    case 'Very Unhealthy':
      return 'bg-[#c897ca] text-white';
    case 'Hazardous':
      return 'bg-[#c48d8d] text-white';
    default:
      return 'text-gray-500';
  }
};

export default Dust;