import React from "react";
import Chart from "react-apexcharts";

function MonthlyEarningRadialChart() {
    const options = {
        chart: {
            type: "radialBar",
            toolbar: { show: false },
        },
        plotOptions: {
            radialBar: {
                hollow: { size: "60%" },
                dataLabels: {
                    name: { show: true, fontSize: "14px", color: "#556ee6" },
                    value: { show: true, fontSize: "16px", color: "#373d3f" },
                },
            },
        },
        colors: ["#556ee6"], // Chart color
        labels: ["Series A"],
    };

    const series = [67]; // 67% filled

    return (
        <Chart
            options={options}
            series={series}
            type="radialBar"
            height={160}
        />
    );
}

export default MonthlyEarningRadialChart;