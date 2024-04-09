import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Ticks,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

function BigFiveRadialChart() {
  const data = {
    type: 'radar',
    labels: [
      "Agreeableness",
      "Conscientiousness",
      "Extraversion",
      "Openness",
      "Stress Tolerance."
    ],
    datasets: [
      {
        label: "Big-5-Theory",
        data: [80, 75, 60, 80, 85],
        fill: true,
        backgroundColor: "rgba(200, 100, 20, 0.3)",
        borderColor: "rgb(200, 100, 20)",
        pointBackgroundColor: "rgb(200, 100, 20)",
        borderWidth: 3,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(200, 100, 20)",
      },
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

  return (
    <div className="w-[325px] h-[325px] md:w-[600px] md:h-[600px] ">
      <Radar data={data} options={options}/>
    </div>
  );
}

export default BigFiveRadialChart;
