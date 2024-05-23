'use client';

import React, { useState } from 'react';

const RadioBox = () => {
  const [rate, setRate] = useState(1000);

  const handleOptionChange = (event) => {
    setRate(parseInt(event.target.value));
  };

  return (
    <div className="w-[400px] m-4 ">
      <div className="font-medium text-gray-700">Select Rate</div>
      <form className="flex justify-evenly space-x-1">
        <div className="flex items-center">
          <input
            type="radio"
            id="5000ms"
            name="dataType"
            value="5000"
            checked={rate == "5000"}
            onChange={handleOptionChange}
            className="hidden peer/5000ms"
          />
          <label htmlFor="5000ms" className="flex items-center justify-center h-10 w-24 rounded-lg border bg-white transition-all duration-300 active:scale-95 hover:red peer-checked/5000ms:bg-gray-300 peer-checked/5000ms:border-0">5 s</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="15000ms"
            name="dataType"
            value="15000"
            checked={rate == "15000"}
            onChange={handleOptionChange}
            className="hidden peer/15000ms"
          />
          <label htmlFor="15000ms" className="flex items-center justify-center h-10 w-24 rounded-lg border bg-white transition-all duration-300 active:scale-95 hover:red peer-checked/15000ms:bg-gray-300 peer-checked/15000ms:border-0">15 s</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="30000ms"
            name="dataType"
            value="30000"
            checked={rate == "30000"}
            onChange={handleOptionChange}
            className="hidden peer/30000ms"
          />
          <label htmlFor="30000ms" className="flex items-center justify-center h-10 w-24 rounded-lg border bg-white transition-all duration-300 active:scale-95 hover:red peer-checked/30000ms:bg-gray-300 peer-checked/30000ms:border-0">30 s</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="60000ms"
            name="dataType"
            value="60000"
            checked={rate == "60000"}
            onChange={handleOptionChange}
            className="hidden peer/60000ms"
          />
          <label htmlFor="60000ms" className="flex items-center justify-center h-10 w-24 rounded-lg border bg-white transition-all duration-300 active:scale-95 hover:red peer-checked/60000ms:bg-gray-300 peer-checked/60000ms:border-0">60 s</label>
        </div>
      </form>
    </div>
  );
};

export default RadioBox;