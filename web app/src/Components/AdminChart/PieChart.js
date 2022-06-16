import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';

const state = {
  labels: ['2018', '2019', '2020'],
  datasets: [
    {
      label: 'Total Sale last 5 years',
      backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
      hoverBackgroundColor: ['#501800', '#4B5000', '#175000'],
      data: [65, 59, 80]
    }
  ]
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 8
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
        {/* 
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Sale per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
      </div>
    );
  }
}
