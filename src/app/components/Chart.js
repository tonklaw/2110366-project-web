"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Time labels
    datasets: [{
      label: 'Temperature (°C)',
      data: [20, 40, 10, 8, 1, 90, 8, 0, 4], // Temperature data
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      fill: false
    }]
};

const options = {
  scales: {
  x: {
    title: {
      display: true,
      text: 'Time'
    }
  },
  y: {
    beginAtZero: true,
    title: {
      display: true,
      text: 'Temperature (°C)'
    }
  }
}
};

export default function LineChart() {
  return (
      <Line data={data} options={options}/>
  );
};
