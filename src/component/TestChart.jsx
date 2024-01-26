import React from 'react';
import PlotChart from "./PlotChart";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'; 

function TestChart(){
    
    Chart.register(CategoryScale);
    const chartConfig = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Line Chart',
                data: [65, 59, 80, 81, 93, 95, 100],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            title:{
                display: true,
                title: 'Chart Test'
            }, 
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }    
    };
    return(
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Line Chart</h5>
                    <h3>Line chart test</h3>
                    <PlotChart data={chartConfig.data} type={chartConfig.type} />
                </div>
            </div>
        </div>
    );
}

export default TestChart;