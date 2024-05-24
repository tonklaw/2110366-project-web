"use client";

import LineChart from "./components/Chart";
import Dropdown from './components/Dropdown';
import RadioBox from "./components/Radio";
import Controll from "./components/Controll";
import Quality from "./components/Quality";
import Dust from "./components/Dust";
import RealTimeClock from "./components/Information";

import React, { useEffect, useState, useRef } from 'react';

export default function Home() {

  const [updates, setUpdates] = useState([]);
  const [aqi, setAqi] = useState(0.0);
  const [dust, setDust] = useState(0.0);
  const ws = useRef(null);
  const retryTimeout = useRef(1000);

  useEffect(() => {
    const connectWebSocket = () => {
      ws.current = new WebSocket('ws://localhost:8080');

      ws.current.onopen = () => {
        console.log('Connected to WebSocket');
        retryTimeout.current = 1000; // Reset retry timeout on successful connection
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Update received:', data);

        setAqi(data.aqi);
        setDust(data.dust);

        setUpdates((prevUpdates) => [...prevUpdates, data]);
      };

      ws.current.onclose = () => {
        console.log('Disconnected from WebSocket, attempting to reconnect...');
        retryConnection();
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.current.close();
      };
    };

    const retryConnection = () => {
      setTimeout(() => {
        retryTimeout.current = Math.min(retryTimeout.current * 2, 5000); // Exponential backoff with a cap at 30 seconds
        connectWebSocket();
      }, retryTimeout.current);
    };

    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  return (
    <main className="h-full mt-16 flex flex-col items-center justify-center content-center">
      <h1 className="mb-5 text-4xl font-medium text-gray-700">Atmospheric Particulate Matter Forecasting</h1>
      <div class="info flex justify-evenly w-[1280px]">
          <Quality value={aqi}/>
          <Dust value={dust}/>
        <div class="info-block2 w-[700px] h-48 m-2.5 border border-gray-300 rounded-lg bg-white">
          <RealTimeClock />
          <div className="flex flex-col pl-4 pt-2">
            <div>Group member</div>
            <div>Person 1</div>
            <div>Person 2</div>
            <div>Person 3</div>
            <div>Person 4</div>
          </div>
        </div>
        </div>
      <div class="graph-block w-[1260px] h-[420px] m-2.5 p-4 flex items-center justify-evenly border border-gray-300 rounded-lg bg-white">
        <div className="graph-data w-[900px] h-[400px]">
          <LineChart />
        </div>
        <div className="flex flex-col items-center justify-center w-[450px] gap-4">
          <Dropdown />
          <RadioBox />
          <Controll />
        </div>
      </div>
    </main>
  );
}
