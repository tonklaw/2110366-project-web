"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useAppStore } from "@/app/page"

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const AQI = {
  labels: [0,5,10,15,20,25,30,35,40,45], // Time labels
    datasets: [{
      label: 'AQI',
      data: [45,47,51,50,49,48,47,44,45,46.2], // AQI Array
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#f57c73',
      borderWidth: 4,
      lineTension: 0.1,
      fill: false
    }]
};

const aqiOptions = {
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

const Dust = {
  labels: [0,5,10,15,20,25,30,35,40,45], // Time labels
    datasets: [{
      label: 'Dust',
      data: [2,4,7,5,6,2,4,8,6,7,10], //Dust Array
      backgroundColor: '#bde0fe',
      borderColor: '#79addc',
      borderWidth: 4,
      lineTension: 0.1,
      fill: false
    }]
};

const dustOptions = {
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
        text: 'Dust (ug/m^3)',
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
  const type = useAppStore((state) => state.type);
  const rate = useAppStore((state) => state.rate);
  // setInterval(clockRate,rate)

  return (
      <Line data={type == "AQI" ? AQI : Dust} options={type == "AQI" ? aqiOptions : dustOptions}/>
  );
};
