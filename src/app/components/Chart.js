"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useAppStore } from "@/app/page";

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = ({ aqi, dust, time }) => {
  const type = useAppStore((state) => state.type);
  const rate = useAppStore((state) => state.rate)/1000;
  const [aqiData, setAqiData] = useState([0]);
  const [dustData, setDustData] = useState([0]);
  const [timeDate, setTimeData] = useState(new Array(10).fill(0));

  useEffect(() => {
      setAqiData(aqi);
      setDustData(dust);
      setTimeData(time);

  }, [aqi, dust, time, type]);

  const data = {
    labels: timeDate.map((e) => new Date(e).toLocaleTimeString()),
    datasets: [{
      label: type === "AQI" ? 'AQI' : 'Dust',
      data: type === "AQI" ? aqiData : dustData,
      backgroundColor: type === "AQI" ? 'rgba(255, 99, 132, 0.2)' : '#bde0fe',
      borderColor: type === "AQI" ? '#f57c73' : '#79addc',
      borderWidth: 4,
      lineTension: 0.1,
      fill: false
    }]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          font: {
            family: '__Montserrat_b1da2a',
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            family: '__Montserrat_b1da2a',
            size: 12,
            weight: 'normal'
          }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: type === "AQI" ? 'AQI (ppm)' : 'Dust (ug/m^3)',
          font: {
            family: '__Montserrat_b1da2a',
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            family: '__Montserrat_b1da2a',
            size: 12,
            weight: 'normal'
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: '__Montserrat_b1da2a',
            size: 12,
            weight: 'normal'
          }
        }
      }
    }
  };

  return (
    <Line data={data} options={options} />
  );
};

export default LineChart;