import React from 'react';
import './Saleschart.css';
import { Line } from 'react-chartjs-2';
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

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Saleschart() {
    const data = {
        
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
            {
            
                label: '2021 Sales',
                data: [20000, 25000, 30000, 35000, 45591, 40000, 45000, 42000, 47000, 49000, 50000, 52000],
                borderColor: '#007bff',                  // Line color
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // Fill color under the line (20% opacity)
                fill: true,                               // Enable fill for this dataset
                tension: 0.4,                             // Line curve smoothing
                pointRadius: 0,                           // Remove points
                borderWidth:2,
            },
            {
                label: '2020 Sales',
                data: [15000, 20000, 22000, 28000, 30000, 31000, 32000, 30000, 33000, 34000, 36000, 37000],
                borderColor: '#4e73df',                   // Line color
                backgroundColor: 'rgba(78, 115, 223, 0.2)', // Fill color under the line (20% opacity)
                fill: true,                               // Enable fill for this dataset
                tension: 0.4,                             // Line curve smoothing
                pointRadius: 0,                           // Remove points
                borderWidth:2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,  // Allow custom container sizing
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return '$' + context.raw.toLocaleString();
                    },
                },
            },
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="sales-reports">
            <div className="date-buttons">
                <div className="title-chart">
                    <h2>Sales Report</h2>
                </div>
                <div className="btn-chart">
                    <button>12 Months</button>
                    <button>6 Months</button>
                    <button>30 Days</button>
                    <button>7 Days</button>
                    <button className="export-btn">Export PDF</button>
                </div>
            </div>
            <div className="chart-container-1">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default Saleschart;
