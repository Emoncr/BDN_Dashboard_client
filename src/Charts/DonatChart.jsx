import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [18,88],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(0, 0, 0, 0.1)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderWidth: 0,
    },
  ],
};

const DonatChart = () => {
  return (
    <div className="h-20 w-20 ">
      <Doughnut data={data} />
    </div>
  );
};

export default DonatChart;
