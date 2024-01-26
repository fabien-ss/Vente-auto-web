import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'; 


function PlotChart(props) {
    let charRender = null;
    if (props.type === 'line') {
      charRender = <Line data={props.data} options={props.options} />
    }
    else if (props.type === 'bar') {
      charRender = <Bar data={props.data} options={props.options} />
    }
    else if (props.type === 'pie') {
      charRender = <Pie data={props.data} options={props.options} />
    }
    
    return (
      <>
        <div>{charRender}</div>
      </>
    );
}

export default PlotChart;