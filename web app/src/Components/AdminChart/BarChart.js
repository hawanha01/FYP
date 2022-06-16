import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Sat', 'Sun', 'Mon',
           'Tue', 'Wedn','Thurs','Friday'],
  datasets: [
    {
      label: 'Total Sale This Week',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,47,21]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Sale per day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}