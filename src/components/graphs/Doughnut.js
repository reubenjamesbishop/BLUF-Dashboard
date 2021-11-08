import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './graphs.css';

const data = {
  // display: false,
  labels: [
    'Science & Technology',
    'Arts and Culture',
    'Food and Wine',
    'Sports & Recreation',
    'Other',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className="header">
      <h3 className="title">Presentation Genre Breakdown</h3>
    </div>
    <Doughnut data={data} position="bottom" />
  </>
);

export default DoughnutChart;
