import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October','November','December'];

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

export const data = {
  
    "labels": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "September",
        "October",
        "November",
        "December"
    ],
    "datasets": [
        {
            "label": "Error Rate",
            "data": [
                9,
                6,
                5,
                4,
                3,
                4,
                3,
                2,
                2,
                1,
                1,
                1,
            ],
            "borderColor": "rgb(255, 99, 132)",
            "backgroundColor": "rgba(255, 99, 132, 0.5)"
        }
    ]

};

export default function Linechart() {
  console.log('first',data)
  return <Line options={options} data={data} />;
}
