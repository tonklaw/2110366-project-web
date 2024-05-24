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

const Quality = ({ value }) => {
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
          <div className="text-[11pt] font-semibold">Air Quality Index (ppm)</div>
          <div className="absolute top-[16px] left-[200px] z-[1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="6.5em" height="6.5me"
             viewBox="0 0 48 48"><g fill={status == 'Moderate' ? "gray-700" : "white"}><path d="M18 30h12v2H18zm12 4H18v2h12zm-8.698-11.558c.13-.358.091-.795-.016-1.193a4.2 4.2 0 0 0-.61-1.28c-.581-.829-1.544-1.59-2.845-1.646c-1.347-.056-2.353.799-2.973 1.706a5.6 5.6 0 0 0-.695 1.416c-.143.446-.219.902-.169 1.267a.5.5 0 0 0 .766.352c.4-.256.819-.607 1.207-.931c.176-.148.347-.29.505-.415c.562-.444 1-.697 1.363-.715c.344-.017.742.18 1.244.556c.18.134.353.276.534.424l.195.159c.244.197.504.399.766.557a.5.5 0 0 0 .728-.257m5.311 0c-.13-.358-.09-.795.017-1.193c.112-.416.319-.863.61-1.28c.58-.829 1.544-1.59 2.845-1.646c1.346-.056 2.353.799 2.973 1.706c.314.46.548.958.695 1.416c.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.931a25 25 0 0 0-.505-.415c-.563-.444-1-.697-1.363-.715c-.344-.017-.743.18-1.244.556c-.18.134-.354.276-.534.424l-.196.159a7 7 0 0 1-.765.557a.5.5 0 0 1-.729-.257"/><path fill-rule="evenodd" d="M41.853 26.315a17.95 17.95 0 0 1-5.336 10.62L36.5 37q-.28.243-.564.473A17.93 17.93 0 0 1 24 42a17.92 17.92 0 0 1-10.875-3.655q-.57-.4-1.125-.845l-.039-.118a17.97 17.97 0 0 1-5.792-10.904c-.902-.656-1.677-1.582-1.834-2.864c-.194-1.59.612-3.345 2.434-5.296a1 1 0 0 1 .203-.168C9.4 11.08 16.107 6 24 6c7.984 0 14.754 5.198 17.11 12.395c1.771 1.92 2.554 3.65 2.362 5.219c-.144 1.179-.812 2.057-1.62 2.701M14.308 36.732c6.38 4.468 14.025 4.323 20.332-.783l.081-.073c.41-1.665.6-2.88.567-4.037c-.03-1.042-.242-2.131-.755-3.531c-4.117-.863-7.348-1.296-10.54-1.308c-3.17-.011-6.378.393-10.443 1.279c-.449 1.487-.637 2.644-.633 3.752c.005 1.217.242 2.494.777 4.21q.3.252.614.491m-3.316-3.412c-.18-1.622-.036-3.135.451-4.948a19 19 0 0 1-.913-.166c-.625-.13-1.37-.318-2.12-.588a15.9 15.9 0 0 0 2.582 5.702m24.524-6.848c-8.94-1.919-14.151-2.01-23.116.013l-.27-.034a17 17 0 0 1-1.193-.204c-.911-.189-1.989-.492-2.887-.956A16 16 0 0 1 8 24c0-8.837 7.164-16 16-16s16 7.163 16 16q0 .597-.043 1.183l-.012.007c-.933.52-2.1.855-3.075 1.057a17 17 0 0 1-1.353.225m1.138 1.852c.547 1.693.716 3.113.605 4.632a15.9 15.9 0 0 0 2.347-5.416a15.6 15.6 0 0 1-2.33.666q-.333.069-.622.118" clip-rule="evenodd"/></g></svg>
          </div>
          <div className="flex flex-col">
        <p className="text-6xl pt-1 pb-1 font-semibold">
            {aqi}
        </p>
        <p className={status == 'Unhealthy for Sensitive Groups' ? "text-md font-medium " : "text-lg font-medium"}>
            {status}
        </p>
        <p className="absolute bottom-5 right-8 pt-1 text-sm">Data from MQ135</p>
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

export default Quality;