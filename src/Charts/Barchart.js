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
    },
  },
  plugins: {
    legend: {
      position: 'top',

    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
 
    datasets: [
        {
            "label": "Conversion Rate",
            "data": [
                95,
                35,
                18,
                31,
                5,
                66,
                39
            ],
            "backgroundColor": "rgba(255, 99, 132, 0.5)"
        },
        {
            "label": "Customer Acquisition",
            "data": [
                87,
                36,
                49,
                78,
                96,
                20,
                20
            ],
            "backgroundColor": "rgba(53, 162, 235, 0.5)"
        }
    ],
  
};

const Barchart=()=>{
  console.log('first bar',data)
  return <Bar options={options} data={data} />;
}
export default Barchart