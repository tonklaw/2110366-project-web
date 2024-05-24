'use client';

import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="flex flex-col justify-center p-6">
      <p className="text-6xl font-semibold text-gray-700">
        {formatTime(currentTime)} &nbsp;
      </p>
      <p className="text-2xl text-gray-500">
        {formatDate(currentTime)}
      </p>
    </div>
  );
};

export default RealTimeClock;