'use client';

import React, { useState } from 'react';
import { useAppStore } from "@/app/page"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const type = useAppStore((state) => state.type);
  const setType = useAppStore((state) => state.setType);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setType(value);
    setIsOpen(false);
  };

  return (
    <div className="w-[400px] relative inline-block text-left">
      <h2 className="font-medium text-gray-700">Select Data</h2>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {type == "AQI" ? "AQI (Air Quality Index)" : type }
          <svg className="justify-self-start absolute right-4 rotate-180 -mr-1 ml-2 h-4 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[400px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <button
              onClick={() => handleOptionClick("AQI")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              AQI (Air Quality Index)
            </button>
            <button
              onClick={() => handleOptionClick("Dust")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Dust
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;