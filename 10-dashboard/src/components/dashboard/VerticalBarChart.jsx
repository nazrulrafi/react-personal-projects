import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function VerticalBarChart() {
    // Full 12 months
    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Sales",
                data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 90, 75, 50],
                backgroundColor: "#3B82F6", // Tailwind blue-500
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Sales",
                font: { size: 18 },
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white p-4 mt-8 rounded-lg shadow">
            <Bar data={data} options={options} />
        </div>
    );
}
