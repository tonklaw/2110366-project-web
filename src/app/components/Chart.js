"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const data = {
  labels: [0,5,10,15,20,25,30,35,40,45], // Time labels
    datasets: [{
      label: 'AQI (ppm)',
      data: [45,47,51,50,49,48,47,44,45,46.2], // Temperature data
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 4,
      lineTension: 0.5,
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
          family: '__Montserrat_b1da2a', // Change the font family
          size: 14, // Change the font size
          weight: 'bold' // Change the font weight
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
        text: 'AQI (ppm)',
        font: {
          family: '__Montserrat_b1da2a', // Change the font family
          size: 14, // Change the font size
          weight: 'bold' // Change the font weight
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

export default function LineChart() {
  return (
      <Line data={data} options={options}/>
  );
};
