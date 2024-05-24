'use client';

import React, { useState } from 'react';

const Controll = () => {
  const [isPause, setPause] = useState(false);

  const togglePause = () => {
    setPause(!isPause);
  };

    return (
      <div className="w-[400px] relative inline-block text-left">
        <h2 className="font-medium text-gray-700">Current state is</h2>
        <div className="flex flex-col items-center justify-center">
        <button
          onClick={togglePause}
          className={`w-[400px] h-32 text-white text-2xl font-bold rounded-lg focus:outline-none ${
            isPause ? 'bg-[#f57c73]' : 'bg-[#6bc8a3]'
          }`}
        >
          {isPause ? 'PAUSE' : 'RESUME'}
        </button>
      </div>
      </div>
    );
};

export default Controll;