/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1 : {
        labels: ["Johnson", "Fortis", "Apollo", "Escorts", "Columbia Asis"],
        datasets: [
          {
            label: "Provider Score",
            data: [10, 50, 25, 70, 40],
            backgroundColor: [
              "#1f306e",
              "#553772",
              "#8f3b76",
              "#c7417b",
              "#f5487f"
            ],
            borderWidth: [1, 1, 1, 1, 1]
          }
        ]
      }
    }
  }

  componentDidMount() {
      
  }
  
  
 

  

  render() {
    return (
      <div>
      <h3>Doughnut Chart</h3>
      <Doughnut data={this.state.data1} height="100px" />
      <br/><br/>
      <h3>Bar Chart</h3>
      <Bar
      data={this.state.data1}
      height={100}
    />
    </div>
    );
  }
}
export default ChartComponent;
