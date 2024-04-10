import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

function SoftSkillsRadialChart() {
  const data = {
    labels: [
      "Teamwork",
      "Problem Solving",
      "Work Ethic",
      "Interpersonal",
      "Time Management",
      "Adaptability",
      "Communication",
    ],
    datasets: [
      {
        label: "Soft Skill Assessment",
        data: [100, 75, 100, 100, 100, 100, 100],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      }
    ],
  };

  const options = {
    scales: {
      r: {
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          textStrokeColor: 'rgb(954, 162, 235)',
          color: 'rgba(240, 240, 240, 0.5)',
          backdropColor: 'rgb(47, 56, 62)',
        },
        angleLines: {
          color: 'rgba(255, 255, 255, .3)'
        },
        grid: {
          color: "rgb(30, 41, 59)",
        },
      },
    },
  }

  return  (
  <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] ">
    <Radar data={data} options={options}/>
  </div>
  );
}

export default SoftSkillsRadialChart;
