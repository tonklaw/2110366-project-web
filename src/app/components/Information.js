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

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="flex pl-4 pt-4">
      <p className="text-2xl font-semibold text-gray-700">
        {currentTime.toLocaleTimeString()} &nbsp;
      </p>
      <p className="text-2xl text-gray-500">
        {formatDate(currentTime)}
      </p>
    </div>
  );
};

export default RealTimeClock;