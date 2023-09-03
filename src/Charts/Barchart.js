import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      // Customize the y-axis label values using a callback function
      ticks: {
        // Use a callback function to format and customize label values
        callback: function (value, index, values) {
          // You can apply any custom formatting here
          return `${value} %`; // Example: Prefixing the value with a dollar sign
        },
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)', // Change the color of the y-axis gridlines
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.2)', // Change the color of the x-axis gridlines
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',

    },
  },
};

const labels = ['FQ 1', 'FQ 2', 'FQ 3', 'FQ 4'];

export const data = {
  labels,
 
    datasets: [
        {
            "label": "Conversion Rate",
            "data": [
                10,
                15,
                12,
                20
            ],
            "backgroundColor": "rgba(255, 99, 132, 1)"
        },
        {
            "label": "Customer Acquisition",
            "data": [
                8,
                12,
                10,
                16
            ],
            "backgroundColor": "rgba(53, 162, 235, 1)"
        }
    ],
  
};

const Barchart=()=>{
  console.log('first bar',data)
  return <Bar options={options} data={data} />;
}
export default Barchart