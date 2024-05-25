"use client";

import LineChart from "./components/Chart";
import Dropdown from './components/Dropdown';
import RadioBox from "./components/Radio";
import Controll from "./components/Controll";
import Quality from "./components/Quality";
import Dust from "./components/Dust";
import RealTimeClock from "./components/Information";
import {create} from "zustand"

import React, { useEffect, useState, useRef } from 'react';
export const useAppStore = create((set) => ({
  type: "AQI",
  rate: 5000,
  pause: false,
  setType: (newType) => set(() => ({ type: newType })),
  setRate: (newRate) => set(() => ({ rate: newRate })),
  setPause: (newPause) => set(() => ({ pause: newPause }))
}))

export default function Home() {

  const [payload, setPayload] = useState([]);
  const [aqi, setAqi] = useState(0.0);
  const [dust, setDust] = useState(0.0);
  const [aqiSet, setAqiSet] = useState([]);
  const [dustSet, setDustSet] = useState([]);
  const [timeSet, setTimeSet] = useState([]);
  const ws = useRef(null);
  const retryTimeout = useRef(1000);
  const retryTimeoutId = useRef(null);
  const pause = useAppStore((state) => state.pause);
  const rate = useAppStore((state) => state.rate)/1000;
  
  useEffect(() => {
    const connectWebSocket = () => {
      ws.current = new WebSocket('ws://172.20.10.5:8080');

      ws.current.onopen = () => {
        console.log('Connected to WebSocket');
        retryTimeout.current = 1000; // Reset retry timeout on successful connection
        ws.current.send(JSON.stringify({rate: rate}))
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Update received:', data);

        setAqi(data.aqi);
        setDust(data.dust);
        
        setPayload(data.payload);
        setAqiSet(data.payload.map((e) => e.aqi));
        setDustSet(data.payload.map((e) => e.dust));
        setTimeSet(data.payload.map((e) => e.timestamp));
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
      if (retryTimeoutId.current) {
        clearTimeout(retryTimeoutId.current);
      }
      retryTimeoutId.current = setTimeout(() => {
        retryTimeout.current = Math.min(retryTimeout.current * 2, 5000); // Exponential backoff with a cap at 5 seconds
        connectWebSocket();
      }, retryTimeout.current);
    };

    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
      if (retryTimeoutId.current) {
        clearTimeout(retryTimeoutId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!pause) {
      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Update received:', data);

        setAqi(data.aqi);
        setDust(data.dust);
        
        setPayload(data.payload);
        setAqiSet(data.payload.map((e) => e.aqi));
        setDustSet(data.payload.map((e) => e.dust));
        setTimeSet(data.payload.map((e) => e.timestamp));
      };
    } else {
      ws.current.onmessage = null;
    }
  },[pause]);

  useEffect(() => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({rate: rate}));
    }
  }, [rate]);

  return (
    <main className="h-full mt-16 flex flex-col items-center justify-center content-center">
      <h1 className="mb-5 text-4xl font-medium text-gray-700">Atmospheric Particulate Matter Forecasting</h1>
      <div className="info flex justify-evenly w-[1280px]">
          <Quality value={aqi}/>
          <Dust value={dust}/>
        <div className="relative flex w-[700px] h-48 m-2.5 border border-gray-300 rounded-lg bg-white">
          <RealTimeClock />
          <div className="absolute right-[270px] mt-4 h-40 w-0 border border-gray-200"></div>
          <div className="absolute right-6 flex flex-col justify-center pt-6 z-[1]">
            <div className="text-3xl font-semibold justify-center items-center text-gray-700">TodayRich</div>
            <div className="text-sm">member:</div>
            <div>Chatdanai Porncharoensub</div>
            <div>Tonkla Wiboonlertwatana</div>
            <div>Thanapat Chotipun</div>
            <div>Wichayada Chamnansil</div>
          </div>
        </div>
        </div>
      <div className="graph-block w-[1260px] h-[420px] m-2.5 p-4 flex items-center justify-evenly border border-gray-300 rounded-lg bg-white">
        <div className="graph-data w-[900px] h-[400px]">
          <LineChart  aqi={aqiSet} dust={dustSet} time={timeSet} />
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
